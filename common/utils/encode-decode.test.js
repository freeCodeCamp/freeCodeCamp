import test from 'tape';
import {
  encodeScriptTags,
  decodeScriptTags,
  encodeFormAction,
  decodeFormAction,
  encodeFcc,
  decodeFcc
} from './encode-decode.js';

const scriptDecoded = `
  <script>console.log('foo')</script>
`;
const scriptEncoded = `
  fccssconsole.log('foo')fcces
`;
test('encodeScriptTags', t => {
  t.plan(1);
  t.equal(
    encodeScriptTags(scriptDecoded),
    scriptEncoded
  );
});

test('decodeScriptTags', t => {
  t.plan(1);
  t.equal(
    decodeScriptTags(scriptEncoded),
    scriptDecoded
  );
});

const formDecoded = `
  <form action ='path'>foo</form>
`;
const formEncoded = `
  <form fccfaa ='path'>foo</form>
`;

test('encodeFormAction', t => {
  t.plan(1);
  t.equal(
    encodeFormAction(formDecoded),
    formEncoded
  );
});

test('decodeFormAction', t => {
  t.plan(1);
  t.equal(
    decodeFormAction(formEncoded),
    formDecoded
  );
});

test('encodeFcc', t => {
  t.plan(1);
  t.equal(
    encodeFcc('//noprotect' + scriptDecoded + formDecoded),
    '//' + scriptEncoded + formEncoded
  );
});

test('decodeFcc', t => {
  t.plan(1);
  t.equal(
    decodeFcc(scriptEncoded + formEncoded),
    scriptDecoded + formDecoded
  );
});
