import styled, { css } from "styled-components"
import { generateMedia, defaultBreakpoints } from "styled-media-query"

import ColumnProps from "./interfaces/ColumnProps"
import GenerateColumnOptions from "./interfaces/GenerateColumnOptions"
import GridDefaultBreakpoints from "./interfaces/GridDefaultBreakpoints"

import { defaultGutter, defaultColumns } from "./constants"


const generateColumn = <Breakpoints = GridDefaultBreakpoints>(
  options: GenerateColumnOptions<Breakpoints> = {},
) => {
  const {
    gutter: optionsGutter = defaultGutter,
    columns = defaultColumns,
    breakpoints = defaultBreakpoints,
    media = generateMedia(breakpoints),
  } = options

  const Column = styled.div<ColumnProps<Breakpoints>>(({
    col,
    push,
    alignItems = "flex-start",
    justifyContent = "flex-start",
    flexFlow = "column",
    flexWrap = "wrap",
    order = 0,
    gutter = optionsGutter,
  }) => {
    return css`
      display: flex;
      flex: 1;

      ${() => {
        if (typeof col === "number") {
          return css`
            flex: ${100 / columns * col}%;
            max-width: ${100 / columns * col}%;
          `
        } else if (typeof col === "object") {
          return Object.keys(col).map((breakpoint) => breakpoint !== "default"
            ? media.greaterThan(breakpoint as keyof Breakpoints)`
              flex: ${100 / columns * col[breakpoint]}%;
              max-width: ${100 / columns * col[breakpoint]}%;
            `
            : css`
              flex: ${100 / columns * col[breakpoint]}%;
              max-width: ${100 / columns * col[breakpoint]}%;
            `,
          )
        }
      }}

      ${() => {
        if (typeof push === "number") {
          return css`
            flex: ${100 / columns * push}%;
            max-width: ${100 / columns * push}%;
          `
        } else if (typeof push === "object") {
          return Object.keys(push).map((breakpoint) => breakpoint !== "default"
            ? media.greaterThan(breakpoint as keyof Breakpoints)`
              flex: ${100 / columns * push[breakpoint]}%;
              max-width: ${100 / columns * push[breakpoint]}%;
            `
            : css`
              flex: ${100 / columns * push[breakpoint]}%;
              max-width: ${100 / columns * push[breakpoint]}%;
            `,
          )
        }
      }}

      ${() => {
        if (typeof alignItems === "string") {
          return css`
            align-items: ${alignItems};
          `
        } else if (typeof alignItems === "object") {
          return Object.keys(alignItems).map((breakpoint) => breakpoint !== "default"
            ? media.greaterThan(breakpoint as keyof Breakpoints)`
              align-items: ${alignItems[breakpoint]};
            `
            : css`
              align-items: ${alignItems[breakpoint]};
            `,
          )
        }
      }}

      ${() => {
        if (typeof justifyContent === "string") {
          return css`
            justify-content: ${justifyContent};
          `
        } else if (typeof justifyContent === "object") {
          return Object.keys(justifyContent).map((breakpoint) => breakpoint !== "default"
            ? media.greaterThan(breakpoint as keyof Breakpoints)`
              justify-content: ${justifyContent[breakpoint]};
            `
            : css`
              justify-content: ${justifyContent[breakpoint]};
            `,
          )
        }
      }}

      ${() => {
        if (typeof flexFlow === "string") {
          return css`
            flex-flow: ${flexFlow};
          `
        } else if (typeof flexFlow === "object") {
          return Object.keys(flexFlow).map((breakpoint) => breakpoint !== "default"
            ? media.greaterThan(breakpoint as keyof Breakpoints)`
              flex-flow: ${flexFlow[breakpoint]};
            `
            : css`
              flex-flow: ${flexFlow[breakpoint]};
            `,
          )
        }
      }}

      ${() => {
        if (typeof flexWrap === "string") {
          return css`
            flex-wrap: ${flexWrap};
          `
        } else if (typeof flexWrap === "object") {
          return Object.keys(flexWrap).map((breakpoint) => breakpoint !== "default"
            ? media.greaterThan(breakpoint as keyof Breakpoints)`
              flex-wrap: ${flexWrap[breakpoint]};
            `
            : css`
              flex-wrap: ${flexWrap[breakpoint]};
            `,
          )
        }
      }}

      ${() => {
        if (typeof order === "number") {
          return css`
            order: ${order};
          `
        } else if (typeof order === "object") {
          return Object.keys(order).map((breakpoint) => breakpoint !== "default"
            ? media.greaterThan(breakpoint as keyof Breakpoints)`
              order: ${order};
            `
            : css`
              order: ${order[breakpoint]};
            `,
          )
        }
      }}

      ${() => {
        if (typeof gutter === "string") {
          return css`
            padding-left: ${gutter};
            padding-right: ${gutter};
          `
        } else if (typeof gutter === "object") {
          return Object.keys(gutter).map((breakpoint) => breakpoint !== "default"
            ? media.greaterThan(breakpoint as keyof Breakpoints)`
              padding-left: ${gutter[breakpoint]};
              padding-right: ${gutter[breakpoint]};
            `
            : css`
              padding-left: ${gutter[breakpoint]};
              padding-right: ${gutter[breakpoint]};
            `,
          )
        }
      }}
    `
  })

  return Column
}

export default generateColumn
