//#region src/index.ts
/**
* Gracefully handles a callback that returns a promise.
*
* @example
* await until(() => Promise.resolve(123))
* // [null, 123]
*
* await until(() => Promise.reject(new Error('Oops!')))
* // [new Error('Oops!'), null]
*/
async function until(callback) {
	try {
		return [null, await callback().catch((error) => {
			throw error;
		})];
	} catch (error) {
		return [error, null];
	}
}

//#endregion
export { until };
//# sourceMappingURL=index.js.map