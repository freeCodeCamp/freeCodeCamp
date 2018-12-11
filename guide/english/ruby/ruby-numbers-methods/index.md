---
title: Ruby Number Methods
---
Ruby provides a variety of built-in methods you may use on numbers. The following is an incomplete list of <a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>integer</a> and <a href='https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil' target='_blank' rel='nofollow'>float</a> methods.

## <a href='https://ruby-doc.org/core-2.2.0/Integer.html#method-i-even-3F' target='_blank' rel='nofollow'>Even</a>:

Use `.even?` to check whether or not an <a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>**integer**</a> is even. Returns a `true` or `false` **boolean**.
```Ruby
    15.even? #=> false
    4.even?  #=> true
```
## <a href='https://ruby-doc.org/core-2.2.0/Integer.html#method-i-odd-3F' target='_blank' rel='nofollow'>Odd</a>:

Use `.odd?` to check whether or not an <a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>**integer**</a> is odd. Returns a `true` or `false` **boolean**.
```Ruby
    15.odd? #=> true
    4.odd?  #=> false
```

## <a href='https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil' target='_blank' rel='nofollow'>Ceil</a>:

The `.ceil` method rounds <a href='https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil' target='_blank' rel='nofollow'>**floats**</a> **up** to the nearest number. Returns an <a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>**integer**</a>.
```Ruby
    8.3.ceil #=> 9
    6.7.ceil #=> 7
```

## <a href='https://ruby-doc.org/core-2.2.0/Float.html#method-i-floor' target='_blank' rel='nofollow'>Floor</a>:

The `.floor` method rounds <a href='https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil' target='_blank' rel='nofollow'>**floats**</a> **down** to the nearest number. Returns an <a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>**integer**</a>.
```Ruby
    8.3.floor #=> 8
    6.7.floor #=> 6
```

## <a href='https://ruby-doc.org/core-2.2.0/Integer.html#method-i-next' target='_blank' rel='nofollow'>Next</a>:

Use `.next` to return the next consecutive <a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>**integer**</a>.
```Ruby
    15.next #=> 16
    2.next  #=> 3
    -4.next #=> -3
```

## <a href='https://ruby-doc.org/core-1.8.7/Integer.html#method-i-pred' target='_blank' rel='nofollow'>Pred</a>:

Use `.pred` to return the previous consecutive <a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>**integer**</a>.
```Ruby
    15.pred #=> 14
    2.pred  #=> 1
    (-4).pred #=> -5
```

## <a href='https://ruby-doc.org/core-2.4.2/Object.html#method-i-to_s' target='_blank' rel='nofollow'>To String</a>:

Using `.to_s` on a number (<a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>**integer**</a>, <a href='https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil' target='_blank' rel='nofollow'>**floats**</a>, etc.) returns a <a href='https://ruby-doc.org/core-2.2.0/String.html' target='_blank' rel='nofollow'>string</a> of that number.
```Ruby
    15.to_s  #=> "15"
    3.4.to_s #=> "3.4"
```

## <a href='https://ruby-doc.org/core-2.5.3/Integer.html#method-i-to_f' target='_blank' rel='nofollow'>To Float</a>:

Converts an Integer to a Float.

```Ruby
    15.to_f #=> 15.0
```

## <a href='https://ruby-doc.org/core-2.5.3/Integer.html#method-i-abs' target='_blank' rel='nofollow'>Absolute value</a>:

Returns the absolute value of the integer.

```Ruby
    -12345.abs #=> 12345
    12345.abs #=> 12345
```

## <a href='https://ruby-doc.org/core-2.2.0/Integer.html#method-i-gcd' target='_blank' rel='nofollow'>Greatest Common Denominator</a>:

The `.gcd` method provides the greatest common divisor (always positive) of two numbers. Returns an <a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>**integer**</a>.
```Ruby
    15.gcd(5) #=> 5
    3.gcd(-7) #=> 1
```

## <a href='http://ruby-doc.org/core-2.2.0/Integer.html#method-i-round' target='_blank' rel='nofollow'>Round</a>:

Use `.round` to return a rounded <a href='https://ruby-doc.org/core-2.2.0/Integer.html' target='_blank' rel='nofollow'>**integer**</a> or <a href='https://ruby-doc.org/core-2.2.0/Float.html' target='_blank' rel='nofollow'>**float**</a>.
```Ruby
    1.round        #=> 1
    1.round(2)     #=> 1.0
    15.round(-1)   #=> 20
```

## <a href='http://ruby-doc.org/core-2.2.0/Integer.html#method-i-times' target='_blank' rel='nofollow'>Times</a>:

Use `.times` to iterate the given block ```int``` times.
```Ruby
    5.times do |i|
      print i, " "
    end
    #=> 0 1 2 3 4
```
