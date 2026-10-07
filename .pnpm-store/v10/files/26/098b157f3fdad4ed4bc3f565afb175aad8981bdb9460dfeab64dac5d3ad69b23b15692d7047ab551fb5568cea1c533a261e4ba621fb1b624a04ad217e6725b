import { Disposable, toDisposable } from '../../../../base/common/lifecycle.js';
import { NKeyMap } from '../../../../base/common/map.js';
import { LogLevel, ILogService } from '../../../../platform/log/common/log.js';
import { IThemeService } from '../../../../platform/theme/common/themeService.js';
import { TextureAtlasShelfAllocator } from './textureAtlasShelfAllocator.js';
import { TextureAtlasSlabAllocator } from './textureAtlasSlabAllocator.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TextureAtlasPage_1;
let TextureAtlasPage = class TextureAtlasPage extends Disposable {
    static { TextureAtlasPage_1 = this; }
    get version() { return this._version; }
    /**
     * The maximum number of glyphs that can be drawn to the page. This is currently a hard static
     * cap that must not be reached as it will cause the GPU buffer to overflow.
     */
    static { this.maximumGlyphCount = 5_000; }
    get usedArea() { return this._usedArea; }
    get source() { return this._canvas; }
    get glyphs() {
        return this._glyphInOrderSet.values();
    }
    constructor(textureIndex, pageSize, allocatorType, _logService, themeService) {
        super();
        this._logService = _logService;
        this._version = 0;
        this._usedArea = { left: 0, top: 0, right: 0, bottom: 0 };
        this._glyphMap = new NKeyMap();
        this._glyphInOrderSet = new Set();
        this._canvas = new OffscreenCanvas(pageSize, pageSize);
        this._colorMap = themeService.getColorTheme().tokenColorMap;
        switch (allocatorType) {
            case 'shelf':
                this._allocator = new TextureAtlasShelfAllocator(this._canvas, textureIndex);
                break;
            case 'slab':
                this._allocator = new TextureAtlasSlabAllocator(this._canvas, textureIndex);
                break;
            default:
                this._allocator = allocatorType(this._canvas, textureIndex);
                break;
        }
        // Reduce impact of a memory leak if this object is not released
        this._register(toDisposable(() => {
            this._canvas.width = 1;
            this._canvas.height = 1;
        }));
    }
    getGlyph(rasterizer, chars, tokenMetadata, decorationStyleSetId) {
        // IMPORTANT: There are intentionally no intermediate variables here to aid in runtime
        // optimization as it's a very hot function
        return this._glyphMap.get(chars, tokenMetadata, decorationStyleSetId, rasterizer.cacheKey) ?? this._createGlyph(rasterizer, chars, tokenMetadata, decorationStyleSetId);
    }
    _createGlyph(rasterizer, chars, tokenMetadata, decorationStyleSetId) {
        // Ensure the glyph can fit on the page
        if (this._glyphInOrderSet.size >= TextureAtlasPage_1.maximumGlyphCount) {
            return undefined;
        }
        // Rasterize and allocate the glyph
        const rasterizedGlyph = rasterizer.rasterizeGlyph(chars, tokenMetadata, decorationStyleSetId, this._colorMap);
        const glyph = this._allocator.allocate(rasterizedGlyph);
        // Ensure the glyph was allocated
        if (glyph === undefined) {
            // TODO: undefined here can mean the glyph was too large for a slab on the page, this
            // can lead to big problems if we don't handle it properly https://github.com/microsoft/vscode/issues/232984
            return undefined;
        }
        // Save the glyph
        this._glyphMap.set(glyph, chars, tokenMetadata, decorationStyleSetId, rasterizer.cacheKey);
        this._glyphInOrderSet.add(glyph);
        // Update page version and it's tracked used area
        this._version++;
        this._usedArea.right = Math.max(this._usedArea.right, glyph.x + glyph.w - 1);
        this._usedArea.bottom = Math.max(this._usedArea.bottom, glyph.y + glyph.h - 1);
        if (this._logService.getLevel() === LogLevel.Trace) {
            this._logService.trace('New glyph', {
                chars,
                tokenMetadata,
                decorationStyleSetId,
                rasterizedGlyph,
                glyph
            });
        }
        return glyph;
    }
    getUsagePreview() {
        return this._allocator.getUsagePreview();
    }
    getStats() {
        return this._allocator.getStats();
    }
};
TextureAtlasPage = TextureAtlasPage_1 = __decorate([
    __param(3, ILogService),
    __param(4, IThemeService)
], TextureAtlasPage);

export { TextureAtlasPage };
