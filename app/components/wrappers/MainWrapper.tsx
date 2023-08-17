import style from "./mainWrapper.module.css";

export default function MainWrapper({
  children
}: { children: React.ReactNode }) {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>{children}</div>
    </main>
  )
}