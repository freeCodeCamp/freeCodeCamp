import { SEVERITY_ERROR, SEVERITY_WARNING } from '../constants.mjs';

/**
 * @import {Severity} from 'stylelint'
 *
 * @param {Severity} severity
 * @param {Record<Severity, number>} counts
 * @returns {void}
 */
export default function calcSeverityCounts(severity, counts) {
	switch (severity) {
		case SEVERITY_ERROR:
			counts.error += 1;
			break;
		case SEVERITY_WARNING:
			counts.warning += 1;
			break;
		default:
			throw new Error(`Unknown severity: "${severity}"`);
	}
}
