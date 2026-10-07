const DT_SEPARATOR = /t|\s/i
const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/
const TIME = /^(\d\d):(\d\d):(\d\d)(?:\.\d+)?(?:z|([+-]\d\d)(?::?(\d\d))?)$/i
const DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export default function validTimestamp(str: string, allowDate: boolean): boolean {
  // http://tools.ietf.org/html/rfc3339#section-5.6
  const dt: string[] = str.split(DT_SEPARATOR)
  return (
    (dt.length === 2 && validDate(dt[0]) && validTime(dt[1])) ||
    (allowDate && dt.length === 1 && validDate(dt[0]))
  )
}

function validDate(str: string): boolean {
  const matches: string[] | null = DATE.exec(str)
  if (!matches) return false
  const y: number = +matches[1]
  const m: number = +matches[2]
  const d: number = +matches[3]
  return (
    m >= 1 &&
    m <= 12 &&
    d >= 1 &&
    (d <= DAYS[m] ||
      // leap year: https://tools.ietf.org/html/rfc3339#appendix-C
      (m === 2 && d === 29 && (y % 100 === 0 ? y % 400 === 0 : y % 4 === 0)))
  )
}

function validTime(str: string): boolean {
  const matches: string[] | null = TIME.exec(str)
  if (!matches) return false
  const hr: number = +matches[1]
  const min: number = +matches[2]
  const sec: number = +matches[3]
  const tzH: number = +(matches[4] || 0)
  const tzM: number = +(matches[5] || 0)
  return (
    (hr <= 23 && min <= 59 && sec <= 59) ||
    // leap second
    (hr - tzH === 23 && min - tzM === 59 && sec === 60)
  )
}

validTimestamp.code = 'require("ajv/dist/runtime/timestamp").default'
