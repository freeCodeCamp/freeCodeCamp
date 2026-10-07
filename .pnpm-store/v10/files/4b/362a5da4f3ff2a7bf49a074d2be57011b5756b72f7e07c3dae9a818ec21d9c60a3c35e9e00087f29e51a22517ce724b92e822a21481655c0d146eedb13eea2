import { getConfigFilepath } from "./getConfigFilepath";
import { getSsoSessionData } from "./getSsoSessionData";
import { parseIni } from "./parseIni";
import { slurpFile } from "./slurpFile";
const swallowError = () => ({});
export const loadSsoSessionData = async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath())
    .then(parseIni)
    .then(getSsoSessionData)
    .catch(swallowError);
