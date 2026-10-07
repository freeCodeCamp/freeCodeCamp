import * as React from "react"
import { lock, unlock } from "../helpers/lock-body"
import a11yTrap from "../helpers/focus-trap"

function Backdrop() {
  return <div data-gatsby-overlay="backdrop" />
}

export function VisuallyHidden({ children }) {
  return (
    <span
      style={{
        border: 0,
        clip: `rect(0 0 0 0)`,
        height: `1px`,
        margin: `-1px`,
        overflow: `hidden`,
        padding: 0,
        position: `absolute`,
        width: `1px`,
        whiteSpace: `nowrap`,
        wordWrap: `normal`,
      }}
    >
      {children}
    </span>
  )
}

export function Overlay({ children }) {
  React.useEffect(() => {
    lock()

    return () => {
      unlock()
    }
  }, [])

  const [overlay, setOverlay] = React.useState(null)
  const onOverlay = React.useCallback(el => {
    setOverlay(el)
  }, [])

  React.useEffect(() => {
    if (overlay === null) {
      return
    }

    const handle = a11yTrap({ context: overlay })

    // eslint-disable-next-line consistent-return
    return () => {
      handle.disengage()
    }
  }, [overlay])

  return (
    <div data-gatsby-overlay="wrapper" ref={onOverlay}>
      <Backdrop />
      <div
        data-gatsby-overlay="root"
        role="alertdialog"
        aria-labelledby="gatsby-overlay-labelledby"
        aria-describedby="gatsby-overlay-describedby"
        aria-modal="true"
        dir="ltr"
      >
        {children}
      </div>
    </div>
  )
}

export function CloseButton({ dismiss }) {
  return (
    <button data-gatsby-overlay="close-button" onClick={dismiss}>
      <VisuallyHidden>Close</VisuallyHidden>
      <svg
        aria-hidden={true}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export function HeaderOpenClose({ open, dismiss, children, ...rest }) {
  return (
    <div data-gatsby-overlay="header__top" {...rest}>
      {children}
      <div data-gatsby-overlay="header__open-close">
        {open && (
          <button onClick={open} data-gatsby-overlay="primary-button">
            Open in editor
          </button>
        )}
        {dismiss && <CloseButton dismiss={dismiss} />}
      </div>
    </div>
  )
}

export function Header({ children, ...rest }) {
  return (
    <header data-gatsby-overlay="header" {...rest}>
      {children}
    </header>
  )
}

export function Body({ children, ...rest }) {
  return (
    <div data-gatsby-overlay="body" {...rest}>
      {children}
    </div>
  )
}

export function Footer({ children, ...rest }) {
  return (
    <footer data-gatsby-overlay="footer" {...rest}>
      {children}
    </footer>
  )
}
