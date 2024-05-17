import Ajv from 'ajv';
import secureSchema from 'ajv/lib/refs/json-schema-secure.json';

import * as schemas from './schemas';

// it's not strict, but that's okay - we're not using it to validate data
const ajv = new Ajv({ strictTypes: false });
const isSchemaSecure = ajv.compile(secureSchema);

// These schemas will fail the tests, so can only be checked by hand.
const ignoredSchemas = ['getSessionUser', 'getPublicProfile'];

describe('Schemas do not use obviously dangerous validation', () => {
  Object.entries(schemas)
    .filter(([schema]) => !ignoredSchemas.includes(schema))
    .forEach(([name, schema]) => {
      describe(`schema ${name}`, () => {
        if ('body' in schema) {
          test('body is secure', () => {
            expect(isSchemaSecure(schema.body)).toBeTruthy();
          });
        }

        if ('querystring' in schema) {
          test('querystring is secure', () => {
            expect(isSchemaSecure(schema.querystring)).toBeTruthy();
          });
        }

        test('should use querystring instead of query', () => {
          // if query is used then req.query is unknown, but if querystring is
          // used then req.query has the expected type
          expect('query' in schema).toBeFalsy();
        });

        if ('params' in schema) {
          test('params is secure', () => {
            expect(isSchemaSecure(schema.params)).toBeTruthy();
          });
        }

        if ('headers' in schema) {
          test('headers is secure', () => {
            expect(isSchemaSecure(schema.headers)).toBeTruthy();
          });
        }

        if ('response' in schema) {
          Object.entries(schema.response).forEach(([code, codeSchema]) => {
            test(`response ${code} is secure`, () => {
              expect(isSchemaSecure(codeSchema)).toBeTruthy();
            });
          });
        }
      });
    });
});
