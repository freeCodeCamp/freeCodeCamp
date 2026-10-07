import * as crypto from 'crypto';

type AES256Callback = (key: Buffer, iv: Buffer, input: Buffer, output: Buffer) => number | Error;

export function makeAES256Hook(
  method: 'createCipheriv' | 'createDecipheriv',
  mode: 'aes-256-cbc' | 'aes-256-ctr'
): AES256Callback {
  return function (key: Buffer, iv: Buffer, input: Buffer, output: Buffer): number | Error {
    let result;

    try {
      const cipher = crypto[method](mode, key, iv);
      cipher.setAutoPadding(false);
      result = cipher.update(input);
      const final = cipher.final();
      if (final.length > 0) {
        result = Buffer.concat([result, final]);
      }
    } catch (e) {
      return e;
    }

    result.copy(output);
    return result.length;
  };
}

export function randomHook(buffer: Buffer, count: number): number | Error {
  try {
    crypto.randomFillSync(buffer, 0, count);
  } catch (e) {
    return e;
  }
  return count;
}

export function sha256Hook(input: Buffer, output: Buffer): number | Error {
  let result;
  try {
    result = crypto.createHash('sha256').update(input).digest();
  } catch (e) {
    return e;
  }

  result.copy(output);
  return result.length;
}

type HMACHook = (key: Buffer, input: Buffer, output: Buffer) => number | Error;
export function makeHmacHook(algorithm: 'sha512' | 'sha256'): HMACHook {
  return (key: Buffer, input: Buffer, output: Buffer): number | Error => {
    let result;
    try {
      result = crypto.createHmac(algorithm, key).update(input).digest();
    } catch (e) {
      return e;
    }

    result.copy(output);
    return result.length;
  };
}

export function signRsaSha256Hook(key: Buffer, input: Buffer, output: Buffer): number | Error {
  let result;
  try {
    const signer = crypto.createSign('sha256WithRSAEncryption');
    const privateKey = Buffer.from(
      `-----BEGIN PRIVATE KEY-----\n${key.toString('base64')}\n-----END PRIVATE KEY-----\n`
    );

    result = signer.update(input).end().sign(privateKey);
  } catch (e) {
    return e;
  }

  result.copy(output);
  return result.length;
}

export const aes256CbcEncryptHook = makeAES256Hook('createCipheriv', 'aes-256-cbc');
export const aes256CbcDecryptHook = makeAES256Hook('createDecipheriv', 'aes-256-cbc');
export const aes256CtrEncryptHook = makeAES256Hook('createCipheriv', 'aes-256-ctr');
export const aes256CtrDecryptHook = makeAES256Hook('createDecipheriv', 'aes-256-ctr');
export const hmacSha512Hook = makeHmacHook('sha512');
export const hmacSha256Hook = makeHmacHook('sha256');
