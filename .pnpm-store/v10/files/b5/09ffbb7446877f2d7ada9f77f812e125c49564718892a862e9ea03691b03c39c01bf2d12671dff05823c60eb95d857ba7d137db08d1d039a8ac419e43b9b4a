import { getSSOTokenFilepath } from "@smithy/shared-ini-file-loader";
import { promises as fsPromises } from "fs";
const { writeFile } = fsPromises;
export const writeSSOTokenToFile = (id, ssoToken) => {
    const tokenFilepath = getSSOTokenFilepath(id);
    const tokenString = JSON.stringify(ssoToken, null, 2);
    return writeFile(tokenFilepath, tokenString);
};
