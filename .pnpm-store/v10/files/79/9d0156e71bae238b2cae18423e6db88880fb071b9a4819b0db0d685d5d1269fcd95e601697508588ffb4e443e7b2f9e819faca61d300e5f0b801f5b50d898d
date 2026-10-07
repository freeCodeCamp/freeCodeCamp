import * as React from "react"

export function CodeFrame({ decoded }) {
  if (!decoded) {
    return (
      <pre data-gatsby-overlay="pre">
        <code data-gatsby-overlay="pre__code" />
      </pre>
    )
  }

  return (
    <pre data-gatsby-overlay="pre">
      <code data-gatsby-overlay="pre__code">
        {decoded.map((entry, index) => {
          const style = {
            color: entry.fg ? `var(--color-${entry.fg})` : undefined,
            ...(entry.decoration === `bold`
              ? { fontWeight: 800 }
              : entry.decoration === `italic`
              ? { fontStyle: `italic` }
              : undefined),
          }

          return (
            <span
              key={`frame-${index}`}
              data-gatsby-overlay="pre__code__span"
              style={style}
            >
              {entry.content}
            </span>
          )
        })}
      </code>
    </pre>
  )
}
