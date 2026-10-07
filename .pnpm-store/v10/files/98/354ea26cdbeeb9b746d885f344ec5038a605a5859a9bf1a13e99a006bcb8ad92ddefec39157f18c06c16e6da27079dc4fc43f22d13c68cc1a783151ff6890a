package flatted

import (
	"encoding/json"
	"reflect"
	"sort"
	"strconv"
	"strings"
)

// flattedIndex is a internal type used to distinguish between
// actual strings and flatted indices during the reconstruction phase.
type flattedIndex string

// Stringify converts a Go value into a specialized flatted JSON string.
func Stringify(value any, replacer any, space any) (string, error) {
	knownKeys := []any{}
	knownValues := []string{}
	input := []any{}

	index := func(v any) string {
		input = append(input, v)
		idx := strconv.Itoa(len(input) - 1)
		knownKeys = append(knownKeys, v)
		knownValues = append(knownValues, idx)
		return idx
	}

	relate := func(v any) any {
		if v == nil {
			return nil
		}
		rv := reflect.ValueOf(v)
		kind := rv.Kind()
		if kind == reflect.String || kind == reflect.Slice || kind == reflect.Map || kind == reflect.Ptr {
			for i, k := range knownKeys {
				if kind == reflect.String {
					if k == v {
						return knownValues[i]
					}
				} else {
					rk := reflect.ValueOf(k)
					if rk.Kind() == kind && rk.Pointer() == rv.Pointer() {
						return knownValues[i]
					}
				}
			}
			return index(v)
		}
		return v
	}

	transform := func(v any) any {
		rv := reflect.ValueOf(v)
		if !rv.IsValid() {
			return nil
		}
		if _, ok := v.(json.Marshaler); ok {
			return v
		}
		// Dereference pointers to process the underlying Slice, Map, or Array
		for rv.Kind() == reflect.Ptr && !rv.IsNil() {
			rv = rv.Elem()
		}
		switch rv.Kind() {
		case reflect.Slice, reflect.Array:
			res := make([]any, rv.Len())
			for i := 0; i < rv.Len(); i++ {
				res[i] = relate(rv.Index(i).Interface())
			}
			return res
		case reflect.Map:
			res := make(map[string]any)
			keys := rv.MapKeys()
			sort.Slice(keys, func(i, j int) bool {
				return keys[i].String() < keys[j].String()
			})

			whitelist, isWhitelist := replacer.([]string)
			for _, key := range keys {
				kStr := key.String()
				if isWhitelist {
					found := false
					for _, w := range whitelist {
						if w == kStr {
							found = true
							break
						}
					}
					if !found {
						continue
					}
				}
				res[kStr] = relate(rv.MapIndex(key).Interface())
			}
			return res
		case reflect.Struct:
			res := make(map[string]any)
			t := rv.Type()
			for i := 0; i < rv.NumField(); i++ {
				field := t.Field(i)
				if field.PkgPath != "" {
					continue
				}
				name := field.Name
				if tag := field.Tag.Get("json"); tag != "" {
					name = strings.Split(tag, ",")[0]
				}
				res[name] = relate(rv.Field(i).Interface())
			}
			return res
		default:
			return v
		}
	}

	index(value)
	output := []any{}
	for i := 0; i < len(input); i++ {
		output = append(output, transform(input[i]))
	}

	var b []byte
	var err error
	indent := ""
	if s, ok := space.(string); ok {
		indent = s
	} else if i, ok := space.(int); ok {
		indent = strings.Repeat(" ", i)
	}

	if indent != "" {
		b, err = json.MarshalIndent(output, "", indent)
	} else {
		b, err = json.Marshal(output)
	}

	if err != nil {
		return "", err
	}
	return string(b), nil
}

// Parse converts a specialized flatted string into a Go value.
func Parse(text string, reviver func(key string, value any) any) (any, error) {
	var jsonInput []any
	if err := json.Unmarshal([]byte(text), &jsonInput); err != nil {
		return nil, err
	}

	var wrap func(any) any
	wrap = func(v any) any {
		if s, ok := v.(string); ok {
			return flattedIndex(s)
		}
		if arr, ok := v.([]any); ok {
			for i, item := range arr {
				arr[i] = wrap(item)
			}
			return arr
		}
		if m, ok := v.(map[string]any); ok {
			for k, item := range m {
				m[k] = wrap(item)
			}
			return m
		}
		return v
	}

	wrapped := make([]any, len(jsonInput))
	for i, v := range jsonInput {
		wrapped[i] = wrap(v)
	}

	input := make([]any, len(wrapped))
	for i, v := range wrapped {
		if fi, ok := v.(flattedIndex); ok {
			input[i] = string(fi)
		} else {
			input[i] = v
		}
	}

	if len(input) == 0 {
		return nil, nil
	}

	value := input[0]
	rv := reflect.ValueOf(value)
	if rv.IsValid() && (rv.Kind() == reflect.Slice || rv.Kind() == reflect.Map) {
		set := make(map[uintptr]bool)
		set[rv.Pointer()] = true
		res := loop(value, input, set)
		if reviver != nil {
			return revive("", res, reviver), nil
		}
		return res, nil
	}

	if reviver != nil {
		return reviver("", value), nil
	}
	return value, nil
}

func revive(key string, value any, reviver func(k string, v any) any) any {
	if arr, ok := value.([]any); ok {
		for i, v := range arr {
			arr[i] = revive(strconv.Itoa(i), v, reviver)
		}
	} else if m, ok := value.(map[string]any); ok {
		keys := make([]string, 0, len(m))
		for k := range m {
			keys = append(keys, k)
		}
		sort.Strings(keys)
		for _, k := range keys {
			m[k] = revive(k, m[k], reviver)
		}
	}
	return reviver(key, value)
}

func loop(value any, input []any, set map[uintptr]bool) any {
	if arr, ok := value.([]any); ok {
		for i, v := range arr {
			if fi, ok := v.(flattedIndex); ok {
				idx, _ := strconv.Atoi(string(fi))
				arr[i] = ref(input[idx], input, set)
			}
		}
		return arr
	}
	if m, ok := value.(map[string]any); ok {
		for k, v := range m {
			if fi, ok := v.(flattedIndex); ok {
				idx, _ := strconv.Atoi(string(fi))
				m[k] = ref(input[idx], input, set)
			}
		}
		return m
	}
	return value
}

func ref(value any, input []any, set map[uintptr]bool) any {
	rv := reflect.ValueOf(value)
	if rv.IsValid() && (rv.Kind() == reflect.Slice || rv.Kind() == reflect.Map) {
		ptr := rv.Pointer()
		if !set[ptr] {
			set[ptr] = true
			return loop(value, input, set)
		}
	}
	return value
}

// ToJSON converts a generic value into a JSON serializable object without losing recursion.
func ToJSON(value any) (any, error) {
	s, err := Stringify(value, nil, nil)
	if err != nil {
		return nil, err
	}
	var res any
	err = json.Unmarshal([]byte(s), &res)
	return res, err
}

// FromJSON converts a previously serialized object with recursion into a recursive one.
func FromJSON(value any) (any, error) {
	b, err := json.Marshal(value)
	if err != nil {
		return nil, err
	}
	return Parse(string(b), nil)
}
