#include "./win_utils.hh"

std::wstring utf8ToUtf16(std::string input) {
  unsigned int len = MultiByteToWideChar(CP_UTF8, 0, input.c_str(), -1, NULL, 0);
  WCHAR *output = new WCHAR[len];
  MultiByteToWideChar(CP_UTF8, 0, input.c_str(), -1, output, len);
  std::wstring res(output);
  delete[] output;
  return res;
}

std::string utf16ToUtf8(const WCHAR *input, DWORD length) {
  unsigned int len = WideCharToMultiByte(CP_UTF8, 0, input, length, NULL, 0, NULL, NULL);
  char *output = new char[len + 1];
  WideCharToMultiByte(CP_UTF8, 0, input, length, output, len, NULL, NULL);
  output[len] = '\0';
  std::string res(output);
  delete[] output;
  return res;
}

std::string normalizePath(std::string path) {
  // Prevent truncation to MAX_PATH characters by adding the \\?\ prefix
  std::wstring p = utf8ToUtf16("\\\\?\\" + path);

  // Get the required length for the output
  DWORD len = GetLongPathNameW(p.data(), NULL, 0);
  if (!len) {
    return path;
  }

  // Allocate output array and get long path
  WCHAR *output = new WCHAR[len];
  len = GetLongPathNameW(p.data(), output, len);
  if (!len) {
    delete[] output;
    return path;
  }

  // Convert back to utf8
  std::string res = utf16ToUtf8(output + 4, len - 4);
  delete[] output;
  return res;
}
