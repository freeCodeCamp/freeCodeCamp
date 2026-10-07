/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CodeWindow, mainWindow } from 'vs/base/browser/window';
import { Emitter } from 'vs/base/common/event';

class WindowManager {

	static readonly INSTANCE = new WindowManager();

	// --- Zoom Level

	private readonly mapWindowIdToZoomLevel = new Map<number, number>();

	private readonly _onDidChangeZoomLevel = new Emitter<number>();
	readonly onDidChangeZoomLevel = this._onDidChangeZoomLevel.event;

	getZoomLevel(targetWindow: Window): number {
		return this.mapWindowIdToZoomLevel.get(this.getWindowId(targetWindow)) ?? 0;
	}
	setZoomLevel(zoomLevel: number, targetWindow: Window): void {
		if (this.getZoomLevel(targetWindow) === zoomLevel) {
			return;
		}

		const targetWindowId = this.getWindowId(targetWindow);
		this.mapWindowIdToZoomLevel.set(targetWindowId, zoomLevel);
		this._onDidChangeZoomLevel.fire(targetWindowId);
	}

	// --- Zoom Factor

	private readonly mapWindowIdToZoomFactor = new Map<number, number>();

	getZoomFactor(targetWindow: Window): number {
		return this.mapWindowIdToZoomFactor.get(this.getWindowId(targetWindow)) ?? 1;
	}
	setZoomFactor(zoomFactor: number, targetWindow: Window): void {
		this.mapWindowIdToZoomFactor.set(this.getWindowId(targetWindow), zoomFactor);
	}

	// --- Fullscreen

	private readonly _onDidChangeFullscreen = new Emitter<number>();
	readonly onDidChangeFullscreen = this._onDidChangeFullscreen.event;

	private readonly mapWindowIdToFullScreen = new Map<number, boolean>();

	setFullscreen(fullscreen: boolean, targetWindow: Window): void {
		if (this.isFullscreen(targetWindow) === fullscreen) {
			return;
		}

		const windowId = this.getWindowId(targetWindow);
		this.mapWindowIdToFullScreen.set(windowId, fullscreen);
		this._onDidChangeFullscreen.fire(windowId);
	}
	isFullscreen(targetWindow: Window): boolean {
		return !!this.mapWindowIdToFullScreen.get(this.getWindowId(targetWindow));
	}

	private getWindowId(targetWindow: Window): number {
		return (targetWindow as CodeWindow).vscodeWindowId;
	}
}

export function addMatchMediaChangeListener(targetWindow: Window, query: string | MediaQueryList, callback: (this: MediaQueryList, ev: MediaQueryListEvent) => any): void {
	if (typeof query === 'string') {
		query = targetWindow.matchMedia(query);
	}
	query.addEventListener('change', callback);
}

/** A zoom index, e.g. 1, 2, 3 */
export function setZoomLevel(zoomLevel: number, targetWindow: Window): void {
	WindowManager.INSTANCE.setZoomLevel(zoomLevel, targetWindow);
}
export function getZoomLevel(targetWindow: Window): number {
	return WindowManager.INSTANCE.getZoomLevel(targetWindow);
}
export const onDidChangeZoomLevel = WindowManager.INSTANCE.onDidChangeZoomLevel;

/** The zoom scale for an index, e.g. 1, 1.2, 1.4 */
export function getZoomFactor(targetWindow: Window): number {
	return WindowManager.INSTANCE.getZoomFactor(targetWindow);
}
export function setZoomFactor(zoomFactor: number, targetWindow: Window): void {
	WindowManager.INSTANCE.setZoomFactor(zoomFactor, targetWindow);
}

export function setFullscreen(fullscreen: boolean, targetWindow: Window): void {
	WindowManager.INSTANCE.setFullscreen(fullscreen, targetWindow);
}
export function isFullscreen(targetWindow: Window): boolean {
	return WindowManager.INSTANCE.isFullscreen(targetWindow);
}
export const onDidChangeFullscreen = WindowManager.INSTANCE.onDidChangeFullscreen;

const userAgent = typeof navigator === 'object' ? navigator.userAgent : '';

export const isFirefox = (userAgent.indexOf('Firefox') >= 0);
export const isWebKit = (userAgent.indexOf('AppleWebKit') >= 0);
export const isChrome = (userAgent.indexOf('Chrome') >= 0);
export const isSafari = (!isChrome && (userAgent.indexOf('Safari') >= 0));
export const isWebkitWebView = (!isChrome && !isSafari && isWebKit);
export const isElectron = (userAgent.indexOf('Electron/') >= 0);
export const isAndroid = (userAgent.indexOf('Android') >= 0);

let standalone = false;
if (typeof mainWindow.matchMedia === 'function') {
	const standaloneMatchMedia = mainWindow.matchMedia('(display-mode: standalone) or (display-mode: window-controls-overlay)');
	const fullScreenMatchMedia = mainWindow.matchMedia('(display-mode: fullscreen)');
	standalone = standaloneMatchMedia.matches;
	addMatchMediaChangeListener(mainWindow, standaloneMatchMedia, ({ matches }) => {
		// entering fullscreen would change standaloneMatchMedia.matches to false
		// if standalone is true (running as PWA) and entering fullscreen, skip this change
		if (standalone && fullScreenMatchMedia.matches) {
			return;
		}
		// otherwise update standalone (browser to PWA or PWA to browser)
		standalone = matches;
	});
}
export function isStandalone(): boolean {
	return standalone;
}

// Visible means that the feature is enabled, not necessarily being rendered
// e.g. visible is true even in fullscreen mode where the controls are hidden
// See docs at https://developer.mozilla.org/en-US/docs/Web/API/WindowControlsOverlay/visible
export function isWCOEnabled(): boolean {
	return (navigator as any)?.windowControlsOverlay?.visible;
}

// Returns the bounding rect of the titlebar area if it is supported and defined
// See docs at https://developer.mozilla.org/en-US/docs/Web/API/WindowControlsOverlay/getTitlebarAreaRect
export function getWCOBoundingRect(): DOMRect | undefined {
	return (navigator as any)?.windowControlsOverlay?.getTitlebarAreaRect();
}
