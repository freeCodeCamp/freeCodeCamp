import { constantFrom } from '../../constantFrom.js';
import { nat } from '../../nat.js';
import { tuple } from '../../tuple.js';
import { natToStringifiedNatMapper, natToStringifiedNatUnmapper } from '../mappers/NatToStringifiedNat.js';
export function buildStringifiedNatArbitrary(maxValue) {
    return tuple(constantFrom('dec', 'oct', 'hex'), nat(maxValue)).map(natToStringifiedNatMapper, natToStringifiedNatUnmapper);
}
