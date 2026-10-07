import * as React from "react"
import { Overlay, Header, HeaderOpenClose, Body, Footer } from "./overlay"
import { useFileCodeFrame } from "./hooks"
import { CodeFrame } from "./code-frame"
import { openInEditor } from "../utils"

const filePathRegex = /webpack:\/[^/]+\/(.*)$/

export function GetServerDataError({ error }) {
  const stacktrace = error.stack
  const info = stacktrace.find(CallSite => CallSite.fileName)
  const filePath = `./${filePathRegex.exec(info?.fileName)[1]}`
  const lineNumber = info?.lineNumber
  const columnNumber = info?.columnNumber
  const name =
    info?.functionName === `Module.getServerData`
      ? `getServerData`
      : info?.functionName

  const res = useFileCodeFrame({ filePath, lineNumber, columnNumber })

  return (
    <Overlay>
      <Header data-gatsby-error-type="build-error">
        <div data-gatsby-overlay="header__cause-file">
          <h1 id="gatsby-overlay-labelledby">Unhandled getServerData Error</h1>
          <span>{filePath}</span>
        </div>
        <HeaderOpenClose
          dismiss={false}
          open={() => openInEditor(filePath, lineNumber)}
        />
      </Header>
      <Body>
        <h2>Error Message</h2>
        <p data-gatsby-overlay="body__error-message">
          {error?.context?.sourceMessage}
        </p>
        <h2>Source</h2>
        {filePath && (
          <div data-gatsby-overlay="codeframe__top">
            Function {name} in {filePath}:{lineNumber}
          </div>
        )}
        <CodeFrame decoded={res.decoded} />
        <Footer id="gatsby-overlay-describedby">
          This error occured in the getServerData function and can only be
          dismissed by fixing the error or adding error handling.
        </Footer>
      </Body>
    </Overlay>
  )
}
