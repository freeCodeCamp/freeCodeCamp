declare interface ILocale {
  name: string
  weekdays?: string[]
  months?: string[]
  weekStart?: number
  weekdaysShort?: string[]
  monthsShort?: string[]
  weekdaysMin?: string[]
  ordinal?: (n: number) => number | string
  formats: Partial<{
    LT: string
    LTS: string
    L: string
    LL: string
    LLL: string
    LLLL: string
  }>
  relativeTime: Partial<{
    future: string
    past: string
    s: string
    m: string
    mm: string
    h: string
    hh: string
    d: string
    dd: string
    M: string
    MM: string
    y: string
    yy: string
  }>
}
