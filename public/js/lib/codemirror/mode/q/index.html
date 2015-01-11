<!doctype html>

<title>CodeMirror: Q mode</title>
<meta charset="utf-8"/>
<link rel=stylesheet href="../../doc/docs.css">

<link rel="stylesheet" href="../../lib/codemirror.css">
<script src="../../lib/codemirror.js"></script>
<script src="../../addon/edit/matchbrackets.js"></script>
<script src="q.js"></script>
<style type="text/css">.CodeMirror {border-top: 1px solid black; border-bottom: 1px solid black;}</style>
<div id=nav>
  <a href="http://codemirror.net"><h1>CodeMirror</h1><img id=logo src="../../doc/logo.png"></a>

  <ul>
    <li><a href="../../index.html">Home</a>
    <li><a href="../../doc/manual.html">Manual</a>
    <li><a href="https://github.com/codemirror/codemirror">Code</a>
  </ul>
  <ul>
    <li><a href="../index.html">Language modes</a>
    <li><a class=active href="#">Q</a>
  </ul>
</div>

<article>
<h2>Q mode</h2>


<div><textarea id="code" name="code">
/ utilities to quickly load a csv file - for more exhaustive analysis of the csv contents see csvguess.q
/ 2009.09.20 - updated to match latest csvguess.q 

/ .csv.colhdrs[file] - return a list of colhdrs from file
/ info:.csv.info[file] - return a table of information about the file
/ columns are: 
/	c - column name; ci - column index; t - load type; mw - max width; 
/	dchar - distinct characters in values; rule - rule that caught the type
/	maybe - needs checking, _could_ be say a date, but perhaps just a float?
/ .csv.info0[file;onlycols] - like .csv.info except that it only analyses <onlycols>
/ example:
/	info:.csv.info0[file;(.csv.colhdrs file)like"*price"]
/	info:.csv.infolike[file;"*price"]
/	show delete from info where t=" "
/ .csv.data[file;info] - use the info from .csv.info to read the data
/ .csv.data10[file;info] - like .csv.data but only returns the first 10 rows
/ bulkload[file;info] - bulk loads file into table DATA (which must be already defined :: DATA:() )
/ .csv.read[file]/read10[file] - for when you don't care about checking/tweaking the <info> before reading 

\d .csv
DELIM:","
ZAPHDRS:0b / lowercase and remove _ from colhdrs (junk characters are always removed)
WIDTHHDR:25000 / number of characters read to get the header
READLINES:222 / number of lines read and used to guess the types
SYMMAXWIDTH:11 / character columns narrower than this are stored as symbols
SYMMAXGR:10 / max symbol granularity% before we give up and keep as a * string
FORCECHARWIDTH:30 / every field (of any type) with values this wide or more is forced to character "*"
DISCARDEMPTY:0b / completely ignore empty columns if true else set them to "C"
CHUNKSIZE:50000000 / used in fs2 (modified .Q.fs)

k)nameltrim:{$[~@x;.z.s'x;~(*x)in aA:.Q.a,.Q.A;(+/&\~x in aA)_x;x]}
k)fs2:{[f;s]((-7!s)>){[f;s;x]i:1+last@&0xa=r:1:(s;x;CHUNKSIZE);f@`\:i#r;x+i}[f;s]/0j}
cleanhdrs:{{$[ZAPHDRS;lower x except"_";x]}x where x in DELIM,.Q.an}
cancast:{nw:x$"";if[not x in"BXCS";nw:(min 0#;max 0#;::)@\:nw];$[not any nw in x$(11&count y)#y;$[11<count y;not any nw in x$y;1b];0b]}

read:{[file]data[file;info[file]]}  
read10:{[file]data10[file;info[file]]}  

colhdrs:{[file]
	`$nameltrim DELIM vs cleanhdrs first read0(file;0;1+first where 0xa=read1(file;0;WIDTHHDR))}
data:{[file;info]
	(exec c from info where not t=" ")xcol(exec t from info;enlist DELIM)0:file}
data10:{[file;info]
	data[;info](file;0;1+last 11#where 0xa=read1(file;0;15*WIDTHHDR))}
info0:{[file;onlycols]
	colhdrs:`$nameltrim DELIM vs cleanhdrs first head:read0(file;0;1+last where 0xa=read1(file;0;WIDTHHDR));
	loadfmts:(count colhdrs)#"S";if[count onlycols;loadfmts[where not colhdrs in onlycols]:"C"];
	breaks:where 0xa=read1(file;0;floor(10+READLINES)*WIDTHHDR%count head);
	nas:count as:colhdrs xcol(loadfmts;enlist DELIM)0:(file;0;1+last((1+READLINES)&count breaks)#breaks);
	info:([]c:key flip as;v:value flip as);as:();
	reserved:key`.q;reserved,:.Q.res;reserved,:`i;
	info:update res:c in reserved from info;
	info:update ci:i,t:"?",ipa:0b,mdot:0,mw:0,rule:0,gr:0,ndv:0,maybe:0b,empty:0b,j10:0b,j12:0b from info;
	info:update ci:`s#ci from info;
	if[count onlycols;info:update t:" ",rule:10 from info where not c in onlycols];
	info:update sdv:{string(distinct x)except`}peach v from info; 
	info:update ndv:count each sdv from info;
	info:update gr:floor 0.5+100*ndv%nas,mw:{max count each x}peach sdv from info where 0<ndv;
	info:update t:"*",rule:20 from info where mw>.csv.FORCECHARWIDTH; / long values
	info:update t:"C "[.csv.DISCARDEMPTY],rule:30,empty:1b from info where t="?",mw=0; / empty columns
	info:update dchar:{asc distinct raze x}peach sdv from info where t="?";
	info:update mdot:{max sum each"."=x}peach sdv from info where t="?",{"."in x}each dchar;
	info:update t:"n",rule:40 from info where t="?",{any x in"0123456789"}each dchar; / vaguely numeric..
	info:update t:"I",rule:50,ipa:1b from info where t="n",mw within 7 15,mdot=3,{all x in".0123456789"}each dchar,.csv.cancast["I"]peach sdv; / ip-address
	info:update t:"J",rule:60 from info where t="n",mdot=0,{all x in"+-0123456789"}each dchar,.csv.cancast["J"]peach sdv;
	info:update t:"I",rule:70 from info where t="J",mw<12,.csv.cancast["I"]peach sdv;
	info:update t:"H",rule:80 from info where t="I",mw<7,.csv.cancast["H"]peach sdv;
	info:update t:"F",rule:90 from info where t="n",mdot<2,mw>1,.csv.cancast["F"]peach sdv;
	info:update t:"E",rule:100,maybe:1b from info where t="F",mw<9;
	info:update t:"M",rule:110,maybe:1b from info where t in"nIHEF",mdot<2,mw within 4 7,.csv.cancast["M"]peach sdv; 
	info:update t:"D",rule:120,maybe:1b from info where t in"nI",mdot in 0 2,mw within 6 11,.csv.cancast["D"]peach sdv; 
	info:update t:"V",rule:130,maybe:1b from info where t="I",mw in 5 6,7<count each dchar,{all x like"*[0-9][0-5][0-9][0-5][0-9]"}peach sdv,.csv.cancast["V"]peach sdv; / 235959 12345        
	info:update t:"U",rule:140,maybe:1b from info where t="H",mw in 3 4,7<count each dchar,{all x like"*[0-9][0-5][0-9]"}peach sdv,.csv.cancast["U"]peach sdv; /2359
	info:update t:"U",rule:150,maybe:0b from info where t="n",mw in 4 5,mdot=0,{all x like"*[0-9]:[0-5][0-9]"}peach sdv,.csv.cancast["U"]peach sdv;
	info:update t:"T",rule:160,maybe:0b from info where t="n",mw within 7 12,mdot<2,{all x like"*[0-9]:[0-5][0-9]:[0-5][0-9]*"}peach sdv,.csv.cancast["T"]peach sdv;
	info:update t:"V",rule:170,maybe:0b from info where t="T",mw in 7 8,mdot=0,.csv.cancast["V"]peach sdv;
	info:update t:"T",rule:180,maybe:1b from info where t in"EF",mw within 7 10,mdot=1,{all x like"*[0-9][0-5][0-9][0-5][0-9].*"}peach sdv,.csv.cancast["T"]peach sdv;
	info:update t:"Z",rule:190,maybe:0b from info where t="n",mw within 11 24,mdot<4,.csv.cancast["Z"]peach sdv;
	info:update t:"P",rule:200,maybe:1b from info where t="n",mw within 12 29,mdot<4,{all x like"[12]*"}peach sdv,.csv.cancast["P"]peach sdv;
	info:update t:"N",rule:210,maybe:1b from info where t="n",mw within 3 28,mdot=1,.csv.cancast["N"]peach sdv;
	info:update t:"?",rule:220,maybe:0b from info where t="n"; / reset remaining maybe numeric
	info:update t:"C",rule:230,maybe:0b from info where t="?",mw=1; / char
	info:update t:"B",rule:240,maybe:0b from info where t in"HC",mw=1,mdot=0,{$[all x in"01tTfFyYnN";(any"0fFnN"in x)and any"1tTyY"in x;0b]}each dchar; / boolean
	info:update t:"B",rule:250,maybe:1b from info where t in"HC",mw=1,mdot=0,{all x in"01tTfFyYnN"}each dchar; / boolean
	info:update t:"X",rule:260,maybe:0b from info where t="?",mw=2,{$[all x in"0123456789abcdefABCDEF";(any .Q.n in x)and any"abcdefABCDEF"in x;0b]}each dchar; /hex
	info:update t:"S",rule:270,maybe:1b from info where t="?",mw<.csv.SYMMAXWIDTH,mw>1,gr<.csv.SYMMAXGR; / symbols (max width permitting)
	info:update t:"*",rule:280,maybe:0b from info where t="?"; / the rest as strings
	/ flag those S/* columns which could be encoded to integers (.Q.j10/x10/j12/x12) to avoid symbols
	info:update j12:1b from info where t in"S*",mw<13,{all x in .Q.nA}each dchar;
	info:update j10:1b from info where t in"S*",mw<11,{all x in .Q.b6}each dchar; 
	select c,ci,t,maybe,empty,res,j10,j12,ipa,mw,mdot,rule,gr,ndv,dchar from info}
info:info0[;()] / by default don't restrict columns
infolike:{[file;pattern] info0[file;{x where x like y}[lower colhdrs[file];pattern]]} / .csv.infolike[file;"*time"]

\d .
/ DATA:()
bulkload:{[file;info]
	if[not`DATA in system"v";'`DATA.not.defined];
	if[count DATA;'`DATA.not.empty];
	loadhdrs:exec c from info where not t=" ";loadfmts:exec t from info;
	.csv.fs2[{[file;loadhdrs;loadfmts] `DATA insert $[count DATA;flip loadhdrs!(loadfmts;.csv.DELIM)0:file;loadhdrs xcol(loadfmts;enlist .csv.DELIM)0:file]}[file;loadhdrs;loadfmts]];
	count DATA}
@[.:;"\\l csvutil.custom.q";::]; / save your custom settings in csvutil.custom.q to override those set at the beginning of the file 
</textarea></div>

    <script>
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        matchBrackets: true
      });
    </script>

    <p><strong>MIME type defined:</strong> <code>text/x-q</code>.</p>
  </article>
