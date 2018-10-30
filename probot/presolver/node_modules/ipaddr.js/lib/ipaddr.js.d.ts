

declare module "ipaddr.js" {

    type IPv4Range = 'unspecified' | 'broadcast' | 'multicast' | 'linkLocal' | 'loopback' | 'carrierGradeNat' | 'private' | 'reserved';
    type IPv6Range = 'unspecified' | 'linkLocal' | 'multicast' | 'loopback' | 'uniqueLocal' | 'ipv4Mapped' | 'rfc6145' | 'rfc6052' | '6to4' | 'teredo' | 'reserved';

    interface RangeList<T> {
        [name: string]: [T, number] | [T, number][];
    }


    // Common methods/properties for IPv4 and IPv6 classes.
    class IP {

        prefixLengthFromSubnetMask(): number | false;
        toByteArray(): number[];
        toNormalizedString(): string;
        toString(): string;
    }

    namespace Address {

        export function isValid(addr: string): boolean;
        export function fromByteArray(bytes: number[]): IPv4 | IPv6;
        export function parse(addr: string): IPv4 | IPv6;
        export function parseCIDR(mask: string): [IPv4 | IPv6, number];
        export function process(address: string): IPv4 | IPv6;
        export function subnetMatch(addr: IPv4, rangeList: RangeList<IPv4>, defaultName?: string): string;
        export function subnetMatch(addr: IPv6, rangeList: RangeList<IPv6>, defaultName?: string): string;

        export class IPv4 extends IP {
            static broadcastAddressFromCIDR(addr: string): IPv4;
            static isIPv4(addr: string): boolean;
            static isValidFourPartDecimal(addr: string): boolean;
            static isValid(addr: string): boolean;
            static networkAddressFromCIDR(addr: string): IPv4;
            static parse(addr: string): IPv4;
            static parseCIDR(addr: string): [IPv4, number];
            static subnetMaskFromPrefixLength(prefix: number): IPv4;
            constructor(octets: number[]);

            kind(): 'ipv4';
            match(addr: IPv4, bits: number): boolean;
            match(mask: [IPv4, number]): boolean;
            range(): IPv4Range;
            subnetMatch(rangeList: RangeList<IPv4>, defaultName?: string): string;
            toIPv4MappedAddress(): IPv6;
        }

        export class IPv6 extends IP {
            static broadcastAddressFromCIDR(addr: string): IPv6;
            static isIPv6(addr: string): boolean;
            static isValid(addr: string): boolean;
            static parse(addr: string): IPv6;
            static parseCIDR(addr: string): [IPv6, number];
            static subnetMaskFromPrefixLength(prefix: number): IPv6;
            constructor(octets: number[]);

            isIPv4MappedAddress(): boolean;
            kind(): 'ipv6';
            match(addr: IPv6, bits: number): boolean;
            match(mask: [IPv6, number]): boolean;
            range(): IPv6Range;
            subnetMatch(rangeList: RangeList<IPv6>, defaultName?: string): string;
            toIPv4Address(): IPv4;
        }
    }

    export = Address;
}
