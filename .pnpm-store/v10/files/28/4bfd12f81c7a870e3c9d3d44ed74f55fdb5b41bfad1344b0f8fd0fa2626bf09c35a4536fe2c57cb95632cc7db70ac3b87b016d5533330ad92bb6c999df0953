import { getWindow, n, addDisposableListener } from '../../../../base/browser/dom.js';
import { Disposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { observableCodeEditor } from '../../../browser/observableCodeEditor.js';
import { Point } from '../../../common/core/2d/point.js';
import { AnimationFrameScheduler } from '../../inlineCompletions/browser/model/animation.js';
import { appendRemoveOnDispose } from '../../../browser/widget/diffEditor/utils.js';
import './middleScroll.css';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { disposableObservableValue, observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { derived } from '../../../../base/common/observableInternal/observables/derived.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class MiddleScrollController extends Disposable {
    static { this.ID = 'editor.contrib.middleScroll'; }
    constructor(_editor) {
        super();
        this._editor = _editor;
        const obsEditor = observableCodeEditor(this._editor);
        const scrollOnMiddleClick = obsEditor.getOption(171 /* EditorOption.scrollOnMiddleClick */);
        this._register(autorun(reader => {
            if (!scrollOnMiddleClick.read(reader)) {
                return;
            }
            const editorDomNode = obsEditor.domNode.read(reader);
            if (!editorDomNode) {
                return;
            }
            const scrollingSession = reader.store.add(disposableObservableValue('scrollingSession', undefined));
            reader.store.add(this._editor.onMouseDown(e => {
                const session = scrollingSession.read(undefined);
                if (session) {
                    scrollingSession.set(undefined, undefined);
                    return;
                }
                if (!e.event.middleButton) {
                    return;
                }
                e.event.stopPropagation();
                e.event.preventDefault();
                const store = new DisposableStore();
                const initialPos = new Point(e.event.posx, e.event.posy);
                const mousePos = observeWindowMousePos(getWindow(editorDomNode), initialPos, store);
                const mouseDeltaAfterThreshold = mousePos.map(v => v.subtract(initialPos).withThreshold(5));
                const editorDomNodeRect = editorDomNode.getBoundingClientRect();
                const initialMousePosInEditor = new Point(initialPos.x - editorDomNodeRect.left, initialPos.y - editorDomNodeRect.top);
                scrollingSession.set({
                    mouseDeltaAfterThreshold,
                    initialMousePosInEditor,
                    didScroll: false,
                    dispose: () => store.dispose(),
                }, undefined);
                store.add(this._editor.onMouseUp(e => {
                    const session = scrollingSession.read(undefined);
                    if (session && session.didScroll) {
                        // Only cancel session on release if the user scrolled during it
                        scrollingSession.set(undefined, undefined);
                    }
                }));
                store.add(this._editor.onKeyDown(e => {
                    scrollingSession.set(undefined, undefined);
                }));
            }));
            reader.store.add(autorun(reader => {
                const session = scrollingSession.read(reader);
                if (!session) {
                    return;
                }
                let lastTime = Date.now();
                reader.store.add(autorun(reader => {
                    AnimationFrameScheduler.instance.invalidateOnNextAnimationFrame(reader);
                    const curTime = Date.now();
                    const frameDurationMs = curTime - lastTime;
                    lastTime = curTime;
                    const mouseDelta = session.mouseDeltaAfterThreshold.read(undefined);
                    // scroll by mouse delta every 32ms
                    const factor = frameDurationMs / 32;
                    const scrollDelta = mouseDelta.scale(factor);
                    const scrollPos = new Point(this._editor.getScrollLeft(), this._editor.getScrollTop());
                    this._editor.setScrollPosition(toScrollPosition(scrollPos.add(scrollDelta)));
                    if (!scrollDelta.isZero()) {
                        session.didScroll = true;
                    }
                }));
                const directionAttr = derived(reader => {
                    const delta = session.mouseDeltaAfterThreshold.read(reader);
                    let direction = '';
                    direction += (delta.y < 0 ? 'n' : (delta.y > 0 ? 's' : ''));
                    direction += (delta.x < 0 ? 'w' : (delta.x > 0 ? 'e' : ''));
                    return direction;
                });
                reader.store.add(autorun(reader => {
                    editorDomNode.setAttribute('data-scroll-direction', directionAttr.read(reader));
                }));
            }));
            const dotDomElem = reader.store.add(n.div({
                class: ['scroll-editor-on-middle-click-dot', scrollingSession.map(session => session ? '' : 'hidden')],
                style: {
                    left: scrollingSession.map((session) => session ? session.initialMousePosInEditor.x : 0),
                    top: scrollingSession.map((session) => session ? session.initialMousePosInEditor.y : 0),
                }
            }).toDisposableLiveElement());
            reader.store.add(appendRemoveOnDispose(editorDomNode, dotDomElem.element));
            reader.store.add(autorun(reader => {
                const session = scrollingSession.read(reader);
                editorDomNode.classList.toggle('scroll-editor-on-middle-click-editor', !!session);
            }));
        }));
    }
}
function observeWindowMousePos(window, initialPos, store) {
    const val = observableValue('pos', initialPos);
    store.add(addDisposableListener(window, 'mousemove', (e) => {
        val.set(new Point(e.pageX, e.pageY), undefined);
    }));
    return val;
}
function toScrollPosition(p) {
    return {
        scrollLeft: p.x,
        scrollTop: p.y,
    };
}

export { MiddleScrollController };
