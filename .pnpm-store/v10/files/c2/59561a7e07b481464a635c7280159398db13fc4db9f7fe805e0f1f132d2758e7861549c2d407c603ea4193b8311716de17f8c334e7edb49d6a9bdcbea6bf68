// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

#ifndef SRC_PIPELINE_H_
#define SRC_PIPELINE_H_

#include <memory>
#include <string>
#include <vector>
#include <unordered_map>

#include <napi.h>
#include <vips/vips8>

#include "./common.h"

Napi::Value pipeline(const Napi::CallbackInfo& info);

struct Composite {
  sharp::InputDescriptor *input;
  VipsBlendMode mode;
  int gravity;
  int left;
  int top;
  bool hasOffset;
  bool tile;
  bool premultiplied;

  Composite():
    input(nullptr),
    mode(VIPS_BLEND_MODE_OVER),
    gravity(0),
    left(0),
    top(0),
    hasOffset(false),
    tile(false),
    premultiplied(false) {}
};

struct PipelineBaton {
  sharp::InputDescriptor *input;
  std::string formatOut;
  std::string fileOut;
  void *bufferOut;
  size_t bufferOutLength;
  std::vector<Composite *> composite;
  std::vector<sharp::InputDescriptor *> joinChannelIn;
  int topOffsetPre;
  int leftOffsetPre;
  int widthPre;
  int heightPre;
  int topOffsetPost;
  int leftOffsetPost;
  int widthPost;
  int heightPost;
  int width;
  int height;
  int channels;
  VipsKernel kernel;
  sharp::Canvas canvas;
  int position;
  std::vector<double> resizeBackground;
  bool hasCropOffset;
  int cropOffsetLeft;
  int cropOffsetTop;
  bool hasAttentionCenter;
  int attentionX;
  int attentionY;
  bool premultiplied;
  bool tileCentre;
  bool fastShrinkOnLoad;
  double tintA;
  double tintB;
  bool flatten;
  std::vector<double> flattenBackground;
  bool unflatten;
  bool negate;
  bool negateAlpha;
  double blurSigma;
  double brightness;
  double saturation;
  int hue;
  double lightness;
  int medianSize;
  double sharpenSigma;
  double sharpenM1;
  double sharpenM2;
  double sharpenX1;
  double sharpenY2;
  double sharpenY3;
  int threshold;
  bool thresholdGrayscale;
  std::vector<double> trimBackground;
  double trimThreshold;
  int trimOffsetLeft;
  int trimOffsetTop;
  std::vector<double> linearA;
  std::vector<double> linearB;
  double gamma;
  double gammaOut;
  bool greyscale;
  bool normalise;
  int normaliseLower;
  int normaliseUpper;
  int claheWidth;
  int claheHeight;
  int claheMaxSlope;
  bool useExifOrientation;
  int angle;
  double rotationAngle;
  std::vector<double> rotationBackground;
  bool rotateBeforePreExtract;
  bool flip;
  bool flop;
  int extendTop;
  int extendBottom;
  int extendLeft;
  int extendRight;
  std::vector<double> extendBackground;
  VipsExtend extendWith;
  bool withoutEnlargement;
  bool withoutReduction;
  std::vector<double> affineMatrix;
  std::vector<double> affineBackground;
  double affineIdx;
  double affineIdy;
  double affineOdx;
  double affineOdy;
  std::string affineInterpolator;
  int jpegQuality;
  bool jpegProgressive;
  std::string jpegChromaSubsampling;
  bool jpegTrellisQuantisation;
  int jpegQuantisationTable;
  bool jpegOvershootDeringing;
  bool jpegOptimiseScans;
  bool jpegOptimiseCoding;
  bool pngProgressive;
  int pngCompressionLevel;
  bool pngAdaptiveFiltering;
  bool pngPalette;
  int pngQuality;
  int pngEffort;
  int pngBitdepth;
  double pngDither;
  int jp2Quality;
  bool jp2Lossless;
  int jp2TileHeight;
  int jp2TileWidth;
  std::string jp2ChromaSubsampling;
  int webpQuality;
  int webpAlphaQuality;
  bool webpNearLossless;
  bool webpLossless;
  bool webpSmartSubsample;
  VipsForeignWebpPreset webpPreset;
  int webpEffort;
  bool webpMinSize;
  bool webpMixed;
  int gifBitdepth;
  int gifEffort;
  double gifDither;
  double gifInterFrameMaxError;
  double gifInterPaletteMaxError;
  bool gifReuse;
  bool gifProgressive;
  int tiffQuality;
  VipsForeignTiffCompression tiffCompression;
  VipsForeignTiffPredictor tiffPredictor;
  bool tiffPyramid;
  int tiffBitdepth;
  bool tiffTile;
  int tiffTileHeight;
  int tiffTileWidth;
  double tiffXres;
  double tiffYres;
  VipsForeignTiffResunit tiffResolutionUnit;
  int heifQuality;
  VipsForeignHeifCompression heifCompression;
  int heifEffort;
  std::string heifChromaSubsampling;
  bool heifLossless;
  double jxlDistance;
  int jxlDecodingTier;
  int jxlEffort;
  bool jxlLossless;
  VipsBandFormat rawDepth;
  std::string err;
  bool withMetadata;
  int withMetadataOrientation;
  double withMetadataDensity;
  std::string withMetadataIcc;
  std::unordered_map<std::string, std::string> withMetadataStrs;
  int timeoutSeconds;
  std::unique_ptr<double[]> convKernel;
  int convKernelWidth;
  int convKernelHeight;
  double convKernelScale;
  double convKernelOffset;
  sharp::InputDescriptor *boolean;
  VipsOperationBoolean booleanOp;
  VipsOperationBoolean bandBoolOp;
  int extractChannel;
  bool removeAlpha;
  double ensureAlpha;
  VipsInterpretation colourspaceInput;
  VipsInterpretation colourspace;
  std::vector<int> delay;
  int loop;
  int tileSize;
  int tileOverlap;
  VipsForeignDzContainer tileContainer;
  VipsForeignDzLayout tileLayout;
  std::string tileFormat;
  int tileAngle;
  std::vector<double> tileBackground;
  int tileSkipBlanks;
  VipsForeignDzDepth tileDepth;
  std::string tileId;
  std::string tileBasename;
  std::unique_ptr<double[]> recombMatrix;

  PipelineBaton():
    input(nullptr),
    bufferOutLength(0),
    topOffsetPre(-1),
    topOffsetPost(-1),
    channels(0),
    kernel(VIPS_KERNEL_LANCZOS3),
    canvas(sharp::Canvas::CROP),
    position(0),
    resizeBackground{ 0.0, 0.0, 0.0, 255.0 },
    hasCropOffset(false),
    cropOffsetLeft(0),
    cropOffsetTop(0),
    hasAttentionCenter(false),
    attentionX(0),
    attentionY(0),
    premultiplied(false),
    tintA(128.0),
    tintB(128.0),
    flatten(false),
    flattenBackground{ 0.0, 0.0, 0.0 },
    unflatten(false),
    negate(false),
    negateAlpha(true),
    blurSigma(0.0),
    brightness(1.0),
    saturation(1.0),
    hue(0),
    lightness(0),
    medianSize(0),
    sharpenSigma(0.0),
    sharpenM1(1.0),
    sharpenM2(2.0),
    sharpenX1(2.0),
    sharpenY2(10.0),
    sharpenY3(20.0),
    threshold(0),
    thresholdGrayscale(true),
    trimBackground{},
    trimThreshold(0.0),
    trimOffsetLeft(0),
    trimOffsetTop(0),
    linearA{},
    linearB{},
    gamma(0.0),
    greyscale(false),
    normalise(false),
    normaliseLower(1),
    normaliseUpper(99),
    claheWidth(0),
    claheHeight(0),
    claheMaxSlope(3),
    useExifOrientation(false),
    angle(0),
    rotationAngle(0.0),
    rotationBackground{ 0.0, 0.0, 0.0, 255.0 },
    flip(false),
    flop(false),
    extendTop(0),
    extendBottom(0),
    extendLeft(0),
    extendRight(0),
    extendBackground{ 0.0, 0.0, 0.0, 255.0 },
    extendWith(VIPS_EXTEND_BACKGROUND),
    withoutEnlargement(false),
    withoutReduction(false),
    affineMatrix{ 1.0, 0.0, 0.0, 1.0 },
    affineBackground{ 0.0, 0.0, 0.0, 255.0 },
    affineIdx(0),
    affineIdy(0),
    affineOdx(0),
    affineOdy(0),
    affineInterpolator("bicubic"),
    jpegQuality(80),
    jpegProgressive(false),
    jpegChromaSubsampling("4:2:0"),
    jpegTrellisQuantisation(false),
    jpegQuantisationTable(0),
    jpegOvershootDeringing(false),
    jpegOptimiseScans(false),
    jpegOptimiseCoding(true),
    pngProgressive(false),
    pngCompressionLevel(6),
    pngAdaptiveFiltering(false),
    pngPalette(false),
    pngQuality(100),
    pngEffort(7),
    pngBitdepth(8),
    pngDither(1.0),
    jp2Quality(80),
    jp2Lossless(false),
    jp2TileHeight(512),
    jp2TileWidth(512),
    jp2ChromaSubsampling("4:4:4"),
    webpQuality(80),
    webpAlphaQuality(100),
    webpNearLossless(false),
    webpLossless(false),
    webpSmartSubsample(false),
    webpPreset(VIPS_FOREIGN_WEBP_PRESET_DEFAULT),
    webpEffort(4),
    webpMinSize(false),
    webpMixed(false),
    gifBitdepth(8),
    gifEffort(7),
    gifDither(1.0),
    gifInterFrameMaxError(0.0),
    gifInterPaletteMaxError(3.0),
    gifReuse(true),
    gifProgressive(false),
    tiffQuality(80),
    tiffCompression(VIPS_FOREIGN_TIFF_COMPRESSION_JPEG),
    tiffPredictor(VIPS_FOREIGN_TIFF_PREDICTOR_HORIZONTAL),
    tiffPyramid(false),
    tiffBitdepth(8),
    tiffTile(false),
    tiffTileHeight(256),
    tiffTileWidth(256),
    tiffXres(1.0),
    tiffYres(1.0),
    tiffResolutionUnit(VIPS_FOREIGN_TIFF_RESUNIT_INCH),
    heifQuality(50),
    heifCompression(VIPS_FOREIGN_HEIF_COMPRESSION_AV1),
    heifEffort(4),
    heifChromaSubsampling("4:4:4"),
    heifLossless(false),
    jxlDistance(1.0),
    jxlDecodingTier(0),
    jxlEffort(7),
    jxlLossless(false),
    rawDepth(VIPS_FORMAT_UCHAR),
    withMetadata(false),
    withMetadataOrientation(-1),
    withMetadataDensity(0.0),
    timeoutSeconds(0),
    convKernelWidth(0),
    convKernelHeight(0),
    convKernelScale(0.0),
    convKernelOffset(0.0),
    boolean(nullptr),
    booleanOp(VIPS_OPERATION_BOOLEAN_LAST),
    bandBoolOp(VIPS_OPERATION_BOOLEAN_LAST),
    extractChannel(-1),
    removeAlpha(false),
    ensureAlpha(-1.0),
    colourspaceInput(VIPS_INTERPRETATION_LAST),
    colourspace(VIPS_INTERPRETATION_LAST),
    loop(-1),
    tileSize(256),
    tileOverlap(0),
    tileContainer(VIPS_FOREIGN_DZ_CONTAINER_FS),
    tileLayout(VIPS_FOREIGN_DZ_LAYOUT_DZ),
    tileAngle(0),
    tileBackground{ 255.0, 255.0, 255.0, 255.0 },
    tileSkipBlanks(-1),
    tileDepth(VIPS_FOREIGN_DZ_DEPTH_LAST) {}
};

#endif  // SRC_PIPELINE_H_
