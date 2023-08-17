import BaseHeader from "@/app/components/headers/BaseHeader";
import MainNav from "@/app/components/navigation/MainNav";

import './globals.css'
import style from "./layout.module.css";

export default function Layout(
  { children }:{ children: React.ReactNode }
) {
  return (
    <html lang="en" className={style.html}>
      <body className={style.body}>
        <BaseHeader></BaseHeader>
        <div className={style.content_wrapper}>
          <MainNav></MainNav>
          {children}
        </div>
      </body>
    </html>
  )
}