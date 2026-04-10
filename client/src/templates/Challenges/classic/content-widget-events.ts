type TouchGestureMode = 'pending' | 'vertical' | 'horizontal';

interface TouchGestureState {
  pointerId: number;
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

  const onPointerDown = (e: PointerEvent): void => {
    if (e.pointerType !== 'touch') return;

    touchState = {
      pointerId: e.pointerId,
      mode: 'pending',
      startX: e.clientX,
      startY: e.clientY,
      lastY: e.clientY,
      horizontalScroller: findHorizontalScroller(e.target)
    };
    e.stopPropagation();
  };

  const onPointerMove = (e: PointerEvent): void => {
    if (
      e.pointerType !== 'touch' ||
      !touchState ||
      e.pointerId !== touchState.pointerId
    ) {
      return;
    }

    const deltaX = e.clientX - touchState.startX;
    const deltaY = e.clientY - touchState.startY;

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
        (e.clientY - touchState.lastY) * TOUCH_VERTICAL_SCROLL_MULTIPLIER
      );
      touchState.lastY = e.clientY;
    }

    e.stopPropagation();
  };

  const onPointerUp = (e: PointerEvent): void => {
    if (!touchState || e.pointerId !== touchState.pointerId) return;
    touchState = null;
    e.stopPropagation();
  };

  upperJawNode.addEventListener('contextmenu', onContextMenu);
  upperJawNode.addEventListener('pointerdown', onPointerDown, {
    passive: true
  });
  upperJawNode.addEventListener('pointermove', onPointerMove, {
    passive: false
  });
  upperJawNode.addEventListener('pointerup', onPointerUp, { passive: true });
  upperJawNode.addEventListener('pointercancel', onPointerUp, {
    passive: true
  });

  return () => {
    upperJawNode.removeEventListener('contextmenu', onContextMenu);
    upperJawNode.removeEventListener('pointerdown', onPointerDown);
    upperJawNode.removeEventListener('pointermove', onPointerMove);
    upperJawNode.removeEventListener('pointerup', onPointerUp);
    upperJawNode.removeEventListener('pointercancel', onPointerUp);
  };
};
