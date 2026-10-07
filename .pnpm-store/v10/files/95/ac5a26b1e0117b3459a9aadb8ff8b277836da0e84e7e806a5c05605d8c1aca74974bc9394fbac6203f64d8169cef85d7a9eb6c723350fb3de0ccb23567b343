import {findClusterBreak} from "../src/index.js"

function assertEq(a, b) {
  if (a !== b) throw new Error(`${a} !== ${b}`)
}

describe("findClusterBreak", () => {
  function test(spec) {
    it(spec, () => {
      let breaks = [], next
      while ((next = spec.indexOf("|")) > -1) {
        breaks.push(next)
        spec = spec.slice(0, next) + spec.slice(next + 1)
      }
      let found = []
      for (let i = 0;;) {
        let next = findClusterBreak(spec, i)
        if (next == spec.length) break
        found.push(i = next)
      }
      assertEq(found.join(","), breaks.join(","))
    })
  }
  
  test("a|b|c|d")
  test("a|é̠|ő|x")
  test("😎|🙉")
  test("👨‍🎤|💪🏽|👩‍👩‍👧‍👦|❤")
  test("🇩🇪|🇫🇷|🇪🇸|x|🇮🇹")
})
