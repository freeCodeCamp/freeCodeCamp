import { options } from 'preact';
import { initDevTools } from './devtools';

initDevTools();

/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, name: string) => T}
 */
export function addHookName(value, name) {
	if (options._addHookName) {
		options._addHookName(name);
	}
	return value;
}
