export default function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
}
