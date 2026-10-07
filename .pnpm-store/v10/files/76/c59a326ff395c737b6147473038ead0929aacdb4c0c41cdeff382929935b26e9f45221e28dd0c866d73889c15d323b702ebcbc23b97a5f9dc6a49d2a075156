export function addArrayIntToNew(arrayIntA, arrayIntB) {
    if (arrayIntA.sign !== arrayIntB.sign) {
        return substractArrayIntToNew(arrayIntA, { sign: -arrayIntB.sign, data: arrayIntB.data });
    }
    var data = [];
    var reminder = 0;
    var dataA = arrayIntA.data;
    var dataB = arrayIntB.data;
    for (var indexA = dataA.length - 1, indexB = dataB.length - 1; indexA >= 0 || indexB >= 0; --indexA, --indexB) {
        var vA = indexA >= 0 ? dataA[indexA] : 0;
        var vB = indexB >= 0 ? dataB[indexB] : 0;
        var current = vA + vB + reminder;
        data.push(current >>> 0);
        reminder = ~~(current / 0x100000000);
    }
    if (reminder !== 0) {
        data.push(reminder);
    }
    return { sign: arrayIntA.sign, data: data.reverse() };
}
export function addOneToPositiveArrayInt(arrayInt) {
    arrayInt.sign = 1;
    var data = arrayInt.data;
    for (var index = data.length - 1; index >= 0; --index) {
        if (data[index] === 0xffffffff) {
            data[index] = 0;
        }
        else {
            data[index] += 1;
            return arrayInt;
        }
    }
    data.unshift(1);
    return arrayInt;
}
function isStrictlySmaller(dataA, dataB) {
    var maxLength = Math.max(dataA.length, dataB.length);
    for (var index = 0; index < maxLength; ++index) {
        var indexA = index + dataA.length - maxLength;
        var indexB = index + dataB.length - maxLength;
        var vA = indexA >= 0 ? dataA[indexA] : 0;
        var vB = indexB >= 0 ? dataB[indexB] : 0;
        if (vA < vB)
            return true;
        if (vA > vB)
            return false;
    }
    return false;
}
export function substractArrayIntToNew(arrayIntA, arrayIntB) {
    if (arrayIntA.sign !== arrayIntB.sign) {
        return addArrayIntToNew(arrayIntA, { sign: -arrayIntB.sign, data: arrayIntB.data });
    }
    var dataA = arrayIntA.data;
    var dataB = arrayIntB.data;
    if (isStrictlySmaller(dataA, dataB)) {
        var out = substractArrayIntToNew(arrayIntB, arrayIntA);
        out.sign = -out.sign;
        return out;
    }
    var data = [];
    var reminder = 0;
    for (var indexA = dataA.length - 1, indexB = dataB.length - 1; indexA >= 0 || indexB >= 0; --indexA, --indexB) {
        var vA = indexA >= 0 ? dataA[indexA] : 0;
        var vB = indexB >= 0 ? dataB[indexB] : 0;
        var current = vA - vB - reminder;
        data.push(current >>> 0);
        reminder = current < 0 ? 1 : 0;
    }
    return { sign: arrayIntA.sign, data: data.reverse() };
}
export function trimArrayIntInplace(arrayInt) {
    var data = arrayInt.data;
    var firstNonZero = 0;
    for (; firstNonZero !== data.length && data[firstNonZero] === 0; ++firstNonZero) { }
    if (firstNonZero === data.length) {
        arrayInt.sign = 1;
        arrayInt.data = [0];
        return arrayInt;
    }
    data.splice(0, firstNonZero);
    return arrayInt;
}
export function fromNumberToArrayInt64(out, n) {
    if (n < 0) {
        var posN = -n;
        out.sign = -1;
        out.data[0] = ~~(posN / 0x100000000);
        out.data[1] = posN >>> 0;
    }
    else {
        out.sign = 1;
        out.data[0] = ~~(n / 0x100000000);
        out.data[1] = n >>> 0;
    }
    return out;
}
export function substractArrayInt64(out, arrayIntA, arrayIntB) {
    var lowA = arrayIntA.data[1];
    var highA = arrayIntA.data[0];
    var signA = arrayIntA.sign;
    var lowB = arrayIntB.data[1];
    var highB = arrayIntB.data[0];
    var signB = arrayIntB.sign;
    out.sign = 1;
    if (signA === 1 && signB === -1) {
        var low_1 = lowA + lowB;
        var high = highA + highB + (low_1 > 0xffffffff ? 1 : 0);
        out.data[0] = high >>> 0;
        out.data[1] = low_1 >>> 0;
        return out;
    }
    var lowFirst = lowA;
    var highFirst = highA;
    var lowSecond = lowB;
    var highSecond = highB;
    if (signA === -1) {
        lowFirst = lowB;
        highFirst = highB;
        lowSecond = lowA;
        highSecond = highA;
    }
    var reminderLow = 0;
    var low = lowFirst - lowSecond;
    if (low < 0) {
        reminderLow = 1;
        low = low >>> 0;
    }
    out.data[0] = highFirst - highSecond - reminderLow;
    out.data[1] = low;
    return out;
}
