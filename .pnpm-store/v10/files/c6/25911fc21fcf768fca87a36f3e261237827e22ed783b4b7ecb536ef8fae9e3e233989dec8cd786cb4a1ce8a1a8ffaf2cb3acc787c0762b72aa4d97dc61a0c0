import * as React from "react"
import emitter from "../emitter"
import { Indicator } from "./indicator"

export function LoadingIndicatorEventHandler() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    emitter.on(`onDelayedLoadPageResources`, () => setVisible(true))
    emitter.on(`onRouteUpdate`, () => setVisible(false))

    return () => {
      emitter.off(`onDelayedLoadPageResources`, () => setVisible(true))
      emitter.off(`onRouteUpdate`, () => setVisible(false))
    }
  }, [])

  return <Indicator visible={visible} />
}
