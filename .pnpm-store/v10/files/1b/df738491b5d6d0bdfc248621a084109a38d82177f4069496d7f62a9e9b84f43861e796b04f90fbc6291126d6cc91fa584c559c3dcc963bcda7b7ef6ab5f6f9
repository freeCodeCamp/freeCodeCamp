import * as React from "react"
import { createPortal } from "react-dom"

export const ShadowPortal = ({ children, identifier }) => {
  const mountNode = React.useRef(null)
  const portalNode = React.useRef(null)
  const shadowNode = React.useRef(null)
  const [, forceUpdate] = React.useState()

  React.useLayoutEffect(() => {
    const ownerDocument = mountNode.current.ownerDocument
    portalNode.current = ownerDocument.createElement(identifier)
    shadowNode.current = portalNode.current.attachShadow({ mode: `open` })
    ownerDocument.body.appendChild(portalNode.current)
    forceUpdate({})
    return () => {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current)
      }
    }
  }, [])

  return shadowNode.current ? (
    createPortal(children, shadowNode.current)
  ) : (
    <span ref={mountNode} />
  )
}
