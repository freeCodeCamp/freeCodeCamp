import * as React from "react"
import { prettifyStack } from "../utils"

const initialResponse = {
  decoded: null,
  sourcePosition: {
    line: null,
    number: null,
  },
  sourceContent: null,
}

export function useStackFrame(codeFrameInformation) {
  const {
    moduleId,
    lineNumber,
    columnNumber,
    skipSourceMap,
    endLineNumber,
    endColumnNumber,
  } = codeFrameInformation ?? {}

  let url =
    `/__original-stack-frame?moduleId=` +
    window.encodeURIComponent(moduleId) +
    `&lineNumber=` +
    window.encodeURIComponent(lineNumber) +
    `&columnNumber=` +
    window.encodeURIComponent(columnNumber)

  if (skipSourceMap) {
    url += `&skipSourceMap=true`
  }

  if (endLineNumber) {
    url += `&endLineNumber=` + window.encodeURIComponent(endLineNumber)

    if (endColumnNumber) {
      url += `&endColumnNumber=` + window.encodeURIComponent(endColumnNumber)
    }
  }

  const [response, setResponse] = React.useState(initialResponse)

  React.useEffect(() => {
    if (!codeFrameInformation) return

    async function fetchData() {
      try {
        const res = await fetch(url)
        const json = await res.json()
        const decoded = prettifyStack(json.codeFrame)
        const { sourcePosition, sourceContent } = json
        setResponse({
          decoded,
          sourceContent,
          sourcePosition,
        })
      } catch (err) {
        setResponse({
          ...initialResponse,
          decoded: prettifyStack(err.message),
        })
      }
    }
    fetchData()
  }, [])

  return response
}

export function useFileCodeFrame({ filePath, lineNumber, columnNumber }) {
  const url =
    `/__file-code-frame?filePath=` +
    window.encodeURIComponent(filePath) +
    `&lineNumber=` +
    window.encodeURIComponent(lineNumber) +
    `&columnNumber=` +
    window.encodeURIComponent(columnNumber)

  const [response, setResponse] = React.useState({ decoded: null })

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url)
        const json = await res.json()
        const decoded = prettifyStack(json.codeFrame)
        setResponse({
          decoded,
        })
      } catch (err) {
        setResponse({
          decoded: prettifyStack(err.message),
        })
      }
    }
    fetchData()
  }, [])

  return response
}
