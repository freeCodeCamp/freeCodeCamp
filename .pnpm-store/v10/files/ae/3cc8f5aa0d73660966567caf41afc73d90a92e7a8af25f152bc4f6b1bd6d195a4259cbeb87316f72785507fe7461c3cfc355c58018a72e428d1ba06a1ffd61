export type UserAgentClientHintsCommand =
  UserAgentClientHints.SetClientHintsOverrideCommand;
export namespace UserAgentClientHints {
  export type SetClientHintsOverrideCommand = {
    method: 'userAgentClientHints.setClientHintsOverride';
    params: {
      clientHints: UserAgentClientHints.ClientHintsMetadata | null;
      contexts?: [string, ...string[]];
      userContexts?: [string, ...string[]];
    };
  };
}
export namespace UserAgentClientHints {
  export type ClientHintsMetadata = {
    brands?: [...UserAgentClientHints.BrandVersion[]];
    fullVersionList?: [...UserAgentClientHints.BrandVersion[]];
    platform?: string;
    platformVersion?: string;
    architecture?: string;
    model?: string;
    mobile?: boolean;
    bitness?: string;
    wow64?: boolean;
    formFactors?: [...string[]];
  };
}
export namespace UserAgentClientHints {
  export type BrandVersion = {
    brand: string;
    version: string;
  };
}
export namespace UserAgentClientHints {
  export type SetClientHintsOverrideResult = Record<string, never>;
}
