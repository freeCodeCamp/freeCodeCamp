import {parser as baseParser} from "../dist/index.js"
import {TreeFragment} from "@lezer/common"

let parser = baseParser.configure({bufferLength: 2})

let r = n => Math.floor(Math.random() * n)

let tags = ["p", "ul", "li", "div", "span", "th", "tr", "body", "head", "title", "dd", "code", "em", "strong"]

function randomDoc(size) {
  let doc = ""
  if (!r(5)) doc += "<!doctype html>"
  let scope = []
  for (let i = 0; i < size; i++) {
    let sel = r(20)
    if (sel < 5) {
      let tag = tags[r(tags.length)]
      doc += `<${tag}${r(2) ? " a=b" : ""}>`
      scope.push(tag)
    } else if (sel < 10 && scope.length) {
      let name = scope.pop()
      doc += `</${r(5) ? name : "div"}>`
    } else if (sel == 10) {
      doc += `<img>`
    } else if (sel == 11) {
      doc += "<script>a()</script>"
    } else if (sel == 12) {
      doc += r(2) ? "&amp;" : "<!--@-->"
    } else {
      for (let i = r(6) + 1; i >= 0; i--)
        doc += String.fromCharCode(97 + r(26))
    }
  }
  while (scope.length) {
    let name = scope.pop()
    if (r(5)) doc += `</${name}>`
  }
  return doc
}

function check(doc, [tp, pos, txt], prevAST) {
  let change = {fromA: pos, toA: pos, fromB: pos, toB: pos}, newDoc
  if (tp == "insert") {
    newDoc = doc.slice(0, pos) + txt + doc.slice(pos)
    change.toA += txt.length
  } else if (tp == "del") {
    newDoc = doc.slice(0, pos) + doc.slice(pos + 1)
    change.toB++
  } else {
    newDoc = doc.slice(0, pos) + txt + doc.slice(pos + 1)
    change.toA += txt.length
    change.toB++
  }
  let fragments = TreeFragment.applyChanges(TreeFragment.addTree(prevAST || parser.parse(doc)), [change], 2)
  let ast = parser.parse(newDoc, fragments)
  let orig = parser.parse(newDoc)
  if (ast.toString() != orig.toString()) {
    throw new Error(`Mismatch:\n  ${ast}\nvs\n  ${orig}\ndocument: ${
      JSON.stringify(doc)}\naction: ${JSON.stringify([tp, pos, ch])}`)
  }
  return [newDoc, ast]
}

// Call this to just run random tests until a failing one is found.
// Not directly called in the tests because there's a bunch of
// circumstances in which uninteresting deviations in error recovery
// will create differing parses, so results have to be manually
// inspected.
function generate() {
  for (let count = 0, size = 2;; size = Math.min(40, size + 1)) {
    let doc = randomDoc(size), prev = null
    for (let i = 0; i < 2; i++) {
      console.log("Attempt", ++count)
      let action = [["del", "insert", "replace"][r(3)], r(doc.length - 1), "<>/piabc "[r(9)]]
      ;([doc, prev] = check(doc, action, prev))
    }
  }
}

describe("Incremental parsing", () => {
  it("doesn't get confused by reused opening tags", () => {
    check("<code><code>mgnbni</code></code>", ["del", 29])
  })

  it("can handle a renamed opening tag after a self-closing", () => {
    check("<p>one two three four five six seven<p>eight", ["replace", 37, "a"])
  })

  it("is okay with nameless elements", () => {
    check("<body><code><img></code><>body>", ["replace", 14, ">"])
    check("abcde<>fghij<", ["replace", 12, ">"])
  })

  it("doesn't get confused by an invalid close tag receiving a matching open tag", () => {
    check("<div><p>foo</body>", ["insert", 0, "<body>"])
  })
})
