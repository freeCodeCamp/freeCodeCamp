// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

#include <algorithm>
#include <cmath>
#include <map>
#include <memory>
#include <numeric>
#include <string>
#include <tuple>
#include <utility>
#include <vector>
#include <sys/types.h>
#include <sys/stat.h>

#include <vips/vips8>
#include <napi.h>

#include "common.h"
#include "operations.h"
#include "pipeline.h"

#ifdef _WIN32
#define STAT64_STRUCT __stat64
#define STAT64_FUNCTION _stat64
#elif defined(_LARGEFILE64_SOURCE)
#define STAT64_STRUCT stat64
#define STAT64_FUNCTION stat64
#else
#define STAT64_STRUCT stat
#define STAT64_FUNCTION stat
#endif

class PipelineWorker : public Napi::AsyncWorker {
 public:
  PipelineWorker(Napi::Function callback, PipelineBaton *baton,
    Napi::Function debuglog, Napi::Function queueListener) :
    Napi::AsyncWorker(callback),
    baton(baton),
    debuglog(Napi::Persistent(debuglog)),
    queueListener(Napi::Persistent(queueListener)) {}
  ~PipelineWorker() {}

  // libuv worker
  void Execute() {
    // Decrement queued task counter
    g_atomic_int_dec_and_test(&sharp::counterQueue);
    // Increment processing task counter
    g_atomic_int_inc(&sharp::counterProcess);

    try {
      // Open input
      vips::VImage image;
      sharp::ImageType inputImageType;
      std::tie(image, inputImageType) = sharp::OpenInput(baton->input);
      VipsAccess access = baton->input->access;
      image = sharp::EnsureColourspace(image, baton->colourspaceInput);

      int nPages = baton->input->pages;
      if (nPages == -1) {
        // Resolve the number of pages if we need to render until the end of the document
        nPages = image.get_typeof(VIPS_META_N_PAGES) != 0
          ? image.get_int(VIPS_META_N_PAGES) - baton->input->page
          : 1;
      }

      // Get pre-resize page height
      int pageHeight = sharp::GetPageHeight(image);

      // Calculate angle of rotation
      VipsAngle rotation = VIPS_ANGLE_D0;
      VipsAngle autoRotation = VIPS_ANGLE_D0;
      bool autoFlip = FALSE;
      bool autoFlop = FALSE;

      if (baton->useExifOrientation) {
        // Rotate and flip image according to Exif orientation
        std::tie(autoRotation, autoFlip, autoFlop) = CalculateExifRotationAndFlip(sharp::ExifOrientation(image));
        image = sharp::RemoveExifOrientation(image);
      } else {
        rotation = CalculateAngleRotation(baton->angle);
      }

      // Rotate pre-extract
      bool const shouldRotateBefore = baton->rotateBeforePreExtract &&
        (rotation != VIPS_ANGLE_D0 || autoRotation != VIPS_ANGLE_D0 ||
          autoFlip || baton->flip || autoFlop || baton->flop ||
          baton->rotationAngle != 0.0);

      if (shouldRotateBefore) {
        image = sharp::StaySequential(image, access,
          rotation != VIPS_ANGLE_D0 ||
          autoRotation != VIPS_ANGLE_D0 ||
          autoFlip ||
          baton->flip ||
          baton->rotationAngle != 0.0);

        if (autoRotation != VIPS_ANGLE_D0) {
          image = image.rot(autoRotation);
          autoRotation = VIPS_ANGLE_D0;
        }
        if (autoFlip) {
          image = image.flip(VIPS_DIRECTION_VERTICAL);
          autoFlip = FALSE;
        } else if (baton->flip) {
          image = image.flip(VIPS_DIRECTION_VERTICAL);
          baton->flip = FALSE;
        }
        if (autoFlop) {
          image = image.flip(VIPS_DIRECTION_HORIZONTAL);
          autoFlop = FALSE;
        } else if (baton->flop) {
          image = image.flip(VIPS_DIRECTION_HORIZONTAL);
          baton->flop = FALSE;
        }
        if (rotation != VIPS_ANGLE_D0) {
          image = image.rot(rotation);
          rotation = VIPS_ANGLE_D0;
        }
        if (baton->rotationAngle != 0.0) {
          MultiPageUnsupported(nPages, "Rotate");
          std::vector<double> background;
          std::tie(image, background) = sharp::ApplyAlpha(image, baton->rotationBackground, FALSE);
          image = image.rotate(baton->rotationAngle, VImage::option()->set("background", background)).copy_memory();
        }
      }

      // Trim
      if (baton->trimThreshold > 0.0) {
        MultiPageUnsupported(nPages, "Trim");
        image = sharp::StaySequential(image, access);
        image = sharp::Trim(image, baton->trimBackground, baton->trimThreshold);
        baton->trimOffsetLeft = image.xoffset();
        baton->trimOffsetTop = image.yoffset();
      }

      // Pre extraction
      if (baton->topOffsetPre != -1) {
        image = nPages > 1
          ? sharp::CropMultiPage(image,
              baton->leftOffsetPre, baton->topOffsetPre, baton->widthPre, baton->heightPre, nPages, &pageHeight)
          : image.extract_area(baton->leftOffsetPre, baton->topOffsetPre, baton->widthPre, baton->heightPre);
      }

      // Get pre-resize image width and height
      int inputWidth = image.width();
      int inputHeight = image.height();

      // Is there just one page? Shrink to inputHeight instead
      if (nPages == 1) {
        pageHeight = inputHeight;
      }

      // Scaling calculations
      double hshrink;
      double vshrink;
      int targetResizeWidth = baton->width;
      int targetResizeHeight = baton->height;

      // When auto-rotating by 90 or 270 degrees, swap the target width and
      // height to ensure the behavior aligns with how it would have been if
      // the rotation had taken place *before* resizing.
      if (!baton->rotateBeforePreExtract &&
        (autoRotation == VIPS_ANGLE_D90 || autoRotation == VIPS_ANGLE_D270)) {
        std::swap(targetResizeWidth, targetResizeHeight);
      }

      // Shrink to pageHeight, so we work for multi-page images
      std::tie(hshrink, vshrink) = sharp::ResolveShrink(
        inputWidth, pageHeight, targetResizeWidth, targetResizeHeight,
        baton->canvas, baton->withoutEnlargement, baton->withoutReduction);

      // The jpeg preload shrink.
      int jpegShrinkOnLoad = 1;

      // WebP, PDF, SVG scale
      double scale = 1.0;

      // Try to reload input using shrink-on-load for JPEG, WebP, SVG and PDF, when:
      //  - the width or height parameters are specified;
      //  - gamma correction doesn't need to be applied;
      //  - trimming or pre-resize extract isn't required;
      //  - input colourspace is not specified;
      bool const shouldPreShrink = (targetResizeWidth > 0 || targetResizeHeight > 0) &&
        baton->gamma == 0 && baton->topOffsetPre == -1 && baton->trimThreshold == 0.0 &&
        baton->colourspaceInput == VIPS_INTERPRETATION_LAST && !shouldRotateBefore;

      if (shouldPreShrink) {
        // The common part of the shrink: the bit by which both axes must be shrunk
        double shrink = std::min(hshrink, vshrink);

        if (inputImageType == sharp::ImageType::JPEG) {
          // Leave at least a factor of two for the final resize step, when fastShrinkOnLoad: false
          // for more consistent results and to avoid extra sharpness to the image
          int factor = baton->fastShrinkOnLoad ? 1 : 2;
          if (shrink >= 8 * factor) {
            jpegShrinkOnLoad = 8;
          } else if (shrink >= 4 * factor) {
            jpegShrinkOnLoad = 4;
          } else if (shrink >= 2 * factor) {
            jpegShrinkOnLoad = 2;
          }
          // Lower shrink-on-load for known libjpeg rounding errors
          if (jpegShrinkOnLoad > 1 && static_cast<int>(shrink) == jpegShrinkOnLoad) {
            jpegShrinkOnLoad /= 2;
          }
        } else if (inputImageType == sharp::ImageType::WEBP && baton->fastShrinkOnLoad && shrink > 1.0) {
          // Avoid upscaling via webp
          scale = 1.0 / shrink;
        } else if (inputImageType == sharp::ImageType::SVG ||
                   inputImageType == sharp::ImageType::PDF) {
          scale = 1.0 / shrink;
        }
      }

      // Reload input using shrink-on-load, it'll be an integer shrink
      // factor for jpegload*, a double scale factor for webpload*,
      // pdfload* and svgload*
      if (jpegShrinkOnLoad > 1) {
        vips::VOption *option = VImage::option()
          ->set("access", access)
          ->set("shrink", jpegShrinkOnLoad)
          ->set("unlimited", baton->input->unlimited)
          ->set("fail_on", baton->input->failOn);
        if (baton->input->buffer != nullptr) {
          // Reload JPEG buffer
          VipsBlob *blob = vips_blob_new(nullptr, baton->input->buffer, baton->input->bufferLength);
          image = VImage::jpegload_buffer(blob, option);
          vips_area_unref(reinterpret_cast<VipsArea*>(blob));
        } else {
          // Reload JPEG file
          image = VImage::jpegload(const_cast<char*>(baton->input->file.data()), option);
        }
      } else if (scale != 1.0) {
        vips::VOption *option = VImage::option()
          ->set("access", access)
          ->set("scale", scale)
          ->set("fail_on", baton->input->failOn);
        if (inputImageType == sharp::ImageType::WEBP) {
          option->set("n", baton->input->pages);
          option->set("page", baton->input->page);

          if (baton->input->buffer != nullptr) {
            // Reload WebP buffer
            VipsBlob *blob = vips_blob_new(nullptr, baton->input->buffer, baton->input->bufferLength);
            image = VImage::webpload_buffer(blob, option);
            vips_area_unref(reinterpret_cast<VipsArea*>(blob));
          } else {
            // Reload WebP file
            image = VImage::webpload(const_cast<char*>(baton->input->file.data()), option);
          }
        } else if (inputImageType == sharp::ImageType::SVG) {
          option->set("unlimited", baton->input->unlimited);
          option->set("dpi", baton->input->density);

          if (baton->input->buffer != nullptr) {
            // Reload SVG buffer
            VipsBlob *blob = vips_blob_new(nullptr, baton->input->buffer, baton->input->bufferLength);
            image = VImage::svgload_buffer(blob, option);
            vips_area_unref(reinterpret_cast<VipsArea*>(blob));
          } else {
            // Reload SVG file
            image = VImage::svgload(const_cast<char*>(baton->input->file.data()), option);
          }
          sharp::SetDensity(image, baton->input->density);
          if (image.width() > 32767 || image.height() > 32767) {
            throw vips::VError("Input SVG image will exceed 32767x32767 pixel limit when scaled");
          }
        } else if (inputImageType == sharp::ImageType::PDF) {
          option->set("n", baton->input->pages);
          option->set("page", baton->input->page);
          option->set("dpi", baton->input->density);

          if (baton->input->buffer != nullptr) {
            // Reload PDF buffer
            VipsBlob *blob = vips_blob_new(nullptr, baton->input->buffer, baton->input->bufferLength);
            image = VImage::pdfload_buffer(blob, option);
            vips_area_unref(reinterpret_cast<VipsArea*>(blob));
          } else {
            // Reload PDF file
            image = VImage::pdfload(const_cast<char*>(baton->input->file.data()), option);
          }

          sharp::SetDensity(image, baton->input->density);
        }
      } else {
        if (inputImageType == sharp::ImageType::SVG && (image.width() > 32767 || image.height() > 32767)) {
          throw vips::VError("Input SVG image exceeds 32767x32767 pixel limit");
        }
      }

      // Any pre-shrinking may already have been done
      inputWidth = image.width();
      inputHeight = image.height();

      // After pre-shrink, but before the main shrink stage
      // Reuse the initial pageHeight if we didn't pre-shrink
      if (shouldPreShrink) {
        pageHeight = sharp::GetPageHeight(image);
      }

      // Shrink to pageHeight, so we work for multi-page images
      std::tie(hshrink, vshrink) = sharp::ResolveShrink(
        inputWidth, pageHeight, targetResizeWidth, targetResizeHeight,
        baton->canvas, baton->withoutEnlargement, baton->withoutReduction);

      int targetHeight = static_cast<int>(std::rint(static_cast<double>(pageHeight) / vshrink));
      int targetPageHeight = targetHeight;

      // In toilet-roll mode, we must adjust vshrink so that we exactly hit
      // pageHeight or we'll have pixels straddling pixel boundaries
      if (inputHeight > pageHeight) {
        targetHeight *= nPages;
        vshrink = static_cast<double>(inputHeight) / targetHeight;
      }

      // Ensure we're using a device-independent colour space
      char const *processingProfile = image.interpretation() == VIPS_INTERPRETATION_RGB16 ? "p3" : "srgb";
      if (
        sharp::HasProfile(image) &&
        image.interpretation() != VIPS_INTERPRETATION_LABS &&
        image.interpretation() != VIPS_INTERPRETATION_GREY16 &&
        !baton->input->ignoreIcc
      ) {
        // Convert to sRGB/P3 using embedded profile
        try {
          image = image.icc_transform(processingProfile, VImage::option()
            ->set("embedded", TRUE)
            ->set("depth", sharp::Is16Bit(image.interpretation()) ? 16 : 8)
            ->set("intent", VIPS_INTENT_PERCEPTUAL));
        } catch(...) {
          sharp::VipsWarningCallback(nullptr, G_LOG_LEVEL_WARNING, "Invalid embedded profile", nullptr);
        }
      } else if (
        image.interpretation() == VIPS_INTERPRETATION_CMYK &&
        baton->colourspaceInput != VIPS_INTERPRETATION_CMYK
      ) {
        image = image.icc_transform(processingProfile, VImage::option()
          ->set("input_profile", "cmyk")
          ->set("intent", VIPS_INTENT_PERCEPTUAL));
      }

      // Flatten image to remove alpha channel
      if (baton->flatten && sharp::HasAlpha(image)) {
        image = sharp::Flatten(image, baton->flattenBackground);
      }

      // Negate the colours in the image
      if (baton->negate) {
        image = sharp::Negate(image, baton->negateAlpha);
      }

      // Gamma encoding (darken)
      if (baton->gamma >= 1 && baton->gamma <= 3) {
        image = sharp::Gamma(image, 1.0 / baton->gamma);
      }

      // Convert to greyscale (linear, therefore after gamma encoding, if any)
      if (baton->greyscale) {
        image = image.colourspace(VIPS_INTERPRETATION_B_W);
      }

      bool const shouldResize = hshrink != 1.0 || vshrink != 1.0;
      bool const shouldBlur = baton->blurSigma != 0.0;
      bool const shouldConv = baton->convKernelWidth * baton->convKernelHeight > 0;
      bool const shouldSharpen = baton->sharpenSigma != 0.0;
      bool const shouldComposite = !baton->composite.empty();

      if (shouldComposite && !sharp::HasAlpha(image)) {
        image = sharp::EnsureAlpha(image, 1);
      }

      VipsBandFormat premultiplyFormat = image.format();
      bool const shouldPremultiplyAlpha = sharp::HasAlpha(image) &&
        (shouldResize || shouldBlur || shouldConv || shouldSharpen);

      if (shouldPremultiplyAlpha) {
        image = image.premultiply().cast(premultiplyFormat);
      }

      // Resize
      if (shouldResize) {
        image = image.resize(1.0 / hshrink, VImage::option()
          ->set("vscale", 1.0 / vshrink)
          ->set("kernel", baton->kernel));
      }

      image = sharp::StaySequential(image, access,
        autoRotation != VIPS_ANGLE_D0 ||
        baton->flip ||
        autoFlip ||
        rotation != VIPS_ANGLE_D0);
      // Auto-rotate post-extract
      if (autoRotation != VIPS_ANGLE_D0) {
        image = image.rot(autoRotation);
      }
      // Mirror vertically (up-down) about the x-axis
      if (baton->flip || autoFlip) {
        image = image.flip(VIPS_DIRECTION_VERTICAL);
      }
      // Mirror horizontally (left-right) about the y-axis
      if (baton->flop || autoFlop) {
        image = image.flip(VIPS_DIRECTION_HORIZONTAL);
      }
      // Rotate post-extract 90-angle
      if (rotation != VIPS_ANGLE_D0) {
        image = image.rot(rotation);
      }

      // Join additional color channels to the image
      if (!baton->joinChannelIn.empty()) {
        VImage joinImage;
        sharp::ImageType joinImageType = sharp::ImageType::UNKNOWN;

        for (unsigned int i = 0; i < baton->joinChannelIn.size(); i++) {
          baton->joinChannelIn[i]->access = access;
          std::tie(joinImage, joinImageType) = sharp::OpenInput(baton->joinChannelIn[i]);
          joinImage = sharp::EnsureColourspace(joinImage, baton->colourspaceInput);
          image = image.bandjoin(joinImage);
        }
        image = image.copy(VImage::option()->set("interpretation", baton->colourspace));
        image = sharp::RemoveGifPalette(image);
      }

      inputWidth = image.width();
      inputHeight = nPages > 1 ? targetPageHeight : image.height();

      // Resolve dimensions
      if (baton->width <= 0) {
        baton->width = inputWidth;
      }
      if (baton->height <= 0) {
        baton->height = inputHeight;
      }

      // Crop/embed
      if (inputWidth != baton->width || inputHeight != baton->height) {
        if (baton->canvas == sharp::Canvas::EMBED) {
          std::vector<double> background;
          std::tie(image, background) = sharp::ApplyAlpha(image, baton->resizeBackground, shouldPremultiplyAlpha);

          // Embed
          int left;
          int top;
          std::tie(left, top) = sharp::CalculateEmbedPosition(
            inputWidth, inputHeight, baton->width, baton->height, baton->position);
          int width = std::max(inputWidth, baton->width);
          int height = std::max(inputHeight, baton->height);

          image = nPages > 1
            ? sharp::EmbedMultiPage(image,
                left, top, width, height, VIPS_EXTEND_BACKGROUND, background, nPages, &targetPageHeight)
            : image.embed(left, top, width, height, VImage::option()
              ->set("extend", VIPS_EXTEND_BACKGROUND)
              ->set("background", background));
        } else if (baton->canvas == sharp::Canvas::CROP) {
          if (baton->width > inputWidth) {
            baton->width = inputWidth;
          }
          if (baton->height > inputHeight) {
            baton->height = inputHeight;
          }

          // Crop
          if (baton->position < 9) {
            // Gravity-based crop
            int left;
            int top;

            std::tie(left, top) = sharp::CalculateCrop(
              inputWidth, inputHeight, baton->width, baton->height, baton->position);
            int width = std::min(inputWidth, baton->width);
            int height = std::min(inputHeight, baton->height);

            image = nPages > 1
              ? sharp::CropMultiPage(image,
                  left, top, width, height, nPages, &targetPageHeight)
              : image.extract_area(left, top, width, height);
          } else {
            int attention_x;
            int attention_y;

            // Attention-based or Entropy-based crop
            MultiPageUnsupported(nPages, "Resize strategy");
            image = sharp::StaySequential(image, access);
            image = image.smartcrop(baton->width, baton->height, VImage::option()
              ->set("interesting", baton->position == 16 ? VIPS_INTERESTING_ENTROPY : VIPS_INTERESTING_ATTENTION)
#if (VIPS_MAJOR_VERSION >= 8 && VIPS_MINOR_VERSION >= 15)
              ->set("premultiplied", shouldPremultiplyAlpha)
#endif
              ->set("attention_x", &attention_x)
              ->set("attention_y", &attention_y));
            baton->hasCropOffset = true;
            baton->cropOffsetLeft = static_cast<int>(image.xoffset());
            baton->cropOffsetTop = static_cast<int>(image.yoffset());
            baton->hasAttentionCenter = true;
            baton->attentionX = static_cast<int>(attention_x * jpegShrinkOnLoad / scale);
            baton->attentionY = static_cast<int>(attention_y * jpegShrinkOnLoad / scale);
          }
        }
      }

      // Rotate post-extract non-90 angle
      if (!baton->rotateBeforePreExtract && baton->rotationAngle != 0.0) {
        MultiPageUnsupported(nPages, "Rotate");
        image = sharp::StaySequential(image, access);
        std::vector<double> background;
        std::tie(image, background) = sharp::ApplyAlpha(image, baton->rotationBackground, shouldPremultiplyAlpha);
        image = image.rotate(baton->rotationAngle, VImage::option()->set("background", background));
      }

      // Post extraction
      if (baton->topOffsetPost != -1) {
        if (nPages > 1) {
          image = sharp::CropMultiPage(image,
            baton->leftOffsetPost, baton->topOffsetPost, baton->widthPost, baton->heightPost,
            nPages, &targetPageHeight);

          // heightPost is used in the info object, so update to reflect the number of pages
          baton->heightPost *= nPages;
        } else {
          image = image.extract_area(
            baton->leftOffsetPost, baton->topOffsetPost, baton->widthPost, baton->heightPost);
        }
      }

      // Affine transform
      if (!baton->affineMatrix.empty()) {
        MultiPageUnsupported(nPages, "Affine");
        image = sharp::StaySequential(image, access);
        std::vector<double> background;
        std::tie(image, background) = sharp::ApplyAlpha(image, baton->affineBackground, shouldPremultiplyAlpha);
        vips::VInterpolate interp = vips::VInterpolate::new_from_name(
          const_cast<char*>(baton->affineInterpolator.data()));
        image = image.affine(baton->affineMatrix, VImage::option()->set("background", background)
          ->set("idx", baton->affineIdx)
          ->set("idy", baton->affineIdy)
          ->set("odx", baton->affineOdx)
          ->set("ody", baton->affineOdy)
          ->set("interpolate", interp));
      }

      // Extend edges
      if (baton->extendTop > 0 || baton->extendBottom > 0 || baton->extendLeft > 0 || baton->extendRight > 0) {
        // Embed
        baton->width = image.width() + baton->extendLeft + baton->extendRight;
        baton->height = (nPages > 1 ? targetPageHeight : image.height()) + baton->extendTop + baton->extendBottom;

        if (baton->extendWith == VIPS_EXTEND_BACKGROUND) {
          std::vector<double> background;
          std::tie(image, background) = sharp::ApplyAlpha(image, baton->extendBackground, shouldPremultiplyAlpha);

          image = nPages > 1
            ? sharp::EmbedMultiPage(image,
                baton->extendLeft, baton->extendTop, baton->width, baton->height,
                baton->extendWith, background, nPages, &targetPageHeight)
            : image.embed(baton->extendLeft, baton->extendTop, baton->width, baton->height,
                VImage::option()->set("extend", baton->extendWith)->set("background", background));
        } else {
          std::vector<double> ignoredBackground(1);
          image = nPages > 1
            ? sharp::EmbedMultiPage(image,
                baton->extendLeft, baton->extendTop, baton->width, baton->height,
                baton->extendWith, ignoredBackground, nPages, &targetPageHeight)
            : image.embed(baton->extendLeft, baton->extendTop, baton->width, baton->height,
                VImage::option()->set("extend", baton->extendWith));
        }
      }
      // Median - must happen before blurring, due to the utility of blurring after thresholding
      if (baton->medianSize > 0) {
        image = image.median(baton->medianSize);
      }

      // Threshold - must happen before blurring, due to the utility of blurring after thresholding
      // Threshold - must happen before unflatten to enable non-white unflattening
      if (baton->threshold != 0) {
        image = sharp::Threshold(image, baton->threshold, baton->thresholdGrayscale);
      }

      // Blur
      if (shouldBlur) {
        image = sharp::Blur(image, baton->blurSigma);
      }

      // Unflatten the image
      if (baton->unflatten) {
        image = sharp::Unflatten(image);
      }

      // Convolve
      if (shouldConv) {
        image = sharp::Convolve(image,
          baton->convKernelWidth, baton->convKernelHeight,
          baton->convKernelScale, baton->convKernelOffset,
          baton->convKernel);
      }

      // Recomb
      if (baton->recombMatrix != NULL) {
        image = sharp::Recomb(image, baton->recombMatrix);
      }

      // Modulate
      if (baton->brightness != 1.0 || baton->saturation != 1.0 || baton->hue != 0.0 || baton->lightness != 0.0) {
        image = sharp::Modulate(image, baton->brightness, baton->saturation, baton->hue, baton->lightness);
      }

      // Sharpen
      if (shouldSharpen) {
        image = sharp::Sharpen(image, baton->sharpenSigma, baton->sharpenM1, baton->sharpenM2,
          baton->sharpenX1, baton->sharpenY2, baton->sharpenY3);
      }

      // Reverse premultiplication after all transformations
      if (shouldPremultiplyAlpha) {
        image = image.unpremultiply().cast(premultiplyFormat);
      }
      baton->premultiplied = shouldPremultiplyAlpha;

      // Composite
      if (shouldComposite) {
        std::vector<VImage> images = { image };
        std::vector<int> modes, xs, ys;
        for (Composite *composite : baton->composite) {
          VImage compositeImage;
          sharp::ImageType compositeImageType = sharp::ImageType::UNKNOWN;
          composite->input->access = access;
          std::tie(compositeImage, compositeImageType) = sharp::OpenInput(composite->input);
          compositeImage = sharp::EnsureColourspace(compositeImage, baton->colourspaceInput);
          // Verify within current dimensions
          if (compositeImage.width() > image.width() || compositeImage.height() > image.height()) {
            throw vips::VError("Image to composite must have same dimensions or smaller");
          }
          // Check if overlay is tiled
          if (composite->tile) {
            int across = 0;
            int down = 0;
            // Use gravity in overlay
            if (compositeImage.width() <= image.width()) {
              across = static_cast<int>(ceil(static_cast<double>(image.width()) / compositeImage.width()));
              // Ensure odd number of tiles across when gravity is centre, north or south
              if (composite->gravity == 0 || composite->gravity == 1 || composite->gravity == 3) {
                across |= 1;
              }
            }
            if (compositeImage.height() <= image.height()) {
              down = static_cast<int>(ceil(static_cast<double>(image.height()) / compositeImage.height()));
              // Ensure odd number of tiles down when gravity is centre, east or west
              if (composite->gravity == 0 || composite->gravity == 2 || composite->gravity == 4) {
                down |= 1;
              }
            }
            if (across != 0 || down != 0) {
              int left;
              int top;
              compositeImage = sharp::StaySequential(compositeImage, access).replicate(across, down);
              if (composite->hasOffset) {
                std::tie(left, top) = sharp::CalculateCrop(
                  compositeImage.width(), compositeImage.height(), image.width(), image.height(),
                  composite->left, composite->top);
              } else {
                std::tie(left, top) = sharp::CalculateCrop(
                  compositeImage.width(), compositeImage.height(), image.width(), image.height(), composite->gravity);
              }
              compositeImage = compositeImage.extract_area(left, top, image.width(), image.height());
            }
            // gravity was used for extract_area, set it back to its default value of 0
            composite->gravity = 0;
          }
          // Ensure image to composite is sRGB with unpremultiplied alpha
          compositeImage = compositeImage.colourspace(VIPS_INTERPRETATION_sRGB);
          if (!sharp::HasAlpha(compositeImage)) {
            compositeImage = sharp::EnsureAlpha(compositeImage, 1);
          }
          if (composite->premultiplied) compositeImage = compositeImage.unpremultiply();
          // Calculate position
          int left;
          int top;
          if (composite->hasOffset) {
            // Composite image at given offsets
            if (composite->tile) {
              std::tie(left, top) = sharp::CalculateCrop(image.width(), image.height(),
                compositeImage.width(), compositeImage.height(), composite->left, composite->top);
            } else {
              left = composite->left;
              top = composite->top;
            }
          } else {
            // Composite image with given gravity
            std::tie(left, top) = sharp::CalculateCrop(image.width(), image.height(),
              compositeImage.width(), compositeImage.height(), composite->gravity);
          }
          images.push_back(compositeImage);
          modes.push_back(composite->mode);
          xs.push_back(left);
          ys.push_back(top);
        }
        image = VImage::composite(images, modes, VImage::option()->set("x", xs)->set("y", ys));
        image = sharp::RemoveGifPalette(image);
      }

      // Gamma decoding (brighten)
      if (baton->gammaOut >= 1 && baton->gammaOut <= 3) {
        image = sharp::Gamma(image, baton->gammaOut);
      }

      // Linear adjustment (a * in + b)
      if (!baton->linearA.empty()) {
        image = sharp::Linear(image, baton->linearA, baton->linearB);
      }

      // Apply normalisation - stretch luminance to cover full dynamic range
      if (baton->normalise) {
        image = sharp::StaySequential(image, access);
        image = sharp::Normalise(image, baton->normaliseLower, baton->normaliseUpper);
      }

      // Apply contrast limiting adaptive histogram equalization (CLAHE)
      if (baton->claheWidth != 0 && baton->claheHeight != 0) {
        image = sharp::StaySequential(image, access);
        image = sharp::Clahe(image, baton->claheWidth, baton->claheHeight, baton->claheMaxSlope);
      }

      // Apply bitwise boolean operation between images
      if (baton->boolean != nullptr) {
        VImage booleanImage;
        sharp::ImageType booleanImageType = sharp::ImageType::UNKNOWN;
        baton->boolean->access = access;
        std::tie(booleanImage, booleanImageType) = sharp::OpenInput(baton->boolean);
        booleanImage = sharp::EnsureColourspace(booleanImage, baton->colourspaceInput);
        image = sharp::Boolean(image, booleanImage, baton->booleanOp);
        image = sharp::RemoveGifPalette(image);
      }

      // Apply per-channel Bandbool bitwise operations after all other operations
      if (baton->bandBoolOp >= VIPS_OPERATION_BOOLEAN_AND && baton->bandBoolOp < VIPS_OPERATION_BOOLEAN_LAST) {
        image = sharp::Bandbool(image, baton->bandBoolOp);
      }

      // Tint the image
      if (baton->tintA < 128.0 || baton->tintB < 128.0) {
        image = sharp::Tint(image, baton->tintA, baton->tintB);
      }

      // Remove alpha channel, if any
      if (baton->removeAlpha) {
        image = sharp::RemoveAlpha(image);
      }

      // Ensure alpha channel, if missing
      if (baton->ensureAlpha != -1) {
        image = sharp::EnsureAlpha(image, baton->ensureAlpha);
      }

      // Convert image to sRGB, if not already
      if (sharp::Is16Bit(image.interpretation())) {
        image = image.cast(VIPS_FORMAT_USHORT);
      }
      if (image.interpretation() != baton->colourspace) {
        // Convert colourspace, pass the current known interpretation so libvips doesn't have to guess
        image = image.colourspace(baton->colourspace, VImage::option()->set("source_space", image.interpretation()));
        // Transform colours from embedded profile to output profile
        if (baton->withMetadata && sharp::HasProfile(image) && baton->withMetadataIcc.empty()) {
          image = image.icc_transform("srgb", VImage::option()
            ->set("embedded", TRUE)
            ->set("depth", sharp::Is16Bit(image.interpretation()) ? 16 : 8)
            ->set("intent", VIPS_INTENT_PERCEPTUAL));
        }
      }

      // Extract channel
      if (baton->extractChannel > -1) {
        if (baton->extractChannel >= image.bands()) {
          if (baton->extractChannel == 3 && sharp::HasAlpha(image)) {
            baton->extractChannel = image.bands() - 1;
          } else {
            (baton->err)
              .append("Cannot extract channel ").append(std::to_string(baton->extractChannel))
              .append(" from image with channels 0-").append(std::to_string(image.bands() - 1));
            return Error();
          }
        }
        VipsInterpretation colourspace = sharp::Is16Bit(image.interpretation())
          ? VIPS_INTERPRETATION_GREY16
          : VIPS_INTERPRETATION_B_W;
        image = image
          .extract_band(baton->extractChannel)
          .copy(VImage::option()->set("interpretation", colourspace));
      }

      // Apply output ICC profile
      if (baton->withMetadata) {
        image = image.icc_transform(
          baton->withMetadataIcc.empty() ? "srgb" : const_cast<char*>(baton->withMetadataIcc.data()),
          VImage::option()
            ->set("input_profile", processingProfile)
            ->set("embedded", TRUE)
            ->set("depth", sharp::Is16Bit(image.interpretation()) ? 16 : 8)
            ->set("intent", VIPS_INTENT_PERCEPTUAL));
      }
      // Override EXIF Orientation tag
      if (baton->withMetadata && baton->withMetadataOrientation != -1) {
        image = sharp::SetExifOrientation(image, baton->withMetadataOrientation);
      }
      // Override pixel density
      if (baton->withMetadataDensity > 0) {
        image = sharp::SetDensity(image, baton->withMetadataDensity);
      }
      // Metadata key/value pairs, e.g. EXIF
      if (!baton->withMetadataStrs.empty()) {
        image = image.copy();
        for (const auto& s : baton->withMetadataStrs) {
          image.set(s.first.data(), s.second.data());
        }
      }

      // Number of channels used in output image
      baton->channels = image.bands();
      baton->width = image.width();
      baton->height = image.height();

      image = sharp::SetAnimationProperties(
        image, nPages, targetPageHeight, baton->delay, baton->loop);

      // Output
      sharp::SetTimeout(image, baton->timeoutSeconds);
      if (baton->fileOut.empty()) {
        // Buffer output
        if (baton->formatOut == "jpeg" || (baton->formatOut == "input" && inputImageType == sharp::ImageType::JPEG)) {
          // Write JPEG to buffer
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::JPEG);
          VipsArea *area = reinterpret_cast<VipsArea*>(image.jpegsave_buffer(VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("Q", baton->jpegQuality)
            ->set("interlace", baton->jpegProgressive)
            ->set("subsample_mode", baton->jpegChromaSubsampling == "4:4:4"
              ? VIPS_FOREIGN_SUBSAMPLE_OFF
              : VIPS_FOREIGN_SUBSAMPLE_ON)
            ->set("trellis_quant", baton->jpegTrellisQuantisation)
            ->set("quant_table", baton->jpegQuantisationTable)
            ->set("overshoot_deringing", baton->jpegOvershootDeringing)
            ->set("optimize_scans", baton->jpegOptimiseScans)
            ->set("optimize_coding", baton->jpegOptimiseCoding)));
          baton->bufferOut = static_cast<char*>(area->data);
          baton->bufferOutLength = area->length;
          area->free_fn = nullptr;
          vips_area_unref(area);
          baton->formatOut = "jpeg";
          if (baton->colourspace == VIPS_INTERPRETATION_CMYK) {
            baton->channels = std::min(baton->channels, 4);
          } else {
            baton->channels = std::min(baton->channels, 3);
          }
        } else if (baton->formatOut == "jp2" || (baton->formatOut == "input"
          && inputImageType == sharp::ImageType::JP2)) {
          // Write JP2 to Buffer
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::JP2);
          VipsArea *area = reinterpret_cast<VipsArea*>(image.jp2ksave_buffer(VImage::option()
            ->set("Q", baton->jp2Quality)
            ->set("lossless", baton->jp2Lossless)
            ->set("subsample_mode", baton->jp2ChromaSubsampling == "4:4:4"
              ? VIPS_FOREIGN_SUBSAMPLE_OFF : VIPS_FOREIGN_SUBSAMPLE_ON)
            ->set("tile_height", baton->jp2TileHeight)
            ->set("tile_width", baton->jp2TileWidth)));
          baton->bufferOut = static_cast<char*>(area->data);
          baton->bufferOutLength = area->length;
          area->free_fn = nullptr;
          vips_area_unref(area);
          baton->formatOut = "jp2";
        } else if (baton->formatOut == "png" || (baton->formatOut == "input" &&
          (inputImageType == sharp::ImageType::PNG || inputImageType == sharp::ImageType::SVG))) {
          // Write PNG to buffer
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::PNG);
          VipsArea *area = reinterpret_cast<VipsArea*>(image.pngsave_buffer(VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("interlace", baton->pngProgressive)
            ->set("compression", baton->pngCompressionLevel)
            ->set("filter", baton->pngAdaptiveFiltering ? VIPS_FOREIGN_PNG_FILTER_ALL : VIPS_FOREIGN_PNG_FILTER_NONE)
            ->set("palette", baton->pngPalette)
            ->set("Q", baton->pngQuality)
            ->set("effort", baton->pngEffort)
            ->set("bitdepth", sharp::Is16Bit(image.interpretation()) ? 16 : baton->pngBitdepth)
            ->set("dither", baton->pngDither)));
          baton->bufferOut = static_cast<char*>(area->data);
          baton->bufferOutLength = area->length;
          area->free_fn = nullptr;
          vips_area_unref(area);
          baton->formatOut = "png";
        } else if (baton->formatOut == "webp" ||
          (baton->formatOut == "input" && inputImageType == sharp::ImageType::WEBP)) {
          // Write WEBP to buffer
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::WEBP);
          VipsArea *area = reinterpret_cast<VipsArea*>(image.webpsave_buffer(VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("Q", baton->webpQuality)
            ->set("lossless", baton->webpLossless)
            ->set("near_lossless", baton->webpNearLossless)
            ->set("smart_subsample", baton->webpSmartSubsample)
            ->set("preset", baton->webpPreset)
            ->set("effort", baton->webpEffort)
            ->set("min_size", baton->webpMinSize)
            ->set("mixed", baton->webpMixed)
            ->set("alpha_q", baton->webpAlphaQuality)));
          baton->bufferOut = static_cast<char*>(area->data);
          baton->bufferOutLength = area->length;
          area->free_fn = nullptr;
          vips_area_unref(area);
          baton->formatOut = "webp";
        } else if (baton->formatOut == "gif" ||
          (baton->formatOut == "input" && inputImageType == sharp::ImageType::GIF)) {
          // Write GIF to buffer
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::GIF);
          VipsArea *area = reinterpret_cast<VipsArea*>(image.gifsave_buffer(VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("bitdepth", baton->gifBitdepth)
            ->set("effort", baton->gifEffort)
            ->set("reuse", baton->gifReuse)
            ->set("interlace", baton->gifProgressive)
            ->set("interframe_maxerror", baton->gifInterFrameMaxError)
            ->set("interpalette_maxerror", baton->gifInterPaletteMaxError)
            ->set("dither", baton->gifDither)));
          baton->bufferOut = static_cast<char*>(area->data);
          baton->bufferOutLength = area->length;
          area->free_fn = nullptr;
          vips_area_unref(area);
          baton->formatOut = "gif";
        } else if (baton->formatOut == "tiff" ||
          (baton->formatOut == "input" && inputImageType == sharp::ImageType::TIFF)) {
          // Write TIFF to buffer
          if (baton->tiffCompression == VIPS_FOREIGN_TIFF_COMPRESSION_JPEG) {
            sharp::AssertImageTypeDimensions(image, sharp::ImageType::JPEG);
            baton->channels = std::min(baton->channels, 3);
          }
          // Cast pixel values to float, if required
          if (baton->tiffPredictor == VIPS_FOREIGN_TIFF_PREDICTOR_FLOAT) {
            image = image.cast(VIPS_FORMAT_FLOAT);
          }
          VipsArea *area = reinterpret_cast<VipsArea*>(image.tiffsave_buffer(VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("Q", baton->tiffQuality)
            ->set("bitdepth", baton->tiffBitdepth)
            ->set("compression", baton->tiffCompression)
            ->set("predictor", baton->tiffPredictor)
            ->set("pyramid", baton->tiffPyramid)
            ->set("tile", baton->tiffTile)
            ->set("tile_height", baton->tiffTileHeight)
            ->set("tile_width", baton->tiffTileWidth)
            ->set("xres", baton->tiffXres)
            ->set("yres", baton->tiffYres)
            ->set("resunit", baton->tiffResolutionUnit)));
          baton->bufferOut = static_cast<char*>(area->data);
          baton->bufferOutLength = area->length;
          area->free_fn = nullptr;
          vips_area_unref(area);
          baton->formatOut = "tiff";
        } else if (baton->formatOut == "heif" ||
          (baton->formatOut == "input" && inputImageType == sharp::ImageType::HEIF)) {
          // Write HEIF to buffer
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::HEIF);
          image = sharp::RemoveAnimationProperties(image).cast(VIPS_FORMAT_UCHAR);
          VipsArea *area = reinterpret_cast<VipsArea*>(image.heifsave_buffer(VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("Q", baton->heifQuality)
            ->set("compression", baton->heifCompression)
            ->set("effort", baton->heifEffort)
            ->set("bitdepth", 8)
            ->set("subsample_mode", baton->heifChromaSubsampling == "4:4:4"
              ? VIPS_FOREIGN_SUBSAMPLE_OFF : VIPS_FOREIGN_SUBSAMPLE_ON)
            ->set("lossless", baton->heifLossless)));
          baton->bufferOut = static_cast<char*>(area->data);
          baton->bufferOutLength = area->length;
          area->free_fn = nullptr;
          vips_area_unref(area);
          baton->formatOut = "heif";
        } else if (baton->formatOut == "dz") {
          // Write DZ to buffer
          baton->tileContainer = VIPS_FOREIGN_DZ_CONTAINER_ZIP;
          if (!sharp::HasAlpha(image)) {
            baton->tileBackground.pop_back();
          }
          image = sharp::StaySequential(image, access, baton->tileAngle != 0);
          vips::VOption *options = BuildOptionsDZ(baton);
          VipsArea *area = reinterpret_cast<VipsArea*>(image.dzsave_buffer(options));
          baton->bufferOut = static_cast<char*>(area->data);
          baton->bufferOutLength = area->length;
          area->free_fn = nullptr;
          vips_area_unref(area);
          baton->formatOut = "dz";
        } else if (baton->formatOut == "jxl" ||
          (baton->formatOut == "input" && inputImageType == sharp::ImageType::JXL)) {
          // Write JXL to buffer
          image = sharp::RemoveAnimationProperties(image);
          VipsArea *area = reinterpret_cast<VipsArea*>(image.jxlsave_buffer(VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("distance", baton->jxlDistance)
            ->set("tier", baton->jxlDecodingTier)
            ->set("effort", baton->jxlEffort)
            ->set("lossless", baton->jxlLossless)));
          baton->bufferOut = static_cast<char*>(area->data);
          baton->bufferOutLength = area->length;
          area->free_fn = nullptr;
          vips_area_unref(area);
          baton->formatOut = "jxl";
        } else if (baton->formatOut == "raw" ||
          (baton->formatOut == "input" && inputImageType == sharp::ImageType::RAW)) {
          // Write raw, uncompressed image data to buffer
          if (baton->greyscale || image.interpretation() == VIPS_INTERPRETATION_B_W) {
            // Extract first band for greyscale image
            image = image[0];
            baton->channels = 1;
          }
          if (image.format() != baton->rawDepth) {
            // Cast pixels to requested format
            image = image.cast(baton->rawDepth);
          }
          // Get raw image data
          baton->bufferOut = static_cast<char*>(image.write_to_memory(&baton->bufferOutLength));
          if (baton->bufferOut == nullptr) {
            (baton->err).append("Could not allocate enough memory for raw output");
            return Error();
          }
          baton->formatOut = "raw";
        } else {
          // Unsupported output format
          (baton->err).append("Unsupported output format ");
          if (baton->formatOut == "input") {
            (baton->err).append(ImageTypeId(inputImageType));
          } else {
            (baton->err).append(baton->formatOut);
          }
          return Error();
        }
      } else {
        // File output
        bool const isJpeg = sharp::IsJpeg(baton->fileOut);
        bool const isPng = sharp::IsPng(baton->fileOut);
        bool const isWebp = sharp::IsWebp(baton->fileOut);
        bool const isGif = sharp::IsGif(baton->fileOut);
        bool const isTiff = sharp::IsTiff(baton->fileOut);
        bool const isJp2 = sharp::IsJp2(baton->fileOut);
        bool const isHeif = sharp::IsHeif(baton->fileOut);
        bool const isJxl = sharp::IsJxl(baton->fileOut);
        bool const isDz = sharp::IsDz(baton->fileOut);
        bool const isDzZip = sharp::IsDzZip(baton->fileOut);
        bool const isV = sharp::IsV(baton->fileOut);
        bool const mightMatchInput = baton->formatOut == "input";
        bool const willMatchInput = mightMatchInput &&
         !(isJpeg || isPng || isWebp || isGif || isTiff || isJp2 || isHeif || isDz || isDzZip || isV);

        if (baton->formatOut == "jpeg" || (mightMatchInput && isJpeg) ||
          (willMatchInput && inputImageType == sharp::ImageType::JPEG)) {
          // Write JPEG to file
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::JPEG);
          image.jpegsave(const_cast<char*>(baton->fileOut.data()), VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("Q", baton->jpegQuality)
            ->set("interlace", baton->jpegProgressive)
            ->set("subsample_mode", baton->jpegChromaSubsampling == "4:4:4"
              ? VIPS_FOREIGN_SUBSAMPLE_OFF
              : VIPS_FOREIGN_SUBSAMPLE_ON)
            ->set("trellis_quant", baton->jpegTrellisQuantisation)
            ->set("quant_table", baton->jpegQuantisationTable)
            ->set("overshoot_deringing", baton->jpegOvershootDeringing)
            ->set("optimize_scans", baton->jpegOptimiseScans)
            ->set("optimize_coding", baton->jpegOptimiseCoding));
          baton->formatOut = "jpeg";
          baton->channels = std::min(baton->channels, 3);
        } else if (baton->formatOut == "jp2" || (mightMatchInput && isJp2) ||
          (willMatchInput && (inputImageType == sharp::ImageType::JP2))) {
          // Write JP2 to file
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::JP2);
          image.jp2ksave(const_cast<char*>(baton->fileOut.data()), VImage::option()
            ->set("Q", baton->jp2Quality)
            ->set("lossless", baton->jp2Lossless)
            ->set("subsample_mode", baton->jp2ChromaSubsampling == "4:4:4"
              ? VIPS_FOREIGN_SUBSAMPLE_OFF : VIPS_FOREIGN_SUBSAMPLE_ON)
            ->set("tile_height", baton->jp2TileHeight)
            ->set("tile_width", baton->jp2TileWidth));
            baton->formatOut = "jp2";
        } else if (baton->formatOut == "png" || (mightMatchInput && isPng) || (willMatchInput &&
          (inputImageType == sharp::ImageType::PNG || inputImageType == sharp::ImageType::SVG))) {
          // Write PNG to file
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::PNG);
          image.pngsave(const_cast<char*>(baton->fileOut.data()), VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("interlace", baton->pngProgressive)
            ->set("compression", baton->pngCompressionLevel)
            ->set("filter", baton->pngAdaptiveFiltering ? VIPS_FOREIGN_PNG_FILTER_ALL : VIPS_FOREIGN_PNG_FILTER_NONE)
            ->set("palette", baton->pngPalette)
            ->set("Q", baton->pngQuality)
            ->set("bitdepth", sharp::Is16Bit(image.interpretation()) ? 16 : baton->pngBitdepth)
            ->set("effort", baton->pngEffort)
            ->set("dither", baton->pngDither));
          baton->formatOut = "png";
        } else if (baton->formatOut == "webp" || (mightMatchInput && isWebp) ||
          (willMatchInput && inputImageType == sharp::ImageType::WEBP)) {
          // Write WEBP to file
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::WEBP);
          image.webpsave(const_cast<char*>(baton->fileOut.data()), VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("Q", baton->webpQuality)
            ->set("lossless", baton->webpLossless)
            ->set("near_lossless", baton->webpNearLossless)
            ->set("smart_subsample", baton->webpSmartSubsample)
            ->set("preset", baton->webpPreset)
            ->set("effort", baton->webpEffort)
            ->set("min_size", baton->webpMinSize)
            ->set("mixed", baton->webpMixed)
            ->set("alpha_q", baton->webpAlphaQuality));
          baton->formatOut = "webp";
        } else if (baton->formatOut == "gif" || (mightMatchInput && isGif) ||
          (willMatchInput && inputImageType == sharp::ImageType::GIF)) {
          // Write GIF to file
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::GIF);
          image.gifsave(const_cast<char*>(baton->fileOut.data()), VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("bitdepth", baton->gifBitdepth)
            ->set("effort", baton->gifEffort)
            ->set("reuse", baton->gifReuse)
            ->set("interlace", baton->gifProgressive)
            ->set("dither", baton->gifDither));
          baton->formatOut = "gif";
        } else if (baton->formatOut == "tiff" || (mightMatchInput && isTiff) ||
          (willMatchInput && inputImageType == sharp::ImageType::TIFF)) {
          // Write TIFF to file
          if (baton->tiffCompression == VIPS_FOREIGN_TIFF_COMPRESSION_JPEG) {
            sharp::AssertImageTypeDimensions(image, sharp::ImageType::JPEG);
            baton->channels = std::min(baton->channels, 3);
          }
          // Cast pixel values to float, if required
          if (baton->tiffPredictor == VIPS_FOREIGN_TIFF_PREDICTOR_FLOAT) {
            image = image.cast(VIPS_FORMAT_FLOAT);
          }
          image.tiffsave(const_cast<char*>(baton->fileOut.data()), VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("Q", baton->tiffQuality)
            ->set("bitdepth", baton->tiffBitdepth)
            ->set("compression", baton->tiffCompression)
            ->set("predictor", baton->tiffPredictor)
            ->set("pyramid", baton->tiffPyramid)
            ->set("tile", baton->tiffTile)
            ->set("tile_height", baton->tiffTileHeight)
            ->set("tile_width", baton->tiffTileWidth)
            ->set("xres", baton->tiffXres)
            ->set("yres", baton->tiffYres)
            ->set("resunit", baton->tiffResolutionUnit));
          baton->formatOut = "tiff";
        } else if (baton->formatOut == "heif" || (mightMatchInput && isHeif) ||
          (willMatchInput && inputImageType == sharp::ImageType::HEIF)) {
          // Write HEIF to file
          sharp::AssertImageTypeDimensions(image, sharp::ImageType::HEIF);
          image = sharp::RemoveAnimationProperties(image).cast(VIPS_FORMAT_UCHAR);
          image.heifsave(const_cast<char*>(baton->fileOut.data()), VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("Q", baton->heifQuality)
            ->set("compression", baton->heifCompression)
            ->set("effort", baton->heifEffort)
            ->set("bitdepth", 8)
            ->set("subsample_mode", baton->heifChromaSubsampling == "4:4:4"
              ? VIPS_FOREIGN_SUBSAMPLE_OFF : VIPS_FOREIGN_SUBSAMPLE_ON)
            ->set("lossless", baton->heifLossless));
          baton->formatOut = "heif";
        } else if (baton->formatOut == "jxl" || (mightMatchInput && isJxl) ||
          (willMatchInput && inputImageType == sharp::ImageType::JXL)) {
          // Write JXL to file
          image = sharp::RemoveAnimationProperties(image);
          image.jxlsave(const_cast<char*>(baton->fileOut.data()), VImage::option()
            ->set("strip", !baton->withMetadata)
            ->set("distance", baton->jxlDistance)
            ->set("tier", baton->jxlDecodingTier)
            ->set("effort", baton->jxlEffort)
            ->set("lossless", baton->jxlLossless));
          baton->formatOut = "jxl";
        } else if (baton->formatOut == "dz" || isDz || isDzZip) {
          // Write DZ to file
          if (isDzZip) {
            baton->tileContainer = VIPS_FOREIGN_DZ_CONTAINER_ZIP;
          }
          if (!sharp::HasAlpha(image)) {
            baton->tileBackground.pop_back();
          }
          image = sharp::StaySequential(image, access, baton->tileAngle != 0);
          vips::VOption *options = BuildOptionsDZ(baton);
          image.dzsave(const_cast<char*>(baton->fileOut.data()), options);
          baton->formatOut = "dz";
        } else if (baton->formatOut == "v" || (mightMatchInput && isV) ||
          (willMatchInput && inputImageType == sharp::ImageType::VIPS)) {
          // Write V to file
          image.vipssave(const_cast<char*>(baton->fileOut.data()), VImage::option()
            ->set("strip", !baton->withMetadata));
          baton->formatOut = "v";
        } else {
          // Unsupported output format
          (baton->err).append("Unsupported output format " + baton->fileOut);
          return Error();
        }
      }
    } catch (vips::VError const &err) {
      char const *what = err.what();
      if (what && what[0]) {
        (baton->err).append(what);
      } else {
        (baton->err).append("Unknown error");
      }
    }
    // Clean up libvips' per-request data and threads
    vips_error_clear();
    vips_thread_shutdown();
  }

  void OnOK() {
    Napi::Env env = Env();
    Napi::HandleScope scope(env);

    // Handle warnings
    std::string warning = sharp::VipsWarningPop();
    while (!warning.empty()) {
      debuglog.MakeCallback(Receiver().Value(), { Napi::String::New(env, warning) });
      warning = sharp::VipsWarningPop();
    }

    if (baton->err.empty()) {
      int width = baton->width;
      int height = baton->height;
      if (baton->topOffsetPre != -1 && (baton->width == -1 || baton->height == -1)) {
        width = baton->widthPre;
        height = baton->heightPre;
      }
      if (baton->topOffsetPost != -1) {
        width = baton->widthPost;
        height = baton->heightPost;
      }
      // Info Object
      Napi::Object info = Napi::Object::New(env);
      info.Set("format", baton->formatOut);
      info.Set("width", static_cast<uint32_t>(width));
      info.Set("height", static_cast<uint32_t>(height));
      info.Set("channels", static_cast<uint32_t>(baton->channels));
      if (baton->formatOut == "raw") {
        info.Set("depth", vips_enum_nick(VIPS_TYPE_BAND_FORMAT, baton->rawDepth));
      }
      info.Set("premultiplied", baton->premultiplied);
      if (baton->hasCropOffset) {
        info.Set("cropOffsetLeft", static_cast<int32_t>(baton->cropOffsetLeft));
        info.Set("cropOffsetTop", static_cast<int32_t>(baton->cropOffsetTop));
      }
      if (baton->hasAttentionCenter) {
        info.Set("attentionX", static_cast<int32_t>(baton->attentionX));
        info.Set("attentionY", static_cast<int32_t>(baton->attentionY));
      }
      if (baton->trimThreshold > 0.0) {
        info.Set("trimOffsetLeft", static_cast<int32_t>(baton->trimOffsetLeft));
        info.Set("trimOffsetTop", static_cast<int32_t>(baton->trimOffsetTop));
      }

      if (baton->input->textAutofitDpi) {
        info.Set("textAutofitDpi", static_cast<uint32_t>(baton->input->textAutofitDpi));
      }

      if (baton->bufferOutLength > 0) {
        // Add buffer size to info
        info.Set("size", static_cast<uint32_t>(baton->bufferOutLength));
        // Pass ownership of output data to Buffer instance
        Napi::Buffer<char> data = Napi::Buffer<char>::NewOrCopy(env, static_cast<char*>(baton->bufferOut),
          baton->bufferOutLength, sharp::FreeCallback);
        Callback().MakeCallback(Receiver().Value(), { env.Null(), data, info });
      } else {
        // Add file size to info
        struct STAT64_STRUCT st;
        if (STAT64_FUNCTION(baton->fileOut.data(), &st) == 0) {
          info.Set("size", static_cast<uint32_t>(st.st_size));
        }
        Callback().MakeCallback(Receiver().Value(), { env.Null(), info });
      }
    } else {
      Callback().MakeCallback(Receiver().Value(), { Napi::Error::New(env, sharp::TrimEnd(baton->err)).Value() });
    }

    // Delete baton
    delete baton->input;
    delete baton->boolean;
    for (Composite *composite : baton->composite) {
      delete composite->input;
      delete composite;
    }
    for (sharp::InputDescriptor *input : baton->joinChannelIn) {
      delete input;
    }
    delete baton;

    // Decrement processing task counter
    g_atomic_int_dec_and_test(&sharp::counterProcess);
    Napi::Number queueLength = Napi::Number::New(env, static_cast<double>(sharp::counterQueue));
    queueListener.MakeCallback(Receiver().Value(), { queueLength });
  }

 private:
  PipelineBaton *baton;
  Napi::FunctionReference debuglog;
  Napi::FunctionReference queueListener;

  void MultiPageUnsupported(int const pages, std::string op) {
    if (pages > 1) {
      throw vips::VError(op + " is not supported for multi-page images");
    }
  }

  /*
    Calculate the angle of rotation and need-to-flip for the given Exif orientation
    By default, returns zero, i.e. no rotation.
  */
  std::tuple<VipsAngle, bool, bool>
  CalculateExifRotationAndFlip(int const exifOrientation) {
    VipsAngle rotate = VIPS_ANGLE_D0;
    bool flip = FALSE;
    bool flop = FALSE;
    switch (exifOrientation) {
      case 6: rotate = VIPS_ANGLE_D90; break;
      case 3: rotate = VIPS_ANGLE_D180; break;
      case 8: rotate = VIPS_ANGLE_D270; break;
      case 2: flop = TRUE; break;  // flop 1
      case 7: flip = TRUE; rotate = VIPS_ANGLE_D90; break;  // flip 6
      case 4: flop = TRUE; rotate = VIPS_ANGLE_D180; break;  // flop 3
      case 5: flip = TRUE; rotate = VIPS_ANGLE_D270; break;  // flip 8
    }
    return std::make_tuple(rotate, flip, flop);
  }

  /*
    Calculate the rotation for the given angle.
    Supports any positive or negative angle that is a multiple of 90.
  */
  VipsAngle
  CalculateAngleRotation(int angle) {
    angle = angle % 360;
    if (angle < 0)
      angle = 360 + angle;
    switch (angle) {
      case 90: return VIPS_ANGLE_D90;
      case 180: return VIPS_ANGLE_D180;
      case 270: return VIPS_ANGLE_D270;
    }
    return VIPS_ANGLE_D0;
  }

  /*
    Assemble the suffix argument to dzsave, which is the format (by extname)
    alongside comma-separated arguments to the corresponding `formatsave` vips
    action.
  */
  std::string
  AssembleSuffixString(std::string extname, std::vector<std::pair<std::string, std::string>> options) {
    std::string argument;
    for (auto const &option : options) {
      if (!argument.empty()) {
        argument += ",";
      }
      argument += option.first + "=" + option.second;
    }
    return extname + "[" + argument + "]";
  }

  /*
    Build VOption for dzsave
  */
  vips::VOption*
  BuildOptionsDZ(PipelineBaton *baton) {
    // Forward format options through suffix
    std::string suffix;
    if (baton->tileFormat == "png") {
      std::vector<std::pair<std::string, std::string>> options {
        {"interlace", baton->pngProgressive ? "TRUE" : "FALSE"},
        {"compression", std::to_string(baton->pngCompressionLevel)},
        {"filter", baton->pngAdaptiveFiltering ? "all" : "none"}
      };
      suffix = AssembleSuffixString(".png", options);
    } else if (baton->tileFormat == "webp") {
      std::vector<std::pair<std::string, std::string>> options {
        {"Q", std::to_string(baton->webpQuality)},
        {"alpha_q", std::to_string(baton->webpAlphaQuality)},
        {"lossless", baton->webpLossless ? "TRUE" : "FALSE"},
        {"near_lossless", baton->webpNearLossless ? "TRUE" : "FALSE"},
        {"smart_subsample", baton->webpSmartSubsample ? "TRUE" : "FALSE"},
        {"preset", vips_enum_nick(VIPS_TYPE_FOREIGN_WEBP_PRESET, baton->webpPreset)},
        {"min_size", baton->webpMinSize ? "TRUE" : "FALSE"},
        {"mixed", baton->webpMixed ? "TRUE" : "FALSE"},
        {"effort", std::to_string(baton->webpEffort)}
      };
      suffix = AssembleSuffixString(".webp", options);
    } else {
      std::vector<std::pair<std::string, std::string>> options {
        {"Q", std::to_string(baton->jpegQuality)},
        {"interlace", baton->jpegProgressive ? "TRUE" : "FALSE"},
        {"subsample_mode", baton->jpegChromaSubsampling == "4:4:4" ? "off" : "on"},
        {"trellis_quant", baton->jpegTrellisQuantisation ? "TRUE" : "FALSE"},
        {"quant_table", std::to_string(baton->jpegQuantisationTable)},
        {"overshoot_deringing", baton->jpegOvershootDeringing ? "TRUE": "FALSE"},
        {"optimize_scans", baton->jpegOptimiseScans ? "TRUE": "FALSE"},
        {"optimize_coding", baton->jpegOptimiseCoding ? "TRUE": "FALSE"}
      };
      std::string extname = baton->tileLayout == VIPS_FOREIGN_DZ_LAYOUT_DZ ? ".jpeg" : ".jpg";
      suffix = AssembleSuffixString(extname, options);
    }
    vips::VOption *options = VImage::option()
      ->set("strip", !baton->withMetadata)
      ->set("tile_size", baton->tileSize)
      ->set("overlap", baton->tileOverlap)
      ->set("container", baton->tileContainer)
      ->set("layout", baton->tileLayout)
      ->set("suffix", const_cast<char*>(suffix.data()))
      ->set("angle", CalculateAngleRotation(baton->tileAngle))
      ->set("background", baton->tileBackground)
      ->set("centre", baton->tileCentre)
      ->set("id", const_cast<char*>(baton->tileId.data()))
      ->set("skip_blanks", baton->tileSkipBlanks);
    if (baton->tileDepth < VIPS_FOREIGN_DZ_DEPTH_LAST) {
      options->set("depth", baton->tileDepth);
    }
    if (!baton->tileBasename.empty()) {
      options->set("basename", const_cast<char*>(baton->tileBasename.data()));
    }
    return options;
  }

  /*
    Clear all thread-local data.
  */
  void Error() {
    // Clean up libvips' per-request data and threads
    vips_error_clear();
    vips_thread_shutdown();
  }
};

/*
  pipeline(options, output, callback)
*/
Napi::Value pipeline(const Napi::CallbackInfo& info) {
  // V8 objects are converted to non-V8 types held in the baton struct
  PipelineBaton *baton = new PipelineBaton;
  Napi::Object options = info[size_t(0)].As<Napi::Object>();

  // Input
  baton->input = sharp::CreateInputDescriptor(options.Get("input").As<Napi::Object>());
  // Extract image options
  baton->topOffsetPre = sharp::AttrAsInt32(options, "topOffsetPre");
  baton->leftOffsetPre = sharp::AttrAsInt32(options, "leftOffsetPre");
  baton->widthPre = sharp::AttrAsInt32(options, "widthPre");
  baton->heightPre = sharp::AttrAsInt32(options, "heightPre");
  baton->topOffsetPost = sharp::AttrAsInt32(options, "topOffsetPost");
  baton->leftOffsetPost = sharp::AttrAsInt32(options, "leftOffsetPost");
  baton->widthPost = sharp::AttrAsInt32(options, "widthPost");
  baton->heightPost = sharp::AttrAsInt32(options, "heightPost");
  // Output image dimensions
  baton->width = sharp::AttrAsInt32(options, "width");
  baton->height = sharp::AttrAsInt32(options, "height");
  // Canvas option
  std::string canvas = sharp::AttrAsStr(options, "canvas");
  if (canvas == "crop") {
    baton->canvas = sharp::Canvas::CROP;
  } else if (canvas == "embed") {
    baton->canvas = sharp::Canvas::EMBED;
  } else if (canvas == "max") {
    baton->canvas = sharp::Canvas::MAX;
  } else if (canvas == "min") {
    baton->canvas = sharp::Canvas::MIN;
  } else if (canvas == "ignore_aspect") {
    baton->canvas = sharp::Canvas::IGNORE_ASPECT;
  }
  // Composite
  Napi::Array compositeArray = options.Get("composite").As<Napi::Array>();
  for (unsigned int i = 0; i < compositeArray.Length(); i++) {
    Napi::Object compositeObject = compositeArray.Get(i).As<Napi::Object>();
    Composite *composite = new Composite;
    composite->input = sharp::CreateInputDescriptor(compositeObject.Get("input").As<Napi::Object>());
    composite->mode = sharp::AttrAsEnum<VipsBlendMode>(compositeObject, "blend", VIPS_TYPE_BLEND_MODE);
    composite->gravity = sharp::AttrAsUint32(compositeObject, "gravity");
    composite->left = sharp::AttrAsInt32(compositeObject, "left");
    composite->top = sharp::AttrAsInt32(compositeObject, "top");
    composite->hasOffset = sharp::AttrAsBool(compositeObject, "hasOffset");
    composite->tile = sharp::AttrAsBool(compositeObject, "tile");
    composite->premultiplied = sharp::AttrAsBool(compositeObject, "premultiplied");
    baton->composite.push_back(composite);
  }
  // Resize options
  baton->withoutEnlargement = sharp::AttrAsBool(options, "withoutEnlargement");
  baton->withoutReduction = sharp::AttrAsBool(options, "withoutReduction");
  baton->position = sharp::AttrAsInt32(options, "position");
  baton->resizeBackground = sharp::AttrAsVectorOfDouble(options, "resizeBackground");
  baton->kernel = sharp::AttrAsEnum<VipsKernel>(options, "kernel", VIPS_TYPE_KERNEL);
  baton->fastShrinkOnLoad = sharp::AttrAsBool(options, "fastShrinkOnLoad");
  // Join Channel Options
  if (options.Has("joinChannelIn")) {
    Napi::Array joinChannelArray = options.Get("joinChannelIn").As<Napi::Array>();
    for (unsigned int i = 0; i < joinChannelArray.Length(); i++) {
      baton->joinChannelIn.push_back(
        sharp::CreateInputDescriptor(joinChannelArray.Get(i).As<Napi::Object>()));
    }
  }
  // Operators
  baton->flatten = sharp::AttrAsBool(options, "flatten");
  baton->flattenBackground = sharp::AttrAsVectorOfDouble(options, "flattenBackground");
  baton->unflatten = sharp::AttrAsBool(options, "unflatten");
  baton->negate = sharp::AttrAsBool(options, "negate");
  baton->negateAlpha = sharp::AttrAsBool(options, "negateAlpha");
  baton->blurSigma = sharp::AttrAsDouble(options, "blurSigma");
  baton->brightness = sharp::AttrAsDouble(options, "brightness");
  baton->saturation = sharp::AttrAsDouble(options, "saturation");
  baton->hue = sharp::AttrAsInt32(options, "hue");
  baton->lightness = sharp::AttrAsDouble(options, "lightness");
  baton->medianSize = sharp::AttrAsUint32(options, "medianSize");
  baton->sharpenSigma = sharp::AttrAsDouble(options, "sharpenSigma");
  baton->sharpenM1 = sharp::AttrAsDouble(options, "sharpenM1");
  baton->sharpenM2 = sharp::AttrAsDouble(options, "sharpenM2");
  baton->sharpenX1 = sharp::AttrAsDouble(options, "sharpenX1");
  baton->sharpenY2 = sharp::AttrAsDouble(options, "sharpenY2");
  baton->sharpenY3 = sharp::AttrAsDouble(options, "sharpenY3");
  baton->threshold = sharp::AttrAsInt32(options, "threshold");
  baton->thresholdGrayscale = sharp::AttrAsBool(options, "thresholdGrayscale");
  baton->trimBackground = sharp::AttrAsVectorOfDouble(options, "trimBackground");
  baton->trimThreshold = sharp::AttrAsDouble(options, "trimThreshold");
  baton->gamma = sharp::AttrAsDouble(options, "gamma");
  baton->gammaOut = sharp::AttrAsDouble(options, "gammaOut");
  baton->linearA = sharp::AttrAsVectorOfDouble(options, "linearA");
  baton->linearB = sharp::AttrAsVectorOfDouble(options, "linearB");
  baton->greyscale = sharp::AttrAsBool(options, "greyscale");
  baton->normalise = sharp::AttrAsBool(options, "normalise");
  baton->normaliseLower = sharp::AttrAsUint32(options, "normaliseLower");
  baton->normaliseUpper = sharp::AttrAsUint32(options, "normaliseUpper");
  baton->tintA = sharp::AttrAsDouble(options, "tintA");
  baton->tintB = sharp::AttrAsDouble(options, "tintB");
  baton->claheWidth = sharp::AttrAsUint32(options, "claheWidth");
  baton->claheHeight = sharp::AttrAsUint32(options, "claheHeight");
  baton->claheMaxSlope = sharp::AttrAsUint32(options, "claheMaxSlope");
  baton->useExifOrientation = sharp::AttrAsBool(options, "useExifOrientation");
  baton->angle = sharp::AttrAsInt32(options, "angle");
  baton->rotationAngle = sharp::AttrAsDouble(options, "rotationAngle");
  baton->rotationBackground = sharp::AttrAsVectorOfDouble(options, "rotationBackground");
  baton->rotateBeforePreExtract = sharp::AttrAsBool(options, "rotateBeforePreExtract");
  baton->flip = sharp::AttrAsBool(options, "flip");
  baton->flop = sharp::AttrAsBool(options, "flop");
  baton->extendTop = sharp::AttrAsInt32(options, "extendTop");
  baton->extendBottom = sharp::AttrAsInt32(options, "extendBottom");
  baton->extendLeft = sharp::AttrAsInt32(options, "extendLeft");
  baton->extendRight = sharp::AttrAsInt32(options, "extendRight");
  baton->extendBackground = sharp::AttrAsVectorOfDouble(options, "extendBackground");
  baton->extendWith = sharp::AttrAsEnum<VipsExtend>(options, "extendWith", VIPS_TYPE_EXTEND);
  baton->extractChannel = sharp::AttrAsInt32(options, "extractChannel");
  baton->affineMatrix = sharp::AttrAsVectorOfDouble(options, "affineMatrix");
  baton->affineBackground = sharp::AttrAsVectorOfDouble(options, "affineBackground");
  baton->affineIdx = sharp::AttrAsDouble(options, "affineIdx");
  baton->affineIdy = sharp::AttrAsDouble(options, "affineIdy");
  baton->affineOdx = sharp::AttrAsDouble(options, "affineOdx");
  baton->affineOdy = sharp::AttrAsDouble(options, "affineOdy");
  baton->affineInterpolator = sharp::AttrAsStr(options, "affineInterpolator");
  baton->removeAlpha = sharp::AttrAsBool(options, "removeAlpha");
  baton->ensureAlpha = sharp::AttrAsDouble(options, "ensureAlpha");
  if (options.Has("boolean")) {
    baton->boolean = sharp::CreateInputDescriptor(options.Get("boolean").As<Napi::Object>());
    baton->booleanOp = sharp::AttrAsEnum<VipsOperationBoolean>(options, "booleanOp", VIPS_TYPE_OPERATION_BOOLEAN);
  }
  if (options.Has("bandBoolOp")) {
    baton->bandBoolOp = sharp::AttrAsEnum<VipsOperationBoolean>(options, "bandBoolOp", VIPS_TYPE_OPERATION_BOOLEAN);
  }
  if (options.Has("convKernel")) {
    Napi::Object kernel = options.Get("convKernel").As<Napi::Object>();
    baton->convKernelWidth = sharp::AttrAsUint32(kernel, "width");
    baton->convKernelHeight = sharp::AttrAsUint32(kernel, "height");
    baton->convKernelScale = sharp::AttrAsDouble(kernel, "scale");
    baton->convKernelOffset = sharp::AttrAsDouble(kernel, "offset");
    size_t const kernelSize = static_cast<size_t>(baton->convKernelWidth * baton->convKernelHeight);
    baton->convKernel = std::unique_ptr<double[]>(new double[kernelSize]);
    Napi::Array kdata = kernel.Get("kernel").As<Napi::Array>();
    for (unsigned int i = 0; i < kernelSize; i++) {
      baton->convKernel[i] = sharp::AttrAsDouble(kdata, i);
    }
  }
  if (options.Has("recombMatrix")) {
    baton->recombMatrix = std::unique_ptr<double[]>(new double[9]);
    Napi::Array recombMatrix = options.Get("recombMatrix").As<Napi::Array>();
    for (unsigned int i = 0; i < 9; i++) {
       baton->recombMatrix[i] = sharp::AttrAsDouble(recombMatrix, i);
    }
  }
  baton->colourspaceInput = sharp::AttrAsEnum<VipsInterpretation>(
    options, "colourspaceInput", VIPS_TYPE_INTERPRETATION);
  if (baton->colourspaceInput == VIPS_INTERPRETATION_ERROR) {
    baton->colourspaceInput = VIPS_INTERPRETATION_LAST;
  }
  baton->colourspace = sharp::AttrAsEnum<VipsInterpretation>(options, "colourspace", VIPS_TYPE_INTERPRETATION);
  if (baton->colourspace == VIPS_INTERPRETATION_ERROR) {
    baton->colourspace = VIPS_INTERPRETATION_sRGB;
  }
  // Output
  baton->formatOut = sharp::AttrAsStr(options, "formatOut");
  baton->fileOut = sharp::AttrAsStr(options, "fileOut");
  baton->withMetadata = sharp::AttrAsBool(options, "withMetadata");
  baton->withMetadataOrientation = sharp::AttrAsUint32(options, "withMetadataOrientation");
  baton->withMetadataDensity = sharp::AttrAsDouble(options, "withMetadataDensity");
  baton->withMetadataIcc = sharp::AttrAsStr(options, "withMetadataIcc");
  Napi::Object mdStrs = options.Get("withMetadataStrs").As<Napi::Object>();
  Napi::Array mdStrKeys = mdStrs.GetPropertyNames();
  for (unsigned int i = 0; i < mdStrKeys.Length(); i++) {
    std::string k = sharp::AttrAsStr(mdStrKeys, i);
    if (mdStrs.HasOwnProperty(k)) {
      baton->withMetadataStrs.insert(std::make_pair(k, sharp::AttrAsStr(mdStrs, k)));
    }
  }
  baton->timeoutSeconds = sharp::AttrAsUint32(options, "timeoutSeconds");
  // Format-specific
  baton->jpegQuality = sharp::AttrAsUint32(options, "jpegQuality");
  baton->jpegProgressive = sharp::AttrAsBool(options, "jpegProgressive");
  baton->jpegChromaSubsampling = sharp::AttrAsStr(options, "jpegChromaSubsampling");
  baton->jpegTrellisQuantisation = sharp::AttrAsBool(options, "jpegTrellisQuantisation");
  baton->jpegQuantisationTable = sharp::AttrAsUint32(options, "jpegQuantisationTable");
  baton->jpegOvershootDeringing = sharp::AttrAsBool(options, "jpegOvershootDeringing");
  baton->jpegOptimiseScans = sharp::AttrAsBool(options, "jpegOptimiseScans");
  baton->jpegOptimiseCoding = sharp::AttrAsBool(options, "jpegOptimiseCoding");
  baton->pngProgressive = sharp::AttrAsBool(options, "pngProgressive");
  baton->pngCompressionLevel = sharp::AttrAsUint32(options, "pngCompressionLevel");
  baton->pngAdaptiveFiltering = sharp::AttrAsBool(options, "pngAdaptiveFiltering");
  baton->pngPalette = sharp::AttrAsBool(options, "pngPalette");
  baton->pngQuality = sharp::AttrAsUint32(options, "pngQuality");
  baton->pngEffort = sharp::AttrAsUint32(options, "pngEffort");
  baton->pngBitdepth = sharp::AttrAsUint32(options, "pngBitdepth");
  baton->pngDither = sharp::AttrAsDouble(options, "pngDither");
  baton->jp2Quality = sharp::AttrAsUint32(options, "jp2Quality");
  baton->jp2Lossless = sharp::AttrAsBool(options, "jp2Lossless");
  baton->jp2TileHeight = sharp::AttrAsUint32(options, "jp2TileHeight");
  baton->jp2TileWidth = sharp::AttrAsUint32(options, "jp2TileWidth");
  baton->jp2ChromaSubsampling = sharp::AttrAsStr(options, "jp2ChromaSubsampling");
  baton->webpQuality = sharp::AttrAsUint32(options, "webpQuality");
  baton->webpAlphaQuality = sharp::AttrAsUint32(options, "webpAlphaQuality");
  baton->webpLossless = sharp::AttrAsBool(options, "webpLossless");
  baton->webpNearLossless = sharp::AttrAsBool(options, "webpNearLossless");
  baton->webpSmartSubsample = sharp::AttrAsBool(options, "webpSmartSubsample");
  baton->webpPreset = sharp::AttrAsEnum<VipsForeignWebpPreset>(options, "webpPreset", VIPS_TYPE_FOREIGN_WEBP_PRESET);
  baton->webpEffort = sharp::AttrAsUint32(options, "webpEffort");
  baton->webpMinSize = sharp::AttrAsBool(options, "webpMinSize");
  baton->webpMixed = sharp::AttrAsBool(options, "webpMixed");
  baton->gifBitdepth = sharp::AttrAsUint32(options, "gifBitdepth");
  baton->gifEffort = sharp::AttrAsUint32(options, "gifEffort");
  baton->gifDither = sharp::AttrAsDouble(options, "gifDither");
  baton->gifInterFrameMaxError = sharp::AttrAsDouble(options, "gifInterFrameMaxError");
  baton->gifInterPaletteMaxError = sharp::AttrAsDouble(options, "gifInterPaletteMaxError");
  baton->gifReuse = sharp::AttrAsBool(options, "gifReuse");
  baton->gifProgressive = sharp::AttrAsBool(options, "gifProgressive");
  baton->tiffQuality = sharp::AttrAsUint32(options, "tiffQuality");
  baton->tiffPyramid = sharp::AttrAsBool(options, "tiffPyramid");
  baton->tiffBitdepth = sharp::AttrAsUint32(options, "tiffBitdepth");
  baton->tiffTile = sharp::AttrAsBool(options, "tiffTile");
  baton->tiffTileWidth = sharp::AttrAsUint32(options, "tiffTileWidth");
  baton->tiffTileHeight = sharp::AttrAsUint32(options, "tiffTileHeight");
  baton->tiffXres = sharp::AttrAsDouble(options, "tiffXres");
  baton->tiffYres = sharp::AttrAsDouble(options, "tiffYres");
  if (baton->tiffXres == 1.0 && baton->tiffYres == 1.0 && baton->withMetadataDensity > 0) {
    baton->tiffXres = baton->tiffYres = baton->withMetadataDensity / 25.4;
  }
  baton->tiffCompression = sharp::AttrAsEnum<VipsForeignTiffCompression>(
    options, "tiffCompression", VIPS_TYPE_FOREIGN_TIFF_COMPRESSION);
  baton->tiffPredictor = sharp::AttrAsEnum<VipsForeignTiffPredictor>(
    options, "tiffPredictor", VIPS_TYPE_FOREIGN_TIFF_PREDICTOR);
  baton->tiffResolutionUnit = sharp::AttrAsEnum<VipsForeignTiffResunit>(
    options, "tiffResolutionUnit", VIPS_TYPE_FOREIGN_TIFF_RESUNIT);
  baton->heifQuality = sharp::AttrAsUint32(options, "heifQuality");
  baton->heifLossless = sharp::AttrAsBool(options, "heifLossless");
  baton->heifCompression = sharp::AttrAsEnum<VipsForeignHeifCompression>(
    options, "heifCompression", VIPS_TYPE_FOREIGN_HEIF_COMPRESSION);
  baton->heifEffort = sharp::AttrAsUint32(options, "heifEffort");
  baton->heifChromaSubsampling = sharp::AttrAsStr(options, "heifChromaSubsampling");
  baton->jxlDistance = sharp::AttrAsDouble(options, "jxlDistance");
  baton->jxlDecodingTier = sharp::AttrAsUint32(options, "jxlDecodingTier");
  baton->jxlEffort = sharp::AttrAsUint32(options, "jxlEffort");
  baton->jxlLossless = sharp::AttrAsBool(options, "jxlLossless");
  baton->rawDepth = sharp::AttrAsEnum<VipsBandFormat>(options, "rawDepth", VIPS_TYPE_BAND_FORMAT);
  // Animated output properties
  if (sharp::HasAttr(options, "loop")) {
    baton->loop = sharp::AttrAsUint32(options, "loop");
  }
  if (sharp::HasAttr(options, "delay")) {
    baton->delay = sharp::AttrAsInt32Vector(options, "delay");
  }
  baton->tileSize = sharp::AttrAsUint32(options, "tileSize");
  baton->tileOverlap = sharp::AttrAsUint32(options, "tileOverlap");
  baton->tileAngle = sharp::AttrAsInt32(options, "tileAngle");
  baton->tileBackground = sharp::AttrAsVectorOfDouble(options, "tileBackground");
  baton->tileSkipBlanks = sharp::AttrAsInt32(options, "tileSkipBlanks");
  baton->tileContainer = sharp::AttrAsEnum<VipsForeignDzContainer>(
    options, "tileContainer", VIPS_TYPE_FOREIGN_DZ_CONTAINER);
  baton->tileLayout = sharp::AttrAsEnum<VipsForeignDzLayout>(options, "tileLayout", VIPS_TYPE_FOREIGN_DZ_LAYOUT);
  baton->tileFormat = sharp::AttrAsStr(options, "tileFormat");
  baton->tileDepth = sharp::AttrAsEnum<VipsForeignDzDepth>(options, "tileDepth", VIPS_TYPE_FOREIGN_DZ_DEPTH);
  baton->tileCentre = sharp::AttrAsBool(options, "tileCentre");
  baton->tileId = sharp::AttrAsStr(options, "tileId");
  baton->tileBasename = sharp::AttrAsStr(options, "tileBasename");

  // Function to notify of libvips warnings
  Napi::Function debuglog = options.Get("debuglog").As<Napi::Function>();

  // Function to notify of queue length changes
  Napi::Function queueListener = options.Get("queueListener").As<Napi::Function>();

  // Join queue for worker thread
  Napi::Function callback = info[size_t(1)].As<Napi::Function>();
  PipelineWorker *worker = new PipelineWorker(callback, baton, debuglog, queueListener);
  worker->Receiver().Set("options", options);
  worker->Queue();

  // Increment queued task counter
  g_atomic_int_inc(&sharp::counterQueue);
  Napi::Number queueLength = Napi::Number::New(info.Env(), static_cast<double>(sharp::counterQueue));
  queueListener.MakeCallback(info.This(), { queueLength });

  return info.Env().Undefined();
}
