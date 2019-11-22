import styled, { css } from "styled-components"

import RowProps from "./interfaces/RowProps"
import GenerateRowOptions from "./interfaces/GenerateRowOptions"

import { defaultGutter } from "./constants"


const generateRow = ({
  gutter: optionsGutter = defaultGutter,
}: GenerateRowOptions = {}) => (
  styled.div<RowProps>(({
    alignItems = "flex-start",
    justifyContent = "flex-start",
    flexFlow = "row",
    flexWrap = "wrap",
    gutter = optionsGutter,
  }) => css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-flow: ${flexFlow};
    flex-wrap: ${flexWrap};
    margin-left: -${gutter};
    margin-right: -${gutter};
  `)
)

export default generateRow
