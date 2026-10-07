#ifndef BSER_H
#define BSER_H

#include <string>
#include <sstream>
#include <vector>
#include <unordered_map>
#include <memory>

enum BSERType {
  BSER_ARRAY = 0x00,
  BSER_OBJECT = 0x01,
  BSER_STRING = 0x02,
  BSER_INT8 = 0x03,
  BSER_INT16 = 0x04,
  BSER_INT32 = 0x05,
  BSER_INT64 = 0x06,
  BSER_REAL = 0x07,
  BSER_BOOL_TRUE = 0x08,
  BSER_BOOL_FALSE = 0x09,
  BSER_NULL = 0x0a,
  BSER_TEMPLATE = 0x0b
};

class BSERValue;

class BSER {
public:
  typedef std::vector<BSER> Array;
  typedef std::unordered_map<std::string, BSER> Object;

  BSER();
  BSER(BSER::Array value);
  BSER(BSER::Object value);
  BSER(std::string value);
  BSER(const char *value);
  BSER(int64_t value);
  BSER(double value);
  BSER(bool value);
  BSER(std::istream &iss);

  BSER::Array arrayValue();
  BSER::Object objectValue();
  std::string stringValue();
  int64_t intValue();
  double doubleValue();
  bool boolValue();
  void encode(std::ostream &oss);

  static int64_t decodeLength(std::istream &iss);
  std::string encode();
private:
  std::shared_ptr<BSERValue> m_ptr;
};

class BSERValue {
protected:
  friend class BSER;
  virtual BSER::Array arrayValue() { return BSER::Array(); }
  virtual BSER::Object objectValue() { return BSER::Object(); }
  virtual std::string stringValue() { return std::string(); }
  virtual int64_t intValue() { return 0; }
  virtual double doubleValue() { return 0; }
  virtual bool boolValue() { return false; }
  virtual void encode(std::ostream &oss) {}
  virtual ~BSERValue() {}
};

#endif
