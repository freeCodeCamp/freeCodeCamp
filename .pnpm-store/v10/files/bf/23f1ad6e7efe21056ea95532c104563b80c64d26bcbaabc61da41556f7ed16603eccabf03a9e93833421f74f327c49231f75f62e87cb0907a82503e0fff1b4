"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oldVisit = void 0;
const graphql_1 = require("graphql");
function oldVisit(root, { enter: enterVisitors, leave: leaveVisitors, ...newVisitor }) {
    if (typeof enterVisitors === 'object') {
        for (const key in enterVisitors) {
            newVisitor[key] = newVisitor[key] || {};
            newVisitor[key].enter = enterVisitors[key];
        }
    }
    if (typeof leaveVisitors === 'object') {
        for (const key in leaveVisitors) {
            newVisitor[key] = newVisitor[key] || {};
            newVisitor[key].leave = leaveVisitors[key];
        }
    }
    return (0, graphql_1.visit)(root, newVisitor);
}
exports.oldVisit = oldVisit;
