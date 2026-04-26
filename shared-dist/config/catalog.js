"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalog = void 0;
const curriculum_1 = require("./curriculum");
var Levels;
(function (Levels) {
    Levels["Beginner"] = "beginner";
    Levels["Intermediate"] = "intermediate";
    Levels["Advanced"] = "advanced";
})(Levels || (Levels = {}));
exports.catalog = [
    {
        superBlock: curriculum_1.SuperBlocks.BasicHtml,
        level: Levels.Beginner,
        hours: 2
    },
    {
        superBlock: curriculum_1.SuperBlocks.SemanticHtml,
        level: Levels.Beginner,
        hours: 2
    }
];
