export default function absFloor (number) {
    if (number < 0) {
        return Math.ceil(number);
    } else {
        return Math.floor(number);
    }
}
