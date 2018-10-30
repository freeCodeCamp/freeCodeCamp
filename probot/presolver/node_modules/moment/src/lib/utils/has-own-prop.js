export default function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
