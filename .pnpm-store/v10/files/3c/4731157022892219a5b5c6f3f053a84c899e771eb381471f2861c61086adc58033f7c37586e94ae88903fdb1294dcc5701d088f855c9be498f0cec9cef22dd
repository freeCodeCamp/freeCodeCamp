"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeypress = useKeypress;
const use_ref_ts_1 = require("./use-ref.js");
const use_effect_ts_1 = require("./use-effect.js");
const hook_engine_ts_1 = require("./hook-engine.js");
function useKeypress(userHandler) {
    const signal = (0, use_ref_ts_1.useRef)(userHandler);
    signal.current = userHandler;
    (0, use_effect_ts_1.useEffect)((rl) => {
        let ignore = false;
        const handler = (0, hook_engine_ts_1.withUpdates)((_input, event) => {
            if (ignore)
                return;
            void signal.current(event, rl);
        });
        rl.input.on('keypress', handler);
        return () => {
            ignore = true;
            rl.input.removeListener('keypress', handler);
        };
    }, []);
}
