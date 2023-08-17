"use client"

import MainWrapper from "@/app/components/wrappers/MainWrapper";
import * as d3 from "d3";

import { useRef, useEffect, useId } from "react";

export default function ChartsPage() {

  const height  = 200;
  const width = 2 * height;
  const svgRef = useRef(null);
  // const svgId = useId();
  const svgId = "svg-kapoue";

  const buildData = (length: number): Array<number> => Array(length).fill(0).map(() => Math.floor(Math.random() * 5000))

  useEffect(() => {
    const data = buildData(20);
    const scaleData = d3.scaleLinear().domain([d3.min(data), d3.max(data)]).range([10, height])
    const barWidth = width / data.length;
    const chart = d3
      .select(`#${svgId}`)
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * barWidth)
      .attr("y", 0)
      .attr("width", barWidth)
      .attr("height", (d) => {
        console.log(d, scaleData(d));
        return scaleData(d)
      })
      .attr("fill", "orange");
  })

  return (
    <MainWrapper>
      <h1>Charts</h1>
      <h2>Made using D3</h2>
      <svg id={svgId} width={width} height={height} ref={svgRef} style={{ background: "#424242"}}></svg>
    </MainWrapper>
  )
}