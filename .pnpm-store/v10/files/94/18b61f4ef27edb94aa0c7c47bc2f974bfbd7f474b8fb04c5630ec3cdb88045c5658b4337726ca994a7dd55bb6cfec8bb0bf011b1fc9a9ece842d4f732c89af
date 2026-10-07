import { createHash } from "crypto";
import { join } from "path";
import { getHomeDir } from "./getHomeDir";
export const getSSOTokenFilepath = (id) => {
    const hasher = createHash("sha1");
    const cacheName = hasher.update(id).digest("hex");
    return join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
};
