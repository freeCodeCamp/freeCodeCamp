import { promises as fsPromises } from "fs";
import { getSSOTokenFilepath } from "./getSSOTokenFilepath";
const { readFile } = fsPromises;
export const getSSOTokenFromFile = async (id) => {
    const ssoTokenFilepath = getSSOTokenFilepath(id);
    const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
};
