type SubtleCryptoMethod =
  | "decrypt"
  | "digest"
  | "encrypt"
  | "exportKey"
  | "generateKey"
  | "importKey"
  | "sign"
  | "verify";

const subtleCryptoMethods: Array<SubtleCryptoMethod> = [
  "decrypt",
  "digest",
  "encrypt",
  "exportKey",
  "generateKey",
  "importKey",
  "sign",
  "verify"
];

export function supportsWebCrypto(window: Window): boolean {
  if (
    supportsSecureRandom(window) &&
    typeof window.crypto.subtle === "object"
  ) {
    const { subtle } = window.crypto;

    return supportsSubtleCrypto(subtle);
  }

  return false;
}

export function supportsSecureRandom(window: Window): boolean {
  if (typeof window === "object" && typeof window.crypto === "object") {
    const { getRandomValues } = window.crypto;

    return typeof getRandomValues === "function";
  }

  return false;
}

export function supportsSubtleCrypto(subtle: SubtleCrypto) {
  return (
    subtle &&
    subtleCryptoMethods.every(
      methodName => typeof subtle[methodName] === "function"
    )
  );
}

export async function supportsZeroByteGCM(subtle: SubtleCrypto) {
  if (!supportsSubtleCrypto(subtle)) return false;
  try {
    const key = await subtle.generateKey(
      { name: "AES-GCM", length: 128 },
      false,
      ["encrypt"]
    );
    const zeroByteAuthTag = await subtle.encrypt(
      {
        name: "AES-GCM",
        iv: new Uint8Array(Array(12)),
        additionalData: new Uint8Array(Array(16)),
        tagLength: 128
      },
      key,
      new Uint8Array(0)
    );
    return zeroByteAuthTag.byteLength === 16;
  } catch {
    return false;
  }
}
