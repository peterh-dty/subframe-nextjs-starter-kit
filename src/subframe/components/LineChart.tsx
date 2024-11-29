"use client";
/*
 * Documentation:
 * Line Chart — https://app.subframe.com/069ea454afb9/library?component=Line+Chart_22944dd2-3cdd-42fd-913a-1b11a3c1d16d
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface LineChartRootProps
  extends React.ComponentProps<typeof SubframeCore.LineChart> {
  className?: string;
}

const LineChartRoot = React.forwardRef<HTMLElement, LineChartRootProps>(
  function LineChartRoot(
    { className, ...otherProps }: LineChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.LineChart
        className={SubframeCore.twClassNames("h-80 w-full", className)}
        ref={ref as any}
        colors={[
          "#696aba",
          "#c6c8f0",
          "#5e5aaa",
          "#b1b4e2",
          "#4f4a8c",
          "#7d84c5",
        ]}
        {...otherProps}
      />
    );
  }
);

export const LineChart = LineChartRoot;
