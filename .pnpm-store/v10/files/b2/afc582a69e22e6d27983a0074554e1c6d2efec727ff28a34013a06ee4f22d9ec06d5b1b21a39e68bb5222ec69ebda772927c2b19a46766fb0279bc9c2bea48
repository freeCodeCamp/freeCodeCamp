export type EventType =
  | 'copy'
  | 'cut'
  | 'paste'
  | 'compositionEnd'
  | 'compositionStart'
  | 'compositionUpdate'
  | 'keyDown'
  | 'keyPress'
  | 'keyUp'
  | 'focus'
  | 'blur'
  | 'focusIn'
  | 'focusOut'
  | 'change'
  | 'input'
  | 'invalid'
  | 'submit'
  | 'reset'
  | 'click'
  | 'contextMenu'
  | 'dblClick'
  | 'drag'
  | 'dragEnd'
  | 'dragEnter'
  | 'dragExit'
  | 'dragLeave'
  | 'dragOver'
  | 'dragStart'
  | 'drop'
  | 'mouseDown'
  | 'mouseEnter'
  | 'mouseLeave'
  | 'mouseMove'
  | 'mouseOut'
  | 'mouseOver'
  | 'mouseUp'
  | 'popState'
  | 'select'
  | 'touchCancel'
  | 'touchEnd'
  | 'touchMove'
  | 'touchStart'
  | 'resize'
  | 'scroll'
  | 'wheel'
  | 'abort'
  | 'canPlay'
  | 'canPlayThrough'
  | 'durationChange'
  | 'emptied'
  | 'encrypted'
  | 'ended'
  | 'loadedData'
  | 'loadedMetadata'
  | 'loadStart'
  | 'pause'
  | 'play'
  | 'playing'
  | 'progress'
  | 'rateChange'
  | 'seeked'
  | 'seeking'
  | 'stalled'
  | 'suspend'
  | 'timeUpdate'
  | 'volumeChange'
  | 'waiting'
  | 'load'
  | 'error'
  | 'animationStart'
  | 'animationEnd'
  | 'animationIteration'
  | 'transitionCancel'
  | 'transitionEnd'
  | 'transitionRun'
  | 'transitionStart'
  | 'doubleClick'
  | 'pointerOver'
  | 'pointerEnter'
  | 'pointerDown'
  | 'pointerMove'
  | 'pointerUp'
  | 'pointerCancel'
  | 'pointerOut'
  | 'pointerLeave'
  | 'gotPointerCapture'
  | 'lostPointerCapture'
  | 'offline'
  | 'online'
  | 'pageHide'
  | 'pageShow'

export type FireFunction = (
  element: Document | Element | Window | Node,
  event: Event,
) => boolean
export type FireObject = {
  [K in EventType]: (
    element: Document | Element | Window | Node,
    options?: {},
  ) => boolean
}
export type CreateFunction = (
  eventName: string,
  node: Document | Element | Window | Node,
  init?: {},
  options?: {EventType?: string; defaultInit?: {}},
) => Event
export type CreateObject = {
  [K in EventType]: (
    element: Document | Element | Window | Node,
    options?: {},
  ) => Event
}

export const createEvent: CreateObject & CreateFunction
export const fireEvent: FireFunction & FireObject
