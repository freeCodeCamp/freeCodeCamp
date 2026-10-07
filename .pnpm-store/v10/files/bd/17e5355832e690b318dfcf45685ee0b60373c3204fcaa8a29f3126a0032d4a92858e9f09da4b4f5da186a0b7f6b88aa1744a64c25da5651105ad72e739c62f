import { ASTNode, visit } from 'graphql';
declare type VisitFn = typeof visit;
declare type NewVisitor = Partial<Parameters<VisitFn>[1]>;
declare type OldVisitor = {
    enter?: Partial<Record<keyof NewVisitor, NonNullable<NewVisitor[keyof NewVisitor]>['enter']>>;
    leave?: Partial<Record<keyof NewVisitor, NonNullable<NewVisitor[keyof NewVisitor]>['leave']>>;
} & NewVisitor;
export declare function oldVisit(root: ASTNode, { enter: enterVisitors, leave: leaveVisitors, ...newVisitor }: OldVisitor): any;
export {};
