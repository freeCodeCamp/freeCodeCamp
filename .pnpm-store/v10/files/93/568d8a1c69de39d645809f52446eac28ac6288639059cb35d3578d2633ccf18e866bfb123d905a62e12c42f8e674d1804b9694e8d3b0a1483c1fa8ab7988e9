import { IGatsbyState, IGatsbyPage } from "../redux/types";
interface IGatsbyPageComponent {
    componentPath: string;
    componentChunkName: string;
    hasHeadComponent: boolean;
}
export declare const resetLastHash: () => void;
export declare const getComponents: (pages: Array<IGatsbyPage>, slices: IGatsbyState["slices"], components: IGatsbyState["components"]) => Array<IGatsbyPageComponent>;
export declare const writeAll: (state: IGatsbyState) => Promise<boolean>;
export declare const startListener: () => void;
export {};
