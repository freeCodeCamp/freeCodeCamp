var nopt = require("../")
  , test = require('tap').test
  , isWin = process.platform === 'win32'

test("passing a string results in a string", function (t) {
  var parsed = nopt({ key: String }, {}, ["--key", "myvalue"], 0)
  t.same(parsed.key, "myvalue")
  t.end()
})

// https://github.com/npm/nopt/issues/31
test("Empty String results in empty string, not true", function (t) {
  var parsed = nopt({ empty: String }, {}, ["--empty"], 0)
  t.same(parsed.empty, "")
  t.end()
})

// https://github.com/npm/nopt/issues/65
test("Empty String should not swallow next flag", function (t) {
  var parsed = nopt({ empty: String, foo: String }, {}, ["--empty", "--foo"], 0)
  t.same(parsed.empty, "")
  t.same(parsed.foo, "")
  t.end()
})

// https://github.com/npm/nopt/issues/66
test("Empty String should not be true when type is single item Array", function (t) {
  var parsed = nopt({	'foo': [String] }, {}, ["--foo"], 0)
  t.same(parsed.foo, "")
  t.end()
})

test("~ path is resolved to " + (isWin ? '%USERPROFILE%' : '$HOME'), function (t) {
  var path = require("path")
    , the

  if (isWin) {
    the = {
      key: 'USERPROFILE',
      dir: 'C:\\temp',
      val: '~\\val'
    }
  } else {
    the = {
      key: 'HOME',
      dir: '/tmp',
      val: '~/val'
    }
  }
  if (!process.env[the.key]) process.env[the.key] = v.dir
  var parsed = nopt({key: path}, {}, ["--key=" + the.val], 0)
  t.same(parsed.key, path.resolve(process.env[the.key], "val"))
  t.end()
})

// https://github.com/npm/nopt/issues/24
test("Unknown options are not parsed as numbers", function (t) {
    var parsed = nopt({"parse-me": Number}, null, ['--leave-as-is=1.20', '--parse-me=1.20'], 0)
    t.equal(parsed['leave-as-is'], '1.20')
    t.equal(parsed['parse-me'], 1.2)
    t.end()
});

// https://github.com/npm/nopt/issues/48
test("Check types based on name of type", function (t) {
  var parsed = nopt({"parse-me": {name: "Number"}}, null, ['--parse-me=1.20'], 0)
  t.equal(parsed['parse-me'], 1.2)
  t.end()
})


test("Missing types are not parsed", function (t) {
  var parsed = nopt({"parse-me": {}}, null, ['--parse-me=1.20'], 0)
  //should only contain argv
  t.equal(Object.keys(parsed).length, 1)
  t.end()
})

test("Types passed without a name are not parsed", function (t) {
  var parsed = nopt({"parse-me": {}}, {}, ['--parse-me=1.20'], 0)
  //should only contain argv
  t.equal(Object.keys(parsed).length, 1)
  t.end()
})

test("other tests", function (t) {

  var util = require("util")
    , Stream = require("stream")
    , path = require("path")
    , url = require("url")

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
      , path: path
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
    ,["--tmp=/tmp -tar=gtar", {tmp: isWin ? "C:\\tmp" : "/tmp",tar:"gtar"},[]]
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
      "--you-know=the-rules --and=so-do-i "+
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
     ,{aoa:["one", null, '100']}
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
    ,["--notadate=2011-01-25"
     ,{notadate: "2011-01-25"}
     ,[]]
    ,["--date 2011-01-25"
     ,{date: new Date("2011-01-25")}
     ,[]]
    ,["-cl 1"
     ,{config: true, length: 1}
     ,[]
     ,{config: Boolean, length: Number, clear: Boolean}
     ,{c: "--config", l: "--length"}]
    ,["--acount bla"
     ,{"acount":true}
     ,["bla"]
     ,{account: Boolean, credentials: Boolean, options: String}
     ,{a:"--account", c:"--credentials",o:"--options"}]
    ,["--clear"
     ,{clear:true}
     ,[]
     ,{clear:Boolean,con:Boolean,len:Boolean,exp:Boolean,add:Boolean,rep:Boolean}
     ,{c:"--con",l:"--len",e:"--exp",a:"--add",r:"--rep"}]
    ,["--file -"
     ,{"file":"-"}
     ,[]
     ,{file:String}
     ,{}]
    ,["--file -"
     ,{"file":true}
     ,["-"]
     ,{file:Boolean}
     ,{}]
    ,["--path"
     ,{"path":null}
     ,[]]
    ,["--path ."
     ,{"path":process.cwd()}
     ,[]]
    ].forEach(function (test) {
      var argv = test[0].split(/\s+/)
        , opts = test[1]
        , rem = test[2]
        , actual = nopt(test[3] || types, test[4] || shorthands, argv, 0)
        , parsed = actual.argv
      delete actual.argv
      for (var i in opts) {
        var e = JSON.stringify(opts[i])
          , a = JSON.stringify(actual[i] === undefined ? null : actual[i])
        if (e && typeof e === "object") {
          t.deepEqual(e, a)
        } else {
          t.equal(e, a)
        }
      }
      t.deepEqual(rem, parsed.remain)
    })
  t.end()
})
