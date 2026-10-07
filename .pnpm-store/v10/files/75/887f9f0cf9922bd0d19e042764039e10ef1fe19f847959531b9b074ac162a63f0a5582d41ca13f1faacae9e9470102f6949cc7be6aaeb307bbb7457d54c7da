#include <stdint.h>
#include "./BSER.hh"

BSERType decodeType(std::istream &iss) {
  int8_t type;
  iss.read(reinterpret_cast<char*>(&type), sizeof(type));
  return (BSERType) type;
}

void expectType(std::istream &iss, BSERType expected) {
  BSERType got = decodeType(iss);
  if (got != expected) {
    throw std::runtime_error("Unexpected BSER type");
  }
}

void encodeType(std::ostream &oss, BSERType type) {
  int8_t t = (int8_t)type;
  oss.write(reinterpret_cast<char*>(&t), sizeof(t));
}

template<typename T>
class Value : public BSERValue {
public:
  T value;
  Value(T val) {
    value = val;
  }

  Value() {}
};

class BSERInteger : public Value<int64_t> {
public:
  BSERInteger(int64_t value) : Value(value) {}
  BSERInteger(std::istream &iss) {
    int8_t int8;
    int16_t int16;
    int32_t int32;
    int64_t int64;

    BSERType type = decodeType(iss);

    switch (type) {
      case BSER_INT8:
        iss.read(reinterpret_cast<char*>(&int8), sizeof(int8));
        value = int8;
        break;
      case BSER_INT16:
        iss.read(reinterpret_cast<char*>(&int16), sizeof(int16));
        value = int16;
        break;
      case BSER_INT32:
        iss.read(reinterpret_cast<char*>(&int32), sizeof(int32));
        value = int32;
        break;
      case BSER_INT64:
        iss.read(reinterpret_cast<char*>(&int64), sizeof(int64));
        value = int64;
        break;
      default:
        throw std::runtime_error("Invalid BSER int type");
    }
  }

  int64_t intValue() override {
    return value;
  }

  void encode(std::ostream &oss) override {
    if (value <= INT8_MAX) {
      encodeType(oss, BSER_INT8);
      int8_t v = (int8_t)value;
      oss.write(reinterpret_cast<char*>(&v), sizeof(v));
    } else if (value <= INT16_MAX) {
      encodeType(oss, BSER_INT16);
      int16_t v = (int16_t)value;
      oss.write(reinterpret_cast<char*>(&v), sizeof(v));
    } else if (value <= INT32_MAX) {
      encodeType(oss, BSER_INT32);
      int32_t v = (int32_t)value;
      oss.write(reinterpret_cast<char*>(&v), sizeof(v));
    } else {
      encodeType(oss, BSER_INT64);
      oss.write(reinterpret_cast<char*>(&value), sizeof(value));
    }
  }
};

class BSERArray : public Value<BSER::Array> {
public:
  BSERArray() : Value() {}
  BSERArray(BSER::Array value) : Value(value) {}
  BSERArray(std::istream &iss) {
    expectType(iss, BSER_ARRAY);
    int64_t len = BSERInteger(iss).intValue();
    for (int64_t i = 0; i < len; i++) {
      value.push_back(BSER(iss));
    }
  }

  BSER::Array arrayValue() override {
    return value;
  }

  void encode(std::ostream &oss) override {
    encodeType(oss, BSER_ARRAY);
    BSERInteger(value.size()).encode(oss);
    for (auto it = value.begin(); it != value.end(); it++) {
      it->encode(oss);
    }
  }
};

class BSERString : public Value<std::string> {
public:
  BSERString(std::string value) : Value(value) {}
  BSERString(std::istream &iss) {
    expectType(iss, BSER_STRING);
    int64_t len = BSERInteger(iss).intValue();
    value.resize(len);
    iss.read(&value[0], len);
  }

  std::string stringValue() override {
    return value;
  }

  void encode(std::ostream &oss) override {
    encodeType(oss, BSER_STRING);
    BSERInteger(value.size()).encode(oss);
    oss << value;
  }
};

class BSERObject : public Value<BSER::Object> {
public:
  BSERObject() : Value() {}
  BSERObject(BSER::Object value) : Value(value) {}
  BSERObject(std::istream &iss) {
    expectType(iss, BSER_OBJECT);
    int64_t len = BSERInteger(iss).intValue();
    for (int64_t i = 0; i < len; i++) {
      auto key = BSERString(iss).stringValue();
      auto val = BSER(iss);
      value.emplace(key, val);
    }
  }

  BSER::Object objectValue() override {
    return value;
  }

  void encode(std::ostream &oss) override {
    encodeType(oss, BSER_OBJECT);
    BSERInteger(value.size()).encode(oss);
    for (auto it = value.begin(); it != value.end(); it++) {
      BSERString(it->first).encode(oss);
      it->second.encode(oss);
    }
  }
};

class BSERDouble : public Value<double> {
public:
  BSERDouble(double value) : Value(value) {}
  BSERDouble(std::istream &iss) {
    expectType(iss, BSER_REAL);
    iss.read(reinterpret_cast<char*>(&value), sizeof(value));
  }

  double doubleValue() override {
    return value;
  }

  void encode(std::ostream &oss) override {
    encodeType(oss, BSER_REAL);
    oss.write(reinterpret_cast<char*>(&value), sizeof(value));
  }
};

class BSERBoolean : public Value<bool> {
public:
  BSERBoolean(bool value) : Value(value) {}
  bool boolValue() override { return value; }
  void encode(std::ostream &oss) override {
    int8_t t = value == true ? static_cast<int8_t>(BSER_BOOL_TRUE) : static_cast<int8_t>(BSER_BOOL_FALSE);
    oss.write(reinterpret_cast<char*>(&t), sizeof(t));
  }
};

class BSERNull : public Value<bool> {
public:
  BSERNull() : Value(false) {}
  void encode(std::ostream &oss) override {
    encodeType(oss, BSER_NULL);
  }
};

std::shared_ptr<BSERArray> decodeTemplate(std::istream &iss) {
  expectType(iss, BSER_TEMPLATE);
  auto keys = BSERArray(iss).arrayValue();
  auto len = BSERInteger(iss).intValue();
  std::shared_ptr<BSERArray> arr = std::make_shared<BSERArray>();
  for (int64_t i = 0; i < len; i++) {
    BSER::Object obj;
    for (auto it = keys.begin(); it != keys.end(); it++) {
      if (iss.peek() == 0x0c) {
        iss.ignore(1);
        continue;
      }

      auto val = BSER(iss);
      obj.emplace(it->stringValue(), val);
    }
    arr->value.push_back(obj);
  }
  return arr;
}

BSER::BSER(std::istream &iss) {
  BSERType type = decodeType(iss);
  iss.unget();

  switch (type) {
    case BSER_ARRAY:
      m_ptr = std::make_shared<BSERArray>(iss);
      break;
    case BSER_OBJECT:
      m_ptr = std::make_shared<BSERObject>(iss);
      break;
    case BSER_STRING:
      m_ptr = std::make_shared<BSERString>(iss);
      break;
    case BSER_INT8:
    case BSER_INT16:
    case BSER_INT32:
    case BSER_INT64:
      m_ptr = std::make_shared<BSERInteger>(iss);
      break;
    case BSER_REAL:
      m_ptr = std::make_shared<BSERDouble>(iss);
      break;
    case BSER_BOOL_TRUE:
      iss.ignore(1);
      m_ptr = std::make_shared<BSERBoolean>(true);
      break;
    case BSER_BOOL_FALSE:
      iss.ignore(1);
      m_ptr = std::make_shared<BSERBoolean>(false);
      break;
    case BSER_NULL:
      iss.ignore(1);
      m_ptr = std::make_shared<BSERNull>();
      break;
    case BSER_TEMPLATE:
      m_ptr = decodeTemplate(iss);
      break;
    default:
      throw std::runtime_error("unknown BSER type");
  }
}

BSER::BSER() : m_ptr(std::make_shared<BSERNull>()) {}
BSER::BSER(BSER::Array value) : m_ptr(std::make_shared<BSERArray>(value)) {}
BSER::BSER(BSER::Object value) : m_ptr(std::make_shared<BSERObject>(value)) {}
BSER::BSER(const char *value) : m_ptr(std::make_shared<BSERString>(value)) {}
BSER::BSER(std::string value) : m_ptr(std::make_shared<BSERString>(value)) {}
BSER::BSER(int64_t value) : m_ptr(std::make_shared<BSERInteger>(value)) {}
BSER::BSER(double value) : m_ptr(std::make_shared<BSERDouble>(value)) {}
BSER::BSER(bool value) : m_ptr(std::make_shared<BSERBoolean>(value)) {}

BSER::Array BSER::arrayValue() { return m_ptr->arrayValue(); }
BSER::Object BSER::objectValue() { return m_ptr->objectValue(); }
std::string BSER::stringValue() { return m_ptr->stringValue(); }
int64_t BSER::intValue() { return m_ptr->intValue(); }
double BSER::doubleValue() { return m_ptr->doubleValue(); }
bool BSER::boolValue() { return m_ptr->boolValue(); }
void BSER::encode(std::ostream &oss) {
  m_ptr->encode(oss);
}

int64_t BSER::decodeLength(std::istream &iss) {
  char pdu[2];
  if (!iss.read(pdu, 2) || pdu[0] != 0 || pdu[1] != 1) {
    throw std::runtime_error("Invalid BSER");
  }

  return BSERInteger(iss).intValue();
}

std::string BSER::encode() {
  std::ostringstream oss(std::ios_base::binary);
  encode(oss);

  std::ostringstream res(std::ios_base::binary);
  res.write("\x00\x01", 2);

  BSERInteger(oss.str().size()).encode(res);
  res << oss.str();
  return res.str();
}
