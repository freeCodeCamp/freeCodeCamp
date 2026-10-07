import {parser, configureNesting} from "../dist/index.js"
import {parser as jsParser} from "@lezer/javascript"
import {fileTests} from "@lezer/generator/dist/test"

import * as fs from "fs"
import * as path from "path"
import {fileURLToPath} from "url"
let caseDir = path.dirname(fileURLToPath(import.meta.url))

let mixed = parser.configure({
  wrap: configureNesting([{
    tag: "script",
    attrs(attrs) {
      return !attrs.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(attrs.type)
    },
    parser: jsParser
  }])
})

for (let file of fs.readdirSync(caseDir)) {
  if (!/\.txt$/.test(file)) continue
  let name = /^[^\.]*/.exec(file)[0]
  describe(name, () => {
    let p = name == "mixed" ? mixed : parser
    for (let {name, run} of fileTests(fs.readFileSync(path.join(caseDir, file), "utf8"), file))
      it(name, () => run(p))
  })
}

