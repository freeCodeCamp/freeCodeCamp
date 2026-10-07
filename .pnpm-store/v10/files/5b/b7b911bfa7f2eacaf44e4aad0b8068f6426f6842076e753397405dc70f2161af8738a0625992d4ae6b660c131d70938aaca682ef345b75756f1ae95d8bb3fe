/// <reference types="node" />

declare module "ecdsa-sig-formatter" {
	/**
	 * Convert the ASN.1/DER encoded signature to a JOSE-style concatenated signature. Returns a base64 url encoded String.
	 *    If signature is a String, it should be base64 encoded
	 *    alg must be one of ES256, ES384 or ES512
	 */
	export function derToJose(signature: Buffer | string, alg: string): string;

	/**
	 * Convert the JOSE-style concatenated signature to an ASN.1/DER encoded signature. Returns a Buffer
	 *     If signature is a String, it should be base64 url encoded
	 *     alg must be one of ES256, ES384 or ES512
	 */
	export function joseToDer(signature: Buffer | string, alg: string): Buffer
}
