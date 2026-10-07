import {StyleModule} from "style-mod"
import ist from "ist"

describe("StyleModule", () => {
  it("renders objects to CSS text", () => {
    ist(rules(new StyleModule({main: {color: "red", border: "1px solid green"}})),
        ["main {color: red; border: 1px solid green;}"], eqRules)
  })

  it("handles multiple rules", () => {
    ist(rules(new StyleModule({
      one: {color: "green"},
      two: {color: "blue"}
    })), [
      "one {color: green;}",
      "two {color: blue;}"
    ], eqRules)
  })

  it("supports &-nesting", () => {
    ist(rules(new StyleModule({
      main: {
        color: "yellow",
        "&:hover": {fontWeight: "bold"}
      }
    })), [
      "main:hover {font-weight: bold;}",
      "main {color: yellow;}"
    ], eqRules)
  })

  it("can replace multiple & markers", () => {
    ist(rules(new StyleModule({
      main: {
        "p &, div &": {color: "blue"}
      }
    })), [
      "p main, div main {color: blue;}"
    ], eqRules)
  })

  it("supports media queries", () => {
    ist(rules(new StyleModule({
      "@media screen and (min-width: 400px)": {
        main: {
          fontFamily: '"URW Bookman"',
          MozBoxSizing: "border-box"
        }
      }
    })), ["@media screen and (min-width: 400px) {main {font-family: \"URW Bookman\"; -moz-box-sizing: border-box;}}"], eqRules)
  })

  it("can render keyframes", () => {
    ist(rules(new StyleModule({
      "@keyframes foo": {
        "0%": {color: "blue"},
        "50%": {color: "red"}
      }
    })), ["@keyframes foo {0% {color: blue;} 50% {color: red;}}"], eqRules)
  })

  it("doesn't mangle keyframe names", () => {
    ist(rules(new StyleModule({
      "@keyframes foo": {
        "0%": {color: "blue"},
        "50%": {color: "red"}
      }
    }, {finish: s => ".foo " + s})), ["@keyframes foo {0% {color: blue;} 50% {color: red;}}"], eqRules)
  })

  it("can render multiple instances of a property", () => {
    ist(rules(new StyleModule({
      main: {
        color: "rgba(100, 100, 100, .5)",
        color_2: "grey"
      }
    })), ["main {color: rgba(100, 100, 100, .5); color: grey;}"], eqRules)
  })

  it("can expand multiple selectors at once", () => {
    ist(rules(new StyleModule({
      "one, two": {
        "&.x": {
          color: "yellow"
        }
      }
    })), ["one.x, two.x {color: yellow;}"], eqRules)
  })

  it("allows processing of selectors", () => {
    ist(rules(new StyleModule({
      "abc, cba": {color: "yellow"},
      "@media stuff": {abc: {fontWeight: "bold"}}
    }, {
      finish: x => x.replace(/a/g, "u")
    })), ["ubc, cbu {color: yellow;}", "@media stuff {ubc {font-weight: bold;}}"], eqRules)
  })
})

function rules(module) { return module.rules }

function eqRules(a, b) {
  return JSON.stringify(a) == JSON.stringify(b)
}
