"use client"

import MainWrapper from "@/app/components/wrappers/MainWrapper";
import BaseInput from "@/app/components/inputs/BaseInput";

import { useState } from "react";
import useForm from "@/app/hooks/useForm";

export default function FormValidator() {
  const [formModel, setFormModel] = useState({
    inputOne: '',
    inputTwo: '',
  })
  const { formState, validate } = useForm({ formModel })

  return (
    <MainWrapper>
      <h1>Form Validator</h1>
      <h2>Home made</h2>

      <form>
        <div>{JSON.stringify(formState)}</div>
        <BaseInput
          value={formModel.inputOne}
          type="text"
          onChange={v => setFormModel({ ...formModel, inputOne: v})}
        ></BaseInput>
        <BaseInput
          value={formModel.inputTwo}
          type="text"
          onChange={v => setFormModel({ ...formModel, inputTwo: v})}
        ></BaseInput>
      </form>
    </MainWrapper>
  )
}