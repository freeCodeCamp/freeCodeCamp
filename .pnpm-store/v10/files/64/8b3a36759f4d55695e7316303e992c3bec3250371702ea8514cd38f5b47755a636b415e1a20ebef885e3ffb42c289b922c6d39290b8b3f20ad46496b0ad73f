import React from "react"

export const ServerSliceRenderer = ({ sliceId, children }) => {
  const contents = [
    React.createElement(`slice-start`, {
      id: `${sliceId}-1`,
    }),
    React.createElement(`slice-end`, {
      id: `${sliceId}-1`,
    }),
  ]

  if (children) {
    // if children exist, we split the slice into a before and after piece
    // see renderSlices in render-html
    contents.push(children)
    contents.push(
      React.createElement(`slice-start`, {
        id: `${sliceId}-2`,
      }),
      React.createElement(`slice-end`, {
        id: `${sliceId}-2`,
      })
    )
  }

  return contents
}
