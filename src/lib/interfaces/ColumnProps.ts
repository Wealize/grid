const caca = "default"

interface ColumnProps<Breakpoints> {
  col?: { [key in keyof Breakpoints | "default"]?: number } | number
  push?: { [key in keyof Breakpoints | "default"]?: number } | number
  alignItems?: { [key in (keyof Breakpoints | "default")]?: string } | string
  justifyContent?: { [key in keyof Breakpoints | "default"]?: string } | string
  flexFlow?: { [key in keyof Breakpoints | "default"]?: string } | string
  flexWrap?: { [key in keyof Breakpoints | "default"]?: string } | string
  order?: { [key in keyof Breakpoints | "default"]?: number } | number
  gutter?: { [key in keyof Breakpoints | "default"]?: string } | string
}

export default ColumnProps
