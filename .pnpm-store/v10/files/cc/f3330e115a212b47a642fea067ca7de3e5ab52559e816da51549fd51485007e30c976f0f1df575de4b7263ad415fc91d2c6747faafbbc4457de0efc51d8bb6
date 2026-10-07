import { join } from "path";
import { getHomeDir } from "./getHomeDir";
export const ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
export const getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || join(getHomeDir(), ".aws", "credentials");
