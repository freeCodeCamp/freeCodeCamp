/*
  @license
	Rollup.js v4.60.2
	Sat, 18 Apr 2026 13:58:01 GMT - commit a6be82b8abd747458afdc7484319f7b5deb92535

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

let fsEvents;
let fsEventsImportError;
async function loadFsEvents() {
    try {
        ({ default: fsEvents } = await import('fsevents'));
    }
    catch (error) {
        fsEventsImportError = error;
    }
}
// A call to this function will be injected into the chokidar code
function getFsEvents() {
    if (fsEventsImportError)
        throw fsEventsImportError;
    return fsEvents;
}

const fseventsImporter = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    getFsEvents,
    loadFsEvents
}, Symbol.toStringTag, { value: 'Module' });

exports.fseventsImporter = fseventsImporter;
exports.loadFsEvents = loadFsEvents;
//# sourceMappingURL=fsevents-importer.js.map
