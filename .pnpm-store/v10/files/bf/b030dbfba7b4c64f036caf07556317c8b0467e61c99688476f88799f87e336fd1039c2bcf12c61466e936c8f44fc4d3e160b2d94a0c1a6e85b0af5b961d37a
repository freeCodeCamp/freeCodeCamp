import { Disposable } from '../../../base/common/lifecycle.js';
import { deepClone } from '../../../base/common/objects.js';
import { ConfigurationModel } from './configurationModels.js';
import { Extensions } from './configurationRegistry.js';
import { Registry } from '../../registry/common/platform.js';

class DefaultConfiguration extends Disposable {
    get configurationModel() {
        return this._configurationModel;
    }
    constructor(logService) {
        super();
        this.logService = logService;
        this._configurationModel = ConfigurationModel.createEmptyModel(logService);
    }
    reload() {
        this.resetConfigurationModel();
        return this.configurationModel;
    }
    getConfigurationDefaultOverrides() {
        return {};
    }
    resetConfigurationModel() {
        this._configurationModel = ConfigurationModel.createEmptyModel(this.logService);
        const properties = Registry.as(Extensions.Configuration).getConfigurationProperties();
        this.updateConfigurationModel(Object.keys(properties), properties);
    }
    updateConfigurationModel(properties, configurationProperties) {
        const configurationDefaultsOverrides = this.getConfigurationDefaultOverrides();
        for (const key of properties) {
            const defaultOverrideValue = configurationDefaultsOverrides[key];
            const propertySchema = configurationProperties[key];
            if (defaultOverrideValue !== undefined) {
                this._configurationModel.setValue(key, defaultOverrideValue);
            }
            else if (propertySchema) {
                this._configurationModel.setValue(key, deepClone(propertySchema.default));
            }
            else {
                this._configurationModel.removeValue(key);
            }
        }
    }
}

export { DefaultConfiguration };
