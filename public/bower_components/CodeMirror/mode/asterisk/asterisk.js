// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/*
 * =====================================================================================
 *
 *       Filename:  mode/asterisk/asterisk.js
 *
 *    Description:  CodeMirror mode for Asterisk dialplan
 *
 *        Created:  05/17/2012 09:20:25 PM
 *       Revision:  none
 *
 *         Author:  Stas Kobzar (stas@modulis.ca),
 *        Company:  Modulis.ca Inc.
 *
 * =====================================================================================
 */

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("asterisk", function() {
  var atoms    = ["exten", "same", "include","ignorepat","switch"],
      dpcmd    = ["#include","#exec"],
      apps     = [
                  "addqueuemember","adsiprog","aelsub","agentlogin","agentmonitoroutgoing","agi",
                  "alarmreceiver","amd","answer","authenticate","background","backgrounddetect",
                  "bridge","busy","callcompletioncancel","callcompletionrequest","celgenuserevent",
                  "changemonitor","chanisavail","channelredirect","chanspy","clearhash","confbridge",
                  "congestion","continuewhile","controlplayback","dahdiacceptr2call","dahdibarge",
                  "dahdiras","dahdiscan","dahdisendcallreroutingfacility","dahdisendkeypadfacility",
                  "datetime","dbdel","dbdeltree","deadagi","dial","dictate","directory","disa",
                  "dumpchan","eagi","echo","endwhile","exec","execif","execiftime","exitwhile","extenspy",
                  "externalivr","festival","flash","followme","forkcdr","getcpeid","gosub","gosubif",
                  "goto","gotoif","gotoiftime","hangup","iax2provision","ices","importvar","incomplete",
                  "ivrdemo","jabberjoin","jabberleave","jabbersend","jabbersendgroup","jabberstatus",
                  "jack","log","macro","macroexclusive","macroexit","macroif","mailboxexists","meetme",
                  "meetmeadmin","meetmechanneladmin","meetmecount","milliwatt","minivmaccmess","minivmdelete",
                  "minivmgreet","minivmmwi","minivmnotify","minivmrecord","mixmonitor","monitor","morsecode",
                  "mp3player","mset","musiconhold","nbscat","nocdr","noop","odbc","odbc","odbcfinish",
                  "originate","ospauth","ospfinish","osplookup","ospnext","page","park","parkandannounce",
                  "parkedcall","pausemonitor","pausequeuemember","pickup","pickupchan","playback","playtones",
                  "privacymanager","proceeding","progress","queue","queuelog","raiseexception","read","readexten",
                  "readfile","receivefax","receivefax","receivefax","record","removequeuemember",
                  "resetcdr","retrydial","return","ringing","sayalpha","saycountedadj","saycountednoun",
                  "saycountpl","saydigits","saynumber","sayphonetic","sayunixtime","senddtmf","sendfax",
                  "sendfax","sendfax","sendimage","sendtext","sendurl","set","setamaflags",
                  "setcallerpres","setmusiconhold","sipaddheader","sipdtmfmode","sipremoveheader","skel",
                  "slastation","slatrunk","sms","softhangup","speechactivategrammar","speechbackground",
                  "speechcreate","speechdeactivategrammar","speechdestroy","speechloadgrammar","speechprocessingsound",
                  "speechstart","speechunloadgrammar","stackpop","startmusiconhold","stopmixmonitor","stopmonitor",
                  "stopmusiconhold","stopplaytones","system","testclient","testserver","transfer","tryexec",
                  "trysystem","unpausemonitor","unpausequeuemember","userevent","verbose","vmauthenticate",
                  "vmsayname","voicemail","voicemailmain","wait","waitexten","waitfornoise","waitforring",
                  "waitforsilence","waitmusiconhold","waituntil","while","zapateller"
                 ];

  function basicToken(stream,state){
    var cur = '';
    var ch = stream.next();
    // comment
    if(ch == ";") {
      stream.skipToEnd();
      return "comment";
    }
    // context
    if(ch == '[') {
      stream.skipTo(']');
      stream.eat(']');
      return "header";
    }
    // string
    if(ch == '"') {
      stream.skipTo('"');
      return "string";
    }
    if(ch == "'") {
      stream.skipTo("'");
      return "string-2";
    }
    // dialplan commands
    if(ch == '#') {
      stream.eatWhile(/\w/);
      cur = stream.current();
      if(dpcmd.indexOf(cur) !== -1) {
        stream.skipToEnd();
        return "strong";
      }
    }
    // application args
    if(ch == '$'){
      var ch1 = stream.peek();
      if(ch1 == '{'){
        stream.skipTo('}');
        stream.eat('}');
        return "variable-3";
      }
    }
    // extension
    stream.eatWhile(/\w/);
    cur = stream.current();
    if(atoms.indexOf(cur) !== -1) {
      state.extenStart = true;
      switch(cur) {
        case 'same': state.extenSame = true; break;
        case 'include':
        case 'switch':
        case 'ignorepat':
          state.extenInclude = true;break;
        default:break;
      }
      return "atom";
    }
  }

  return {
    startState: function() {
      return {
        extenStart: false,
        extenSame:  false,
        extenInclude: false,
        extenExten: false,
        extenPriority: false,
        extenApplication: false
      };
    },
    token: function(stream, state) {

      var cur = '';
      if(stream.eatSpace()) return null;
      // extension started
      if(state.extenStart){
        stream.eatWhile(/[^\s]/);
        cur = stream.current();
        if(/^=>?$/.test(cur)){
          state.extenExten = true;
          state.extenStart = false;
          return "strong";
        } else {
          state.extenStart = false;
          stream.skipToEnd();
          return "error";
        }
      } else if(state.extenExten) {
        // set exten and priority
        state.extenExten = false;
        state.extenPriority = true;
        stream.eatWhile(/[^,]/);
        if(state.extenInclude) {
          stream.skipToEnd();
          state.extenPriority = false;
          state.extenInclude = false;
        }
        if(state.extenSame) {
          state.extenPriority = false;
          state.extenSame = false;
          state.extenApplication = true;
        }
        return "tag";
      } else if(state.extenPriority) {
        state.extenPriority = false;
        state.extenApplication = true;
        stream.next(); // get comma
        if(state.extenSame) return null;
        stream.eatWhile(/[^,]/);
        return "number";
      } else if(state.extenApplication) {
        stream.eatWhile(/,/);
        cur = stream.current();
        if(cur === ',') return null;
        stream.eatWhile(/\w/);
        cur = stream.current().toLowerCase();
        state.extenApplication = false;
        if(apps.indexOf(cur) !== -1){
          return "def strong";
        }
      } else{
        return basicToken(stream,state);
      }

      return null;
    }
  };
});

CodeMirror.defineMIME("text/x-asterisk", "asterisk");

});
