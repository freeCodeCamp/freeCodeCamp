import * as Either from "../../Either.js"
import type * as Encoding from "../../Encoding.js"
import * as Base64 from "./base64.js"
import { DecodeException } from "./common.js"

/** @internal */
export const encode = (data: Uint8Array) =>
  Base64.encode(data).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")

/** @internal */
export const decode = (str: string): Either.Either<Uint8Array, Encoding.DecodeException> => {
  const stripped = Base64.stripCrlf(str)
  const length = stripped.length
  if (length % 4 === 1) {
    return Either.left(
      DecodeException(stripped, `Length should be a multiple of 4, but is ${length}`)
    )
  }

  if (!/^[-_A-Z0-9]*?={0,2}$/i.test(stripped)) {
    return Either.left(DecodeException(stripped, "Invalid input"))
  }

  // Some variants allow or require omitting the padding '=' signs
  let sanitized = length % 4 === 2 ? `${stripped}==` : length % 4 === 3 ? `${stripped}=` : stripped
  sanitized = sanitized.replace(/-/g, "+").replace(/_/g, "/")

  return Base64.decode(sanitized)
}
