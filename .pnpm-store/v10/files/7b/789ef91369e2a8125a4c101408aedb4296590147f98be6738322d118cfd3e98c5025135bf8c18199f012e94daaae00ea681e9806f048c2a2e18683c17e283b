import * as React from "react"
import { useId } from "./use-id"
import * as keys from "../helpers/keys"
import { match } from "../helpers/match"

function ChevronIcon() {
  return (
    <svg
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      data-gatsby-overlay="chevron-icon"
    >
      <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z" />
    </svg>
  )
}

export function Accordion({ children, ...rest }) {
  return (
    <ul data-gatsby-overlay="accordion" {...rest}>
      {children}
    </ul>
  )
}

export function AccordionItem({
  children,
  disabled = false,
  open = false,
  title = `title`,
  ...rest
}) {
  const [isOpen, setIsOpen] = React.useState(open)
  const [prevIsOpen, setPrevIsOpen] = React.useState(open)
  const id = useId(`accordion-item`)

  if (open !== prevIsOpen) {
    setIsOpen(open)
    setPrevIsOpen(open)
  }

  const toggleOpen = () => {
    const nextValue = !isOpen
    setIsOpen(nextValue)
  }

  // If the AccordionItem is open, and the user hits the ESC key, then close it
  const onKeyDown = event => {
    if (isOpen && match(event, keys.Escape)) {
      setIsOpen(false)
    }
  }

  return (
    <li
      data-gatsby-overlay="accordion__item"
      data-accordion-active={isOpen ? `true` : `false`}
      {...rest}
    >
      <button
        data-gatsby-overlay="accordion__item__heading"
        type="button"
        disabled={disabled}
        aria-controls={id}
        aria-expanded={isOpen}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
      >
        <ChevronIcon />
        <div data-gatsby-overlay="accordion__item__title">{title}</div>
      </button>
      <div id={id} data-gatsby-overlay="accordion__item__content">
        {children}
      </div>
    </li>
  )
}
