import { join } from "path";
import { getHomeDir } from "./getHomeDir";
export const ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
export const getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || join(getHomeDir(), ".aws", "config");
