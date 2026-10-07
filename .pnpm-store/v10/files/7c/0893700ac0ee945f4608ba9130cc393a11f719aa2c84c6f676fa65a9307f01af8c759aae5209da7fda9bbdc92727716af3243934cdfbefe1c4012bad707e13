import { useState } from "./use-state.js";
import { useEffect } from "./use-effect.js";
import { makeTheme } from "./make-theme.js";
export function usePrefix({ status = 'idle', theme, }) {
    const [showLoader, setShowLoader] = useState(false);
    const [tick, setTick] = useState(0);
    const { prefix, spinner } = makeTheme(theme);
    useEffect(() => {
        if (status === 'loading') {
            let tickInterval;
            let inc = -1;
            // Delay displaying spinner by 300ms, to avoid flickering
            const delayTimeout = setTimeout(() => {
                setShowLoader(true);
                tickInterval = setInterval(() => {
                    inc = inc + 1;
                    setTick(inc % spinner.frames.length);
                }, spinner.interval);
            }, 300);
            return () => {
                clearTimeout(delayTimeout);
                clearInterval(tickInterval);
            };
        }
        else {
            setShowLoader(false);
        }
    }, [status]);
    if (showLoader) {
        return spinner.frames[tick];
    }
    // There's a delay before we show the loader. So we want to ignore `loading` here, and pass idle instead.
    const iconName = status === 'loading' ? 'idle' : status;
    return typeof prefix === 'string' ? prefix : (prefix[iconName] ?? prefix['idle']);
}
