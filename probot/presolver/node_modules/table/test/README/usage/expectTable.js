import {
  expect
} from 'chai';
import _ from 'lodash';

/**
 * @param {string} result
 * @param {string} expectedResult
 * @returns {undefined}
 */
export default (result, expectedResult) => {
  expect(result).to.equal(_.trim(expectedResult) + '\n');
};
