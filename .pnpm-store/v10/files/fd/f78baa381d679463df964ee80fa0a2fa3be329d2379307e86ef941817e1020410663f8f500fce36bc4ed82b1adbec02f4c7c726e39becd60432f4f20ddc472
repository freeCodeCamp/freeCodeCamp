import { Sha256 as Ie11Sha256 } from "./ie11Sha256";
import { Sha256 as WebCryptoSha256 } from "./webCryptoSha256";
import { Sha256 as JsSha256 } from "@aws-crypto/sha256-js";
import { Checksum, SourceData } from "@aws-sdk/types";
import { supportsWebCrypto } from "@aws-crypto/supports-web-crypto";
import { isMsWindow } from "@aws-crypto/ie11-detection";
import { locateWindow } from "@aws-sdk/util-locate-window";
import { convertToBuffer } from "@aws-crypto/util";

export class Sha256 implements Checksum {
  private hash: Checksum;

  constructor(secret?: SourceData) {
    if (supportsWebCrypto(locateWindow())) {
      this.hash = new WebCryptoSha256(secret);
    } else if (isMsWindow(locateWindow())) {
      this.hash = new Ie11Sha256(secret);
    } else {
      this.hash = new JsSha256(secret);
    }
  }

  update(data: SourceData, encoding?: "utf8" | "ascii" | "latin1"): void {
    this.hash.update(convertToBuffer(data));
  }

  digest(): Promise<Uint8Array> {
    return this.hash.digest();
  }

  reset(): void {
    this.hash.reset();
  }
}
