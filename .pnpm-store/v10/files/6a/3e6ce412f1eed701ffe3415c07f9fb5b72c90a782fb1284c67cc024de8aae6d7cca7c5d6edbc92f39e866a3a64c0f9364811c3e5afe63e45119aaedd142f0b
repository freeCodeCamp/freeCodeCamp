import { Pluggable } from "@smithy/types";
import {
  DefaultCredentialProvider,
  RoleAssumer,
  RoleAssumerWithWebIdentity,
  STSRoleAssumerOptions,
} from "./defaultStsRoleAssumers";
import { ServiceInputTypes, ServiceOutputTypes } from "./STSClient";
export declare const getDefaultRoleAssumer: (
  stsOptions?: STSRoleAssumerOptions,
  stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[]
) => RoleAssumer;
export declare const getDefaultRoleAssumerWithWebIdentity: (
  stsOptions?: STSRoleAssumerOptions,
  stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[]
) => RoleAssumerWithWebIdentity;
export declare const decorateDefaultCredentialProvider: (
  provider: DefaultCredentialProvider
) => DefaultCredentialProvider;
