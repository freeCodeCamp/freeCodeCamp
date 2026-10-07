import * as React from "react"
import { Body, Header, HeaderOpenClose, Overlay } from "./overlay"
import { Accordion, AccordionItem } from "./accordion"
import { openInEditor, prettifyStack } from "../utils"
import { CodeFrame } from "./code-frame"

function WrappedAccordionItem({ error, open }) {
  const title =
    error?.error?.message ||
    error.context.sourceMessage ||
    `Unknown GraphQL error`
  const docsUrl = error?.docsUrl
  const filePath = error?.filePath
  const lineNumber = error?.location?.start?.line
  const columnNumber = error?.location?.start?.column

  let locString = ``
  if (typeof lineNumber !== `undefined`) {
    locString += `:${lineNumber}`
    if (typeof columnNumber !== `undefined`) {
      locString += `:${columnNumber}`
    }
  }

  // Sometimes the GraphQL error text has ANSI in it. If it's only text, it'll be passed through
  const decoded = prettifyStack(error.text)

  return (
    <AccordionItem open={open} title={title}>
      <div data-gatsby-overlay="body__graphql-error-message">
        <div data-gatsby-overlay="codeframe__top">
          <div data-gatsby-overlay="tag">
            {error.level}
            {` `}#{error.code}
          </div>
          <button
            data-gatsby-overlay="body__open-in-editor"
            onClick={() => openInEditor(filePath, lineNumber)}
          >
            Open in Editor
          </button>
        </div>
        {filePath && (
          <div data-gatsby-overlay="codeframe__top">
            {filePath}
            {locString}
          </div>
        )}
        <CodeFrame decoded={decoded} />
        {docsUrl && (
          <div data-gatsby-overlay="codeframe__bottom">
            See our docs page for more info on this error:{` `}
            <a href={docsUrl}>{docsUrl}</a>
          </div>
        )}
      </div>
    </AccordionItem>
  )
}

export function GraphqlErrors({ errors, dismiss }) {
  const deduplicatedErrors = React.useMemo(
    () => Array.from(new Set(errors)),
    [errors]
  )
  const hasMultipleErrors = deduplicatedErrors.length > 1
  return (
    <Overlay>
      <Header data-gatsby-error-type="graphql-error">
        <div data-gatsby-overlay="header__cause-file">
          <h1 id="gatsby-overlay-labelledby">
            {hasMultipleErrors
              ? `${errors.length} Unhandled GraphQL Errors`
              : `Unhandled GraphQL Error`}
          </h1>
        </div>
        <HeaderOpenClose dismiss={dismiss} />
      </Header>
      <Body>
        <p
          data-gatsby-overlay="body__describedby"
          id="gatsby-overlay-describedby"
        >
          {hasMultipleErrors ? `Multiple` : `One`} unhandled GraphQL{` `}
          {hasMultipleErrors ? `errors` : `error`} found in your files. See the
          list below to fix {hasMultipleErrors ? `them` : `it`}:
        </p>
        <Accordion>
          {deduplicatedErrors.map((error, index) => (
            <WrappedAccordionItem
              open={index === 0}
              error={error}
              key={`${error.sourceMessage}-${index}`}
            />
          ))}
        </Accordion>
      </Body>
    </Overlay>
  )
}
