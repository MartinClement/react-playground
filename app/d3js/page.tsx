"use client"

import MainWrapper from "@/app/components/wrappers/MainWrapper";
import * as d3 from "d3";

import { useEffect, useRef } from "react";

import { generateBubbles } from "./utils";

import style from "./d3jsPage.module.css";

export default function ChartsPage() {
  const svgSize = 600;
  const svgName = "main-svg";
  const bubbleClass = "bubble";

  const colorScale = d3.scaleLinear(d3.schemeCategory10);

  const bubbleData = generateBubbles({ count: 5, size: 20 });
  console.log(bubbleData);

  const dragHandler = d3.drag()
    .on("drag", function({ x, y }) {
      d3.select(this)
        .attr("cx", x)
        .attr("cy", y)
    })

  const drawBubbles = () => {
    return d3.select(`#${svgName}`)
      .selectAll("circle")
      .data([...bubbleData])
      .enter()
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", d => d.size)
      .attr("stroke", "#eee")
      .attr("stroke-width", 3)
      .attr("fill", (_, i) => colorScale(i))
      .attr("class", bubbleClass)
      .call(dragHandler)
  }

  useEffect(() => {
    drawBubbles();
  });

  return (
    <MainWrapper>
      <h1>D3Js</h1>
      <h2>Buble Drag :D</h2>
      <svg
        className={style.main_svg}
        width={svgSize}
        height={svgSize}
        viewBox={`${-svgSize/2} ${-svgSize/2} ${svgSize} ${svgSize}`}
        id={svgName}
      ></svg>
    </MainWrapper>
  )
}