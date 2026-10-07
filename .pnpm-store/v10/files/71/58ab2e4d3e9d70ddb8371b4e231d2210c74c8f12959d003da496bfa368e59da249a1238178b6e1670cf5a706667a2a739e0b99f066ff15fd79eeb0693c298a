/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents a window in a possible chain of iframes
 */
interface IWindowChainElement {
	/**
	 * The window object for it
	 */
	readonly window: WeakRef<Window>;
	/**
	 * The iframe element inside the window.parent corresponding to window
	 */
	readonly iframeElement: Element | null;
}

const sameOriginWindowChainCache = new WeakMap<Window, IWindowChainElement[] | null>();

function getParentWindowIfSameOrigin(w: Window): Window | null {
	if (!w.parent || w.parent === w) {
		return null;
	}

	// Cannot really tell if we have access to the parent window unless we try to access something in it
	try {
		const location = w.location;
		const parentLocation = w.parent.location;
		if (location.origin !== 'null' && parentLocation.origin !== 'null' && location.origin !== parentLocation.origin) {
			return null;
		}
	} catch (e) {
		return null;
	}

	return w.parent;
}

export class IframeUtils {

	/**
	 * Returns a chain of embedded windows with the same origin (which can be accessed programmatically).
	 * Having a chain of length 1 might mean that the current execution environment is running outside of an iframe or inside an iframe embedded in a window with a different origin.
	 */
	private static getSameOriginWindowChain(targetWindow: Window): IWindowChainElement[] {
		let windowChainCache = sameOriginWindowChainCache.get(targetWindow);
		if (!windowChainCache) {
			windowChainCache = [];
			sameOriginWindowChainCache.set(targetWindow, windowChainCache);
			let w: Window | null = targetWindow;
			let parent: Window | null;
			do {
				parent = getParentWindowIfSameOrigin(w);
				if (parent) {
					windowChainCache.push({
						window: new WeakRef(w),
						iframeElement: w.frameElement || null
					});
				} else {
					windowChainCache.push({
						window: new WeakRef(w),
						iframeElement: null
					});
				}
				w = parent;
			} while (w);
		}
		return windowChainCache.slice(0);
	}

	/**
	 * Returns the position of `childWindow` relative to `ancestorWindow`
	 */
	public static getPositionOfChildWindowRelativeToAncestorWindow(childWindow: Window, ancestorWindow: Window | null) {

		if (!ancestorWindow || childWindow === ancestorWindow) {
			return {
				top: 0,
				left: 0
			};
		}

		let top = 0, left = 0;

		const windowChain = this.getSameOriginWindowChain(childWindow);

		for (const windowChainEl of windowChain) {
			const windowInChain = windowChainEl.window.deref();
			top += windowInChain?.scrollY ?? 0;
			left += windowInChain?.scrollX ?? 0;

			if (windowInChain === ancestorWindow) {
				break;
			}

			if (!windowChainEl.iframeElement) {
				break;
			}

			const boundingRect = windowChainEl.iframeElement.getBoundingClientRect();
			top += boundingRect.top;
			left += boundingRect.left;
		}

		return {
			top: top,
			left: left
		};
	}
}

/**
 * Returns a sha-256 composed of `parentOrigin` and `salt` converted to base 32
 */
export async function parentOriginHash(parentOrigin: string, salt: string): Promise<string> {
	// This same code is also inlined at `src/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html`
	if (!crypto.subtle) {
		throw new Error(`'crypto.subtle' is not available so webviews will not work. This is likely because the editor is not running in a secure context (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).`);
	}

	const strData = JSON.stringify({ parentOrigin, salt });
	const encoder = new TextEncoder();
	const arrData = encoder.encode(strData);
	const hash = await crypto.subtle.digest('sha-256', arrData);
	return sha256AsBase32(hash);
}

function sha256AsBase32(bytes: ArrayBuffer): string {
	const array = Array.from(new Uint8Array(bytes));
	const hexArray = array.map(b => b.toString(16).padStart(2, '0')).join('');
	// sha256 has 256 bits, so we need at most ceil(lg(2^256-1)/lg(32)) = 52 chars to represent it in base 32
	return BigInt(`0x${hexArray}`).toString(32).padStart(52, '0');
}
