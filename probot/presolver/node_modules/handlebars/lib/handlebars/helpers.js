import registerBlockHelperMissing from './helpers/block-helper-missing';
import registerEach from './helpers/each';
import registerHelperMissing from './helpers/helper-missing';
import registerIf from './helpers/if';
import registerLog from './helpers/log';
import registerLookup from './helpers/lookup';
import registerWith from './helpers/with';

export function registerDefaultHelpers(instance) {
  registerBlockHelperMissing(instance);
  registerEach(instance);
  registerHelperMissing(instance);
  registerIf(instance);
  registerLog(instance);
  registerLookup(instance);
  registerWith(instance);
}
