/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { Duplex } from 'stream';
import { Socket, SocketConnectOpts } from 'net';
declare const DEFAULT_TIMEOUT = 30000;
type SocksProxyType = 4 | 5;
declare const ERRORS: {
    InvalidSocksCommand: string;
    InvalidSocksCommandForOperation: string;
    InvalidSocksCommandChain: string;
    InvalidSocksClientOptionsDestination: string;
    InvalidSocksClientOptionsExistingSocket: string;
    InvalidSocksClientOptionsProxy: string;
    InvalidSocksClientOptionsTimeout: string;
    InvalidSocksClientOptionsProxiesLength: string;
    InvalidSocksClientOptionsCustomAuthRange: string;
    InvalidSocksClientOptionsCustomAuthOptions: string;
    NegotiationError: string;
    SocketClosed: string;
    ProxyConnectionTimedOut: string;
    InternalError: string;
    InvalidSocks4HandshakeResponse: string;
    Socks4ProxyRejectedConnection: string;
    InvalidSocks4IncomingConnectionResponse: string;
    Socks4ProxyRejectedIncomingBoundConnection: string;
    InvalidSocks5InitialHandshakeResponse: string;
    InvalidSocks5IntiailHandshakeSocksVersion: string;
    InvalidSocks5InitialHandshakeNoAcceptedAuthType: string;
    InvalidSocks5InitialHandshakeUnknownAuthType: string;
    Socks5AuthenticationFailed: string;
    InvalidSocks5FinalHandshake: string;
    InvalidSocks5FinalHandshakeRejected: string;
    InvalidSocks5IncomingConnectionResponse: string;
    Socks5ProxyRejectedIncomingBoundConnection: string;
};
declare const SOCKS_INCOMING_PACKET_SIZES: {
    Socks5InitialHandshakeResponse: number;
    Socks5UserPassAuthenticationResponse: number;
    Socks5ResponseHeader: number;
    Socks5ResponseIPv4: number;
    Socks5ResponseIPv6: number;
    Socks5ResponseHostname: (hostNameLength: number) => number;
    Socks4Response: number;
};
type SocksCommandOption = 'connect' | 'bind' | 'associate';
declare enum SocksCommand {
    connect = 1,
    bind = 2,
    associate = 3
}
declare enum Socks4Response {
    Granted = 90,
    Failed = 91,
    Rejected = 92,
    RejectedIdent = 93
}
declare enum Socks5Auth {
    NoAuth = 0,
    GSSApi = 1,
    UserPass = 2
}
declare const SOCKS5_CUSTOM_AUTH_START = 128;
declare const SOCKS5_CUSTOM_AUTH_END = 254;
declare const SOCKS5_NO_ACCEPTABLE_AUTH = 255;
declare enum Socks5Response {
    Granted = 0,
    Failure = 1,
    NotAllowed = 2,
    NetworkUnreachable = 3,
    HostUnreachable = 4,
    ConnectionRefused = 5,
    TTLExpired = 6,
    CommandNotSupported = 7,
    AddressNotSupported = 8
}
declare enum Socks5HostType {
    IPv4 = 1,
    Hostname = 3,
    IPv6 = 4
}
declare enum SocksClientState {
    Created = 0,
    Connecting = 1,
    Connected = 2,
    SentInitialHandshake = 3,
    ReceivedInitialHandshakeResponse = 4,
    SentAuthentication = 5,
    ReceivedAuthenticationResponse = 6,
    SentFinalHandshake = 7,
    ReceivedFinalResponse = 8,
    BoundWaitingForConnection = 9,
    Established = 10,
    Disconnected = 11,
    Error = 99
}
/**
 * Represents a SocksProxy
 */
interface SocksProxy {
    ipaddress?: string;
    host?: string;
    port: number;
    type: SocksProxyType;
    userId?: string;
    password?: string;
    custom_auth_method?: number;
    custom_auth_request_handler?: () => Promise<Buffer>;
    custom_auth_response_size?: number;
    custom_auth_response_handler?: (data: Buffer) => Promise<boolean>;
}
/**
 * Represents a remote host
 */
interface SocksRemoteHost {
    host: string;
    port: number;
}
/**
 * SocksClient connection options.
 */
interface SocksClientOptions {
    command: SocksCommandOption;
    destination: SocksRemoteHost;
    proxy: SocksProxy;
    timeout?: number;
    existing_socket?: Duplex;
    set_tcp_nodelay?: boolean;
    socket_options?: SocketConnectOpts;
}
/**
 * SocksClient chain connection options.
 */
interface SocksClientChainOptions {
    command: 'connect';
    destination: SocksRemoteHost;
    proxies: SocksProxy[];
    timeout?: number;
    randomizeChain?: false;
}
interface SocksClientEstablishedEvent {
    socket: Socket;
    remoteHost?: SocksRemoteHost;
}
type SocksClientBoundEvent = SocksClientEstablishedEvent;
interface SocksUDPFrameDetails {
    frameNumber?: number;
    remoteHost: SocksRemoteHost;
    data: Buffer;
}
export { DEFAULT_TIMEOUT, ERRORS, SocksProxyType, SocksCommand, Socks4Response, Socks5Auth, Socks5HostType, Socks5Response, SocksClientState, SocksProxy, SocksRemoteHost, SocksCommandOption, SocksClientOptions, SocksClientChainOptions, SocksClientEstablishedEvent, SocksClientBoundEvent, SocksUDPFrameDetails, SOCKS_INCOMING_PACKET_SIZES, SOCKS5_CUSTOM_AUTH_START, SOCKS5_CUSTOM_AUTH_END, SOCKS5_NO_ACCEPTABLE_AUTH, };
