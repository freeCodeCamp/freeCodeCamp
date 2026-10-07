/**
 * @license Fraction.js v5.3.4 8/22/2025
 * https://raw.org/article/rational-numbers-in-javascript/
 *
 * Copyright (c) 2025, Robert Eisele (https://raw.org/)
 * Licensed under the MIT license.
 **/

/**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <numerator>, 1 => <denominator> ]
 * { n => <numerator>, d => <denominator> }
 *
 * Integer form
 * - Single integer value as BigInt or Number
 *
 * Double form
 * - Single double value as Number
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 * let f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */

// Set Identity function to downgrade BigInt to Number if needed
if (typeof BigInt === 'undefined') BigInt = function (n) { if (isNaN(n)) throw new Error(""); return n; };

const C_ZERO = BigInt(0);
const C_ONE = BigInt(1);
const C_TWO = BigInt(2);
const C_THREE = BigInt(3);
const C_FIVE = BigInt(5);
const C_TEN = BigInt(10);
const MAX_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);

// Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
// Example: 1/7 = 0.(142857) has 6 repeating decimal places.
// If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
const MAX_CYCLE_LEN = 2000;

// Parsed data to avoid calling "new" all the time
const P = {
  "s": C_ONE,
  "n": C_ZERO,
  "d": C_ONE
};

function assign(n, s) {

  try {
    n = BigInt(n);
  } catch (e) {
    throw InvalidParameter();
  }
  return n * s;
}

function ifloor(x) {
  return typeof x === 'bigint' ? x : Math.floor(x);
}

// Creates a new Fraction internally without the need of the bulky constructor
function newFraction(n, d) {

  if (d === C_ZERO) {
    throw DivisionByZero();
  }

  const f = Object.create(Fraction.prototype);
  f["s"] = n < C_ZERO ? -C_ONE : C_ONE;

  n = n < C_ZERO ? -n : n;

  const a = gcd(n, d);

  f["n"] = n / a;
  f["d"] = d / a;
  return f;
}

const FACTORSTEPS = [C_TWO * C_TWO, C_TWO, C_TWO * C_TWO, C_TWO, C_TWO * C_TWO, C_TWO * C_THREE, C_TWO, C_TWO * C_THREE]; // repeats
function factorize(n) {

  const factors = Object.create(null);
  if (n <= C_ONE) {
    factors[n] = C_ONE;
    return factors;
  }

  const add = (p) => { factors[p] = (factors[p] || C_ZERO) + C_ONE; };

  while (n % C_TWO === C_ZERO) { add(C_TWO); n /= C_TWO; }
  while (n % C_THREE === C_ZERO) { add(C_THREE); n /= C_THREE; }
  while (n % C_FIVE === C_ZERO) { add(C_FIVE); n /= C_FIVE; }

  // 30-wheel trial division: test only residues coprime to 2*3*5
  // Residue step pattern after 5: 7,11,13,17,19,23,29,31, ...
  for (let si = 0, p = C_TWO + C_FIVE; p * p <= n;) {
    while (n % p === C_ZERO) { add(p); n /= p; }
    p += FACTORSTEPS[si];
    si = (si + 1) & 7; // fast modulo 8
  }
  if (n > C_ONE) add(n);
  return factors;
}

const parse = function (p1, p2) {

  let n = C_ZERO, d = C_ONE, s = C_ONE;

  if (p1 === undefined || p1 === null) { // No argument
    /* void */
  } else if (p2 !== undefined) { // Two arguments

    if (typeof p1 === "bigint") {
      n = p1;
    } else if (isNaN(p1)) {
      throw InvalidParameter();
    } else if (p1 % 1 !== 0) {
      throw NonIntegerParameter();
    } else {
      n = BigInt(p1);
    }

    if (typeof p2 === "bigint") {
      d = p2;
    } else if (isNaN(p2)) {
      throw InvalidParameter();
    } else if (p2 % 1 !== 0) {
      throw NonIntegerParameter();
    } else {
      d = BigInt(p2);
    }

    s = n * d;

  } else if (typeof p1 === "object") {
    if ("d" in p1 && "n" in p1) {
      n = BigInt(p1["n"]);
      d = BigInt(p1["d"]);
      if ("s" in p1)
        n *= BigInt(p1["s"]);
    } else if (0 in p1) {
      n = BigInt(p1[0]);
      if (1 in p1)
        d = BigInt(p1[1]);
    } else if (typeof p1 === "bigint") {
      n = p1;
    } else {
      throw InvalidParameter();
    }
    s = n * d;
  } else if (typeof p1 === "number") {

    if (isNaN(p1)) {
      throw InvalidParameter();
    }

    if (p1 < 0) {
      s = -C_ONE;
      p1 = -p1;
    }

    if (p1 % 1 === 0) {
      n = BigInt(p1);
    } else {

      let z = 1;

      let A = 0, B = 1;
      let C = 1, D = 1;

      let N = 10000000;

      if (p1 >= 1) {
        z = 10 ** Math.floor(1 + Math.log10(p1));
        p1 /= z;
      }

      // Using Farey Sequences

      while (B <= N && D <= N) {
        let M = (A + C) / (B + D);

        if (p1 === M) {
          if (B + D <= N) {
            n = A + C;
            d = B + D;
          } else if (D > B) {
            n = C;
            d = D;
          } else {
            n = A;
            d = B;
          }
          break;

        } else {

          if (p1 > M) {
            A += C;
            B += D;
          } else {
            C += A;
            D += B;
          }

          if (B > N) {
            n = C;
            d = D;
          } else {
            n = A;
            d = B;
          }
        }
      }
      n = BigInt(n) * BigInt(z);
      d = BigInt(d);
    }

  } else if (typeof p1 === "string") {

    let ndx = 0;

    let v = C_ZERO, w = C_ZERO, x = C_ZERO, y = C_ONE, z = C_ONE;

    let match = p1.replace(/_/g, '').match(/\d+|./g);

    if (match === null)
      throw InvalidParameter();

    if (match[ndx] === '-') {// Check for minus sign at the beginning
      s = -C_ONE;
      ndx++;
    } else if (match[ndx] === '+') {// Check for plus sign at the beginning
      ndx++;
    }

    if (match.length === ndx + 1) { // Check if it's just a simple number "1234"
      w = assign(match[ndx++], s);
    } else if (match[ndx + 1] === '.' || match[ndx] === '.') { // Check if it's a decimal number

      if (match[ndx] !== '.') { // Handle 0.5 and .5
        v = assign(match[ndx++], s);
      }
      ndx++;

      // Check for decimal places
      if (ndx + 1 === match.length || match[ndx + 1] === '(' && match[ndx + 3] === ')' || match[ndx + 1] === "'" && match[ndx + 3] === "'") {
        w = assign(match[ndx], s);
        y = C_TEN ** BigInt(match[ndx].length);
        ndx++;
      }

      // Check for repeating places
      if (match[ndx] === '(' && match[ndx + 2] === ')' || match[ndx] === "'" && match[ndx + 2] === "'") {
        x = assign(match[ndx + 1], s);
        z = C_TEN ** BigInt(match[ndx + 1].length) - C_ONE;
        ndx += 3;
      }

    } else if (match[ndx + 1] === '/' || match[ndx + 1] === ':') { // Check for a simple fraction "123/456" or "123:456"
      w = assign(match[ndx], s);
      y = assign(match[ndx + 2], C_ONE);
      ndx += 3;
    } else if (match[ndx + 3] === '/' && match[ndx + 1] === ' ') { // Check for a complex fraction "123 1/2"
      v = assign(match[ndx], s);
      w = assign(match[ndx + 2], s);
      y = assign(match[ndx + 4], C_ONE);
      ndx += 5;
    }

    if (match.length <= ndx) { // Check for more tokens on the stack
      d = y * z;
      s = /* void */
        n = x + d * v + z * w;
    } else {
      throw InvalidParameter();
    }

  } else if (typeof p1 === "bigint") {
    n = p1;
    s = p1;
    d = C_ONE;
  } else {
    throw InvalidParameter();
  }

  if (d === C_ZERO) {
    throw DivisionByZero();
  }

  P["s"] = s < C_ZERO ? -C_ONE : C_ONE;
  P["n"] = n < C_ZERO ? -n : n;
  P["d"] = d < C_ZERO ? -d : d;
};

function modpow(b, e, m) {

  let r = C_ONE;
  for (; e > C_ZERO; b = (b * b) % m, e >>= C_ONE) {

    if (e & C_ONE) {
      r = (r * b) % m;
    }
  }
  return r;
}

function cycleLen(n, d) {

  for (; d % C_TWO === C_ZERO;
    d /= C_TWO) {
  }

  for (; d % C_FIVE === C_ZERO;
    d /= C_FIVE) {
  }

  if (d === C_ONE) // Catch non-cyclic numbers
    return C_ZERO;

  // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
  // 10^(d-1) % d == 1
  // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
  // as we want to translate the numbers to strings.

  let rem = C_TEN % d;
  let t = 1;

  for (; rem !== C_ONE; t++) {
    rem = rem * C_TEN % d;

    if (t > MAX_CYCLE_LEN)
      return C_ZERO; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
  }
  return BigInt(t);
}

function cycleStart(n, d, len) {

  let rem1 = C_ONE;
  let rem2 = modpow(C_TEN, len, d);

  for (let t = 0; t < 300; t++) { // s < ~log10(Number.MAX_VALUE)
    // Solve 10^s == 10^(s+t) (mod d)

    if (rem1 === rem2)
      return BigInt(t);

    rem1 = rem1 * C_TEN % d;
    rem2 = rem2 * C_TEN % d;
  }
  return 0;
}

function gcd(a, b) {

  if (!a)
    return b;
  if (!b)
    return a;

  while (1) {
    a %= b;
    if (!a)
      return b;
    b %= a;
    if (!b)
      return a;
  }
}

/**
 * Module constructor
 *
 * @constructor
 * @param {number|Fraction=} a
 * @param {number=} b
 */
function Fraction(a, b) {

  parse(a, b);

  if (this instanceof Fraction) {
    a = gcd(P["d"], P["n"]); // Abuse a
    this["s"] = P["s"];
    this["n"] = P["n"] / a;
    this["d"] = P["d"] / a;
  } else {
    return newFraction(P['s'] * P['n'], P['d']);
  }
}

const DivisionByZero = function () { return new Error("Division by Zero"); };
const InvalidParameter = function () { return new Error("Invalid argument"); };
const NonIntegerParameter = function () { return new Error("Parameters must be integer"); };

Fraction.prototype = {

  "s": C_ONE,
  "n": C_ZERO,
  "d": C_ONE,

  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  "abs": function () {

    return newFraction(this["n"], this["d"]);
  },

  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  "neg": function () {

    return newFraction(-this["s"] * this["n"], this["d"]);
  },

  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  "add": function (a, b) {

    parse(a, b);
    return newFraction(
      this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"],
      this["d"] * P["d"]
    );
  },

  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  "sub": function (a, b) {

    parse(a, b);
    return newFraction(
      this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"],
      this["d"] * P["d"]
    );
  },

  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  "mul": function (a, b) {

    parse(a, b);
    return newFraction(
      this["s"] * P["s"] * this["n"] * P["n"],
      this["d"] * P["d"]
    );
  },

  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  "div": function (a, b) {

    parse(a, b);
    return newFraction(
      this["s"] * P["s"] * this["n"] * P["d"],
      this["d"] * P["n"]
    );
  },

  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  "clone": function () {
    return newFraction(this['s'] * this['n'], this['d']);
  },

  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   * Ex: new Fraction(20, 10).mod().equals(0) ? "is Integer"
   **/
  "mod": function (a, b) {

    if (a === undefined) {
      return newFraction(this["s"] * this["n"] % this["d"], C_ONE);
    }

    parse(a, b);
    if (C_ZERO === P["n"] * this["d"]) {
      throw DivisionByZero();
    }

    /**
     * I derived the rational modulo similar to the modulo for integers
     *
     * https://raw.org/book/analysis/rational-numbers/
     *
     *    n1/d1 = (n2/d2) * q + r, where 0 ≤ r < n2/d2
     * => d2 * n1 = n2 * d1 * q + d1 * d2 * r
     * => r = (d2 * n1 - n2 * d1 * q) / (d1 * d2)
     *      = (d2 * n1 - n2 * d1 * floor((d2 * n1) / (n2 * d1))) / (d1 * d2)
     *      = ((d2 * n1) % (n2 * d1)) / (d1 * d2)
     */
    return newFraction(
      this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]),
      P["d"] * this["d"]);
  },

  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  "gcd": function (a, b) {

    parse(a, b);

    // https://raw.org/book/analysis/rational-numbers/
    // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)

    return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
  },

  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  "lcm": function (a, b) {

    parse(a, b);

    // https://raw.org/book/analysis/rational-numbers/
    // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)

    if (P["n"] === C_ZERO && this["n"] === C_ZERO) {
      return newFraction(C_ZERO, C_ONE);
    }
    return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
  },

  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  "inverse": function () {
    return newFraction(this["s"] * this["d"], this["n"]);
  },

  /**
   * Calculates the fraction to some integer exponent
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  "pow": function (a, b) {

    parse(a, b);

    // Trivial case when exp is an integer

    if (P['d'] === C_ONE) {

      if (P['s'] < C_ZERO) {
        return newFraction((this['s'] * this["d"]) ** P['n'], this["n"] ** P['n']);
      } else {
        return newFraction((this['s'] * this["n"]) ** P['n'], this["d"] ** P['n']);
      }
    }

    // Negative roots become complex
    //     (-a/b)^(c/d) = x
    // ⇔ (-1)^(c/d) * (a/b)^(c/d) = x
    // ⇔ (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x
    // ⇔ (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula
    // From which follows that only for c=0 the root is non-complex
    if (this['s'] < C_ZERO) return null;

    // Now prime factor n and d
    let N = factorize(this['n']);
    let D = factorize(this['d']);

    // Exponentiate and take root for n and d individually
    let n = C_ONE;
    let d = C_ONE;
    for (let k in N) {
      if (k === '1') continue;
      if (k === '0') {
        n = C_ZERO;
        break;
      }
      N[k] *= P['n'];

      if (N[k] % P['d'] === C_ZERO) {
        N[k] /= P['d'];
      } else return null;
      n *= BigInt(k) ** N[k];
    }

    for (let k in D) {
      if (k === '1') continue;
      D[k] *= P['n'];

      if (D[k] % P['d'] === C_ZERO) {
        D[k] /= P['d'];
      } else return null;
      d *= BigInt(k) ** D[k];
    }

    if (P['s'] < C_ZERO) {
      return newFraction(d, n);
    }
    return newFraction(n, d);
  },

  /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * Ex: new Fraction(27, 8).log(9, 4) => 3/2
   */
  "log": function (a, b) {

    parse(a, b);

    if (this['s'] <= C_ZERO || P['s'] <= C_ZERO) return null;

    const allPrimes = Object.create(null);

    const baseFactors = factorize(P['n']);
    const T1 = factorize(P['d']);

    const numberFactors = factorize(this['n']);
    const T2 = factorize(this['d']);

    for (const prime in T1) {
      baseFactors[prime] = (baseFactors[prime] || C_ZERO) - T1[prime];
    }
    for (const prime in T2) {
      numberFactors[prime] = (numberFactors[prime] || C_ZERO) - T2[prime];
    }

    for (const prime in baseFactors) {
      if (prime === '1') continue;
      allPrimes[prime] = true;
    }
    for (const prime in numberFactors) {
      if (prime === '1') continue;
      allPrimes[prime] = true;
    }

    let retN = null;
    let retD = null;

    // Iterate over all unique primes to determine if a consistent ratio exists
    for (const prime in allPrimes) {

      const baseExponent = baseFactors[prime] || C_ZERO;
      const numberExponent = numberFactors[prime] || C_ZERO;

      if (baseExponent === C_ZERO) {
        if (numberExponent !== C_ZERO) {
          return null; // Logarithm cannot be expressed as a rational number
        }
        continue; // Skip this prime since both exponents are zero
      }

      // Calculate the ratio of exponents for this prime
      let curN = numberExponent;
      let curD = baseExponent;

      // Simplify the current ratio
      const gcdValue = gcd(curN, curD);
      curN /= gcdValue;
      curD /= gcdValue;

      // Check if this is the first ratio; otherwise, ensure ratios are consistent
      if (retN === null && retD === null) {
        retN = curN;
        retD = curD;
      } else if (curN * retD !== retN * curD) {
        return null; // Ratios do not match, logarithm cannot be rational
      }
    }

    return retN !== null && retD !== null
      ? newFraction(retN, retD)
      : null;
  },

  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  "equals": function (a, b) {

    parse(a, b);
    return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"];
  },

  /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  "lt": function (a, b) {

    parse(a, b);
    return this["s"] * this["n"] * P["d"] < P["s"] * P["n"] * this["d"];
  },

  /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  "lte": function (a, b) {

    parse(a, b);
    return this["s"] * this["n"] * P["d"] <= P["s"] * P["n"] * this["d"];
  },

  /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  "gt": function (a, b) {

    parse(a, b);
    return this["s"] * this["n"] * P["d"] > P["s"] * P["n"] * this["d"];
  },

  /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  "gte": function (a, b) {

    parse(a, b);
    return this["s"] * this["n"] * P["d"] >= P["s"] * P["n"] * this["d"];
  },

  /**
   * Compare two rational numbers
   * < 0 iff this < that
   * > 0 iff this > that
   * = 0 iff this = that
   *
   * Ex: new Fraction(19.6).compare([98, 5]);
   **/
  "compare": function (a, b) {

    parse(a, b);
    let t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];

    return (C_ZERO < t) - (t < C_ZERO);
  },

  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  "ceil": function (places) {

    places = C_TEN ** BigInt(places || 0);

    return newFraction(ifloor(this["s"] * places * this["n"] / this["d"]) +
      (places * this["n"] % this["d"] > C_ZERO && this["s"] >= C_ZERO ? C_ONE : C_ZERO),
      places);
  },

  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  "floor": function (places) {

    places = C_TEN ** BigInt(places || 0);

    return newFraction(ifloor(this["s"] * places * this["n"] / this["d"]) -
      (places * this["n"] % this["d"] > C_ZERO && this["s"] < C_ZERO ? C_ONE : C_ZERO),
      places);
  },

  /**
   * Rounds a rational numbers
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  "round": function (places) {

    places = C_TEN ** BigInt(places || 0);

    /* Derivation:

    s >= 0:
      round(n / d) = ifloor(n / d) + (n % d) / d >= 0.5 ? 1 : 0
                   = ifloor(n / d) + 2(n % d) >= d ? 1 : 0
    s < 0:
      round(n / d) =-ifloor(n / d) - (n % d) / d > 0.5 ? 1 : 0
                   =-ifloor(n / d) - 2(n % d) > d ? 1 : 0

    =>:

    round(s * n / d) = s * ifloor(n / d) + s * (C + 2(n % d) > d ? 1 : 0)
        where C = s >= 0 ? 1 : 0, to fix the >= for the positve case.
    */

    return newFraction(ifloor(this["s"] * places * this["n"] / this["d"]) +
      this["s"] * ((this["s"] >= C_ZERO ? C_ONE : C_ZERO) + C_TWO * (places * this["n"] % this["d"]) > this["d"] ? C_ONE : C_ZERO),
      places);
  },

  /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/
  "roundTo": function (a, b) {

    /*
    k * x/y ≤ a/b < (k+1) * x/y
    ⇔ k ≤ a/b / (x/y) < (k+1)
    ⇔ k = floor(a/b * y/x)
    ⇔ k = floor((a * y) / (b * x))
    */

    parse(a, b);

    const n = this['n'] * P['d'];
    const d = this['d'] * P['n'];
    const r = n % d;

    // round(n / d) = ifloor(n / d) + 2(n % d) >= d ? 1 : 0
    let k = ifloor(n / d);
    if (r + r >= d) {
      k++;
    }
    return newFraction(this['s'] * k * P['n'], P['d']);
  },

  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  "divisible": function (a, b) {

    parse(a, b);
    if (P['n'] === C_ZERO) return false;
    return (this['n'] * P['d']) % (P['n'] * this['d']) === C_ZERO;
  },

  /**
   * Returns a decimal representation of the fraction
   *
   * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
   **/
  'valueOf': function () {
    //if (this['n'] <= MAX_INTEGER && this['d'] <= MAX_INTEGER) {
    return Number(this['s'] * this['n']) / Number(this['d']);
    //}
  },

  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  'toString': function (dec = 15) {

    let N = this["n"];
    let D = this["d"];

    let cycLen = cycleLen(N, D); // Cycle length
    let cycOff = cycleStart(N, D, cycLen); // Cycle start

    let str = this['s'] < C_ZERO ? "-" : "";

    // Append integer part
    str += ifloor(N / D);

    N %= D;
    N *= C_TEN;

    if (N)
      str += ".";

    if (cycLen) {

      for (let i = cycOff; i--;) {
        str += ifloor(N / D);
        N %= D;
        N *= C_TEN;
      }
      str += "(";
      for (let i = cycLen; i--;) {
        str += ifloor(N / D);
        N %= D;
        N *= C_TEN;
      }
      str += ")";
    } else {
      for (let i = dec; N && i--;) {
        str += ifloor(N / D);
        N %= D;
        N *= C_TEN;
      }
    }
    return str;
  },

  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
   **/
  'toFraction': function (showMixed = false) {

    let n = this["n"];
    let d = this["d"];
    let str = this['s'] < C_ZERO ? "-" : "";

    if (d === C_ONE) {
      str += n;
    } else {
      const whole = ifloor(n / d);
      if (showMixed && whole > C_ZERO) {
        str += whole;
        str += " ";
        n %= d;
      }

      str += n;
      str += '/';
      str += d;
    }
    return str;
  },

  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  'toLatex': function (showMixed = false) {

    let n = this["n"];
    let d = this["d"];
    let str = this['s'] < C_ZERO ? "-" : "";

    if (d === C_ONE) {
      str += n;
    } else {
      const whole = ifloor(n / d);
      if (showMixed && whole > C_ZERO) {
        str += whole;
        n %= d;
      }

      str += "\\frac{";
      str += n;
      str += '}{';
      str += d;
      str += '}';
    }
    return str;
  },

  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  'toContinued': function () {

    let a = this['n'];
    let b = this['d'];
    const res = [];

    while (b) {
      res.push(ifloor(a / b));
      const t = a % b;
      a = b;
      b = t;
    }
    return res;
  },

  "simplify": function (eps = 1e-3) {

    // Continued fractions give best approximations for a max denominator,
    // generally outperforming mediants in denominator–accuracy trade-offs.
    // Semiconvergents can further reduce the denominator within tolerance.

    const ieps = BigInt(Math.ceil(1 / eps));

    const thisABS = this['abs']();
    const cont = thisABS['toContinued']();

    for (let i = 1; i < cont.length; i++) {

      let s = newFraction(cont[i - 1], C_ONE);
      for (let k = i - 2; k >= 0; k--) {
        s = s['inverse']()['add'](cont[k]);
      }

      let t = s['sub'](thisABS);
      if (t['n'] * ieps < t['d']) { // More robust than Math.abs(t.valueOf()) < eps
        return s['mul'](this['s']);
      }
    }
    return this;
  }
};
