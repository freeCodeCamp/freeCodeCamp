import React, { CSSProperties } from 'react';

/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */

declare type ImageSettings = {
    src: string;
    height: number;
    width: number;
    excavate: boolean;
    x?: number;
    y?: number;
};
declare type QRProps = {
    value: string;
    size?: number;
    level?: string;
    bgColor?: string;
    fgColor?: string;
    style?: CSSProperties;
    includeMargin?: boolean;
    imageSettings?: ImageSettings;
};
declare type QRPropsCanvas = QRProps & React.CanvasHTMLAttributes<HTMLCanvasElement>;
declare type QRPropsSVG = QRProps & React.SVGProps<SVGSVGElement>;
declare function QRCodeCanvas(props: QRPropsCanvas): JSX.Element;
declare function QRCodeSVG(props: QRPropsSVG): JSX.Element;
declare type RootProps = (QRPropsSVG & {
    renderAs: 'svg';
}) | (QRPropsCanvas & {
    renderAs?: 'canvas';
});
/**
 * @deprecated This has been removed in v4. Use named exports instead.
 *             If relying on an unspecified value for `renderAs`, use `QRCodeCanvas`.
 */
declare const QRCode: (props: RootProps) => JSX.Element;

export { QRCodeCanvas, QRCodeSVG, QRCode as default };
