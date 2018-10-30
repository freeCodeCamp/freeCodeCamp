export default function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}
