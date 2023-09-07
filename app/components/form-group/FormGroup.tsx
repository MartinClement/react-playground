import { useMemo } from "react";
import style from "./formGroup.module.css";

type FormGroupsProps = {
  children: React.ReactNode,
  errors?: string[],
  singleErrorMode?: boolean,
};

export default function FormGroup({ children, errors = [], singleErrorMode = true }: FormGroupsProps) {

  const displayedErrors = useMemo(() => {
    return singleErrorMode ? errors.slice(0, 1) : errors;
  }, [errors, singleErrorMode]);

  return (
    <div className={style.form_group}>
      { children }
      <div className={style.error_wrapper}>
        { displayedErrors.map((err, errIndex) => <span key={errIndex}>{ err }</span>)}
      </div>
    </div>
  )
}