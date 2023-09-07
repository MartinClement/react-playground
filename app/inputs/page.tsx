'use client';

import MainWrapper from "@/app/components/wrappers/MainWrapper";
import BaseInput from "@/app/components/inputs/BaseInput";
import RadioInput from "@/app/components/inputs/RadioInput";
import { CrossIcon } from "@/app/components/icons";

import { useState } from "react";

import style from "./inputPage.module.css";


export default function InputPage() {
  const [inputOne, setInputOne] = useState('value');
  const [isPassword, setIsPassword] = useState(false);
  const [hasBeforeSlot, setHasBeforeSlot] = useState(false);
  const [hasAfterSlot, setHasAfterSlot] = useState(false);
  const [inputOneState, setInputOneState] = useState<string|undefined>(undefined);

  const [radioValue, setRadioValue] = useState<string|number|undefined>(undefined);

  return(
    <MainWrapper>
      <h1>Inputs</h1>
      <h2>BaseInput</h2>
      <div className={style.columns}>
        <div>
          <BaseInput
            type={isPassword ? "password" : "text"}
            value={inputOne}
            name="base_input"
            status={inputOneState}
            BeforeSlot={hasBeforeSlot ? <CrossIcon></CrossIcon> : undefined}
            AfterSlot={hasAfterSlot ? <CrossIcon></CrossIcon> : undefined}
            onChange={setInputOne}
          ></BaseInput>
        </div>
        <div>
          <div>
            <label>isPassword ?<input type="checkbox" checked={isPassword} onChange={() => setIsPassword(!isPassword)}></input></label>
          </div>
          <div>State:</div>
          <select name="status" id="status" onChange={(e) => setInputOneState(e.target.value)}>
            <option value={undefined}>Undefined</option>
            <option value="valid">Valid</option>
            <option value="invalid">Invalid</option>
          </select>
          <div>Slots:</div>
          <div>
            <label>BeforeSlot <input type="checkbox" checked={hasBeforeSlot} onChange={() => setHasBeforeSlot(!hasBeforeSlot)}></input></label>
          </div>
          <div>
            <label>AfterSlot <input type="checkbox" checked={hasAfterSlot} onChange={() => setHasAfterSlot(!hasAfterSlot)}></input></label>
          </div>
        </div>
      </div>
      <h2>Radio Input</h2>
      <div className={style.columns}>
        <div className={style.radio_wrapper}>
          <label>First</label>
          <RadioInput value="first" name="first" id="first" onChange={(v: string | number) => setRadioValue(v)} checked={radioValue === "first"}></RadioInput>
          <label>Second</label>
          <RadioInput value="second" name="second" id="second" onChange={(v: string | number) => setRadioValue(v)} checked={radioValue === "second"}></RadioInput>
        </div>
      </div>
    </MainWrapper>
  )
}