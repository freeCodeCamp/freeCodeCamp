type TouchGestureMode = 'pending' | 'vertical' | 'horizontal';
type TouchSource = 'pointer' | 'touch';

interface TouchGestureState {
  source: TouchSource;
  pointerId: number;
  mode: TouchGestureMode;
  startX: number;
  startY: number;
  lastY: number;
  horizontalScroller: HTMLElement | null;
}

interface InteractiveTouchState {
  source: TouchSource;
  pointerId: number;
}

const MOVE_THRESHOLD = 8;
const TOUCH_VERTICAL_SCROLL_MULTIPLIER = 2.5;
const INTERACTIVE_JAW_SELECTOR =
  'a, summary.code-details-summary, pre[role="region"]';

const isInteractiveTarget = (target: EventTarget | null): boolean =>
  target instanceof Element && !!target.closest(INTERACTIVE_JAW_SELECTOR);

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

const updateGestureMode = (
  touchState: TouchGestureState,
  clientX: number,
  clientY: number
): void => {
  const deltaX = clientX - touchState.startX;
  const deltaY = clientY - touchState.startY;

  if (
    touchState.mode === 'pending' &&
    Math.max(Math.abs(deltaX), Math.abs(deltaY)) >= MOVE_THRESHOLD
  ) {
    touchState.mode =
      touchState.horizontalScroller && Math.abs(deltaX) > Math.abs(deltaY)
        ? 'horizontal'
        : 'vertical';
  }
};

const handleVerticalScroll = (
  e: Event,
  upperJawNode: HTMLElement,
  touchState: TouchGestureState,
  clientY: number
): void => {
  if (touchState.mode !== 'vertical') return;

  if (e.cancelable) {
    e.preventDefault();
  }

  dispatchVerticalScrollWheel(
    upperJawNode,
    (clientY - touchState.lastY) * TOUCH_VERTICAL_SCROLL_MULTIPLIER
  );
  touchState.lastY = clientY;
};

export const attachContentWidgetEvents = (
  upperJawNode: HTMLElement
): (() => void) => {
  let touchState: TouchGestureState | null = null;
  let interactiveTouchState: InteractiveTouchState | null = null;

  const onContextMenu = (e: MouseEvent): void => {
    if (isInteractiveTarget(e.target)) return;
    e.stopPropagation();
  };

  const onPointerDown = (e: PointerEvent): void => {
    if (e.pointerType !== 'touch') return;
    if (isInteractiveTarget(e.target)) {
      interactiveTouchState = {
        source: 'pointer',
        pointerId: e.pointerId
      };
      e.stopPropagation();
      return;
    }

    touchState = {
      source: 'pointer',
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
      interactiveTouchState &&
      interactiveTouchState.source === 'pointer' &&
      e.pointerId === interactiveTouchState.pointerId
    ) {
      e.stopPropagation();
      return;
    }

    if (
      e.pointerType !== 'touch' ||
      !touchState ||
      touchState.source !== 'pointer' ||
      e.pointerId !== touchState.pointerId
    ) {
      return;
    }

    updateGestureMode(touchState, e.clientX, e.clientY);
    handleVerticalScroll(e, upperJawNode, touchState, e.clientY);
    e.stopPropagation();
  };

  const onPointerUp = (e: PointerEvent): void => {
    if (
      interactiveTouchState &&
      interactiveTouchState.source === 'pointer' &&
      e.pointerId === interactiveTouchState.pointerId
    ) {
      interactiveTouchState = null;
      e.stopPropagation();
      return;
    }

    if (
      !touchState ||
      touchState.source !== 'pointer' ||
      e.pointerId !== touchState.pointerId
    ) {
      return;
    }

    touchState = null;
    e.stopPropagation();
  };

  const onTouchStart = (e: TouchEvent): void => {
    if (touchState?.source === 'pointer') return;

    const touch = e.changedTouches.item(0);
    if (!touch) return;

    if (isInteractiveTarget(e.target)) {
      interactiveTouchState = {
        source: 'touch',
        pointerId: touch.identifier
      };
      e.stopPropagation();
      return;
    }

    touchState = {
      source: 'touch',
      pointerId: touch.identifier,
      mode: 'pending',
      startX: touch.clientX,
      startY: touch.clientY,
      lastY: touch.clientY,
      horizontalScroller: findHorizontalScroller(e.target)
    };
    e.stopPropagation();
  };

  const onTouchMove = (e: TouchEvent): void => {
    if (interactiveTouchState?.source === 'touch') {
      const interactiveTouch = e.changedTouches.item(0);
      if (
        interactiveTouch &&
        interactiveTouch.identifier === interactiveTouchState.pointerId
      ) {
        e.stopPropagation();
        return;
      }
    }

    if (!touchState || touchState.source !== 'touch') return;

    const touch = e.changedTouches.item(0);
    if (!touch || touch.identifier !== touchState.pointerId) return;

    updateGestureMode(touchState, touch.clientX, touch.clientY);
    handleVerticalScroll(e, upperJawNode, touchState, touch.clientY);
    e.stopPropagation();
  };

  const onTouchEnd = (e: TouchEvent): void => {
    if (interactiveTouchState?.source === 'touch') {
      const interactiveTouch = e.changedTouches.item(0);
      if (
        interactiveTouch &&
        interactiveTouch.identifier === interactiveTouchState.pointerId
      ) {
        interactiveTouchState = null;
        e.stopPropagation();
        return;
      }
    }

    if (!touchState || touchState.source !== 'touch') return;

    const touch = e.changedTouches.item(0);
    if (!touch || touch.identifier !== touchState.pointerId) return;

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
  upperJawNode.addEventListener('touchstart', onTouchStart, { passive: true });
  upperJawNode.addEventListener('touchmove', onTouchMove, { passive: false });
  upperJawNode.addEventListener('touchend', onTouchEnd, { passive: true });
  upperJawNode.addEventListener('touchcancel', onTouchEnd, { passive: true });

  return () => {
    upperJawNode.removeEventListener('contextmenu', onContextMenu);
    upperJawNode.removeEventListener('pointerdown', onPointerDown);
    upperJawNode.removeEventListener('pointermove', onPointerMove);
    upperJawNode.removeEventListener('pointerup', onPointerUp);
    upperJawNode.removeEventListener('pointercancel', onPointerUp);
    upperJawNode.removeEventListener('touchstart', onTouchStart);
    upperJawNode.removeEventListener('touchmove', onTouchMove);
    upperJawNode.removeEventListener('touchend', onTouchEnd);
    upperJawNode.removeEventListener('touchcancel', onTouchEnd);
  };
};
