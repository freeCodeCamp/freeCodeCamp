import React from "react";
import { IGatsbyCLIState, ILog } from "../../redux/types";
interface ICLIProps {
    logs: IGatsbyCLIState;
    messages: Array<ILog>;
    showStatusBar: boolean;
    showTrees: boolean;
}
interface ICLIState {
    hasError: boolean;
    error?: Error;
}
declare class CLI extends React.Component<ICLIProps, ICLIState> {
    readonly state: ICLIState;
    memoizedReactElementsForMessages: Array<React.ReactElement>;
    componentDidCatch(): void;
    static getDerivedStateFromError(error: Error): ICLIState;
    render(): React.ReactElement;
}
export default CLI;
