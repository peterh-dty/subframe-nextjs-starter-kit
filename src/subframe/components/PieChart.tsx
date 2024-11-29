"use client";
/*
 * Documentation:
 * Pie Chart — https://app.subframe.com/069ea454afb9/library?component=Pie+Chart_0654ccc7-054c-4f3a-8e9a-b7c81dd3963c
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface PieChartRootProps
  extends React.ComponentProps<typeof SubframeCore.PieChart> {
  className?: string;
}

const PieChartRoot = React.forwardRef<HTMLElement, PieChartRootProps>(
  function PieChartRoot({ className, ...otherProps }: PieChartRootProps, ref) {
    return (
      <SubframeCore.PieChart
        className={SubframeCore.twClassNames("h-52 w-52", className)}
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

export const PieChart = PieChartRoot;
