declare module "ipaddr.js" {
    type IPvXRangeDefaults = 'unicast' | 'unspecified' | 'multicast' | 'linkLocal' | 'loopback' | 'reserved' | 'benchmarking' | 'amt';
    type IPv4Range = IPvXRangeDefaults | 'broadcast' | 'carrierGradeNat' | 'private' | 'as112';
    type IPv6Range = IPvXRangeDefaults | 'uniqueLocal' | 'ipv4Mapped' | 'rfc6145' | 'rfc6052' | '6to4' | 'teredo' | 'as112v6' | 'orchid2' | 'droneRemoteIdProtocolEntityTags';

    interface RangeList<T> {
        [name: string]: [T, number] | [T, number][];
    }

    // Common methods/properties for IPv4 and IPv6 classes.
    class IP {
        prefixLengthFromSubnetMask(): number | null;
        toByteArray(): number[];
        toNormalizedString(): string;
        toString(): string;
    }

    namespace Address {
        export function fromByteArray(bytes: number[]): IPv4 | IPv6;
        export function isValid(addr: string): boolean;
        export function isValidCIDR(addr: string): boolean;
        export function parse(addr: string): IPv4 | IPv6;
        export function parseCIDR(mask: string): [IPv4 | IPv6, number];
        export function process(addr: string): IPv4 | IPv6;
        export function subnetMatch(addr: IPv4 | IPv6, rangeList: RangeList<IPv4 | IPv6>, defaultName?: string): string;

        export class IPv4 extends IP {
            static broadcastAddressFromCIDR(addr: string): IPv4;
            static isIPv4(addr: string): boolean;
            static isValid(addr: string): boolean;
            static isValidCIDR(addr: string): boolean;
            static isValidFourPartDecimal(addr: string): boolean;
            static isValidCIDRFourPartDecimal(addr: string): boolean;
            static networkAddressFromCIDR(addr: string): IPv4;
            static parse(addr: string): IPv4;
            static parseCIDR(addr: string): [IPv4, number];
            static subnetMaskFromPrefixLength(prefix: number): IPv4;
            constructor(octets: number[]);
            octets: number[]

            kind(): 'ipv4';
            match(what: IPv4 | IPv6 | [IPv4 | IPv6, number], bits?: number): boolean;
            range(): IPv4Range;
            subnetMatch(rangeList: RangeList<IPv4>, defaultName?: string): string;
            toIPv4MappedAddress(): IPv6;
        }

        export class IPv6 extends IP {
            static broadcastAddressFromCIDR(addr: string): IPv6;
            static isIPv6(addr: string): boolean;
            static isValid(addr: string): boolean;
            static isValidCIDR(addr: string): boolean;
            static networkAddressFromCIDR(addr: string): IPv6;
            static parse(addr: string): IPv6;
            static parseCIDR(addr: string): [IPv6, number];
            static subnetMaskFromPrefixLength(prefix: number): IPv6;
            constructor(parts: number[]);
            parts: number[]
            zoneId?: string

            isIPv4MappedAddress(): boolean;
            kind(): 'ipv6';
            match(what: IPv4 | IPv6 | [IPv4 | IPv6, number], bits?: number): boolean;
            range(): IPv6Range;
            subnetMatch(rangeList: RangeList<IPv6>, defaultName?: string): string;
            toIPv4Address(): IPv4;
            toRFC5952String(): string;
        }
    }

    export = Address;
}
