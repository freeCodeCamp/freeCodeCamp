import { createPaginator } from "@smithy/core";
import { CognitoIdentityClient } from "../CognitoIdentityClient";
import { ListIdentityPoolsCommand, } from "../commands/ListIdentityPoolsCommand";
export const paginateListIdentityPools = createPaginator(CognitoIdentityClient, ListIdentityPoolsCommand, "NextToken", "NextToken", "MaxResults");
