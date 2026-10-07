import * as ts from 'typescript';
import type { TypeOrValueSpecifier } from './TypeOrValueSpecifier';
export interface ReadonlynessOptions {
    readonly allow?: TypeOrValueSpecifier[];
    readonly treatMethodsAsReadonly?: boolean;
}
export declare const readonlynessOptionsSchema: {
    additionalProperties: false;
    properties: {
        allow: {
            readonly items: {
                readonly oneOf: [{
                    readonly type: 'string';
                }, {
                    readonly additionalProperties: false;
                    readonly properties: {
                        readonly from: {
                            readonly enum: ["file"];
                            readonly type: 'string';
                        };
                        readonly name: {
                            readonly oneOf: [{
                                readonly type: 'string';
                            }, {
                                readonly items: {
                                    readonly type: 'string';
                                };
                                readonly minItems: 1;
                                readonly type: 'array';
                                readonly uniqueItems: true;
                            }];
                        };
                        readonly path: {
                            readonly type: 'string';
                        };
                    };
                    readonly required: ["from", "name"];
                    readonly type: 'object';
                }, {
                    readonly additionalProperties: false;
                    readonly properties: {
                        readonly from: {
                            readonly enum: ["lib"];
                            readonly type: 'string';
                        };
                        readonly name: {
                            readonly oneOf: [{
                                readonly type: 'string';
                            }, {
                                readonly items: {
                                    readonly type: 'string';
                                };
                                readonly minItems: 1;
                                readonly type: 'array';
                                readonly uniqueItems: true;
                            }];
                        };
                    };
                    readonly required: ["from", "name"];
                    readonly type: 'object';
                }, {
                    readonly additionalProperties: false;
                    readonly properties: {
                        readonly from: {
                            readonly enum: ["package"];
                            readonly type: 'string';
                        };
                        readonly name: {
                            readonly oneOf: [{
                                readonly type: 'string';
                            }, {
                                readonly items: {
                                    readonly type: 'string';
                                };
                                readonly minItems: 1;
                                readonly type: 'array';
                                readonly uniqueItems: true;
                            }];
                        };
                        readonly package: {
                            readonly type: 'string';
                        };
                    };
                    readonly required: ["from", "name", "package"];
                    readonly type: 'object';
                }];
            };
            readonly type: 'array';
        };
        treatMethodsAsReadonly: {
            type: "boolean";
        };
    };
    type: "object";
};
export declare const readonlynessOptionsDefaults: ReadonlynessOptions;
/**
 * Checks if the given type is readonly
 */
export declare function isTypeReadonly(program: ts.Program, type: ts.Type, options?: ReadonlynessOptions): boolean;
