import { SuperBlocks } from './curriculum';
declare enum Levels {
    Beginner = "beginner",
    Intermediate = "intermediate",
    Advanced = "advanced"
}
interface Catalog {
    superBlock: SuperBlocks;
    level: Levels;
    hours: number;
}
export declare const catalog: Catalog[];
export {};
