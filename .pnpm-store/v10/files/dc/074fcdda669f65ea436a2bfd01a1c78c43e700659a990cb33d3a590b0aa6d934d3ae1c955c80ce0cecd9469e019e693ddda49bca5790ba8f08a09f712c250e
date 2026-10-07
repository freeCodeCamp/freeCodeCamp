import { createPaginator } from "@smithy/core";
import { ListAccountsCommand, } from "../commands/ListAccountsCommand";
import { SSOClient } from "../SSOClient";
export const paginateListAccounts = createPaginator(SSOClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");
