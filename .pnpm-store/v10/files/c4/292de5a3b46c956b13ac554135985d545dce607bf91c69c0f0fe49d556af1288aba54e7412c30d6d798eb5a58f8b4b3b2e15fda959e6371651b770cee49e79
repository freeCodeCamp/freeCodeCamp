# ISC License
#
# Copyright (c) 2018-2025, Andrea Giammarchi, @WebReflection
#
# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
# REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
# AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
# INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
# LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
# OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
# PERFORMANCE OF THIS SOFTWARE.

import json as _json

class _Known:
    def __init__(self):
        self.key = []
        self.value = []

class _String:
    def __init__(self, value):
        self.value = value

def _array_keys(value):
    for i in range(len(value)):
        yield i

def _object_keys(value):
    for key in value:
        yield key

def _is_array(value):
    return isinstance(value, (list, tuple))

def _is_object(value):
    return isinstance(value, dict)

def _is_string(value):
    return isinstance(value, str)

def _index(known, input, value):
    input.append(value)
    index = str(len(input) - 1)
    known.key.append(value)
    known.value.append(index)
    return index

def _relate(known, input, value):
    if _is_string(value) or _is_array(value) or _is_object(value):
        try:
            return known.value[known.key.index(value)]
        except:
            return _index(known, input, value)

    return value

def _resolver(input, lazy, parsed):
    def resolver(output):
        keys = _array_keys(output) if _is_array(output) else _object_keys(output) if _is_object(output) else []
        for key in keys:
            value = output[key]
            if isinstance(value, _String):
                tmp = input[int(value.value)]
                output[key] = tmp
                if (_is_array(tmp) or _is_object(tmp)) and tmp not in parsed:
                    parsed.append(tmp)
                    lazy.append([output, key])

        return output

    return resolver

def _transform(known, input, value):
    if _is_array(value):
        output = []
        for val in value:
            output.append(_relate(known, input, val))
        return output

    if _is_object(value):
        obj = {}
        for key in value:
            obj[key] = _relate(known, input, value[key])
        return obj

    return value

def _wrap(value):
    if _is_string(value):
        return _String(value)

    if _is_array(value):
        i = 0
        for val in value:
            value[i] = _wrap(val)
            i += 1

    elif _is_object(value):
        for key in value:
            value[key] = _wrap(value[key])

    return value

def parse(value, *args, **kwargs):
    json = _json.loads(value, *args, **kwargs)
    wrapped = []
    for value in json:
        wrapped.append(_wrap(value))

    input = []
    for value in wrapped:
        if isinstance(value, _String):
            input.append(value.value)
        else:
            input.append(value)

    value = input[0]
    lazy = []
    revive = _resolver(input, lazy, [value])

    value = revive(value)

    i = 0
    while i < len(lazy):
        o, k = lazy[i]
        i += 1
        o[k] = revive(o[k])

    return value


def stringify(value, *args, **kwargs):
    known = _Known()
    input = []
    output = []
    i = int(_index(known, input, value))
    while i < len(input):
        output.append(_transform(known, input, input[i]))
        i += 1
    return _json.dumps(output, *args, **kwargs)
