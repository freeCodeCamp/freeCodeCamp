import { afterEach, describe, expect, it, vi } from 'vitest';

import { attachContentWidgetEvents } from './content-widget-events';

const createTouchEvent = (
  type: 'touchstart' | 'touchmove' | 'touchend' | 'touchcancel',
  x: number,
  y: number
): TouchEvent => {
  const event = new Event(type, {
    bubbles: true,
    cancelable: true
  });
  Object.defineProperty(event, 'changedTouches', {
    value: {
      item: () => ({
        clientX: x,
        clientY: y
      })
    }
  });
  return event as TouchEvent;
};

const createDomTree = () => {
  const monacoEditor = document.createElement('div');
  monacoEditor.className = 'monaco-editor';
  const scrollable = document.createElement('div');
  scrollable.className = 'monaco-scrollable-element editor-scrollable';
  const upperJaw = document.createElement('div');
  upperJaw.className = 'editor-upper-jaw';
  const paragraph = document.createElement('p');
  paragraph.textContent = 'paragraph';
  const pre = document.createElement('pre');
  pre.textContent = 'example code';
  Object.defineProperty(pre, 'scrollWidth', { value: 500, configurable: true });
  Object.defineProperty(pre, 'clientWidth', { value: 200, configurable: true });
  upperJaw.append(paragraph, pre);
  monacoEditor.append(scrollable, upperJaw);
  document.body.append(monacoEditor);
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
    const dispatchWheel = vi.spyOn(scrollable, 'dispatchEvent');
    const onParentTouchMove = vi.fn();
    monacoEditor.addEventListener('touchmove', onParentTouchMove);
    const detachListeners = attachContentWidgetEvents(upperJaw);

    paragraph.dispatchEvent(createTouchEvent('touchstart', 100, 100));
    const touchMove = createTouchEvent('touchmove', 100, 140);
    paragraph.dispatchEvent(touchMove);

    expect(dispatchWheel).toHaveBeenCalledTimes(1);
    const wheelEvent = dispatchWheel.mock.calls[0]?.[0];
    expect(wheelEvent).toBeInstanceOf(WheelEvent);
    expect((wheelEvent as WheelEvent).deltaY).toBe(100);
    expect(touchMove.defaultPrevented).toBe(true);
    expect(onParentTouchMove).not.toHaveBeenCalled();

    detachListeners();
  });

  it('allows horizontal pre scrolling without forcing vertical wheel scroll', () => {
    const { monacoEditor, scrollable, upperJaw, pre } = createDomTree();
    const dispatchWheel = vi.spyOn(scrollable, 'dispatchEvent');
    const onParentTouchMove = vi.fn();
    monacoEditor.addEventListener('touchmove', onParentTouchMove);
    const detachListeners = attachContentWidgetEvents(upperJaw);

    pre.dispatchEvent(createTouchEvent('touchstart', 100, 100));
    const touchMove = createTouchEvent('touchmove', 160, 112);
    pre.dispatchEvent(touchMove);

    expect(dispatchWheel).not.toHaveBeenCalled();
    expect(touchMove.defaultPrevented).toBe(false);
    expect(onParentTouchMove).not.toHaveBeenCalled();

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
    const dispatchWheel = vi.spyOn(scrollable, 'dispatchEvent');
    const detachListeners = attachContentWidgetEvents(upperJaw);

    pre.dispatchEvent(createTouchEvent('touchstart', 100, 100));
    const touchMove = createTouchEvent('touchmove', 160, 130);
    pre.dispatchEvent(touchMove);

    expect(dispatchWheel).toHaveBeenCalledTimes(1);
    expect(touchMove.defaultPrevented).toBe(true);

    detachListeners();
  });

  it('does not dispatch wheel for tiny movements below threshold', () => {
    const { monacoEditor, scrollable, upperJaw, paragraph } = createDomTree();
    const dispatchWheel = vi.spyOn(scrollable, 'dispatchEvent');
    const onParentTouchMove = vi.fn();
    monacoEditor.addEventListener('touchmove', onParentTouchMove);
    const detachListeners = attachContentWidgetEvents(upperJaw);

    paragraph.dispatchEvent(createTouchEvent('touchstart', 100, 100));
    const touchMove = createTouchEvent('touchmove', 103, 104);
    paragraph.dispatchEvent(touchMove);

    expect(dispatchWheel).not.toHaveBeenCalled();
    expect(touchMove.defaultPrevented).toBe(false);
    expect(onParentTouchMove).not.toHaveBeenCalled();

    detachListeners();
  });

  it('resets touch state on touchend', () => {
    const { monacoEditor, scrollable, upperJaw, paragraph } = createDomTree();
    const dispatchWheel = vi.spyOn(scrollable, 'dispatchEvent');
    const onParentTouchMove = vi.fn();
    monacoEditor.addEventListener('touchmove', onParentTouchMove);
    const detachListeners = attachContentWidgetEvents(upperJaw);

    paragraph.dispatchEvent(createTouchEvent('touchstart', 100, 100));
    paragraph.dispatchEvent(createTouchEvent('touchmove', 100, 140));
    paragraph.dispatchEvent(createTouchEvent('touchend', 100, 140));
    paragraph.dispatchEvent(createTouchEvent('touchmove', 100, 180));

    expect(dispatchWheel).toHaveBeenCalledTimes(1);
    expect(onParentTouchMove).toHaveBeenCalledTimes(1);

    detachListeners();
  });

  it('detaches all listeners cleanly', () => {
    const { monacoEditor, scrollable, upperJaw, paragraph } = createDomTree();
    const dispatchWheel = vi.spyOn(scrollable, 'dispatchEvent');
    const onParentTouchMove = vi.fn();
    const onParentContextMenu = vi.fn();
    monacoEditor.addEventListener('touchmove', onParentTouchMove);
    monacoEditor.addEventListener('contextmenu', onParentContextMenu);
    const detachListeners = attachContentWidgetEvents(upperJaw);
    detachListeners();

    paragraph.dispatchEvent(createTouchEvent('touchstart', 100, 100));
    paragraph.dispatchEvent(createTouchEvent('touchmove', 100, 140));
    paragraph.dispatchEvent(
      new MouseEvent('contextmenu', { bubbles: true, cancelable: true })
    );

    expect(dispatchWheel).not.toHaveBeenCalled();
    expect(onParentTouchMove).toHaveBeenCalledTimes(1);
    expect(onParentContextMenu).toHaveBeenCalledTimes(1);
  });
});
