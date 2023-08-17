import style from "./radioInput.module.css";
type RadioInputProps = {
  id: string,
  name: string,
  value: string | number,
  checked?: boolean,
  onChange?: Function,
}

export default function RadioInput({ id, name, value, checked, onChange }: RadioInputProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(event.target.value);
  }
  return (
    <input type="radio" value={value} className={style.radio} onChange={handleChange} checked={checked}></input>
  )
}