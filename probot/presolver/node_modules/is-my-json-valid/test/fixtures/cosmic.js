exports.valid = {
  fullName : "John Doe",
  age : 47,
  state : "Massachusetts",
  city : "Boston",
  zip : 16417,
  married : false,
  dozen : 12,
  dozenOrBakersDozen : 13,
  favoriteEvenNumber : 14,
  topThreeFavoriteColors : [ "red", "blue", "green" ],
  favoriteSingleDigitWholeNumbers : [ 7 ],
  favoriteFiveLetterWord : "coder",
  emailAddresses :
  [
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@letters-in-local.org",
    "01234567890@numbers-in-local.net",
    "&'*+-./=?^_{}~@other-valid-characters-in-local.net",
    "mixed-1234-in-{+^}-local@sld.net",
    "a@single-character-in-local.org",
    "\"quoted\"@sld.com",
    "\"\\e\\s\\c\\a\\p\\e\\d\"@sld.com",
    "\"quoted-at-sign@sld.org\"@sld.com",
    "\"escaped\\\"quote\"@sld.com",
    "\"back\\slash\"@sld.com",
    "one-character-third-level@a.example.com",
    "single-character-in-sld@x.org",
    "local@dash-in-sld.com",
    "letters-in-sld@123.com",
    "one-letter-sld@x.org",
    "uncommon-tld@sld.museum",
    "uncommon-tld@sld.travel",
    "uncommon-tld@sld.mobi",
    "country-code-tld@sld.uk",
    "country-code-tld@sld.rw",
    "local@sld.newTLD",
    "the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-254-characters-exactly.so-it-should-be-valid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bla.org",
    "the-character-limit@for-each-part.of-the-domain.is-sixty-three-characters.this-is-exactly-sixty-three-characters-so-it-is-valid-blah-blah.com",
    "local@sub.domains.com"
  ],
  ipAddresses : [ "127.0.0.1", "24.48.64.2", "192.168.1.1", "209.68.44.3", "2.2.2.2" ]
}

exports.invalid = {
  fullName : null,
  age : -1,
  state : 47,
  city : false,
  zip : [null],
  married : "yes",
  dozen : 50,
  dozenOrBakersDozen : "over 9000",
  favoriteEvenNumber : 15,
  topThreeFavoriteColors : [ "red", 5 ],
  favoriteSingleDigitWholeNumbers : [ 78, 2, 999 ],
  favoriteFiveLetterWord : "codernaut",
  emailAddresses : [],
  ipAddresses : [ "999.0.099.1", "294.48.64.2346", false, "2221409.64214128.42414.235233", "124124.12412412" ]
}

exports.schema = { // from cosmic thingy
    name : "test",
    type : "object",
    additionalProperties : false,
    required : ["fullName", "age", "zip", "married", "dozen", "dozenOrBakersDozen", "favoriteEvenNumber", "topThreeFavoriteColors", "favoriteSingleDigitWholeNumbers", "favoriteFiveLetterWord", "emailAddresses", "ipAddresses"],
    properties :
    {
      fullName                        : { type : "string" },
      age                             : { type : "integer", minimum : 0 },
      optionalItem                    : { type : "string" },
      state                           : { type : "string" },
      city                            : { type : "string" },
      zip                             : { type : "integer", minimum : 0, maximum : 99999 },
      married                         : { type : "boolean" },
      dozen                           : { type : "integer", minimum : 12, maximum : 12 },
      dozenOrBakersDozen              : { type : "integer", minimum : 12, maximum : 13 },
      favoriteEvenNumber              : { type : "integer", multipleOf : 2 },
      topThreeFavoriteColors          : { type : "array", minItems : 3, maxItems : 3, uniqueItems : true, items : { type : "string" }},
      favoriteSingleDigitWholeNumbers : { type : "array", minItems : 1, maxItems : 10, uniqueItems : true, items : { type : "integer", minimum : 0, maximum : 9 }},
      favoriteFiveLetterWord          : { type : "string", minLength : 5, maxLength : 5 },
      emailAddresses                  : { type : "array", minItems : 1, uniqueItems : true, items : { type : "string", format : "email" }},
      ipAddresses                     : { type : "array", uniqueItems : true, items : { type : "string", format : "ipv4" }},
    }
  }