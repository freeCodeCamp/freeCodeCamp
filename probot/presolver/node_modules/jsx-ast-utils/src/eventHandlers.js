
/**
 * Common event handlers for JSX element event binding.
 */

const eventHandlersByType = {
  clipboard: [
    'onCopy',
    'onCut',
    'onPaste',
  ],
  composition: [
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
  ],
  keyboard: [
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
  ],
  focus: [
    'onFocus',
    'onBlur',
  ],
  form: [
    'onChange',
    'onInput',
    'onSubmit',
  ],
  mouse: [
    'onClick',
    'onContextMenu',
    'onDblClick',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
  ],
  selection: [
    'onSelect',
  ],
  touch: [
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
  ],
  ui: [
    'onScroll',
  ],
  wheel: [
    'onWheel',
  ],
  media: [
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onError',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
  ],
  image: [
    'onLoad',
    'onError',
  ],
  animation: [
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
  ],
  transition: [
    'onTransitionEnd',
  ],
};

const eventHandlers = Object.keys(eventHandlersByType).reduce(
  (accumulator, type) => accumulator.concat(eventHandlersByType[type]),
  [],
);

export default eventHandlers;

export { eventHandlersByType };
