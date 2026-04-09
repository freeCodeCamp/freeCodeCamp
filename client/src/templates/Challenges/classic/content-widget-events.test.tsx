import { afterEach, describe, expect, it, vi } from 'vitest';

import { attachContentWidgetEvents } from './content-widget-events';

const createPointerEvent = (
  type: 'pointerdown' | 'pointermove' | 'pointerup' | 'pointercancel',
  x: number,
  y: number,
  options?: {
    pointerId?: number;
    pointerType?: 'touch' | 'mouse' | 'pen';
  }
): PointerEvent => {
  const pointerId = options?.pointerId ?? 1;
  const pointerType = options?.pointerType ?? 'touch';

  if (typeof PointerEvent === 'function') {
    return new PointerEvent(type, {
      bubbles: true,
      cancelable: true,
      pointerId,
      pointerType,
      clientX: x,
      clientY: y
    });
  }

  const event = new Event(type, {
    bubbles: true,
    cancelable: true
  });

  Object.defineProperties(event, {
    pointerId: { value: pointerId },
    pointerType: { value: pointerType },
    clientX: { value: x },
    clientY: { value: y }
  });

  return event as PointerEvent;
};

const createDomTree = () => {
  document.body.innerHTML = `
    <div class="monaco-editor">
      <div class="monaco-scrollable-element editor-scrollable"></div>
      <div class="editor-upper-jaw">
        <div class="description-container">
          <p>paragraph</p>
          <details class="code-details" open>
            <summary class="code-details-summary">Example Code</summary>
            <pre>example code</pre>
          </details>
        </div>
      </div>
    </div>
  `;

  const monacoEditor = document.querySelector('.monaco-editor');
  const scrollable = document.querySelector(
    '.monaco-scrollable-element.editor-scrollable'
  );
  const upperJaw = document.querySelector('.editor-upper-jaw');
  const paragraph = document.querySelector('.description-container p');
  const pre = document.querySelector(
    '.editor-upper-jaw details.code-details pre'
  );

  if (
    !(monacoEditor instanceof HTMLElement) ||
    !(scrollable instanceof HTMLElement) ||
    !(upperJaw instanceof HTMLElement) ||
    !(paragraph instanceof HTMLElement) ||
    !(pre instanceof HTMLElement)
  ) {
    throw new Error('Failed to construct test DOM');
  }

  Object.defineProperty(pre, 'scrollWidth', { value: 500, configurable: true });
  Object.defineProperty(pre, 'clientWidth', { value: 200, configurable: true });

  return { monacoEditor, scrollable, upperJaw, paragraph, pre };
};

describe('content widget event handling', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('stops bubbling for contextmenu while preserving default behavior', () => {
    const { monacoEditor, upperJaw, paragraph } = createDomTree();
    const onParentContextMenu = vi.fn();
    monacoEditor.addEventListener('contextmenu', onParentContextMenu);
    const detachListeners = attachContentWidgetEvents(upperJaw);

    const contextMenu = new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true
    });
    paragraph.dispatchEvent(contextMenu);

    expect(onParentContextMenu).not.toHaveBeenCalled();
    expect(contextMenu.defaultPrevented).toBe(false);
    detachListeners();
  });

  it('dispatches wheel scroll for vertical touch drags and stops propagation', () => {
    const { monacoEditor, scrollable, upperJaw, paragraph } = createDomTree();
    const wheelEvents: WheelEvent[] = [];
    scrollable.addEventListener('wheel', e => {
      wheelEvents.push(e);
    });
    const onParentPointerMove = vi.fn();
    monacoEditor.addEventListener('pointermove', onParentPointerMove);
    const detachListeners = attachContentWidgetEvents(upperJaw);

    paragraph.dispatchEvent(createPointerEvent('pointerdown', 100, 100));
    const pointerMove = createPointerEvent('pointermove', 100, 140);
    paragraph.dispatchEvent(pointerMove);

    expect(wheelEvents).toHaveLength(1);
    expect(wheelEvents[0]?.deltaY).toBe(100);
    expect(pointerMove.defaultPrevented).toBe(true);
    expect(onParentPointerMove).not.toHaveBeenCalled();

    detachListeners();
  });

  it('allows horizontal pre scrolling without forcing vertical wheel scroll', () => {
    const { monacoEditor, scrollable, upperJaw, pre } = createDomTree();
    const wheelEvents: WheelEvent[] = [];
    scrollable.addEventListener('wheel', e => {
      wheelEvents.push(e);
    });
    const onParentPointerMove = vi.fn();
    monacoEditor.addEventListener('pointermove', onParentPointerMove);
    const detachListeners = attachContentWidgetEvents(upperJaw);

    pre.dispatchEvent(createPointerEvent('pointerdown', 100, 100));
    const pointerMove = createPointerEvent('pointermove', 160, 112);
    pre.dispatchEvent(pointerMove);

    expect(wheelEvents).toHaveLength(0);
    expect(pointerMove.defaultPrevented).toBe(false);
    expect(onParentPointerMove).not.toHaveBeenCalled();

    detachListeners();
  });

  it('treats non-scrollable pre drags as vertical gestures', () => {
    const { scrollable, upperJaw, pre } = createDomTree();
    Object.defineProperty(pre, 'scrollWidth', {
      value: 200,
      configurable: true
    });
    Object.defineProperty(pre, 'clientWidth', {
      value: 200,
      configurable: true
    });
    const wheelEvents: WheelEvent[] = [];
    scrollable.addEventListener('wheel', e => {
      wheelEvents.push(e);
    });
    const detachListeners = attachContentWidgetEvents(upperJaw);

    pre.dispatchEvent(createPointerEvent('pointerdown', 100, 100));
    const pointerMove = createPointerEvent('pointermove', 160, 130);
    pre.dispatchEvent(pointerMove);

    expect(wheelEvents).toHaveLength(1);
    expect(pointerMove.defaultPrevented).toBe(true);

    detachListeners();
  });

  it('does not dispatch wheel for tiny movements below threshold', () => {
    const { monacoEditor, scrollable, upperJaw, paragraph } = createDomTree();
    const wheelEvents: WheelEvent[] = [];
    scrollable.addEventListener('wheel', e => {
      wheelEvents.push(e);
    });
    const onParentPointerMove = vi.fn();
    monacoEditor.addEventListener('pointermove', onParentPointerMove);
    const detachListeners = attachContentWidgetEvents(upperJaw);

    paragraph.dispatchEvent(createPointerEvent('pointerdown', 100, 100));
    const pointerMove = createPointerEvent('pointermove', 103, 104);
    paragraph.dispatchEvent(pointerMove);

    expect(wheelEvents).toHaveLength(0);
    expect(pointerMove.defaultPrevented).toBe(false);
    expect(onParentPointerMove).not.toHaveBeenCalled();

    detachListeners();
  });

  it('resets touch state on pointerup', () => {
    const { monacoEditor, scrollable, upperJaw, paragraph } = createDomTree();
    const wheelEvents: WheelEvent[] = [];
    scrollable.addEventListener('wheel', e => {
      wheelEvents.push(e);
    });
    const onParentPointerMove = vi.fn();
    monacoEditor.addEventListener('pointermove', onParentPointerMove);
    const detachListeners = attachContentWidgetEvents(upperJaw);

    paragraph.dispatchEvent(createPointerEvent('pointerdown', 100, 100));
    paragraph.dispatchEvent(createPointerEvent('pointermove', 100, 140));
    paragraph.dispatchEvent(createPointerEvent('pointerup', 100, 140));
    paragraph.dispatchEvent(createPointerEvent('pointermove', 100, 180));

    expect(wheelEvents).toHaveLength(1);
    expect(onParentPointerMove).toHaveBeenCalledTimes(1);

    detachListeners();
  });

  it('detaches all listeners cleanly', () => {
    const { monacoEditor, scrollable, upperJaw, paragraph } = createDomTree();
    const wheelEvents: WheelEvent[] = [];
    scrollable.addEventListener('wheel', e => {
      wheelEvents.push(e);
    });
    const onParentPointerMove = vi.fn();
    const onParentContextMenu = vi.fn();
    monacoEditor.addEventListener('pointermove', onParentPointerMove);
    monacoEditor.addEventListener('contextmenu', onParentContextMenu);
    const detachListeners = attachContentWidgetEvents(upperJaw);
    detachListeners();

    paragraph.dispatchEvent(createPointerEvent('pointerdown', 100, 100));
    paragraph.dispatchEvent(createPointerEvent('pointermove', 100, 140));
    paragraph.dispatchEvent(
      new MouseEvent('contextmenu', { bubbles: true, cancelable: true })
    );

    expect(wheelEvents).toHaveLength(0);
    expect(onParentPointerMove).toHaveBeenCalledTimes(1);
    expect(onParentContextMenu).toHaveBeenCalledTimes(1);
  });

  it('ignores non-touch pointer events', () => {
    const { scrollable, upperJaw, paragraph } = createDomTree();
    const wheelEvents: WheelEvent[] = [];
    scrollable.addEventListener('wheel', e => {
      wheelEvents.push(e);
    });
    const detachListeners = attachContentWidgetEvents(upperJaw);

    paragraph.dispatchEvent(
      createPointerEvent('pointerdown', 100, 100, { pointerType: 'mouse' })
    );
    paragraph.dispatchEvent(
      createPointerEvent('pointermove', 100, 160, { pointerType: 'mouse' })
    );

    expect(wheelEvents).toHaveLength(0);

    detachListeners();
  });
});
