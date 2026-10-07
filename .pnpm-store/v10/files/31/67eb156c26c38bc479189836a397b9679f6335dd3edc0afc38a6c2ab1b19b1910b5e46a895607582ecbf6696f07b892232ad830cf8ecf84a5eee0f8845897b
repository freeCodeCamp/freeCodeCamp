//#region src/common.ts
const kMovable = Symbol("Tinypool.kMovable");
const kTransferable = Symbol.for("Tinypool.transferable");
const kValue = Symbol.for("Tinypool.valueOf");
const kQueueOptions = Symbol.for("Tinypool.queueOptions");
function isTransferable(value) {
	return value != null && typeof value === "object" && kTransferable in value && kValue in value;
}
function isMovable(value) {
	return isTransferable(value) && value[kMovable] === true;
}
function markMovable(value) {
	Object.defineProperty(value, kMovable, {
		enumerable: false,
		configurable: true,
		writable: true,
		value: true
	});
}
function isTaskQueue(value) {
	return typeof value === "object" && value !== null && "size" in value && typeof value.shift === "function" && typeof value.remove === "function" && typeof value.push === "function";
}
const kRequestCountField = 0;
const kResponseCountField = 1;
const kFieldCount = 2;

//#endregion
export { isMovable, isTaskQueue, isTransferable, kFieldCount, kQueueOptions, kRequestCountField, kResponseCountField, kTransferable, kValue, markMovable };