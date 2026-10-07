export declare enum HostAddressType {
  AAAA = "AAAA",
  A = "A",
}
export interface HostAddress {
  addressType: HostAddressType;
  address: string;
  hostName: string;
  service?: string;
}
export interface HostResolverArguments {
  hostName: string;
  service?: string;
}
export interface HostResolver {
  resolveAddress(args: HostResolverArguments): Promise<HostAddress[]>;
  reportFailureOnAddress(addr: HostAddress): void;
  purgeCache(args?: HostResolverArguments): void;
}
