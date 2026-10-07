// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

#ifndef SRC_COMMON_H_
#define SRC_COMMON_H_

#include <string>
#include <tuple>
#include <vector>

#include <napi.h>
#include <vips/vips8>

// Verify platform and compiler compatibility

#if (VIPS_MAJOR_VERSION < 8) || \
  (VIPS_MAJOR_VERSION == 8 && VIPS_MINOR_VERSION < 14) || \
  (VIPS_MAJOR_VERSION == 8 && VIPS_MINOR_VERSION == 14 && VIPS_MICRO_VERSION < 5)
#error "libvips version 8.14.5+ is required - please see https://sharp.pixelplumbing.com/install"
#endif

#if ((!defined(__clang__)) && defined(__GNUC__) && (__GNUC__ < 4 || (__GNUC__ == 4 && __GNUC_MINOR__ < 6)))
#error "GCC version 4.6+ is required for C++11 features - please see https://sharp.pixelplumbing.com/install"
#endif

#if (defined(__clang__) && defined(__has_feature))
#if (!__has_feature(cxx_range_for))
#error "clang version 3.0+ is required for C++11 features - please see https://sharp.pixelplumbing.com/install"
#endif
#endif

using vips::VImage;

namespace sharp {

  struct InputDescriptor {  // NOLINT(runtime/indentation_namespace)
    std::string name;
    std::string file;
    char *buffer;
    VipsFailOn failOn;
    uint64_t limitInputPixels;
    bool unlimited;
    VipsAccess access;
    size_t bufferLength;
    bool isBuffer;
    double density;
    bool ignoreIcc;
    VipsBandFormat rawDepth;
    int rawChannels;
    int rawWidth;
    int rawHeight;
    bool rawPremultiplied;
    int pages;
    int page;
    int level;
    int subifd;
    int createChannels;
    int createWidth;
    int createHeight;
    std::vector<double> createBackground;
    std::string createNoiseType;
    double createNoiseMean;
    double createNoiseSigma;
    std::string textValue;
    std::string textFont;
    std::string textFontfile;
    int textWidth;
    int textHeight;
    VipsAlign textAlign;
    bool textJustify;
    int textDpi;
    bool textRgba;
    int textSpacing;
    VipsTextWrap textWrap;
    int textAutofitDpi;

    InputDescriptor():
      buffer(nullptr),
      failOn(VIPS_FAIL_ON_WARNING),
      limitInputPixels(0x3FFF * 0x3FFF),
      unlimited(FALSE),
      access(VIPS_ACCESS_RANDOM),
      bufferLength(0),
      isBuffer(FALSE),
      density(72.0),
      ignoreIcc(FALSE),
      rawDepth(VIPS_FORMAT_UCHAR),
      rawChannels(0),
      rawWidth(0),
      rawHeight(0),
      rawPremultiplied(false),
      pages(1),
      page(0),
      level(0),
      subifd(-1),
      createChannels(0),
      createWidth(0),
      createHeight(0),
      createBackground{ 0.0, 0.0, 0.0, 255.0 },
      createNoiseMean(0.0),
      createNoiseSigma(0.0),
      textWidth(0),
      textHeight(0),
      textAlign(VIPS_ALIGN_LOW),
      textJustify(FALSE),
      textDpi(72),
      textRgba(FALSE),
      textSpacing(0),
      textWrap(VIPS_TEXT_WRAP_WORD),
      textAutofitDpi(0) {}
  };

  // Convenience methods to access the attributes of a Napi::Object
  bool HasAttr(Napi::Object obj, std::string attr);
  std::string AttrAsStr(Napi::Object obj, std::string attr);
  std::string AttrAsStr(Napi::Object obj, unsigned int const attr);
  uint32_t AttrAsUint32(Napi::Object obj, std::string attr);
  int32_t AttrAsInt32(Napi::Object obj, std::string attr);
  int32_t AttrAsInt32(Napi::Object obj, unsigned int const attr);
  double AttrAsDouble(Napi::Object obj, std::string attr);
  double AttrAsDouble(Napi::Object obj, unsigned int const attr);
  bool AttrAsBool(Napi::Object obj, std::string attr);
  std::vector<double> AttrAsVectorOfDouble(Napi::Object obj, std::string attr);
  std::vector<int32_t> AttrAsInt32Vector(Napi::Object obj, std::string attr);
  template <class T> T AttrAsEnum(Napi::Object obj, std::string attr, GType type) {
    return static_cast<T>(
      vips_enum_from_nick(nullptr, type, AttrAsStr(obj, attr).data()));
  }

  // Create an InputDescriptor instance from a Napi::Object describing an input image
  InputDescriptor* CreateInputDescriptor(Napi::Object input);

  enum class ImageType {
    JPEG,
    PNG,
    WEBP,
    JP2,
    TIFF,
    GIF,
    SVG,
    HEIF,
    PDF,
    MAGICK,
    OPENSLIDE,
    PPM,
    FITS,
    EXR,
    JXL,
    VIPS,
    RAW,
    UNKNOWN,
    MISSING
  };

  enum class Canvas {
      CROP,
      EMBED,
      MAX,
      MIN,
      IGNORE_ASPECT
  };

  // How many tasks are in the queue?
  extern volatile int counterQueue;

  // How many tasks are being processed?
  extern volatile int counterProcess;

  // Filename extension checkers
  bool IsJpeg(std::string const &str);
  bool IsPng(std::string const &str);
  bool IsWebp(std::string const &str);
  bool IsJp2(std::string const &str);
  bool IsGif(std::string const &str);
  bool IsTiff(std::string const &str);
  bool IsHeic(std::string const &str);
  bool IsHeif(std::string const &str);
  bool IsAvif(std::string const &str);
  bool IsJxl(std::string const &str);
  bool IsDz(std::string const &str);
  bool IsDzZip(std::string const &str);
  bool IsV(std::string const &str);

  /*
    Trim space from end of string.
  */
  std::string TrimEnd(std::string const &str);

  /*
    Provide a string identifier for the given image type.
  */
  std::string ImageTypeId(ImageType const imageType);

  /*
    Determine image format of a buffer.
  */
  ImageType DetermineImageType(void *buffer, size_t const length);

  /*
    Determine image format of a file.
  */
  ImageType DetermineImageType(char const *file);

  /*
    Does this image type support multiple pages?
  */
  bool ImageTypeSupportsPage(ImageType imageType);

  /*
    Does this image type support removal of safety limits?
  */
  bool ImageTypeSupportsUnlimited(ImageType imageType);

  /*
    Open an image from the given InputDescriptor (filesystem, compressed buffer, raw pixel data)
  */
  std::tuple<VImage, ImageType> OpenInput(InputDescriptor *descriptor);

  /*
    Does this image have an embedded profile?
  */
  bool HasProfile(VImage image);

  /*
    Does this image have an alpha channel?
    Uses colour space interpretation with number of channels to guess this.
  */
  bool HasAlpha(VImage image);

  /*
    Get EXIF Orientation of image, if any.
  */
  int ExifOrientation(VImage image);

  /*
    Set EXIF Orientation of image.
  */
  VImage SetExifOrientation(VImage image, int const orientation);

  /*
    Remove EXIF Orientation from image.
  */
  VImage RemoveExifOrientation(VImage image);

  /*
    Set animation properties if necessary.
  */
  VImage SetAnimationProperties(VImage image, int nPages, int pageHeight, std::vector<int> delay, int loop);

  /*
    Remove animation properties from image.
  */
  VImage RemoveAnimationProperties(VImage image);

  /*
    Remove GIF palette from image.
  */
  VImage RemoveGifPalette(VImage image);

  /*
    Does this image have a non-default density?
  */
  bool HasDensity(VImage image);

  /*
    Get pixels/mm resolution as pixels/inch density.
  */
  int GetDensity(VImage image);

  /*
    Set pixels/mm resolution based on a pixels/inch density.
  */
  VImage SetDensity(VImage image, const double density);

  /*
    Multi-page images can have a page height. Fetch it, and sanity check it.
    If page-height is not set, it defaults to the image height
  */
  int GetPageHeight(VImage image);

  /*
    Check the proposed format supports the current dimensions.
  */
  void AssertImageTypeDimensions(VImage image, ImageType const imageType);

  /*
    Called when a Buffer undergoes GC, required to support mixed runtime libraries in Windows
  */
  extern std::function<void(void*, char*)> FreeCallback;

  /*
    Called with warnings from the glib-registered "VIPS" domain
  */
  void VipsWarningCallback(char const* log_domain, GLogLevelFlags log_level, char const* message, void* ignore);

  /*
    Pop the oldest warning message from the queue
  */
  std::string VipsWarningPop();

  /*
    Attach an event listener for progress updates, used to detect timeout
  */
  void SetTimeout(VImage image, int const timeoutSeconds);

  /*
    Event listener for progress updates, used to detect timeout
  */
  void VipsProgressCallBack(VipsImage *image, VipsProgress *progress, int *timeoutSeconds);

  /*
    Calculate the (left, top) coordinates of the output image
    within the input image, applying the given gravity during an embed.
  */
  std::tuple<int, int> CalculateEmbedPosition(int const inWidth, int const inHeight,
    int const outWidth, int const outHeight, int const gravity);

  /*
    Calculate the (left, top) coordinates of the output image
    within the input image, applying the given gravity.
  */
  std::tuple<int, int> CalculateCrop(int const inWidth, int const inHeight,
    int const outWidth, int const outHeight, int const gravity);

  /*
    Calculate the (left, top) coordinates of the output image
    within the input image, applying the given x and y offsets of the output image.
  */
  std::tuple<int, int> CalculateCrop(int const inWidth, int const inHeight,
    int const outWidth, int const outHeight, int const x, int const y);

  /*
    Are pixel values in this image 16-bit integer?
  */
  bool Is16Bit(VipsInterpretation const interpretation);

  /*
    Return the image alpha maximum. Useful for combining alpha bands. scRGB
    images are 0 - 1 for image data, but the alpha is 0 - 255.
  */
  double MaximumImageAlpha(VipsInterpretation const interpretation);

  /*
    Convert RGBA value to another colourspace
  */
  std::vector<double> GetRgbaAsColourspace(std::vector<double> const rgba,
    VipsInterpretation const interpretation, bool premultiply);

  /*
    Apply the alpha channel to a given colour
   */
  std::tuple<VImage, std::vector<double>> ApplyAlpha(VImage image, std::vector<double> colour, bool premultiply);

  /*
    Removes alpha channel, if any.
  */
  VImage RemoveAlpha(VImage image);

  /*
    Ensures alpha channel, if missing.
  */
  VImage EnsureAlpha(VImage image, double const value);

  /*
    Calculate the horizontal and vertical shrink factors, taking the canvas mode into account.
  */
  std::pair<double, double> ResolveShrink(int width, int height, int targetWidth, int targetHeight,
    Canvas canvas, bool withoutEnlargement, bool withoutReduction);

  /*
    Ensure decoding remains sequential.
  */
  VImage StaySequential(VImage image, VipsAccess access, bool condition = TRUE);

}  // namespace sharp

#endif  // SRC_COMMON_H_
