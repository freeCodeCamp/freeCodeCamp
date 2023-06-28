import { customAlphabet } from 'nanoid';

const newId = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);
console.log(newId());
