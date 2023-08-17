import style from "./baseHeader.module.css";

export default function BaseHeader() {
  return (
    <header className={style.header}>
      <div>
        <h1 className={style.header_h1}>React Playground</h1>
        <h2 className={style.header_h2}>Functional and UI components</h2>
      </div>
      <span>switch</span>
    </header>
  )
}