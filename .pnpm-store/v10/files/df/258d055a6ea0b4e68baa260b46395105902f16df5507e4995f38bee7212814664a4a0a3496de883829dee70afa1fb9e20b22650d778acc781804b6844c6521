export interface MediaQueryTypes {
  all?: boolean;
  grid?: boolean;
  aural?: boolean;
  braille?: boolean;
  handheld?: boolean;
  print?: boolean;
  projection?: boolean;
  screen?: boolean;
  tty?: boolean;
  tv?: boolean;
  embossed?: boolean;
}

export type MediaQueryType = keyof MediaQueryTypes;

export interface MediaQueryMatchers {
  aspectRatio?: string;
  deviceAspectRatio?: string;
  height?: number | string;
  deviceHeight?: number | string;
  width?: number | string;
  deviceWidth?: number | string;
  color?: boolean;
  colorIndex?: boolean;
  monochrome?: boolean;
  resolution?: number | string;
  orientation?: 'portrait' | 'landscape';
  scan?: 'progressive' | 'interlace';
  type?: MediaQueryType;
}

export interface MediaQueryFeatures extends MediaQueryMatchers {
  minAspectRatio?: string;
  maxAspectRatio?: string;

  minDeviceAspectRatio?: string;
  maxDeviceAspectRatio?: string;

  minHeight?: number | string;
  maxHeight?: number | string;

  minDeviceHeight?: number | string;
  maxDeviceHeight?: number | string;

  minWidth?: number | string;
  maxWidth?: number | string;

  minDeviceWidth?: number | string;
  maxDeviceWidth?: number | string;

  minColor?: number;
  maxColor?: number;

  minColorIndex?: number;
  maxColorIndex?: number;

  minMonochrome?: number;
  maxMonochrome?: number;

  minResolution?: number | string;
  maxResolution?: number | string;
}

export interface MediaQueryAllQueryable extends MediaQueryFeatures, MediaQueryTypes {}
