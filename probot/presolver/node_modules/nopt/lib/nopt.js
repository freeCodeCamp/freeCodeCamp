// info about each config option.

var debug = process.env.DEBUG_NOPT || process.env.NOPT_DEBUG
  ? function () { console.error.apply(console, arguments) }
  : function () {}

var url = require("url")
  , path = require("path")
  , Stream = require("stream").Stream
  , abbrev = require("abbrev")

module.exports = exports = nopt
exports.clean = clean

exports.typeDefs =
  { String  : { type: String,  validate: validateString  }
  , Boolean : { type: Boolean, validate: validateBoolean }
  , url     : { type: url,     validate: validateUrl     }
  , Number  : { type: Number,  validate: validateNumber  }
  , path    : { type: path,    validate: validatePath    }
  , Stream  : { type: Stream,  validate: validateStream  }
  , Date    : { type: Date,    validate: validateDate    }
  }

function nopt (types, shorthands, args, slice) {
  args = args || process.argv
  types = types || {}
  shorthands = shorthands || {}
  if (typeof slice !== "number") slice = 2

  debug(types, shorthands, args, slice)

  args = args.slice(slice)
  var data = {}
    , key
    , remain = []
    , cooked = args
    , original = args.slice(0)

  parse(args, data, remain, types, shorthands)
  // now data is full
  clean(data, types, exports.typeDefs)
  data.argv = {remain:remain,cooked:cooked,original:original}
  data.argv.toString = function () {
    return this.original.map(JSON.stringify).join(" ")
  }
  return data
}

function clean (data, types, typeDefs) {
  typeDefs = typeDefs || exports.typeDefs
  var remove = {}
    , typeDefault = [false, true, null, String, Number]

  Object.keys(data).forEach(function (k) {
    if (k === "argv") return
    var val = data[k]
      , isArray = Array.isArray(val)
      , type = types[k]
    if (!isArray) val = [val]
    if (!type) type = typeDefault
    if (type === Array) type = typeDefault.concat(Array)
    if (!Array.isArray(type)) type = [type]

    debug("val=%j", val)
    debug("types=", type)
    val = val.map(function (val) {
      // if it's an unknown value, then parse false/true/null/numbers/dates
      if (typeof val === "string") {
        debug("string %j", val)
        val = val.trim()
        if ((val === "null" && ~type.indexOf(null))
            || (val === "true" &&
               (~type.indexOf(true) || ~type.indexOf(Boolean)))
            || (val === "false" &&
               (~type.indexOf(false) || ~type.indexOf(Boolean)))) {
          val = JSON.parse(val)
          debug("jsonable %j", val)
        } else if (~type.indexOf(Number) && !isNaN(val)) {
          debug("convert to number", val)
          val = +val
        } else if (~type.indexOf(Date) && !isNaN(Date.parse(val))) {
          debug("convert to date", val)
          val = new Date(val)
        }
      }

      if (!types.hasOwnProperty(k)) {
        return val
      }

      // allow `--no-blah` to set 'blah' to null if null is allowed
      if (val === false && ~type.indexOf(null) &&
          !(~type.indexOf(false) || ~type.indexOf(Boolean))) {
        val = null
      }

      var d = {}
      d[k] = val
      debug("prevalidated val", d, val, types[k])
      if (!validate(d, k, val, types[k], typeDefs)) {
        if (exports.invalidHandler) {
          exports.invalidHandler(k, val, types[k], data)
        } else if (exports.invalidHandler !== false) {
          debug("invalid: "+k+"="+val, types[k])
        }
        return remove
      }
      debug("validated val", d, val, types[k])
      return d[k]
    }).filter(function (val) { return val !== remove })

    if (!val.length) delete data[k]
    else if (isArray) {
      debug(isArray, data[k], val)
      data[k] = val
    } else data[k] = val[0]

    debug("k=%s val=%j", k, val, data[k])
  })
}

function validateString (data, k, val) {
  data[k] = String(val)
}

function validatePath (data, k, val) {
  data[k] = path.resolve(String(val))
  return true
}

function validateNumber (data, k, val) {
  debug("validate Number %j %j %j", k, val, isNaN(val))
  if (isNaN(val)) return false
  data[k] = +val
}

function validateDate (data, k, val) {
  debug("validate Date %j %j %j", k, val, Date.parse(val))
  var s = Date.parse(val)
  if (isNaN(s)) return false
  data[k] = new Date(val)
}

function validateBoolean (data, k, val) {
  if (val instanceof Boolean) val = val.valueOf()
  else if (typeof val === "string") {
    if (!isNaN(val)) val = !!(+val)
    else if (val === "null" || val === "false") val = false
    else val = true
  } else val = !!val
  data[k] = val
}

function validateUrl (data, k, val) {
  val = url.parse(String(val))
  if (!val.host) return false
  data[k] = val.href
}

function validateStream (data, k, val) {
  if (!(val instanceof Stream)) return false
  data[k] = val
}

function validate (data, k, val, type, typeDefs) {
  // arrays are lists of types.
  if (Array.isArray(type)) {
    for (var i = 0, l = type.length; i < l; i ++) {
      if (type[i] === Array) continue
      if (validate(data, k, val, type[i], typeDefs)) return true
    }
    delete data[k]
    return false
  }

  // an array of anything?
  if (type === Array) return true

  // NaN is poisonous.  Means that something is not allowed.
  if (type !== type) {
    debug("Poison NaN", k, val, type)
    delete data[k]
    return false
  }

  // explicit list of values
  if (val === type) {
    debug("Explicitly allowed %j", val)
    // if (isArray) (data[k] = data[k] || []).push(val)
    // else data[k] = val
    data[k] = val
    return true
  }

  // now go through the list of typeDefs, validate against each one.
  var ok = false
    , types = Object.keys(typeDefs)
  for (var i = 0, l = types.length; i < l; i ++) {
    debug("test type %j %j %j", k, val, types[i])
    var t = typeDefs[types[i]]
    if (t && type === t.type) {
      var d = {}
      ok = false !== t.validate(d, k, val)
      val = d[k]
      if (ok) {
        // if (isArray) (data[k] = data[k] || []).push(val)
        // else data[k] = val
        data[k] = val
        break
      }
    }
  }
  debug("OK? %j (%j %j %j)", ok, k, val, types[i])

  if (!ok) delete data[k]
  return ok
}

function parse (args, data, remain, types, shorthands) {
  debug("parse", args, data, remain)

  var key = null
    , abbrevs = abbrev(Object.keys(types))
    , shortAbbr = abbrev(Object.keys(shorthands))

  for (var i = 0; i < args.length; i ++) {
    var arg = args[i]
    debug("arg", arg)

    if (arg.match(/^-{2,}$/)) {
      // done with keys.
      // the rest are args.
      remain.push.apply(remain, args.slice(i + 1))
      args[i] = "--"
      break
    }
    if (arg.charAt(0) === "-") {
      if (arg.indexOf("=") !== -1) {
        var v = arg.split("=")
        arg = v.shift()
        v = v.join("=")
        args.splice.apply(args, [i, 1].concat([arg, v]))
      }
      // see if it's a shorthand
      // if so, splice and back up to re-parse it.
      var shRes = resolveShort(arg, shorthands, shortAbbr, abbrevs)
      debug("arg=%j shRes=%j", arg, shRes)
      if (shRes) {
        debug(arg, shRes)
        args.splice.apply(args, [i, 1].concat(shRes))
        if (arg !== shRes[0]) {
          i --
          continue
        }
      }
      arg = arg.replace(/^-+/, "")
      var no = false
      while (arg.toLowerCase().indexOf("no-") === 0) {
        no = !no
        arg = arg.substr(3)
      }

      if (abbrevs[arg]) arg = abbrevs[arg]

      var isArray = types[arg] === Array ||
        Array.isArray(types[arg]) && types[arg].indexOf(Array) !== -1

      var val
        , la = args[i + 1]

      var isBool = no ||
        types[arg] === Boolean ||
        Array.isArray(types[arg]) && types[arg].indexOf(Boolean) !== -1 ||
        (la === "false" &&
         (types[arg] === null ||
          Array.isArray(types[arg]) && ~types[arg].indexOf(null)))

      if (isBool) {
        // just set and move along
        val = !no
        // however, also support --bool true or --bool false
        if (la === "true" || la === "false") {
          val = JSON.parse(la)
          la = null
          if (no) val = !val
          i ++
        }

        // also support "foo":[Boolean, "bar"] and "--foo bar"
        if (Array.isArray(types[arg]) && la) {
          if (~types[arg].indexOf(la)) {
            // an explicit type
            val = la
            i ++
          } else if ( la === "null" && ~types[arg].indexOf(null) ) {
            // null allowed
            val = null
            i ++
          } else if ( !la.match(/^-{2,}[^-]/) &&
                      !isNaN(la) &&
                      ~types[arg].indexOf(Number) ) {
            // number
            val = +la
            i ++
          } else if ( !la.match(/^-[^-]/) && ~types[arg].indexOf(String) ) {
            // string
            val = la
            i ++
          }
        }

        if (isArray) (data[arg] = data[arg] || []).push(val)
        else data[arg] = val

        continue
      }

      if (la && la.match(/^-{2,}$/)) {
        la = undefined
        i --
      }

      val = la === undefined ? true : la
      if (isArray) (data[arg] = data[arg] || []).push(val)
      else data[arg] = val

      i ++
      continue
    }
    remain.push(arg)
  }
}

function resolveShort (arg, shorthands, shortAbbr, abbrevs) {
  // handle single-char shorthands glommed together, like
  // npm ls -glp, but only if there is one dash, and only if
  // all of the chars are single-char shorthands, and it's
  // not a match to some other abbrev.
  arg = arg.replace(/^-+/, '')
  if (abbrevs[arg] && !shorthands[arg]) {
    return null
  }
  if (shortAbbr[arg]) {
    arg = shortAbbr[arg]
  } else {
    var singles = shorthands.___singles
    if (!singles) {
      singles = Object.keys(shorthands).filter(function (s) {
        return s.length === 1
      }).reduce(function (l,r) { l[r] = true ; return l }, {})
      shorthands.___singles = singles
    }
    var chrs = arg.split("").filter(function (c) {
      return singles[c]
    })
    if (chrs.join("") === arg) return chrs.map(function (c) {
      return shorthands[c]
    }).reduce(function (l, r) {
      return l.concat(r)
    }, [])
  }

  if (shorthands[arg] && !Array.isArray(shorthands[arg])) {
    shorthands[arg] = shorthands[arg].split(/\s+/)
  }
  return shorthands[arg]
}

if (module === require.main) {
var assert = require("assert")
  , util = require("util")

  , shorthands =
    { s : ["--loglevel", "silent"]
    , d : ["--loglevel", "info"]
    , dd : ["--loglevel", "verbose"]
    , ddd : ["--loglevel", "silly"]
    , noreg : ["--no-registry"]
    , reg : ["--registry"]
    , "no-reg" : ["--no-registry"]
    , silent : ["--loglevel", "silent"]
    , verbose : ["--loglevel", "verbose"]
    , h : ["--usage"]
    , H : ["--usage"]
    , "?" : ["--usage"]
    , help : ["--usage"]
    , v : ["--version"]
    , f : ["--force"]
    , desc : ["--description"]
    , "no-desc" : ["--no-description"]
    , "local" : ["--no-global"]
    , l : ["--long"]
    , p : ["--parseable"]
    , porcelain : ["--parseable"]
    , g : ["--global"]
    }

  , types =
    { aoa: Array
    , nullstream: [null, Stream]
    , date: Date
    , str: String
    , browser : String
    , cache : path
    , color : ["always", Boolean]
    , depth : Number
    , description : Boolean
    , dev : Boolean
    , editor : path
    , force : Boolean
    , global : Boolean
    , globalconfig : path
    , group : [String, Number]
    , gzipbin : String
    , logfd : [Number, Stream]
    , loglevel : ["silent","win","error","warn","info","verbose","silly"]
    , long : Boolean
    , "node-version" : [false, String]
    , npaturl : url
    , npat : Boolean
    , "onload-script" : [false, String]
    , outfd : [Number, Stream]
    , parseable : Boolean
    , pre: Boolean
    , prefix: path
    , proxy : url
    , "rebuild-bundle" : Boolean
    , registry : url
    , searchopts : String
    , searchexclude: [null, String]
    , shell : path
    , t: [Array, String]
    , tag : String
    , tar : String
    , tmp : path
    , "unsafe-perm" : Boolean
    , usage : Boolean
    , user : String
    , username : String
    , userconfig : path
    , version : Boolean
    , viewer: path
    , _exit : Boolean
    }

; [["-v", {version:true}, []]
  ,["---v", {version:true}, []]
  ,["ls -s --no-reg connect -d",
    {loglevel:"info",registry:null},["ls","connect"]]
  ,["ls ---s foo",{loglevel:"silent"},["ls","foo"]]
  ,["ls --registry blargle", {}, ["ls"]]
  ,["--no-registry", {registry:null}, []]
  ,["--no-color true", {color:false}, []]
  ,["--no-color false", {color:true}, []]
  ,["--no-color", {color:false}, []]
  ,["--color false", {color:false}, []]
  ,["--color --logfd 7", {logfd:7,color:true}, []]
  ,["--color=true", {color:true}, []]
  ,["--logfd=10", {logfd:10}, []]
  ,["--tmp=/tmp -tar=gtar",{tmp:"/tmp",tar:"gtar"},[]]
  ,["--tmp=tmp -tar=gtar",
    {tmp:path.resolve(process.cwd(), "tmp"),tar:"gtar"},[]]
  ,["--logfd x", {}, []]
  ,["a -true -- -no-false", {true:true},["a","-no-false"]]
  ,["a -no-false", {false:false},["a"]]
  ,["a -no-no-true", {true:true}, ["a"]]
  ,["a -no-no-no-false", {false:false}, ["a"]]
  ,["---NO-no-No-no-no-no-nO-no-no"+
    "-No-no-no-no-no-no-no-no-no"+
    "-no-no-no-no-NO-NO-no-no-no-no-no-no"+
    "-no-body-can-do-the-boogaloo-like-I-do"
   ,{"body-can-do-the-boogaloo-like-I-do":false}, []]
  ,["we are -no-strangers-to-love "+
    "--you-know the-rules --and so-do-i "+
    "---im-thinking-of=a-full-commitment "+
    "--no-you-would-get-this-from-any-other-guy "+
    "--no-gonna-give-you-up "+
    "-no-gonna-let-you-down=true "+
    "--no-no-gonna-run-around false "+
    "--desert-you=false "+
    "--make-you-cry false "+
    "--no-tell-a-lie "+
    "--no-no-and-hurt-you false"
   ,{"strangers-to-love":false
    ,"you-know":"the-rules"
    ,"and":"so-do-i"
    ,"you-would-get-this-from-any-other-guy":false
    ,"gonna-give-you-up":false
    ,"gonna-let-you-down":false
    ,"gonna-run-around":false
    ,"desert-you":false
    ,"make-you-cry":false
    ,"tell-a-lie":false
    ,"and-hurt-you":false
    },["we", "are"]]
  ,["-t one -t two -t three"
   ,{t: ["one", "two", "three"]}
   ,[]]
  ,["-t one -t null -t three four five null"
   ,{t: ["one", "null", "three"]}
   ,["four", "five", "null"]]
  ,["-t foo"
   ,{t:["foo"]}
   ,[]]
  ,["--no-t"
   ,{t:["false"]}
   ,[]]
  ,["-no-no-t"
   ,{t:["true"]}
   ,[]]
  ,["-aoa one -aoa null -aoa 100"
   ,{aoa:["one", null, 100]}
   ,[]]
  ,["-str 100"
   ,{str:"100"}
   ,[]]
  ,["--color always"
   ,{color:"always"}
   ,[]]
  ,["--no-nullstream"
   ,{nullstream:null}
   ,[]]
  ,["--nullstream false"
   ,{nullstream:null}
   ,[]]
  ,["--notadate 2011-01-25"
   ,{notadate: "2011-01-25"}
   ,[]]
  ,["--date 2011-01-25"
   ,{date: new Date("2011-01-25")}
   ,[]]
  ].forEach(function (test) {
    var argv = test[0].split(/\s+/)
      , opts = test[1]
      , rem = test[2]
      , actual = nopt(types, shorthands, argv, 0)
      , parsed = actual.argv
    delete actual.argv
    console.log(util.inspect(actual, false, 2, true), parsed.remain)
    for (var i in opts) {
      var e = JSON.stringify(opts[i])
        , a = JSON.stringify(actual[i] === undefined ? null : actual[i])
      if (e && typeof e === "object") {
        assert.deepEqual(e, a)
      } else {
        assert.equal(e, a)
      }
    }
    assert.deepEqual(rem, parsed.remain)
  })
}
