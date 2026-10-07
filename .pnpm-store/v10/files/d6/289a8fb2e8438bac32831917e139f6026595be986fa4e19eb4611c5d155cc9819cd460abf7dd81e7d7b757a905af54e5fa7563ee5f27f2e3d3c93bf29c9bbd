declare var hash: Hash;

declare module "hash.js" {
    export = hash;
}

interface BlockHash<T> {
    hmacStrength: number
    padLength: number
    endian: 'big' | 'little'
}

interface MessageDigest<T> {
    blockSize: number
    outSize: number
    update(msg: any, enc?: 'hex'): T
    digest(): number[]
    digest(enc: 'hex'): string
}

interface Hash {
    hmac: HmacConstructor
    ripemd: RipemdSet
    ripemd160: Ripemd160Constructor
    sha: ShaSet
    sha1: Sha1Constructor
    sha224: Sha224Constructor
    sha256: Sha256Constructor
    sha384: Sha384Constructor
    sha512: Sha512Constructor
    utils: Utils
}

interface Utils {
    toArray(msg: any, enc: 'hex'): Array<number>
    toHex(msg: any): string
}

interface RipemdSet {
    ripemd160: Ripemd160Constructor
}

interface ShaSet {
    sha1: Sha1Constructor
    sha224: Sha224Constructor
    sha256: Sha256Constructor
    sha384: Sha384Constructor
    sha512: Sha512Constructor
}

interface HmacConstructor { (hash: BlockHash<any>, key: any, enc?: 'hex'): Hmac }
interface Ripemd160Constructor { (): Ripemd160 }
interface Sha1Constructor { (): Sha1; }
interface Sha224Constructor { (): Sha224; }
interface Sha256Constructor { (): Sha256; }
interface Sha384Constructor { (): Sha384; }
interface Sha512Constructor { (): Sha512; }

interface Hmac extends MessageDigest<Hmac> {
    blockSize: 512
    outSize: 160
}

interface Ripemd160 extends BlockHash<Ripemd160>, MessageDigest<Ripemd160> {
    blockSize: 512
    hmacStrength: 192
    outSize: 160
    padLength: 64
    endian: 'little'
}

interface Sha1 extends BlockHash<Sha1>, MessageDigest<Sha1> {
    blockSize: 512
    hmacStrength: 80
    outSize: 160
    padLength: 64
    endian: 'big'
}
interface Sha224 extends BlockHash<Sha224>, MessageDigest<Sha224> {
    blockSize: 512
    hmacStrength: 192
    outSize: 224
    padLength: 64
    endian: 'big'
}
interface Sha256 extends BlockHash<Sha256>, MessageDigest<Sha256> {
    blockSize: 512
    hmacStrength: 192
    outSize: 256
    padLength: 64
    endian: 'big'
}
interface Sha384 extends BlockHash<Sha384>, MessageDigest<Sha384> {
    blockSize: 1024
    hmacStrength: 192
    outSize: 384
    padLength: 128
    endian: 'big'
}
interface Sha512 extends BlockHash<Sha512>, MessageDigest<Sha512> {
    blockSize: 1024
    hmacStrength: 192
    outSize: 512
    padLength: 128
    endian: 'big'
}
