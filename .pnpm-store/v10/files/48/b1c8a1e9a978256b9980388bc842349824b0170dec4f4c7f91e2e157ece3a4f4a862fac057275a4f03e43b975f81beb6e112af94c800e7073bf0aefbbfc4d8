'use strict';

// It is not possible to create a real FileList programmatically.
// Therefore assigning `files` property with a programmatically created FileList results in an error.
// Just assigning the property (as per fireEvent) breaks the interweaving with the `value` property.
const fakeFiles = Symbol('files and value properties are mocked');
function restoreProperty(obj, prop, descriptor) {
    if (descriptor) {
        Object.defineProperty(obj, prop, descriptor);
    } else {
        delete obj[prop];
    }
}
function setFiles(el, files) {
    var _el_fakeFiles;
    (_el_fakeFiles = el[fakeFiles]) === null || _el_fakeFiles === void 0 ? void 0 : _el_fakeFiles.restore();
    const typeDescr = Object.getOwnPropertyDescriptor(el, 'type');
    const valueDescr = Object.getOwnPropertyDescriptor(el, 'value');
    const filesDescr = Object.getOwnPropertyDescriptor(el, 'files');
    function restore() {
        restoreProperty(el, 'type', typeDescr);
        restoreProperty(el, 'value', valueDescr);
        restoreProperty(el, 'files', filesDescr);
    }
    el[fakeFiles] = {
        restore
    };
    Object.defineProperties(el, {
        files: {
            configurable: true,
            get: ()=>files
        },
        value: {
            configurable: true,
            get: ()=>files.length ? `C:\\fakepath\\${files[0].name}` : '',
            set (v) {
                if (v === '') {
                    restore();
                } else {
                    var _valueDescr_set;
                    valueDescr === null || valueDescr === void 0 ? void 0 : (_valueDescr_set = valueDescr.set) === null || _valueDescr_set === void 0 ? void 0 : _valueDescr_set.call(el, v);
                }
            }
        },
        type: {
            configurable: true,
            get: ()=>'file',
            set (v) {
                if (v !== 'file') {
                    restore();
                    el.type = v;
                }
            }
        }
    });
}

exports.setFiles = setFiles;
