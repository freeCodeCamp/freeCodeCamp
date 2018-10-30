var Ajv = require('ajv');
var ajv = Ajv({allErrors: true});

var schema = {
  "properties": {
    "foo": { "type": "string" },
    "bar": { "type": "number", "maximum": 3 }
  }
};

var validate = ajv.compile(schema);

test({"foo": "abc", "bar": 2});
test({"foo": 2, "bar": 4});

function test(data) {
  var valid = validate(data);
  if (valid) console.log('Valid!');
  else console.log('Invalid: ' + ajv.errorsText(validate.errors));
}