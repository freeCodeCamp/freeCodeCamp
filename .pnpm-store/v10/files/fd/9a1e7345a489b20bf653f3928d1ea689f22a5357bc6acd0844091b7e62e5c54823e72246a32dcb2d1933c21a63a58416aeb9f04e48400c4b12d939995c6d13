/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewLineOptions {
    constructor(config, themeType) {
        this.themeType = themeType;
        const options = config.options;
        const fontInfo = options.get(59 /* EditorOption.fontInfo */);
        this.renderWhitespace = options.get(113 /* EditorOption.renderWhitespace */);
        this.experimentalWhitespaceRendering = options.get(47 /* EditorOption.experimentalWhitespaceRendering */);
        this.renderControlCharacters = options.get(108 /* EditorOption.renderControlCharacters */);
        this.spaceWidth = fontInfo.spaceWidth;
        this.middotWidth = fontInfo.middotWidth;
        this.wsmiddotWidth = fontInfo.wsmiddotWidth;
        this.useMonospaceOptimizations = (fontInfo.isMonospace
            && !options.get(40 /* EditorOption.disableMonospaceOptimizations */));
        this.canUseHalfwidthRightwardsArrow = fontInfo.canUseHalfwidthRightwardsArrow;
        this.lineHeight = options.get(75 /* EditorOption.lineHeight */);
        this.stopRenderingLineAfter = options.get(133 /* EditorOption.stopRenderingLineAfter */);
        this.fontLigatures = options.get(60 /* EditorOption.fontLigatures */);
        this.verticalScrollbarSize = options.get(117 /* EditorOption.scrollbar */).verticalScrollbarSize;
        this.useGpu = options.get(46 /* EditorOption.experimentalGpuAcceleration */) === 'on';
    }
    equals(other) {
        return (this.themeType === other.themeType
            && this.renderWhitespace === other.renderWhitespace
            && this.experimentalWhitespaceRendering === other.experimentalWhitespaceRendering
            && this.renderControlCharacters === other.renderControlCharacters
            && this.spaceWidth === other.spaceWidth
            && this.middotWidth === other.middotWidth
            && this.wsmiddotWidth === other.wsmiddotWidth
            && this.useMonospaceOptimizations === other.useMonospaceOptimizations
            && this.canUseHalfwidthRightwardsArrow === other.canUseHalfwidthRightwardsArrow
            && this.lineHeight === other.lineHeight
            && this.stopRenderingLineAfter === other.stopRenderingLineAfter
            && this.fontLigatures === other.fontLigatures
            && this.verticalScrollbarSize === other.verticalScrollbarSize
            && this.useGpu === other.useGpu);
    }
}

export { ViewLineOptions };
