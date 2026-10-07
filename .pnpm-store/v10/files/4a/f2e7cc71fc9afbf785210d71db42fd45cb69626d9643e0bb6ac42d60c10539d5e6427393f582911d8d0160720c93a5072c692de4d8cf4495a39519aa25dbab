/*
This is responsible for extracting the strings, in bulk, from a MessagePack buffer. Creating strings from buffers can
be one of the biggest performance bottlenecks of parsing, but creating an array of extracting strings all at once
provides much better performance. This will parse and produce up to 256 strings at once .The JS parser can call this multiple
times as necessary to get more strings. This must be partially capable of parsing MessagePack so it can know where to
find the string tokens and determine their position and length. All strings are decoded as UTF-8.
*/
#include <node_api.h>
#if ENABLE_V8_API
#include <v8.h>
#endif

#ifndef thread_local
#ifdef __GNUC__
# define thread_local __thread
#elif __STDC_VERSION__ >= 201112L
# define thread_local _Thread_local
#elif defined(_MSC_VER)
# define thread_local __declspec(thread)
#else
# define thread_local
#endif
#endif

const int MAX_TARGET_SIZE = 255;
const uint32_t UNEXPECTED_END = 0xffffffff;
typedef uint32_t (*token_handler)(uint8_t* source, uint32_t position, uint32_t size);
token_handler tokenTable[256] = {};
napi_value unexpectedEnd(napi_env env) {
	napi_value returnValue;
	napi_get_undefined(env, &returnValue);
	napi_throw_type_error(env, NULL, "Unexpected end of buffer reading string");
	return returnValue;
}

class Extractor {
public:
	// napi_ref targetArray; // could consider reenabling this optimization for napi
	bool hasTargetArray = false;
	uint8_t* source;
	uint32_t position = 0;
	uint32_t writePosition = 0;
	uint32_t stringStart = 0;
	uint32_t lastStringEnd = 0;

	void readString(napi_env env, uint32_t length, bool allowStringBlocks, napi_value* target) {
		uint32_t start = position;
		uint32_t end = position + length;
		if (allowStringBlocks) { // for larger strings, we don't bother to check every character for being latin, and just go right to creating a new string
			while(position < end) {
				if (source[position] < 0x80) // ensure we character is latin and can be decoded as one byte
					position++;
				else {
					break;
				}
			}
		}
		if (position < end) {
			// non-latin character
			if (lastStringEnd) {
				napi_value value;
				napi_create_string_latin1(env, (const char*) source + stringStart, lastStringEnd - stringStart, &value);
				target[writePosition++] = value;
				lastStringEnd = 0;
			}
			// use standard utf-8 conversion
			napi_value value;
			napi_create_string_utf8(env, (const char*) source + start, (int) length, &value);
			target[writePosition++] = value;
			position = end;
			return;
		}

		if (lastStringEnd) {
			if (start - lastStringEnd > 40 || end - stringStart > 6000) {
				napi_value value;
				napi_create_string_latin1(env, (const char*) source + stringStart, lastStringEnd - stringStart, &value);
				target[writePosition++] = value;
				stringStart = start;
			}
		} else {
			stringStart = start;
		}
		lastStringEnd = end;
	}

	napi_value extractStrings(napi_env env, uint32_t startingPosition, uint32_t size, uint8_t* inputSource) {
		napi_value target[MAX_TARGET_SIZE + 1]; // leave one for the queued string
		writePosition = 0;
		lastStringEnd = 0;
		position = startingPosition;
		source = inputSource;
		while (position < size) {
			uint8_t token = source[position++];
			if (token < 0xa0) {
				// all one byte tokens
			} else if (token < 0xc0) {
				// fixstr, we want to convert this
				token -= 0xa0;
				if (token + position > size) {
					return unexpectedEnd(env);
				}
				readString(env, token, true, target);
				if (writePosition >= MAX_TARGET_SIZE)
					break;
			} else if (token <= 0xdb && token >= 0xd9) {
				if (token == 0xd9) { //str 8
					if (position >= size) {
						return unexpectedEnd(env);
					}
					uint32_t length = source[position++];
					if (length + position > size) {
						return unexpectedEnd(env);
					}
					readString(env,length, true, target);
				} else if (token == 0xda) { //str 16
					if (2 + position > size) {
						return unexpectedEnd(env);
					}
					uint32_t length = source[position++] << 8;
					length += source[position++];
					if (length + position > size) {
						return unexpectedEnd(env);
					}
					readString(env,length, false, target);
				} else { //str 32
					if (4 + position > size) {
						return unexpectedEnd(env);
					}
					uint32_t length = source[position++] << 24;
					length += source[position++] << 16;
					length += source[position++] << 8;
					length += source[position++];
					if (length + position > size) {
						return unexpectedEnd(env);
					}
					readString(env, length, false, target);
				}
				if (writePosition >= MAX_TARGET_SIZE)
					break;
			} else {
				auto handle = tokenTable[token];
				if ((size_t ) handle < 20) {
					position += (size_t ) handle;
				} else {
					position = tokenTable[token](source, position, size);
					if (position == UNEXPECTED_END) {
						return unexpectedEnd(env);
					}
				}
			}
		}

		if (lastStringEnd) {
			napi_value value;
			napi_create_string_latin1(env, (const char*) source + stringStart, lastStringEnd - stringStart, &value);
			if (writePosition == 0) {
				return value;
			}
			target[writePosition++] = value;
		} else if (writePosition == 1) {
			return target[0];
		}
		napi_value array;
		#if ENABLE_V8_API
		v8::Local<v8::Array> v8Array = v8::Array::New(v8::Isolate::GetCurrent(), (v8::Local<v8::Value>*) target, writePosition);
		memcpy(&array, &v8Array, sizeof(array));
		#else
		napi_create_array_with_length(env, writePosition, &array);
		for (uint32_t i = 0; i < writePosition; i++) {
			napi_set_element(env, array, i, target[i]);
		}
		#endif
		return array;
	}
};

void setupTokenTable() {
	for (int i = 0; i < 256; i++) {
		tokenTable[i] = nullptr;
	}
	// uint8, int8
	tokenTable[0xcc] = tokenTable[0xd0] = (token_handler) 1;
	// uint16, int16, array 16, map 16, fixext 1
	tokenTable[0xcd] = tokenTable[0xd1] = tokenTable[0xdc] = tokenTable[0xde] = tokenTable[0xd4] = (token_handler) 2;
	// fixext 16
	tokenTable[0xd5] = (token_handler) 3;
	// uint32, int32, float32, array 32, map 32
	tokenTable[0xce] = tokenTable[0xd2] = tokenTable[0xca] = tokenTable[0xdd] = tokenTable[0xdf] = (token_handler) 4;
	// fixext 4
	tokenTable[0xd6] = (token_handler) 5;
	// uint64, int64, float64, fixext 8
	tokenTable[0xcf] = tokenTable[0xd3] = tokenTable[0xcb] = (token_handler) 8;
	// fixext 8
	tokenTable[0xd7] = (token_handler) 9;
	// fixext 16
	tokenTable[0xd8] = (token_handler) 17;
	// bin 8
	tokenTable[0xc4] = ([](uint8_t* source, uint32_t position, uint32_t size) -> uint32_t {
		if (position >= size) {
			return UNEXPECTED_END;
		}
		uint32_t length = source[position++];
		return position + length;
	});
	// bin 16
	tokenTable[0xc5] = ([](uint8_t* source, uint32_t position, uint32_t size) -> uint32_t {
		if (position + 2 > size) {
			return UNEXPECTED_END;
		}
		uint32_t length = source[position++] << 8;
		length += source[position++];
		return position + length;
	});
	// bin 32
	tokenTable[0xc6] = ([](uint8_t* source, uint32_t position, uint32_t size) -> uint32_t {
		if (position + 4 > size)
			return UNEXPECTED_END;
		uint32_t length = source[position++] << 24;
		length += source[position++] << 16;
		length += source[position++] << 8;
		length += source[position++];
		return position + length;
	});
	// ext 8
	tokenTable[0xc7] = ([](uint8_t* source, uint32_t position, uint32_t size) -> uint32_t {
		if (position >= size)
			return UNEXPECTED_END;
		uint32_t length = source[position++];
		position++;
		return position + length;
	});
	// ext 16
	tokenTable[0xc8] = ([](uint8_t* source, uint32_t position, uint32_t size) -> uint32_t {
		if (position + 2 > size)
			return UNEXPECTED_END;
		uint32_t length = source[position++] << 8;
		length += source[position++];
		position++;
		return position + length;
	});
	// ext 32
	tokenTable[0xc9] = ([](uint8_t* source, uint32_t position, uint32_t size) -> uint32_t {
		if (position + 4 > size)
			return UNEXPECTED_END;
		uint32_t length = source[position++] << 24;
		length += source[position++] << 16;
		length += source[position++] << 8;
		length += source[position++];
		position++;
		return position + length;
	});
}
static thread_local Extractor* extractor;
napi_value extractStrings(napi_env env, napi_callback_info info) {
	size_t argc = 3;
	napi_value args[3];
	napi_get_cb_info(env, info, &argc, args, NULL, NULL);
	uint32_t position;
	uint32_t size;
	napi_get_value_uint32(env, args[0], &position);
	napi_get_value_uint32(env, args[1], &size);
	uint8_t* source;
	size_t buffer_size;
	napi_get_arraybuffer_info(env, args[2], (void**) &source, &buffer_size);
	return extractor->extractStrings(env, position, size, source);
}
#define EXPORT_NAPI_FUNCTION(name, func) { napi_property_descriptor desc = { name, 0, func, 0, 0, 0, (napi_property_attributes) (napi_writable | napi_configurable), 0 }; napi_define_properties(env, exports, 1, &desc); }
NAPI_MODULE_INIT() {
	extractor = new Extractor(); // create our thread-local extractor
	setupTokenTable();
	EXPORT_NAPI_FUNCTION("extractStrings", extractStrings);
	return exports;
}
