import { ChangeEvent, ReactElement, useRef } from "react";
import style from "./baseInput.module.css";

export type BaseInputType = "text" | "password";

type BaseInputProps = {
  value: string,
  type: BaseInputType,
  status?: string | undefined,
  BeforeSlot?: ReactElement,
  AfterSlot?: ReactElement,
  onChange?: Function,
};

export default function BaseInput({ value, type, status = "unknown",BeforeSlot, AfterSlot, onChange } : BaseInputProps) {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const focusInput = () => inputRef.current && inputRef.current.focus();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(event.target.value);
  }

  return (
    <div
      className={[style.input_wrapper, ( status !== "unknown" ? style[`input_wrapper_${status}`] : '')].join(' ')}
      onClick={focusInput}
    >
      { BeforeSlot && BeforeSlot }
      <input
        ref={inputRef}
        type={type}
        className={style.input}
        value={value}
        onChange={handleChange}
      ></input>
      { AfterSlot && AfterSlot }
    </div>
  )
}