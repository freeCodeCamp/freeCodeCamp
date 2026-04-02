type TouchGestureMode = 'pending' | 'vertical' | 'horizontal';

interface TouchGestureState {
  mode: TouchGestureMode;
  startX: number;
  startY: number;
  lastY: number;
  horizontalScroller: HTMLElement | null;
}

const MOVE_THRESHOLD = 8;
const TOUCH_VERTICAL_SCROLL_MULTIPLIER = 2.5;

const findHorizontalScroller = (
  target: EventTarget | null
): HTMLElement | null => {
  if (!(target instanceof Element)) return null;
  const pre = target.closest('pre');
  if (!(pre instanceof HTMLElement)) return null;
  return pre.scrollWidth > pre.clientWidth ? pre : null;
};

const dispatchVerticalScrollWheel = (
  upperJawNode: HTMLElement,
  deltaY: number
): void => {
  if (deltaY === 0) return;
  const editorScrollable = upperJawNode
    .closest('.monaco-editor')
    ?.querySelector('.monaco-scrollable-element.editor-scrollable');

  if (!(editorScrollable instanceof HTMLElement)) return;

  editorScrollable.dispatchEvent(
    new WheelEvent('wheel', {
      deltaY,
      bubbles: true,
      cancelable: true
    })
  );
};

export const attachContentWidgetEvents = (
  upperJawNode: HTMLElement
): (() => void) => {
  let touchState: TouchGestureState | null = null;

  const onContextMenu = (e: MouseEvent): void => {
    e.stopPropagation();
  };

  const onTouchStart = (e: TouchEvent): void => {
    const touch = e.changedTouches.item(0);
    if (!touch) return;
    touchState = {
      mode: 'pending',
      startX: touch.clientX,
      startY: touch.clientY,
      lastY: touch.clientY,
      horizontalScroller: findHorizontalScroller(e.target)
    };
    e.stopPropagation();
  };

  const onTouchMove = (e: TouchEvent): void => {
    const touch = e.changedTouches.item(0);
    if (!touch || !touchState) return;

    const deltaX = touch.clientX - touchState.startX;
    const deltaY = touch.clientY - touchState.startY;

    if (
      touchState.mode === 'pending' &&
      Math.max(Math.abs(deltaX), Math.abs(deltaY)) >= MOVE_THRESHOLD
    ) {
      touchState.mode =
        touchState.horizontalScroller && Math.abs(deltaX) > Math.abs(deltaY)
          ? 'horizontal'
          : 'vertical';
    }

    if (touchState.mode === 'vertical') {
      if (e.cancelable) {
        e.preventDefault();
      }
      dispatchVerticalScrollWheel(
        upperJawNode,
        (touch.clientY - touchState.lastY) * TOUCH_VERTICAL_SCROLL_MULTIPLIER
      );
      touchState.lastY = touch.clientY;
    }

    e.stopPropagation();
  };

  const onTouchEnd = (e: TouchEvent): void => {
    touchState = null;
    e.stopPropagation();
  };

  upperJawNode.addEventListener('contextmenu', onContextMenu);
  upperJawNode.addEventListener('touchstart', onTouchStart, { passive: true });
  upperJawNode.addEventListener('touchmove', onTouchMove, { passive: false });
  upperJawNode.addEventListener('touchend', onTouchEnd, { passive: true });
  upperJawNode.addEventListener('touchcancel', onTouchEnd, { passive: true });

  return () => {
    upperJawNode.removeEventListener('contextmenu', onContextMenu);
    upperJawNode.removeEventListener('touchstart', onTouchStart);
    upperJawNode.removeEventListener('touchmove', onTouchMove);
    upperJawNode.removeEventListener('touchend', onTouchEnd);
    upperJawNode.removeEventListener('touchcancel', onTouchEnd);
  };
};
