
switch(true) {
    case /bool|tiny/.test(type):
        type = "boolean";
        break;
    case /float|double|numeric/.test(type):
        type = "float";
        break;
    default:
        type = "auto";
}