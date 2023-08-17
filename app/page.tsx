import MainWrapper from "@/app/components/wrappers/MainWrapper";
import CodeWrapper from "@/app/components/wrappers/CodeWrapper";

import fs from "fs";

const cssVariables = fs.readFileSync('app/globals.css').toString();
export default function HomePage() {
  return (
    <MainWrapper>
      <h1>React Playground</h1>
      <h2>Context</h2>
      <p>
        React playground is a personal project where I am exploring the React framework.<br />
        It is based on NextJs to easy the routing and to fasten the setup.<br />
        This project aims to develop a couple of functional components like.
      </p>
      <ul>
        <li>Inputs</li>
        <li>Buttons</li>
        <li>Sliders</li>
        <li>...</li>
      </ul>
      <p>or several UI components like</p>
      <ul>
        <li>Spinner</li>
        <li>Card</li>
        <li>Accordion</li>
        <li>...</li>
      </ul>
      <h2>Styling</h2>
      <p>
        Each components will result in a dedicated page describing its api / use case.<br />
        All the style is scoped by component and consume a bunch of css variables.
      </p>
      <CodeWrapper code={cssVariables} lang="css"></CodeWrapper>
    </MainWrapper>
  )
}