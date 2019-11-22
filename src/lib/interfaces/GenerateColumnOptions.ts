import { DefaultBreakpoints, MediaGenerator } from "styled-media-query"

interface GenerateColumnOptions<Breakpoints = DefaultBreakpoints> {
  gutter?: string,
  columns?: number,
  breakpoints?: Breakpoints,
  media?: MediaGenerator<Breakpoints, any>,
}

export default GenerateColumnOptions
