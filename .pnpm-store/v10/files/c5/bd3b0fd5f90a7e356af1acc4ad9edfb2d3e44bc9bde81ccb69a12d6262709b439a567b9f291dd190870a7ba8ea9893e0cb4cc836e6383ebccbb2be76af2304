import React, { useContext } from "react"
import { createContentDigest } from "gatsby-core-utils/create-content-digest"
import { SlicesMapContext, SlicesPropsContext } from "./context"
import { ServerSliceRenderer } from "./server-slice-renderer"

const getSliceId = (sliceName, sliceProps) => {
  if (!Object.keys(sliceProps).length) {
    return sliceName
  }

  const propsString = createContentDigest(sliceProps)
  return `${sliceName}-${propsString}`
}

export const ServerSlice = ({
  sliceName,
  allowEmpty,
  children,
  ...sliceProps
}) => {
  const slicesMap = useContext(SlicesMapContext)
  const slicesProps = useContext(SlicesPropsContext)
  const concreteSliceName = slicesMap[sliceName]

  if (!concreteSliceName) {
    if (allowEmpty) {
      return null
    } else {
      throw new Error(
        `Slice "${concreteSliceName}" for "${sliceName}" slot not found`
      )
    }
  }

  const sliceId = getSliceId(concreteSliceName, sliceProps)

  // set props on context object for static-entry to return
  let sliceUsage = slicesProps[sliceId]
  if (!sliceUsage) {
    slicesProps[sliceId] = sliceUsage = {
      props: sliceProps,
      sliceName: concreteSliceName,
      hasChildren: !!children,
    }
  } else {
    if (children) {
      sliceUsage.hasChildren = true
    }
  }

  return <ServerSliceRenderer sliceId={sliceId}>{children}</ServerSliceRenderer>
}
