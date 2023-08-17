import style from './codeWrapper.module.css';

export type CodeLanguage = "css" | "javascript"

const langCommentByLang = {
  css: "/* css */",
  javascript: "// javascript",
}

export default function CodeWrapper({ code, lang }: { code: string, lang: CodeLanguage }) {
  return (<div className={style.code_wrapper}>
    <span>{langCommentByLang[lang]}</span>
    <pre>{code}</pre>
  </div>)
}