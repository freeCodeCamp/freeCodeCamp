"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeChildren(children) {
    if (Array.isArray(children)) {
        return children;
    }
    else if (typeof children === "function") {
        const res = children();
        return normalizeChildren(res);
    }
    else if (typeof children === "undefined") {
        return [];
    }
    else {
        return [children];
    }
}
const valueNode = (type, value) => ({
    type,
    value
});
const nodeWithChildren = (type, kids) => ({
    type,
    children: normalizeChildren(kids)
});
exports.text = (value) => valueNode("text", value);
exports.inlineCode = (value) => valueNode("inlineCode", value);
exports.html = (value) => valueNode("html", value);
exports.strong = (kids) => nodeWithChildren("strong", kids);
exports.emphasis = (kids) => nodeWithChildren("emphasis", kids);
exports.strike = (kids) => nodeWithChildren("delete", kids);
exports.tableCell = (kids) => nodeWithChildren("tableCell", kids);
exports.tableRow = (kids) => nodeWithChildren("tableRow", kids);
exports.table = (align, kids) => (Object.assign({}, nodeWithChildren("table", kids), { align }));
exports.brk = Object.freeze({ type: "break" });
exports.separator = exports.text("---");
exports.link = (url, title = "", kids) => (Object.assign({}, nodeWithChildren("link", kids), { url,
    title }));
exports.root = (kids) => nodeWithChildren("root", kids);
exports.rootWithTitle = (depth, title, kids) => {
    return exports.root([exports.heading(depth, title), ...normalizeChildren(kids)]);
};
exports.paragraph = (kids) => nodeWithChildren("paragraph", kids);
exports.image = (url, title, alt, kids) => (Object.assign({}, nodeWithChildren("image", kids), { url, title, alt }));
exports.blockquote = (kids) => nodeWithChildren("blockquote", kids);
exports.code = (lang, value) => (Object.assign({}, valueNode("code", value), { lang }));
exports.heading = (depth, kids) => {
    if (depth < 1)
        throw new Error(`Invalid depth: ${depth}`);
    return Object.assign({}, nodeWithChildren("heading", kids), { depth });
};
exports.list = (ordered, kids) => (Object.assign({}, nodeWithChildren("list", kids), { ordered: ordered === "ordered" }));
exports.listItem = (kids) => nodeWithChildren("listItem", kids);
//# sourceMappingURL=index.js.map