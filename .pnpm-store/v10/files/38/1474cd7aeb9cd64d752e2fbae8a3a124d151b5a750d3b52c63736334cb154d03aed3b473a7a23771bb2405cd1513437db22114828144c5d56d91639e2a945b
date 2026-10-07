<?php

/*!
 * ISC License
 * 
 * Copyright (c) 2018-2021, Andrea Giammarchi, @WebReflection
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

class FlattedString {
  public $value = '';
  public function __construct($value) {
    $this->value = $value;
  }
}

class Flatted {

  // public utilities
  public static function parse($json, $assoc = false, $depth = 512, $options = 0) {
    $input = array_map(
      'Flatted::asString',
      array_map(
        'Flatted::wrap',
        json_decode($json, $assoc, $depth, $options)
      )
    );
    $value = &$input[0];
    $set = array();
    $set[] = &$value;
    if (is_array($value))
      return Flatted::loop(false, array_keys($value), $input, $set, $value);
    if (is_object($value))
      return Flatted::loop(true, Flatted::keys($value), $input, $set, $value);
    return $value;
  }

  public static function stringify($value, $options = 0, $depth = 512) {
    $known = new stdClass;
    $known->key = array();
    $known->value = array();
    $input = array();
    $output = array();
    $i = intval(Flatted::index($known, $input, $value));
    while ($i < count($input)) {
      $output[$i] = Flatted::transform($known, $input, $input[$i]);
      $i++;
    }
    return json_encode($output, $options, $depth);
  }

  // private helpers
  private static function asString($value) {
    return $value instanceof FlattedString ? $value->value : $value;
  }

  private static function index(&$known, &$input, &$value) {
    $input[] = &$value;
    $index = strval(count($input) - 1);
    $known->key[] = &$value;
    $known->value[] = &$index;
    return $index;
  }

  private static function keys(&$value) {
    $obj = new ReflectionObject($value);
    $props = $obj->getProperties();
    $keys = array();
    foreach ($props as $prop)
      $keys[] = $prop->getName();
    return $keys;
  }

  private static function loop($obj, $keys, &$input, &$set, &$output) {
    foreach ($keys as $key) {
      $value = $obj ? $output->$key : $output[$key];
      if ($value instanceof FlattedString)
        Flatted::ref($obj, $key, $input[$value->value], $input, $set, $output);
    }
    return $output;
  }

  private static function relate(&$known, &$input, &$value) {
    if (is_string($value) || is_array($value) || is_object($value)) {
      $key = array_search($value, $known->key, true);
      if ($key !== false)
        return $known->value[$key];
      return Flatted::index($known, $input, $value);
    }
    return $value;
  }

  private static function ref($obj, &$key, &$value, &$input, &$set, &$output) {
    if (is_array($value) && !in_array($value, $set, true)) {
      $set[] = $value;
      $value = Flatted::loop(false, array_keys($value), $input, $set, $value);
    }
    elseif (is_object($value) && !in_array($value, $set, true)) {
      $set[] = $value;
      $value = Flatted::loop(true, Flatted::keys($value), $input, $set, $value);
    }
    if ($obj) {
      $output->$key = &$value;
    }
    else {
      $output[$key] = &$value;
    }
  }

  private static function transform(&$known, &$input, &$value) {
    if (is_array($value)) {
      return array_map(
        function ($value) use(&$known, &$input) {
          return Flatted::relate($known, $input, $value);
        },
        $value
      );
    }
    if (is_object($value)) {
      $object = new stdClass;
      $keys = Flatted::keys($value);
      foreach ($keys as $key)
        $object->$key = Flatted::relate($known, $input, $value->$key);
      return $object;
    }
    return $value;
  }

  private static function wrap($value) {
    if (is_string($value)) {
      return new FlattedString($value);
    }
    if (is_array($value)) {
      return array_map('Flatted::wrap', $value);
    }
    if (is_object($value)) {
      $keys = Flatted::keys($value);
      foreach ($keys as $key) {
        $value->$key = self::wrap($value->$key);
      }
    }
    return $value;
  }
}
?>