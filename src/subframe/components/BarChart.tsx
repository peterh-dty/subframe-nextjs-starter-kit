"use client";
/*
 * Documentation:
 * Bar Chart — https://app.subframe.com/069ea454afb9/library?component=Bar+Chart_4d4f30e7-1869-4980-8b96-617df3b37912
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface BarChartRootProps
  extends React.ComponentProps<typeof SubframeCore.BarChart> {
  stacked?: boolean;
  className?: string;
}

const BarChartRoot = React.forwardRef<HTMLElement, BarChartRootProps>(
  function BarChartRoot(
    { stacked = false, className, ...otherProps }: BarChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.BarChart
        className={SubframeCore.twClassNames("h-80 w-full", className)}
        ref={ref as any}
        stacked={stacked}
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

export const BarChart = BarChartRoot;
