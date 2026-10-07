// @flow
import util from 'util';

util.inspect.defaultOptions = { depth: 4 };

export default function serializeEffect(
  effect: mixed | Array<mixed>,
  effectKey: ?string,
): string {
  if (
    effect != null &&
    typeof effect === 'object' &&
    !Array.isArray(effect) &&
    effectKey &&
    effectKey in effect
  ) {
    return util.inspect(effect[effectKey]);
  }

  return util.inspect(effect);
}
