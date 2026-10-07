import { IGroupedQueryIds } from "../../../services";
import { IAddPendingPageDataWriteAction, ICreatePageDependencyAction, IPageQueryRunAction, IQueryStartAction } from "../../../redux/types";
export declare function setComponents(): void;
export declare function saveQueriesDependencies(): Promise<void>;
type ActionsToReplay = Array<IQueryStartAction | IPageQueryRunAction | IAddPendingPageDataWriteAction | ICreatePageDependencyAction>;
export declare function runQueries(queryIds: IGroupedQueryIds): Promise<ActionsToReplay>;
export {};
