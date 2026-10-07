import * as React from "react"
import { Overlay, Header, Body, Footer, HeaderOpenClose } from "./overlay"
import { CodeFrame } from "./code-frame"
import { prettifyStack, openInEditor } from "../utils"

// Error that is thrown on e.g. webpack errors and thus can't be dismissed and must be fixed
export function BuildError({ error }) {
  // Incoming build error shape is like this:
  // Sometimes "Enter"
  // ./relative-path-to-file
  // Additional information (sometimes empty line => handled in "prettifyStack" function)
  // /absolute-path-to-file
  // Errors/Warnings
  const decoded = prettifyStack(error)
  const [filePath] = decoded
  const file = filePath.content.split(`\n`)[0]
  const lineMatch = filePath.content.match(/\((\d+)[^)]+\)/)
  let line = 1

  if (lineMatch) {
    line = lineMatch[1]
  }

  return (
    <Overlay>
      <Header data-gatsby-error-type="build-error">
        <div data-gatsby-overlay="header__cause-file">
          <h1 id="gatsby-overlay-labelledby">Failed to compile</h1>
          <span>{file}</span>
        </div>
        <HeaderOpenClose
          open={() => openInEditor(file, line)}
          dismiss={false}
        />
      </Header>
      <Body>
        <h2>Source</h2>
        <CodeFrame decoded={decoded} />
        <Footer id="gatsby-overlay-describedby">
          This error occurred during the build process and can only be dismissed
          by fixing the error.
        </Footer>
      </Body>
    </Overlay>
  )
}
