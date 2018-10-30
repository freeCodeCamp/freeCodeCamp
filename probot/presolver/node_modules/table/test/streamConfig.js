import {
    expect
} from 'chai';
import configSamples from './streamConfigSamples';
import validateConfig from '../dist/validateStreamConfig';
import configSchema from '../src/schemas/streamConfig.json';
import Ajv from 'ajv';
import ajvKeywords from 'ajv-keywords';

describe('streamConfig.json schema', () => {
  var validate;

  before(() => {
    var ajv = new Ajv({allErrors: true});
    ajvKeywords(ajv, 'typeof');
    validate = ajv.compile(configSchema);
  });

  it('should pass validation of valid streamConfig samples', () => {
    configSamples.valid.forEach((sample, i) => {
      testValid(sample, validate);
      testValid(sample, validateConfig);
    });

    function testValid(sample, validate) {
      var valid = validate(sample);
      if (!valid) console.log(validate.errors);
      expect(valid).to.equal(true);
    }
  });

  it('should fail validation of invalid streamConfig samples', () => {
    configSamples.invalid.forEach((sample, i) => {
      testInvalid(sample, validate);
      testInvalid(sample, validateConfig);
    });

    function testInvalid(sample, validate) {
      var valid = validate(sample);
      expect(valid).to.equal(false);
    }
  });
});
