// These are filled with ranges (rangeFrom[i] up to but not including
// rangeTo[i]) of code points that count as extending characters.
let rangeFrom = [], rangeTo = []

;(() => {
  // Compressed representation of the Grapheme_Cluster_Break=Extend
  // information from
  // http://www.unicode.org/Public/16.0.0/ucd/auxiliary/GraphemeBreakProperty.txt.
  // Each pair of elements represents a range, as an offet from the
  // previous range and a length. Numbers are in base-36, with the empty
  // string being a shorthand for 1.
  let numbers = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(s => s ? parseInt(s, 36) : 1)
  for (let i = 0, n = 0; i < numbers.length; i++)
    (i % 2 ? rangeTo : rangeFrom).push(n = n + numbers[i])
})()

export function isExtendingChar(code) {
  if (code < 768) return false
  for (let from = 0, to = rangeFrom.length;;) {
    let mid = (from + to) >> 1
    if (code < rangeFrom[mid]) to = mid
    else if (code >= rangeTo[mid]) from = mid + 1
    else return true
    if (from == to) return false
  }
}

function isRegionalIndicator(code) {
  return code >= 0x1F1E6 && code <= 0x1F1FF
}

function check(code) {
  for (let i = 0; i < rangeFrom.length; i++) {
    if (rangeTo[i] > code) return rangeFrom[i] <= code
  }
  return false
}

const ZWJ = 0x200d

export function findClusterBreak(str, pos, forward = true, includeExtending = true) {
  return (forward ? nextClusterBreak : prevClusterBreak)(str, pos, includeExtending)
}

function nextClusterBreak(str, pos, includeExtending) {
  if (pos == str.length) return pos
  // If pos is in the middle of a surrogate pair, move to its start
  if (pos && surrogateLow(str.charCodeAt(pos)) && surrogateHigh(str.charCodeAt(pos - 1))) pos--
  let prev = codePointAt(str, pos)
  pos += codePointSize(prev)
  while (pos < str.length) {
    let next = codePointAt(str, pos)
    if (prev == ZWJ || next == ZWJ || includeExtending && isExtendingChar(next)) {
      pos += codePointSize(next)
      prev = next
    } else if (isRegionalIndicator(next)) {
      let countBefore = 0, i = pos - 2
      while (i >= 0 && isRegionalIndicator(codePointAt(str, i))) { countBefore++; i -= 2 }
      if (countBefore % 2 == 0) break
      else pos += 2
    } else {
      break
    }
  }
  return pos
}

function prevClusterBreak(str, pos, includeExtending) {
  while (pos > 0) {
    let found = nextClusterBreak(str, pos - 2, includeExtending)
    if (found < pos) return found
    pos--
  }
  return 0
}

function codePointAt(str, pos) {
  let code0 = str.charCodeAt(pos)
  if (!surrogateHigh(code0) || pos + 1 == str.length) return code0
  let code1 = str.charCodeAt(pos + 1)
  if (!surrogateLow(code1)) return code0
  return ((code0 - 0xd800) << 10) + (code1 - 0xdc00) + 0x10000
}

function surrogateLow(ch) { return ch >= 0xDC00 && ch < 0xE000 }
function surrogateHigh(ch) { return ch >= 0xD800 && ch < 0xDC00 }
function codePointSize(code) { return code < 0x10000 ? 1 : 2 }
