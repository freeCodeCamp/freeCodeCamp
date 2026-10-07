// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

#include <cstdlib>
#include <string>
#include <string.h>
#include <vector>
#include <queue>
#include <map>
#include <mutex>  // NOLINT(build/c++11)

#include <napi.h>
#include <vips/vips8>

#include "common.h"

using vips::VImage;

namespace sharp {

  // Convenience methods to access the attributes of a Napi::Object
  bool HasAttr(Napi::Object obj, std::string attr) {
    return obj.Has(attr);
  }
  std::string AttrAsStr(Napi::Object obj, std::string attr) {
    return obj.Get(attr).As<Napi::String>();
  }
  std::string AttrAsStr(Napi::Object obj, unsigned int const attr) {
    return obj.Get(attr).As<Napi::String>();
  }
  uint32_t AttrAsUint32(Napi::Object obj, std::string attr) {
    return obj.Get(attr).As<Napi::Number>().Uint32Value();
  }
  int32_t AttrAsInt32(Napi::Object obj, std::string attr) {
    return obj.Get(attr).As<Napi::Number>().Int32Value();
  }
  int32_t AttrAsInt32(Napi::Object obj, unsigned int const attr) {
    return obj.Get(attr).As<Napi::Number>().Int32Value();
  }
  int64_t AttrAsInt64(Napi::Object obj, std::string attr) {
    return obj.Get(attr).As<Napi::Number>().Int64Value();
  }
  double AttrAsDouble(Napi::Object obj, std::string attr) {
    return obj.Get(attr).As<Napi::Number>().DoubleValue();
  }
  double AttrAsDouble(Napi::Object obj, unsigned int const attr) {
    return obj.Get(attr).As<Napi::Number>().DoubleValue();
  }
  bool AttrAsBool(Napi::Object obj, std::string attr) {
    return obj.Get(attr).As<Napi::Boolean>().Value();
  }
  std::vector<double> AttrAsVectorOfDouble(Napi::Object obj, std::string attr) {
    Napi::Array napiArray = obj.Get(attr).As<Napi::Array>();
    std::vector<double> vectorOfDouble(napiArray.Length());
    for (unsigned int i = 0; i < napiArray.Length(); i++) {
      vectorOfDouble[i] = AttrAsDouble(napiArray, i);
    }
    return vectorOfDouble;
  }
  std::vector<int32_t> AttrAsInt32Vector(Napi::Object obj, std::string attr) {
    Napi::Array array = obj.Get(attr).As<Napi::Array>();
    std::vector<int32_t> vector(array.Length());
    for (unsigned int i = 0; i < array.Length(); i++) {
      vector[i] = AttrAsInt32(array, i);
    }
    return vector;
  }

  // Create an InputDescriptor instance from a Napi::Object describing an input image
  InputDescriptor* CreateInputDescriptor(Napi::Object input) {
    InputDescriptor *descriptor = new InputDescriptor;
    if (HasAttr(input, "file")) {
      descriptor->file = AttrAsStr(input, "file");
    } else if (HasAttr(input, "buffer")) {
      Napi::Buffer<char> buffer = input.Get("buffer").As<Napi::Buffer<char>>();
      descriptor->bufferLength = buffer.Length();
      descriptor->buffer = buffer.Data();
      descriptor->isBuffer = TRUE;
    }
    descriptor->failOn = AttrAsEnum<VipsFailOn>(input, "failOn", VIPS_TYPE_FAIL_ON);
    // Density for vector-based input
    if (HasAttr(input, "density")) {
      descriptor->density = AttrAsDouble(input, "density");
    }
    // Should we ignore any embedded ICC profile
    if (HasAttr(input, "ignoreIcc")) {
      descriptor->ignoreIcc = AttrAsBool(input, "ignoreIcc");
    }
    // Raw pixel input
    if (HasAttr(input, "rawChannels")) {
      descriptor->rawDepth = AttrAsEnum<VipsBandFormat>(input, "rawDepth", VIPS_TYPE_BAND_FORMAT);
      descriptor->rawChannels = AttrAsUint32(input, "rawChannels");
      descriptor->rawWidth = AttrAsUint32(input, "rawWidth");
      descriptor->rawHeight = AttrAsUint32(input, "rawHeight");
      descriptor->rawPremultiplied = AttrAsBool(input, "rawPremultiplied");
    }
    // Multi-page input (GIF, TIFF, PDF)
    if (HasAttr(input, "pages")) {
      descriptor->pages = AttrAsInt32(input, "pages");
    }
    if (HasAttr(input, "page")) {
      descriptor->page = AttrAsUint32(input, "page");
    }
    // Multi-level input (OpenSlide)
    if (HasAttr(input, "level")) {
      descriptor->level = AttrAsUint32(input, "level");
    }
    // subIFD (OME-TIFF)
    if (HasAttr(input, "subifd")) {
      descriptor->subifd = AttrAsInt32(input, "subifd");
    }
    // Create new image
    if (HasAttr(input, "createChannels")) {
      descriptor->createChannels = AttrAsUint32(input, "createChannels");
      descriptor->createWidth = AttrAsUint32(input, "createWidth");
      descriptor->createHeight = AttrAsUint32(input, "createHeight");
      if (HasAttr(input, "createNoiseType")) {
        descriptor->createNoiseType = AttrAsStr(input, "createNoiseType");
        descriptor->createNoiseMean = AttrAsDouble(input, "createNoiseMean");
        descriptor->createNoiseSigma = AttrAsDouble(input, "createNoiseSigma");
      } else {
        descriptor->createBackground = AttrAsVectorOfDouble(input, "createBackground");
      }
    }
    // Create new image with text
    if (HasAttr(input, "textValue")) {
      descriptor->textValue = AttrAsStr(input, "textValue");
      if (HasAttr(input, "textFont")) {
        descriptor->textFont = AttrAsStr(input, "textFont");
      }
      if (HasAttr(input, "textFontfile")) {
        descriptor->textFontfile = AttrAsStr(input, "textFontfile");
      }
      if (HasAttr(input, "textWidth")) {
        descriptor->textWidth = AttrAsUint32(input, "textWidth");
      }
      if (HasAttr(input, "textHeight")) {
        descriptor->textHeight = AttrAsUint32(input, "textHeight");
      }
      if (HasAttr(input, "textAlign")) {
        descriptor->textAlign = AttrAsEnum<VipsAlign>(input, "textAlign", VIPS_TYPE_ALIGN);
      }
      if (HasAttr(input, "textJustify")) {
        descriptor->textJustify = AttrAsBool(input, "textJustify");
      }
      if (HasAttr(input, "textDpi")) {
        descriptor->textDpi = AttrAsUint32(input, "textDpi");
      }
      if (HasAttr(input, "textRgba")) {
        descriptor->textRgba = AttrAsBool(input, "textRgba");
      }
      if (HasAttr(input, "textSpacing")) {
        descriptor->textSpacing = AttrAsUint32(input, "textSpacing");
      }
      if (HasAttr(input, "textWrap")) {
        descriptor->textWrap = AttrAsEnum<VipsTextWrap>(input, "textWrap", VIPS_TYPE_TEXT_WRAP);
      }
    }
    // Limit input images to a given number of pixels, where pixels = width * height
    descriptor->limitInputPixels = static_cast<uint64_t>(AttrAsInt64(input, "limitInputPixels"));
    // Allow switch from random to sequential access
    descriptor->access = AttrAsBool(input, "sequentialRead") ? VIPS_ACCESS_SEQUENTIAL : VIPS_ACCESS_RANDOM;
    // Remove safety features and allow unlimited input
    descriptor->unlimited = AttrAsBool(input, "unlimited");
    return descriptor;
  }

  // How many tasks are in the queue?
  volatile int counterQueue = 0;

  // How many tasks are being processed?
  volatile int counterProcess = 0;

  // Filename extension checkers
  static bool EndsWith(std::string const &str, std::string const &end) {
    return str.length() >= end.length() && 0 == str.compare(str.length() - end.length(), end.length(), end);
  }
  bool IsJpeg(std::string const &str) {
    return EndsWith(str, ".jpg") || EndsWith(str, ".jpeg") || EndsWith(str, ".JPG") || EndsWith(str, ".JPEG");
  }
  bool IsPng(std::string const &str) {
    return EndsWith(str, ".png") || EndsWith(str, ".PNG");
  }
  bool IsWebp(std::string const &str) {
    return EndsWith(str, ".webp") || EndsWith(str, ".WEBP");
  }
  bool IsGif(std::string const &str) {
    return EndsWith(str, ".gif") || EndsWith(str, ".GIF");
  }
  bool IsJp2(std::string const &str) {
    return EndsWith(str, ".jp2") || EndsWith(str, ".jpx") || EndsWith(str, ".j2k") || EndsWith(str, ".j2c")
      || EndsWith(str, ".JP2") || EndsWith(str, ".JPX") || EndsWith(str, ".J2K") || EndsWith(str, ".J2C");
  }
  bool IsTiff(std::string const &str) {
    return EndsWith(str, ".tif") || EndsWith(str, ".tiff") || EndsWith(str, ".TIF") || EndsWith(str, ".TIFF");
  }
  bool IsHeic(std::string const &str) {
    return EndsWith(str, ".heic") || EndsWith(str, ".HEIC");
  }
  bool IsHeif(std::string const &str) {
    return EndsWith(str, ".heif") || EndsWith(str, ".HEIF") || IsHeic(str) || IsAvif(str);
  }
  bool IsAvif(std::string const &str) {
    return EndsWith(str, ".avif") || EndsWith(str, ".AVIF");
  }
  bool IsJxl(std::string const &str) {
    return EndsWith(str, ".jxl") || EndsWith(str, ".JXL");
  }
  bool IsDz(std::string const &str) {
    return EndsWith(str, ".dzi") || EndsWith(str, ".DZI");
  }
  bool IsDzZip(std::string const &str) {
    return EndsWith(str, ".zip") || EndsWith(str, ".ZIP") || EndsWith(str, ".szi") || EndsWith(str, ".SZI");
  }
  bool IsV(std::string const &str) {
    return EndsWith(str, ".v") || EndsWith(str, ".V") || EndsWith(str, ".vips") || EndsWith(str, ".VIPS");
  }

  /*
    Trim space from end of string.
  */
  std::string TrimEnd(std::string const &str) {
    return str.substr(0, str.find_last_not_of(" \n\r\f") + 1);
  }

  /*
    Provide a string identifier for the given image type.
  */
  std::string ImageTypeId(ImageType const imageType) {
    std::string id;
    switch (imageType) {
      case ImageType::JPEG: id = "jpeg"; break;
      case ImageType::PNG: id = "png"; break;
      case ImageType::WEBP: id = "webp"; break;
      case ImageType::TIFF: id = "tiff"; break;
      case ImageType::GIF: id = "gif"; break;
      case ImageType::JP2: id = "jp2"; break;
      case ImageType::SVG: id = "svg"; break;
      case ImageType::HEIF: id = "heif"; break;
      case ImageType::PDF: id = "pdf"; break;
      case ImageType::MAGICK: id = "magick"; break;
      case ImageType::OPENSLIDE: id = "openslide"; break;
      case ImageType::PPM: id = "ppm"; break;
      case ImageType::FITS: id = "fits"; break;
      case ImageType::EXR: id = "exr"; break;
      case ImageType::JXL: id = "jxl"; break;
      case ImageType::VIPS: id = "vips"; break;
      case ImageType::RAW: id = "raw"; break;
      case ImageType::UNKNOWN: id = "unknown"; break;
      case ImageType::MISSING: id = "missing"; break;
    }
    return id;
  }

  /**
   * Regenerate this table with something like:
   *
   * $ vips -l foreign | grep -i load | awk '{ print $2, $1; }'
   *
   * Plus a bit of editing.
   */
  std::map<std::string, ImageType> loaderToType = {
    { "VipsForeignLoadJpegFile", ImageType::JPEG },
    { "VipsForeignLoadJpegBuffer", ImageType::JPEG },
    { "VipsForeignLoadPngFile", ImageType::PNG },
    { "VipsForeignLoadPngBuffer", ImageType::PNG },
    { "VipsForeignLoadWebpFile", ImageType::WEBP },
    { "VipsForeignLoadWebpBuffer", ImageType::WEBP },
    { "VipsForeignLoadTiffFile", ImageType::TIFF },
    { "VipsForeignLoadTiffBuffer", ImageType::TIFF },
    { "VipsForeignLoadGifFile", ImageType::GIF },
    { "VipsForeignLoadGifBuffer", ImageType::GIF },
    { "VipsForeignLoadNsgifFile", ImageType::GIF },
    { "VipsForeignLoadNsgifBuffer", ImageType::GIF },
    { "VipsForeignLoadJp2kBuffer", ImageType::JP2 },
    { "VipsForeignLoadJp2kFile", ImageType::JP2 },
    { "VipsForeignLoadSvgFile", ImageType::SVG },
    { "VipsForeignLoadSvgBuffer", ImageType::SVG },
    { "VipsForeignLoadHeifFile", ImageType::HEIF },
    { "VipsForeignLoadHeifBuffer", ImageType::HEIF },
    { "VipsForeignLoadPdfFile", ImageType::PDF },
    { "VipsForeignLoadPdfBuffer", ImageType::PDF },
    { "VipsForeignLoadMagickFile", ImageType::MAGICK },
    { "VipsForeignLoadMagickBuffer", ImageType::MAGICK },
    { "VipsForeignLoadMagick7File", ImageType::MAGICK },
    { "VipsForeignLoadMagick7Buffer", ImageType::MAGICK },
    { "VipsForeignLoadOpenslideFile", ImageType::OPENSLIDE },
    { "VipsForeignLoadPpmFile", ImageType::PPM },
    { "VipsForeignLoadFitsFile", ImageType::FITS },
    { "VipsForeignLoadOpenexr", ImageType::EXR },
    { "VipsForeignLoadJxlFile", ImageType::JXL },
    { "VipsForeignLoadJxlBuffer", ImageType::JXL },
    { "VipsForeignLoadVips", ImageType::VIPS },
    { "VipsForeignLoadVipsFile", ImageType::VIPS },
    { "VipsForeignLoadRaw", ImageType::RAW }
  };

  /*
    Determine image format of a buffer.
  */
  ImageType DetermineImageType(void *buffer, size_t const length) {
    ImageType imageType = ImageType::UNKNOWN;
    char const *load = vips_foreign_find_load_buffer(buffer, length);
    if (load != nullptr) {
      auto it = loaderToType.find(load);
      if (it != loaderToType.end()) {
        imageType = it->second;
      }
    }
    return imageType;
  }

  /*
    Determine image format, reads the first few bytes of the file
  */
  ImageType DetermineImageType(char const *file) {
    ImageType imageType = ImageType::UNKNOWN;
    char const *load = vips_foreign_find_load(file);
    if (load != nullptr) {
      auto it = loaderToType.find(load);
      if (it != loaderToType.end()) {
        imageType = it->second;
      }
    } else {
      if (EndsWith(vips::VError().what(), " does not exist\n")) {
        imageType = ImageType::MISSING;
      }
    }
    return imageType;
  }

  /*
    Does this image type support multiple pages?
  */
  bool ImageTypeSupportsPage(ImageType imageType) {
    return
      imageType == ImageType::WEBP ||
      imageType == ImageType::MAGICK ||
      imageType == ImageType::GIF ||
      imageType == ImageType::JP2 ||
      imageType == ImageType::TIFF ||
      imageType == ImageType::HEIF ||
      imageType == ImageType::PDF;
  }

  /*
    Does this image type support removal of safety limits?
  */
  bool ImageTypeSupportsUnlimited(ImageType imageType) {
    return
      imageType == ImageType::JPEG ||
      imageType == ImageType::PNG ||
      imageType == ImageType::SVG ||
      imageType == ImageType::HEIF;
  }

  /*
    Open an image from the given InputDescriptor (filesystem, compressed buffer, raw pixel data)
  */
  std::tuple<VImage, ImageType> OpenInput(InputDescriptor *descriptor) {
    VImage image;
    ImageType imageType;
    if (descriptor->isBuffer) {
      if (descriptor->rawChannels > 0) {
        // Raw, uncompressed pixel data
        image = VImage::new_from_memory(descriptor->buffer, descriptor->bufferLength,
          descriptor->rawWidth, descriptor->rawHeight, descriptor->rawChannels, descriptor->rawDepth);
        if (descriptor->rawChannels < 3) {
          image.get_image()->Type = VIPS_INTERPRETATION_B_W;
        } else {
          image.get_image()->Type = VIPS_INTERPRETATION_sRGB;
        }
        if (descriptor->rawPremultiplied) {
          image = image.unpremultiply();
        }
        imageType = ImageType::RAW;
      } else {
        // Compressed data
        imageType = DetermineImageType(descriptor->buffer, descriptor->bufferLength);
        if (imageType != ImageType::UNKNOWN) {
          try {
            vips::VOption *option = VImage::option()
              ->set("access", descriptor->access)
              ->set("fail_on", descriptor->failOn);
            if (descriptor->unlimited && ImageTypeSupportsUnlimited(imageType)) {
              option->set("unlimited", TRUE);
            }
            if (imageType == ImageType::SVG || imageType == ImageType::PDF) {
              option->set("dpi", descriptor->density);
            }
            if (imageType == ImageType::MAGICK) {
              option->set("density", std::to_string(descriptor->density).data());
            }
            if (ImageTypeSupportsPage(imageType)) {
              option->set("n", descriptor->pages);
              option->set("page", descriptor->page);
            }
            if (imageType == ImageType::OPENSLIDE) {
              option->set("level", descriptor->level);
            }
            if (imageType == ImageType::TIFF) {
              option->set("subifd", descriptor->subifd);
            }
            image = VImage::new_from_buffer(descriptor->buffer, descriptor->bufferLength, nullptr, option);
            if (imageType == ImageType::SVG || imageType == ImageType::PDF || imageType == ImageType::MAGICK) {
              image = SetDensity(image, descriptor->density);
            }
          } catch (vips::VError const &err) {
            throw vips::VError(std::string("Input buffer has corrupt header: ") + err.what());
          }
        } else {
          throw vips::VError("Input buffer contains unsupported image format");
        }
      }
    } else {
      int const channels = descriptor->createChannels;
      if (channels > 0) {
        // Create new image
        if (descriptor->createNoiseType == "gaussian") {
          std::vector<VImage> bands = {};
          bands.reserve(channels);
          for (int _band = 0; _band < channels; _band++) {
            bands.push_back(VImage::gaussnoise(descriptor->createWidth, descriptor->createHeight, VImage::option()
              ->set("mean", descriptor->createNoiseMean)
              ->set("sigma", descriptor->createNoiseSigma)));
          }
          image = VImage::bandjoin(bands).copy(VImage::option()->set("interpretation",
            channels < 3 ? VIPS_INTERPRETATION_B_W: VIPS_INTERPRETATION_sRGB));
        } else {
          std::vector<double> background = {
            descriptor->createBackground[0],
            descriptor->createBackground[1],
            descriptor->createBackground[2]
          };
          if (channels == 4) {
            background.push_back(descriptor->createBackground[3]);
          }
          image = VImage::new_matrix(descriptor->createWidth, descriptor->createHeight)
            .copy(VImage::option()->set("interpretation",
              channels < 3 ? VIPS_INTERPRETATION_B_W : VIPS_INTERPRETATION_sRGB))
            .new_from_image(background);
        }
        image = image.cast(VIPS_FORMAT_UCHAR);
        imageType = ImageType::RAW;
      } else if (descriptor->textValue.length() > 0) {
        // Create a new image with text
        vips::VOption *textOptions = VImage::option()
          ->set("align", descriptor->textAlign)
          ->set("justify", descriptor->textJustify)
          ->set("rgba", descriptor->textRgba)
          ->set("spacing", descriptor->textSpacing)
          ->set("wrap", descriptor->textWrap)
          ->set("autofit_dpi", &descriptor->textAutofitDpi);
        if (descriptor->textWidth > 0) {
          textOptions->set("width", descriptor->textWidth);
        }
        // Ignore dpi if height is set
        if (descriptor->textWidth > 0 && descriptor->textHeight > 0) {
          textOptions->set("height", descriptor->textHeight);
        } else if (descriptor->textDpi > 0) {
          textOptions->set("dpi", descriptor->textDpi);
        }
        if (descriptor->textFont.length() > 0) {
          textOptions->set("font", const_cast<char*>(descriptor->textFont.data()));
        }
        if (descriptor->textFontfile.length() > 0) {
          textOptions->set("fontfile", const_cast<char*>(descriptor->textFontfile.data()));
        }
        image = VImage::text(const_cast<char *>(descriptor->textValue.data()), textOptions);
        if (!descriptor->textRgba) {
          image = image.copy(VImage::option()->set("interpretation", VIPS_INTERPRETATION_B_W));
        }
        imageType = ImageType::RAW;
      } else {
        // From filesystem
        imageType = DetermineImageType(descriptor->file.data());
        if (imageType == ImageType::MISSING) {
          if (descriptor->file.find("<svg") != std::string::npos) {
            throw vips::VError("Input file is missing, did you mean "
              "sharp(Buffer.from('" + descriptor->file.substr(0, 8) + "...')?");
          }
          throw vips::VError("Input file is missing: " + descriptor->file);
        }
        if (imageType != ImageType::UNKNOWN) {
          try {
            vips::VOption *option = VImage::option()
              ->set("access", descriptor->access)
              ->set("fail_on", descriptor->failOn);
            if (descriptor->unlimited && ImageTypeSupportsUnlimited(imageType)) {
              option->set("unlimited", TRUE);
            }
            if (imageType == ImageType::SVG || imageType == ImageType::PDF) {
              option->set("dpi", descriptor->density);
            }
            if (imageType == ImageType::MAGICK) {
              option->set("density", std::to_string(descriptor->density).data());
            }
            if (ImageTypeSupportsPage(imageType)) {
              option->set("n", descriptor->pages);
              option->set("page", descriptor->page);
            }
            if (imageType == ImageType::OPENSLIDE) {
              option->set("level", descriptor->level);
            }
            if (imageType == ImageType::TIFF) {
              option->set("subifd", descriptor->subifd);
            }
            image = VImage::new_from_file(descriptor->file.data(), option);
            if (imageType == ImageType::SVG || imageType == ImageType::PDF || imageType == ImageType::MAGICK) {
              image = SetDensity(image, descriptor->density);
            }
          } catch (vips::VError const &err) {
            throw vips::VError(std::string("Input file has corrupt header: ") + err.what());
          }
        } else {
          throw vips::VError("Input file contains unsupported image format");
        }
      }
    }

    // Limit input images to a given number of pixels, where pixels = width * height
    if (descriptor->limitInputPixels > 0 &&
      static_cast<uint64_t>(image.width()) * image.height() > descriptor->limitInputPixels) {
      throw vips::VError("Input image exceeds pixel limit");
    }
    return std::make_tuple(image, imageType);
  }

  /*
    Does this image have an embedded profile?
  */
  bool HasProfile(VImage image) {
    return (image.get_typeof(VIPS_META_ICC_NAME) != 0) ? TRUE : FALSE;
  }

  /*
    Does this image have an alpha channel?
    Uses colour space interpretation with number of channels to guess this.
  */
  bool HasAlpha(VImage image) {
    return image.has_alpha();
  }

  /*
    Get EXIF Orientation of image, if any.
  */
  int ExifOrientation(VImage image) {
    int orientation = 0;
    if (image.get_typeof(VIPS_META_ORIENTATION) != 0) {
      orientation = image.get_int(VIPS_META_ORIENTATION);
    }
    return orientation;
  }

  /*
    Set EXIF Orientation of image.
  */
  VImage SetExifOrientation(VImage image, int const orientation) {
    VImage copy = image.copy();
    copy.set(VIPS_META_ORIENTATION, orientation);
    return copy;
  }

  /*
    Remove EXIF Orientation from image.
  */
  VImage RemoveExifOrientation(VImage image) {
    VImage copy = image.copy();
    copy.remove(VIPS_META_ORIENTATION);
    copy.remove("exif-ifd0-Orientation");
    return copy;
  }

  /*
    Set animation properties if necessary.
  */
  VImage SetAnimationProperties(VImage image, int nPages, int pageHeight, std::vector<int> delay, int loop) {
    bool hasDelay = !delay.empty();

    // Avoid a copy if none of the animation properties are needed.
    if (nPages == 1 && !hasDelay && loop == -1) return image;

    if (delay.size() == 1) {
      // We have just one delay, repeat that value for all frames.
      delay.insert(delay.end(), nPages - 1, delay[0]);
    }

    // Attaching metadata, need to copy the image.
    VImage copy = image.copy();

    // Only set page-height if we have more than one page, or this could
    // accidentally turn into an animated image later.
    if (nPages > 1) copy.set(VIPS_META_PAGE_HEIGHT, pageHeight);
    if (hasDelay) copy.set("delay", delay);
    if (loop != -1) copy.set("loop", loop);

    return copy;
  }

  /*
    Remove animation properties from image.
  */
  VImage RemoveAnimationProperties(VImage image) {
    VImage copy = image.copy();
    copy.remove(VIPS_META_PAGE_HEIGHT);
    copy.remove("delay");
    copy.remove("loop");
    return copy;
  }

  /*
    Remove GIF palette from image.
  */
  VImage RemoveGifPalette(VImage image) {
    VImage copy = image.copy();
    copy.remove("gif-palette");
    return copy;
  }

  /*
    Does this image have a non-default density?
  */
  bool HasDensity(VImage image) {
    return image.xres() > 1.0;
  }

  /*
    Get pixels/mm resolution as pixels/inch density.
  */
  int GetDensity(VImage image) {
    return static_cast<int>(round(image.xres() * 25.4));
  }

  /*
    Set pixels/mm resolution based on a pixels/inch density.
  */
  VImage SetDensity(VImage image, const double density) {
    const double pixelsPerMm = density / 25.4;
    VImage copy = image.copy();
    copy.get_image()->Xres = pixelsPerMm;
    copy.get_image()->Yres = pixelsPerMm;
    return copy;
  }

  /*
    Multi-page images can have a page height. Fetch it, and sanity check it.
    If page-height is not set, it defaults to the image height
  */
  int GetPageHeight(VImage image) {
    return vips_image_get_page_height(image.get_image());
  }

  /*
    Check the proposed format supports the current dimensions.
  */
  void AssertImageTypeDimensions(VImage image, ImageType const imageType) {
    const int height = image.get_typeof(VIPS_META_PAGE_HEIGHT) == G_TYPE_INT
      ? image.get_int(VIPS_META_PAGE_HEIGHT)
      : image.height();
    if (imageType == ImageType::JPEG) {
      if (image.width() > 65535 || height > 65535) {
        throw vips::VError("Processed image is too large for the JPEG format");
      }
    } else if (imageType == ImageType::WEBP) {
      if (image.width() > 16383 || height > 16383) {
        throw vips::VError("Processed image is too large for the WebP format");
      }
    } else if (imageType == ImageType::GIF) {
      if (image.width() > 65535 || height > 65535) {
        throw vips::VError("Processed image is too large for the GIF format");
      }
    } else if (imageType == ImageType::HEIF) {
      if (image.width() > 16384 || height > 16384) {
        throw vips::VError("Processed image is too large for the HEIF format");
      }
    }
  }

  /*
    Called when a Buffer undergoes GC, required to support mixed runtime libraries in Windows
  */
  std::function<void(void*, char*)> FreeCallback = [](void*, char* data) {
    g_free(data);
  };

  /*
    Temporary buffer of warnings
  */
  std::queue<std::string> vipsWarnings;
  std::mutex vipsWarningsMutex;

  /*
    Called with warnings from the glib-registered "VIPS" domain
  */
  void VipsWarningCallback(char const* log_domain, GLogLevelFlags log_level, char const* message, void* ignore) {
    std::lock_guard<std::mutex> lock(vipsWarningsMutex);
    vipsWarnings.emplace(message);
  }

  /*
    Pop the oldest warning message from the queue
  */
  std::string VipsWarningPop() {
    std::string warning;
    std::lock_guard<std::mutex> lock(vipsWarningsMutex);
    if (!vipsWarnings.empty()) {
      warning = vipsWarnings.front();
      vipsWarnings.pop();
    }
    return warning;
  }

  /*
    Attach an event listener for progress updates, used to detect timeout
  */
  void SetTimeout(VImage image, int const seconds) {
    if (seconds > 0) {
      VipsImage *im = image.get_image();
      if (im->progress_signal == NULL) {
        int *timeout = VIPS_NEW(im, int);
        *timeout = seconds;
        g_signal_connect(im, "eval", G_CALLBACK(VipsProgressCallBack), timeout);
        vips_image_set_progress(im, TRUE);
      }
    }
  }

  /*
    Event listener for progress updates, used to detect timeout
  */
  void VipsProgressCallBack(VipsImage *im, VipsProgress *progress, int *timeout) {
    if (*timeout > 0 && progress->run >= *timeout) {
      vips_image_set_kill(im, TRUE);
      vips_error("timeout", "%d%% complete", progress->percent);
      *timeout = 0;
    }
  }

  /*
    Calculate the (left, top) coordinates of the output image
    within the input image, applying the given gravity during an embed.

    @Azurebyte: We are basically swapping the inWidth and outWidth, inHeight and outHeight from the CalculateCrop function.
  */
  std::tuple<int, int> CalculateEmbedPosition(int const inWidth, int const inHeight,
    int const outWidth, int const outHeight, int const gravity) {

    int left = 0;
    int top = 0;
    switch (gravity) {
      case 1:
        // North
        left = (outWidth - inWidth) / 2;
        break;
      case 2:
        // East
        left = outWidth - inWidth;
        top = (outHeight - inHeight) / 2;
        break;
      case 3:
        // South
        left = (outWidth - inWidth) / 2;
        top = outHeight - inHeight;
        break;
      case 4:
        // West
        top = (outHeight - inHeight) / 2;
        break;
      case 5:
        // Northeast
        left = outWidth - inWidth;
        break;
      case 6:
        // Southeast
        left = outWidth - inWidth;
        top = outHeight - inHeight;
        break;
      case 7:
        // Southwest
        top = outHeight - inHeight;
        break;
      case 8:
        // Northwest
        // Which is the default is 0,0 so we do not assign anything here.
        break;
      default:
        // Centre
        left = (outWidth - inWidth) / 2;
        top = (outHeight - inHeight) / 2;
    }
    return std::make_tuple(left, top);
  }

  /*
    Calculate the (left, top) coordinates of the output image
    within the input image, applying the given gravity during a crop.
  */
  std::tuple<int, int> CalculateCrop(int const inWidth, int const inHeight,
    int const outWidth, int const outHeight, int const gravity) {

    int left = 0;
    int top = 0;
    switch (gravity) {
      case 1:
        // North
        left = (inWidth - outWidth + 1) / 2;
        break;
      case 2:
        // East
        left = inWidth - outWidth;
        top = (inHeight - outHeight + 1) / 2;
        break;
      case 3:
        // South
        left = (inWidth - outWidth + 1) / 2;
        top = inHeight - outHeight;
        break;
      case 4:
        // West
        top = (inHeight - outHeight + 1) / 2;
        break;
      case 5:
        // Northeast
        left = inWidth - outWidth;
        break;
      case 6:
        // Southeast
        left = inWidth - outWidth;
        top = inHeight - outHeight;
        break;
      case 7:
        // Southwest
        top = inHeight - outHeight;
        break;
      case 8:
        // Northwest
        break;
      default:
        // Centre
        left = (inWidth - outWidth + 1) / 2;
        top = (inHeight - outHeight + 1) / 2;
    }
    return std::make_tuple(left, top);
  }

  /*
    Calculate the (left, top) coordinates of the output image
    within the input image, applying the given x and y offsets.
  */
  std::tuple<int, int> CalculateCrop(int const inWidth, int const inHeight,
    int const outWidth, int const outHeight, int const x, int const y) {

    // default values
    int left = 0;
    int top = 0;

    // assign only if valid
    if (x < (inWidth - outWidth)) {
      left = x;
    } else if (x >= (inWidth - outWidth)) {
      left = inWidth - outWidth;
    }

    if (y < (inHeight - outHeight)) {
      top = y;
    } else if (y >= (inHeight - outHeight)) {
      top = inHeight - outHeight;
    }

    return std::make_tuple(left, top);
  }

  /*
    Are pixel values in this image 16-bit integer?
  */
  bool Is16Bit(VipsInterpretation const interpretation) {
    return interpretation == VIPS_INTERPRETATION_RGB16 || interpretation == VIPS_INTERPRETATION_GREY16;
  }

  /*
    Return the image alpha maximum. Useful for combining alpha bands. scRGB
    images are 0 - 1 for image data, but the alpha is 0 - 255.
  */
  double MaximumImageAlpha(VipsInterpretation const interpretation) {
    return Is16Bit(interpretation) ? 65535.0 : 255.0;
  }

  /*
    Convert RGBA value to another colourspace
  */
  std::vector<double> GetRgbaAsColourspace(std::vector<double> const rgba,
    VipsInterpretation const interpretation, bool premultiply) {
    int const bands = static_cast<int>(rgba.size());
    if (bands < 3) {
      return rgba;
    }
    VImage pixel = VImage::new_matrix(1, 1);
    pixel.set("bands", bands);
    pixel = pixel
      .new_from_image(rgba)
      .colourspace(interpretation, VImage::option()->set("source_space", VIPS_INTERPRETATION_sRGB));
    if (premultiply) {
      pixel = pixel.premultiply();
    }
    return pixel(0, 0);
  }

  /*
    Apply the alpha channel to a given colour
  */
  std::tuple<VImage, std::vector<double>> ApplyAlpha(VImage image, std::vector<double> colour, bool premultiply) {
    // Scale up 8-bit values to match 16-bit input image
    double const multiplier = sharp::Is16Bit(image.interpretation()) ? 256.0 : 1.0;
    // Create alphaColour colour
    std::vector<double> alphaColour;
    if (image.bands() > 2) {
      alphaColour = {
        multiplier * colour[0],
        multiplier * colour[1],
        multiplier * colour[2]
      };
    } else {
      // Convert sRGB to greyscale
      alphaColour = { multiplier * (
        0.2126 * colour[0] +
        0.7152 * colour[1] +
        0.0722 * colour[2])
      };
    }
    // Add alpha channel to alphaColour colour
    if (colour[3] < 255.0 || HasAlpha(image)) {
      alphaColour.push_back(colour[3] * multiplier);
    }
    // Ensure alphaColour colour uses correct colourspace
    alphaColour = sharp::GetRgbaAsColourspace(alphaColour, image.interpretation(), premultiply);
    // Add non-transparent alpha channel, if required
    if (colour[3] < 255.0 && !HasAlpha(image)) {
      image = image.bandjoin(
        VImage::new_matrix(image.width(), image.height()).new_from_image(255 * multiplier).cast(image.format()));
    }
    return std::make_tuple(image, alphaColour);
  }

  /*
    Removes alpha channel, if any.
  */
  VImage RemoveAlpha(VImage image) {
    if (HasAlpha(image)) {
      image = image.extract_band(0, VImage::option()->set("n", image.bands() - 1));
    }
    return image;
  }

  /*
    Ensures alpha channel, if missing.
  */
  VImage EnsureAlpha(VImage image, double const value) {
    if (!HasAlpha(image)) {
      std::vector<double> alpha;
      alpha.push_back(value * sharp::MaximumImageAlpha(image.interpretation()));
      image = image.bandjoin_const(alpha);
    }
    return image;
  }

  std::pair<double, double> ResolveShrink(int width, int height, int targetWidth, int targetHeight,
    Canvas canvas, bool withoutEnlargement, bool withoutReduction) {
    double hshrink = 1.0;
    double vshrink = 1.0;

    if (targetWidth > 0 && targetHeight > 0) {
      // Fixed width and height
      hshrink = static_cast<double>(width) / targetWidth;
      vshrink = static_cast<double>(height) / targetHeight;

      switch (canvas) {
        case Canvas::CROP:
        case Canvas::MIN:
          if (hshrink < vshrink) {
            vshrink = hshrink;
          } else {
            hshrink = vshrink;
          }
          break;
        case Canvas::EMBED:
        case Canvas::MAX:
          if (hshrink > vshrink) {
            vshrink = hshrink;
          } else {
            hshrink = vshrink;
          }
          break;
        case Canvas::IGNORE_ASPECT:
          break;
      }
    } else if (targetWidth > 0) {
      // Fixed width
      hshrink = static_cast<double>(width) / targetWidth;

      if (canvas != Canvas::IGNORE_ASPECT) {
        // Auto height
        vshrink = hshrink;
      }
    } else if (targetHeight > 0) {
      // Fixed height
      vshrink = static_cast<double>(height) / targetHeight;

      if (canvas != Canvas::IGNORE_ASPECT) {
        // Auto width
        hshrink = vshrink;
      }
    }

    // We should not reduce or enlarge the output image, if
    // withoutReduction or withoutEnlargement is specified.
    if (withoutReduction) {
      // Equivalent of VIPS_SIZE_UP
      hshrink = std::min(1.0, hshrink);
      vshrink = std::min(1.0, vshrink);
    } else if (withoutEnlargement) {
      // Equivalent of VIPS_SIZE_DOWN
      hshrink = std::max(1.0, hshrink);
      vshrink = std::max(1.0, vshrink);
    }

    // We don't want to shrink so much that we send an axis to 0
    hshrink = std::min(hshrink, static_cast<double>(width));
    vshrink = std::min(vshrink, static_cast<double>(height));

    return std::make_pair(hshrink, vshrink);
  }

  /*
    Ensure decoding remains sequential.
  */
  VImage StaySequential(VImage image, VipsAccess access, bool condition) {
    if (access == VIPS_ACCESS_SEQUENTIAL && condition) {
      return image.copy_memory();
    }
    return image;
  }
}  // namespace sharp
