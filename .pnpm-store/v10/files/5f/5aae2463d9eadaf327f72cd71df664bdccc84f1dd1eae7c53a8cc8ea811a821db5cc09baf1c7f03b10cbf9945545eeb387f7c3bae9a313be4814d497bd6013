export = address;

declare interface Address {
  ip: string;
  ipv6: string;
  mac: string;
}

declare type AddressCallback = (err: Error, addr: Address) => void;
declare type MacCallback = (err: Error, addr: string) => void;
declare type DnsCallback = (err: Error, servers: string[]) => void;

declare function address(interfaceName: string, callback: AddressCallback): void;
declare function address(callback: AddressCallback): void;

declare namespace address {
  const MAC_IP_RE: RegExp;
  const MAC_RE: RegExp;

  function dns(filepath: string, callback: DnsCallback): void;
  function dns(callback: DnsCallback): void;

  function ip(interfaceName?: string): any;
  function ipv6(interfaceName?: string): any;

  function mac(interfaceName: string, callback: MacCallback): void;
  function mac(callback: MacCallback): void;
}
