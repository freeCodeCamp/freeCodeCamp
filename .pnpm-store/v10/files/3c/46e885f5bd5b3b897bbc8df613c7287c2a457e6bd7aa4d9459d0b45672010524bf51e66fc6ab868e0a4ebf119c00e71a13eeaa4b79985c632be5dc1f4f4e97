#include "Glob.hh"

#ifdef __wasm32__
extern "C" bool wasm_regex_match(const char *s, const char *regex);
#endif

Glob::Glob(std::string raw) {
  mRaw = raw;
  mHash = std::hash<std::string>()(raw);
  #ifndef __wasm32__
    mRegex = std::regex(raw);
  #endif
}

bool Glob::isIgnored(std::string relative_path) const {
  // Use native JS regex engine for wasm to reduce binary size.
  #ifdef __wasm32__
    return wasm_regex_match(relative_path.c_str(), mRaw.c_str());
  #else
    return std::regex_match(relative_path, mRegex);
  #endif
}
