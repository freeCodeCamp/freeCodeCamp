"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOCKS5_NO_ACCEPTABLE_AUTH = exports.SOCKS5_CUSTOM_AUTH_END = exports.SOCKS5_CUSTOM_AUTH_START = exports.SOCKS_INCOMING_PACKET_SIZES = exports.SocksClientState = exports.Socks5Response = exports.Socks5HostType = exports.Socks5Auth = exports.Socks4Response = exports.SocksCommand = exports.ERRORS = exports.DEFAULT_TIMEOUT = void 0;
const DEFAULT_TIMEOUT = 30000;
exports.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
// prettier-ignore
const ERRORS = {
    InvalidSocksCommand: 'An invalid SOCKS command was provided. Valid options are connect, bind, and associate.',
    InvalidSocksCommandForOperation: 'An invalid SOCKS command was provided. Only a subset of commands are supported for this operation.',
    InvalidSocksCommandChain: 'An invalid SOCKS command was provided. Chaining currently only supports the connect command.',
    InvalidSocksClientOptionsDestination: 'An invalid destination host was provided.',
    InvalidSocksClientOptionsExistingSocket: 'An invalid existing socket was provided. This should be an instance of stream.Duplex.',
    InvalidSocksClientOptionsProxy: 'Invalid SOCKS proxy details were provided.',
    InvalidSocksClientOptionsTimeout: 'An invalid timeout value was provided. Please enter a value above 0 (in ms).',
    InvalidSocksClientOptionsProxiesLength: 'At least two socks proxies must be provided for chaining.',
    InvalidSocksClientOptionsCustomAuthRange: 'Custom auth must be a value between 0x80 and 0xFE.',
    InvalidSocksClientOptionsCustomAuthOptions: 'When a custom_auth_method is provided, custom_auth_request_handler, custom_auth_response_size, and custom_auth_response_handler must also be provided and valid.',
    NegotiationError: 'Negotiation error',
    SocketClosed: 'Socket closed',
    ProxyConnectionTimedOut: 'Proxy connection timed out',
    InternalError: 'SocksClient internal error (this should not happen)',
    InvalidSocks4HandshakeResponse: 'Received invalid Socks4 handshake response',
    Socks4ProxyRejectedConnection: 'Socks4 Proxy rejected connection',
    InvalidSocks4IncomingConnectionResponse: 'Socks4 invalid incoming connection response',
    Socks4ProxyRejectedIncomingBoundConnection: 'Socks4 Proxy rejected incoming bound connection',
    InvalidSocks5InitialHandshakeResponse: 'Received invalid Socks5 initial handshake response',
    InvalidSocks5IntiailHandshakeSocksVersion: 'Received invalid Socks5 initial handshake (invalid socks version)',
    InvalidSocks5InitialHandshakeNoAcceptedAuthType: 'Received invalid Socks5 initial handshake (no accepted authentication type)',
    InvalidSocks5InitialHandshakeUnknownAuthType: 'Received invalid Socks5 initial handshake (unknown authentication type)',
    Socks5AuthenticationFailed: 'Socks5 Authentication failed',
    InvalidSocks5FinalHandshake: 'Received invalid Socks5 final handshake response',
    InvalidSocks5FinalHandshakeRejected: 'Socks5 proxy rejected connection',
    InvalidSocks5IncomingConnectionResponse: 'Received invalid Socks5 incoming connection response',
    Socks5ProxyRejectedIncomingBoundConnection: 'Socks5 Proxy rejected incoming bound connection',
};
exports.ERRORS = ERRORS;
const SOCKS_INCOMING_PACKET_SIZES = {
    Socks5InitialHandshakeResponse: 2,
    Socks5UserPassAuthenticationResponse: 2,
    // Command response + incoming connection (bind)
    Socks5ResponseHeader: 5, // We need at least 5 to read the hostname length, then we wait for the address+port information.
    Socks5ResponseIPv4: 10, // 4 header + 4 ip + 2 port
    Socks5ResponseIPv6: 22, // 4 header + 16 ip + 2 port
    Socks5ResponseHostname: (hostNameLength) => hostNameLength + 7, // 4 header + 1 host length + host + 2 port
    // Command response + incoming connection (bind)
    Socks4Response: 8, // 2 header + 2 port + 4 ip
};
exports.SOCKS_INCOMING_PACKET_SIZES = SOCKS_INCOMING_PACKET_SIZES;
var SocksCommand;
(function (SocksCommand) {
    SocksCommand[SocksCommand["connect"] = 1] = "connect";
    SocksCommand[SocksCommand["bind"] = 2] = "bind";
    SocksCommand[SocksCommand["associate"] = 3] = "associate";
})(SocksCommand || (exports.SocksCommand = SocksCommand = {}));
var Socks4Response;
(function (Socks4Response) {
    Socks4Response[Socks4Response["Granted"] = 90] = "Granted";
    Socks4Response[Socks4Response["Failed"] = 91] = "Failed";
    Socks4Response[Socks4Response["Rejected"] = 92] = "Rejected";
    Socks4Response[Socks4Response["RejectedIdent"] = 93] = "RejectedIdent";
})(Socks4Response || (exports.Socks4Response = Socks4Response = {}));
var Socks5Auth;
(function (Socks5Auth) {
    Socks5Auth[Socks5Auth["NoAuth"] = 0] = "NoAuth";
    Socks5Auth[Socks5Auth["GSSApi"] = 1] = "GSSApi";
    Socks5Auth[Socks5Auth["UserPass"] = 2] = "UserPass";
})(Socks5Auth || (exports.Socks5Auth = Socks5Auth = {}));
const SOCKS5_CUSTOM_AUTH_START = 0x80;
exports.SOCKS5_CUSTOM_AUTH_START = SOCKS5_CUSTOM_AUTH_START;
const SOCKS5_CUSTOM_AUTH_END = 0xfe;
exports.SOCKS5_CUSTOM_AUTH_END = SOCKS5_CUSTOM_AUTH_END;
const SOCKS5_NO_ACCEPTABLE_AUTH = 0xff;
exports.SOCKS5_NO_ACCEPTABLE_AUTH = SOCKS5_NO_ACCEPTABLE_AUTH;
var Socks5Response;
(function (Socks5Response) {
    Socks5Response[Socks5Response["Granted"] = 0] = "Granted";
    Socks5Response[Socks5Response["Failure"] = 1] = "Failure";
    Socks5Response[Socks5Response["NotAllowed"] = 2] = "NotAllowed";
    Socks5Response[Socks5Response["NetworkUnreachable"] = 3] = "NetworkUnreachable";
    Socks5Response[Socks5Response["HostUnreachable"] = 4] = "HostUnreachable";
    Socks5Response[Socks5Response["ConnectionRefused"] = 5] = "ConnectionRefused";
    Socks5Response[Socks5Response["TTLExpired"] = 6] = "TTLExpired";
    Socks5Response[Socks5Response["CommandNotSupported"] = 7] = "CommandNotSupported";
    Socks5Response[Socks5Response["AddressNotSupported"] = 8] = "AddressNotSupported";
})(Socks5Response || (exports.Socks5Response = Socks5Response = {}));
var Socks5HostType;
(function (Socks5HostType) {
    Socks5HostType[Socks5HostType["IPv4"] = 1] = "IPv4";
    Socks5HostType[Socks5HostType["Hostname"] = 3] = "Hostname";
    Socks5HostType[Socks5HostType["IPv6"] = 4] = "IPv6";
})(Socks5HostType || (exports.Socks5HostType = Socks5HostType = {}));
var SocksClientState;
(function (SocksClientState) {
    SocksClientState[SocksClientState["Created"] = 0] = "Created";
    SocksClientState[SocksClientState["Connecting"] = 1] = "Connecting";
    SocksClientState[SocksClientState["Connected"] = 2] = "Connected";
    SocksClientState[SocksClientState["SentInitialHandshake"] = 3] = "SentInitialHandshake";
    SocksClientState[SocksClientState["ReceivedInitialHandshakeResponse"] = 4] = "ReceivedInitialHandshakeResponse";
    SocksClientState[SocksClientState["SentAuthentication"] = 5] = "SentAuthentication";
    SocksClientState[SocksClientState["ReceivedAuthenticationResponse"] = 6] = "ReceivedAuthenticationResponse";
    SocksClientState[SocksClientState["SentFinalHandshake"] = 7] = "SentFinalHandshake";
    SocksClientState[SocksClientState["ReceivedFinalResponse"] = 8] = "ReceivedFinalResponse";
    SocksClientState[SocksClientState["BoundWaitingForConnection"] = 9] = "BoundWaitingForConnection";
    SocksClientState[SocksClientState["Established"] = 10] = "Established";
    SocksClientState[SocksClientState["Disconnected"] = 11] = "Disconnected";
    SocksClientState[SocksClientState["Error"] = 99] = "Error";
})(SocksClientState || (exports.SocksClientState = SocksClientState = {}));
//# sourceMappingURL=constants.js.map