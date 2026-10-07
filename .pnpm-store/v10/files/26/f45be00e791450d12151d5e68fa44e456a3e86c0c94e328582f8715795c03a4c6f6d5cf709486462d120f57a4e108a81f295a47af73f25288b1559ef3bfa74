import { createPaginator } from "@smithy/core";
import { ListAccountRolesCommand, } from "../commands/ListAccountRolesCommand";
import { SSOClient } from "../SSOClient";
export const paginateListAccountRoles = createPaginator(SSOClient, ListAccountRolesCommand, "nextToken", "nextToken", "maxResults");
