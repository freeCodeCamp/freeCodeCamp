"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnDemandDocument = void 0;
const bson_1 = require("../../../bson");
const BSONElementOffset = {
    type: 0,
    nameOffset: 1,
    nameLength: 2,
    offset: 3,
    length: 4
};
/** @internal */
class OnDemandDocument {
    constructor(bson, offset = 0, isArray = false, 
    /** If elements was already calculated */
    elements) {
        /**
         * Maps JS strings to elements and jsValues for speeding up subsequent lookups.
         * - If `false` then name does not exist in the BSON document
         * - If `CachedBSONElement` instance name exists
         * - If `cache[name].value == null` jsValue has not yet been parsed
         *   - Null/Undefined values do not get cached because they are zero-length values.
         */
        this.cache = Object.create(null);
        /** Caches the index of elements that have been named */
        this.indexFound = Object.create(null);
        this.bson = bson;
        this.offset = offset;
        this.isArray = isArray;
        this.elements = elements ?? (0, bson_1.parseToElementsToArray)(this.bson, offset);
    }
    /** Only supports basic latin strings */
    isElementName(name, element) {
        const nameLength = element[BSONElementOffset.nameLength];
        const nameOffset = element[BSONElementOffset.nameOffset];
        if (name.length !== nameLength)
            return false;
        const nameEnd = nameOffset + nameLength;
        for (let byteIndex = nameOffset, charIndex = 0; charIndex < name.length && byteIndex < nameEnd; charIndex++, byteIndex++) {
            if (this.bson[byteIndex] !== name.charCodeAt(charIndex))
                return false;
        }
        return true;
    }
    /**
     * Seeks into the elements array for an element matching the given name.
     *
     * @remarks
     * Caching:
     * - Caches the existence of a property making subsequent look ups for non-existent properties return immediately
     * - Caches names mapped to elements to avoid reiterating the array and comparing the name again
     * - Caches the index at which an element has been found to prevent rechecking against elements already determined to belong to another name
     *
     * @param name - a basic latin string name of a BSON element
     * @returns
     */
    getElement(name) {
        const cachedElement = this.cache[name];
        if (cachedElement === false)
            return null;
        if (cachedElement != null) {
            return cachedElement;
        }
        if (typeof name === 'number') {
            if (this.isArray) {
                if (name < this.elements.length) {
                    const element = this.elements[name];
                    const cachedElement = { element, value: undefined };
                    this.cache[name] = cachedElement;
                    this.indexFound[name] = true;
                    return cachedElement;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        for (let index = 0; index < this.elements.length; index++) {
            const element = this.elements[index];
            // skip this element if it has already been associated with a name
            if (!(index in this.indexFound) && this.isElementName(name, element)) {
                const cachedElement = { element, value: undefined };
                this.cache[name] = cachedElement;
                this.indexFound[index] = true;
                return cachedElement;
            }
        }
        this.cache[name] = false;
        return null;
    }
    toJSValue(element, as) {
        const type = element[BSONElementOffset.type];
        const offset = element[BSONElementOffset.offset];
        const length = element[BSONElementOffset.length];
        if (as !== type) {
            return null;
        }
        switch (as) {
            case bson_1.BSONType.null:
            case bson_1.BSONType.undefined:
                return null;
            case bson_1.BSONType.double:
                return (0, bson_1.getFloat64LE)(this.bson, offset);
            case bson_1.BSONType.int:
                return (0, bson_1.getInt32LE)(this.bson, offset);
            case bson_1.BSONType.long:
                return (0, bson_1.getBigInt64LE)(this.bson, offset);
            case bson_1.BSONType.bool:
                return Boolean(this.bson[offset]);
            case bson_1.BSONType.objectId:
                return new bson_1.ObjectId(this.bson.subarray(offset, offset + 12));
            case bson_1.BSONType.timestamp:
                return new bson_1.Timestamp((0, bson_1.getBigInt64LE)(this.bson, offset));
            case bson_1.BSONType.string:
                return (0, bson_1.toUTF8)(this.bson, offset + 4, offset + length - 1, false);
            case bson_1.BSONType.binData: {
                const totalBinarySize = (0, bson_1.getInt32LE)(this.bson, offset);
                const subType = this.bson[offset + 4];
                if (subType === 2) {
                    const subType2BinarySize = (0, bson_1.getInt32LE)(this.bson, offset + 1 + 4);
                    if (subType2BinarySize < 0)
                        throw new bson_1.BSONError('Negative binary type element size found for subtype 0x02');
                    if (subType2BinarySize > totalBinarySize - 4)
                        throw new bson_1.BSONError('Binary type with subtype 0x02 contains too long binary size');
                    if (subType2BinarySize < totalBinarySize - 4)
                        throw new bson_1.BSONError('Binary type with subtype 0x02 contains too short binary size');
                    return new bson_1.Binary(this.bson.subarray(offset + 1 + 4 + 4, offset + 1 + 4 + 4 + subType2BinarySize), 2);
                }
                return new bson_1.Binary(this.bson.subarray(offset + 1 + 4, offset + 1 + 4 + totalBinarySize), subType);
            }
            case bson_1.BSONType.date:
                // Pretend this is correct.
                return new Date(Number((0, bson_1.getBigInt64LE)(this.bson, offset)));
            case bson_1.BSONType.object:
                return new OnDemandDocument(this.bson, offset);
            case bson_1.BSONType.array:
                return new OnDemandDocument(this.bson, offset, true);
            default:
                throw new bson_1.BSONError(`Unsupported BSON type: ${as}`);
        }
    }
    /**
     * Returns the number of elements in this BSON document
     */
    size() {
        return this.elements.length;
    }
    /**
     * Checks for the existence of an element by name.
     *
     * @remarks
     * Uses `getElement` with the expectation that will populate caches such that a `has` call
     * followed by a `getElement` call will not repeat the cost paid by the first look up.
     *
     * @param name - element name
     */
    has(name) {
        const cachedElement = this.cache[name];
        if (cachedElement === false)
            return false;
        if (cachedElement != null)
            return true;
        return this.getElement(name) != null;
    }
    get(name, as, required) {
        const element = this.getElement(name);
        if (element == null) {
            if (required === true) {
                throw new bson_1.BSONError(`BSON element "${name}" is missing`);
            }
            else {
                return null;
            }
        }
        if (element.value == null) {
            const value = this.toJSValue(element.element, as);
            if (value == null) {
                if (required === true) {
                    throw new bson_1.BSONError(`BSON element "${name}" is missing`);
                }
                else {
                    return null;
                }
            }
            // It is important to never store null
            element.value = value;
        }
        return element.value;
    }
    getNumber(name, required) {
        const maybeBool = this.get(name, bson_1.BSONType.bool);
        const bool = maybeBool == null ? null : maybeBool ? 1 : 0;
        const maybeLong = this.get(name, bson_1.BSONType.long);
        const long = maybeLong == null ? null : Number(maybeLong);
        const result = bool ?? long ?? this.get(name, bson_1.BSONType.int) ?? this.get(name, bson_1.BSONType.double);
        if (required === true && result == null) {
            throw new bson_1.BSONError(`BSON element "${name}" is missing`);
        }
        return result;
    }
    /**
     * Deserialize this object, DOES NOT cache result so avoid multiple invocations
     * @param options - BSON deserialization options
     */
    toObject(options) {
        return (0, bson_1.deserialize)(this.bson, {
            ...options,
            index: this.offset,
            allowObjectSmallerThanBufferSize: true
        });
    }
    /** Returns this document's bytes only */
    toBytes() {
        const size = (0, bson_1.getInt32LE)(this.bson, this.offset);
        return this.bson.subarray(this.offset, this.offset + size);
    }
}
exports.OnDemandDocument = OnDemandDocument;
//# sourceMappingURL=document.js.map