import { Linter } from "../index";

import { BestPractices } from "./best-practices";
import { Deprecated } from "./deprecated";
import { ECMAScript6 } from "./ecmascript-6";
import { NodeJSAndCommonJS } from "./node-commonjs";
import { PossibleErrors } from "./possible-errors";
import { StrictMode } from "./strict-mode";
import { StylisticIssues } from "./stylistic-issues";
import { Variables } from "./variables";

export interface ESLintRules
    extends Linter.RulesRecord,
        PossibleErrors,
        BestPractices,
        StrictMode,
        Variables,
        NodeJSAndCommonJS,
        StylisticIssues,
        ECMAScript6,
        Deprecated {}
