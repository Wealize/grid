import styled, { css } from "styled-components"

import GenerateContainerOptions from "./interfaces/GenerateContainerOptions"
import ContainerProps from "./interfaces/ContainerProps"

import { defaultGutter, defaultMaxWidth } from "./constants"


const generateContainer = ({
  maxWidth: optionsMaxWidth = defaultMaxWidth,
  gutter: optionsGutter = defaultGutter,
}: GenerateContainerOptions = {}) => (
  styled.div<ContainerProps>(({
    maxWidth = optionsMaxWidth,
    gutter = optionsGutter,
  }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    max-width: ${maxWidth};
    margin: 0 auto;
    padding-left: ${gutter};
    padding-right: ${gutter};
  `)
)

export default generateContainer
