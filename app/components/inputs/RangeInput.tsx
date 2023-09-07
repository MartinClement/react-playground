import { useState } from "react";
import style from "./rangeInput.module.css";

console.log(style);

type RangeInputProps = {
  value: string,
  status?: "unknown" | "valid" | "invalid",
  min?: string,
  max?: string,
  step?: string,
  list?: string[],
  onChange?: (v: string) => void,
}

export function RangeInput({
  value = "0",
  status = "unknown",
  min = "0",
  max = "100",
  step = "1",
  list = [],
  onChange = () => ({}),
}: RangeInputProps) {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value);
  }



  const getStatusClass = (status: RangeInputProps["status"]) => {
    switch(status) {
      case "valid":
        return style.valid;
      case "invalid":
        return style.invalid;
      default:
        return "";
    }
  }

  return (
    <div className={style.range_wrapper}>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        className={`${style.range_slider} ${getStatusClass(status)}`}
        onChange={handleChange}
      ></input>
      {
        list.length > 0 && <div className={style.range_list}>
          { list.map((v, vi) => <span key={vi} className={style.range_list_item}>{v}</span>) }
        </div>
      }
    </div>
  )
}