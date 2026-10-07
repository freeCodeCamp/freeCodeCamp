export type UserAgentClientHintsCommand =
  UserAgentClientHints.SetClientHintsOverrideCommand;
export declare namespace UserAgentClientHints {
  type SetClientHintsOverrideCommand = {
    method: 'userAgentClientHints.setClientHintsOverride';
    params: {
      clientHints: UserAgentClientHints.ClientHintsMetadata | null;
      contexts?: [string, ...string[]];
      userContexts?: [string, ...string[]];
    };
  };
}
export declare namespace UserAgentClientHints {
  type ClientHintsMetadata = {
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
export declare namespace UserAgentClientHints {
  type BrandVersion = {
    brand: string;
    version: string;
  };
}
export declare namespace UserAgentClientHints {
  type SetClientHintsOverrideResult = Record<string, never>;
}
