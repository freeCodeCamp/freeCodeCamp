import { _ } from '@swc/helpers/esm/_sliced_to_array.js';

var latLngRegExp = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/;
function aroundLatLngToPosition(value) {
    var pattern = value.match(latLngRegExp);
    // Since the value provided is the one send with the request, the API should
    // throw an error due to the wrong format. So throw an error should be safe.
    if (!pattern) {
        throw new Error('Invalid value for "aroundLatLng" parameter: "'.concat(value, '"'));
    }
    return {
        lat: parseFloat(pattern[1]),
        lng: parseFloat(pattern[2])
    };
}
function insideBoundingBoxArrayToBoundingBox(value) {
    var _value = _(value, 1), tmp = _value[0], _ref = _(tmp === void 0 ? [
        undefined,
        undefined,
        undefined,
        undefined
    ] : tmp, 4), neLat = _ref[0], neLng = _ref[1], swLat = _ref[2], swLng = _ref[3];
    // Since the value provided is the one send with the request, the API should
    // throw an error due to the wrong format. So throw an error should be safe.
    if (!neLat || !neLng || !swLat || !swLng) {
        throw new Error('Invalid value for "insideBoundingBox" parameter: ['.concat(value, "]"));
    }
    return {
        northEast: {
            lat: neLat,
            lng: neLng
        },
        southWest: {
            lat: swLat,
            lng: swLng
        }
    };
}
function insideBoundingBoxStringToBoundingBox(value) {
    var _value_split_map = _(value.split(',').map(parseFloat), 4), neLat = _value_split_map[0], neLng = _value_split_map[1], swLat = _value_split_map[2], swLng = _value_split_map[3];
    // Since the value provided is the one send with the request, the API should
    // throw an error due to the wrong format. So throw an error should be safe.
    if (!neLat || !neLng || !swLat || !swLng) {
        throw new Error('Invalid value for "insideBoundingBox" parameter: "'.concat(value, '"'));
    }
    return {
        northEast: {
            lat: neLat,
            lng: neLng
        },
        southWest: {
            lat: swLat,
            lng: swLng
        }
    };
}
function insideBoundingBoxToBoundingBox(value) {
    if (Array.isArray(value)) {
        return insideBoundingBoxArrayToBoundingBox(value);
    }
    return insideBoundingBoxStringToBoundingBox(value);
}

export { aroundLatLngToPosition, insideBoundingBoxToBoundingBox };
