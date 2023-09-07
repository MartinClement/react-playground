"use client"

import MainWrapper from "@/app/components/wrappers/MainWrapper";
import BaseInput from "@/app/components/inputs/BaseInput";
import FormGroup from "@/app/components/form-group/FormGroup";

import CodeWrapper from "@/app/components/wrappers/CodeWrapper";

import { useForm, FormState } from "@/app/hooks/useForm";

import style from "./formValidator.module.css";
import { RangeInput } from "../components/inputs/RangeInput";

export default function FormValidator() {

  const formModel = {
    inputOne: "coucou",
    inputTwo: "salut",
    rangeOne: "5",
  }

  const allInteger = (from: number, to: number) => {
    if ( to <= from ) {
      return []
    }

    console.log(to - from + 1);

    return Array(to - from + 1).fill(0).map((_, i) => `${i + from}`);
  }

  const validators = {
    inputOne: {
      maxLength: (v: string) => v.length < 32,
      minLength: (v: string) => v.length > 2,
    },
    inputTwo: {
      maxLength: (v: string) => v.length < 32,
      minLength: (v: string) => v.length > 5,
      longerThanInputOne: (v: string, state: FormState<typeof formModel>) => v.length > state.inputOne.value.length,
    },
    rangeOne: {
      max: (v: string) => parseInt(v) < 6,
    }
  };

  const validatorsAsString = `{
  inputOne: {
    maxLength: (v) => v.length < 32,
    minLength: (v) => v.length > 2,
  },
  inputTwo: {
    maxLength: (v) => v.length < 10,
    minLength: (v) => v.length > 5,
    longerThanInputOne: (v, state) => v.length > state.inputOne.value.length,
  },
  rangeOne: {
    max: (v) => v < 6,
  }
}`;

  const { inputOne, inputTwo, rangeOne, set } = useForm(formModel, validators);

  return (
    <MainWrapper>
      <h1>Form Validator</h1>
      <h2>Home made</h2>

      <div className={style.columns}>
        <form style={{display: "flex", flexFlow: "column nowrap", gap: "8px", maxWidth: "400px"}}>
          <FormGroup errors={inputOne.errors}>
            <label htmlFor="input_one">Input One</label>
            <BaseInput
              name="input_one"
              status={inputOne.dirty ? inputOne.invalid ? "invalid" : "valid" : "unknown"}
              value={inputOne.value}
              type="text"
              onChange={set("inputOne")}
            ></BaseInput>
          </FormGroup>
          <FormGroup errors={inputTwo.errors}>
            <label htmlFor="input_two">Input Two</label>
            <BaseInput
              name="input_two"
              status={inputTwo.dirty ? inputTwo.invalid ? "invalid" : "valid" : "unknown"}
              value={inputTwo.value}
              type="text"
              onChange={set("inputTwo")}
            ></BaseInput>
          </FormGroup>
          <FormGroup errors={rangeOne.errors}>
            <label htmlFor="range_one">Range One</label>
            <RangeInput
              min="1"
              max="10"
              value={rangeOne.value}
              status={rangeOne.dirty ? rangeOne.invalid ? "invalid" : "valid" : "unknown"}
              list={allInteger(1, 10)}
              onChange={set("rangeOne")}
            ></RangeInput>
          </FormGroup>
        </form>
        <div>
          <CodeWrapper code={validatorsAsString} lang="javascript"></CodeWrapper>
        </div>
      </div>
    </MainWrapper>
  )
}