import Configstore from "configstore";
let config;
/**
 * Gets the configstore instance related to gatsby
 * @return the ConfigStore instance for gatsby
 */

export const getConfigStore = () => {
  if (!config) {
    config = new Configstore(`gatsby`, {}, {
      globalConfigPath: true
    });
  }
  return config;
};