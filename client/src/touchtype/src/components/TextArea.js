import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lorem from 'react-lorem-component';
class TextArea extends Component {
	
	/* eslint-disable */
	//concatenation of literals
	
	render() {
		let words = shuffle(['ad','dolor', '@','Lorem', 'ipsum', 'sit']);
		
		let lesson1 = shuffle(['fjfjfj', 'ffj', 'jfjf','jjf', 'fgfg', 'jhjh', 'hghg', 'ghgh', 'jg', 'jh', 'hj', 'fhh', 'hfhf']);
		let lesson2 = shuffle(['asd', 'dad', 'kl;', ';lk', 'kkssd', ';a;a', 'sksk', 'dks', 'lks', ';d;a', 'skl', 'l;a', 'kds;', 'a;sldk', ';dlska', 'aa']);
		let lesson3 = shuffle(['jfa;', 'ghfja', ';ghjd', ';;aadk', 'fjkdal', ';lasfjgh', 'hl', 'gs', 'ghld', 'gha;ls', 'hhgklssa', 'lghdaslk;'])
		let lesson4 = shuffle(['ry', 'iiuurtiy', 'uiuirtrt', 'itruy', 'ytytriiu', 'rutyirriyt', 'uyi', 'tryui', 'ytriiuy', 'iuy', 'ttry', 'truy', 'yyrrtiu']);
		let lesson5 = shuffle(['woopwq', 'oopqqw', 'ppoopow', 'qwqwop', 'popqw', 'woqp', 'opwooqqp', 'wop', 'pow', 'qwop', 'owow', 'owpowqow', 'qwppqqoow', 'op', 'qw', 'owpq']);
		let lesson6 = shuffle(['qpiou', 'toop', 'prot', 'iopert', 'iwpqiru', 'poor', 'rotter', 'iutwpo', 'tere', 'pouy', 'qytio', 'eerie', 'tyr', 'trtry', 'uot', 'trew', 'pwipe', 'ooree', 'qwerty', 'pyytrre']);
		let lesson7 = shuffle(['qled', ';ilhde', 'ghieos', 'ppqlshg', 'jfiedo', 'yqpe', 'yi;s;eid', 'poiedgg', 'gheikow', 'qllhiel', 'ikpkqlly', 'idrekjg', 'jfpjeit', 'ihg', 's;id', 'ied', 'is;ytqap', 'idkels', 'podl;slke']);
		
		
		let lesson8 = shuffle(['vvbbnnmm', 'vb', 'nm', 'mvbn', 'vbnm', 'nvbm', 'vvbbnnmm',  'nmvn', 'bbmmnvb', 'mvmbmmnm', 'vbvbmnnmv', 'vbbnnbmv', 'nbmv']);
		let lesson9 = shuffle(['zxc', ',./', '//zx', 'cc./', ',.ccx/', 'zzxx..//cc', 'c.z.,c', 'c/.xz', '//,,cxz', 'z.c', ',,cxz', 'z.xc,...x', 'xc,.///zzcx', '.x,,//zzc']);
		let lesson10 = shuffle([',xc', 'x,mnvb', 'm,xmn/', 'bv,x/', 'nbmv/', ',,cnzb', 'x,mnvb', '/bnzc', 'xm,/vz', 'nvmz', 'b/x,z', 'bmz/,', '/bz,cx', 'm/z,vx']);
		let lesson11 = shuffle(['qni', ';tybv', ',vupoc', 'hct', '/biq', ',p;qw', 'czyop', 'wbv', 'p,gse', 'synb', 'pkl', 'nigh', 'engz', 'ug,z', 'heq/i', 'bzxyti', 'iqwsl']);
		let lesson12 = shuffle(['123', '90', '391', '2293', '031', '99002', '19203', '0912', '332900', '1139', '9012', '2013']);
		let lesson13 = shuffle(['45678', '5867', '6745', '7654', '8745', '8564', '5678', '4756', '8654', '4685']);
		let lesson14 = shuffle(['/7 g', 'w7,z8', '09qwt', 'bv85', ';sa95', 'g7h1', 'vx14', '5ien', 'cpb3', 'j75f', 'v46h', '8,z02', '5;vm/', '1x,', '38tyvbn', '7,egz', '0/,36wsk', 'ks9d']);
		
		let lesson15 = shuffle(['uxW', 'P/,We', 'Gh/jf', 'ETvIO/', 'UiReQ', 'Thi,/F', 'AeiOU', '4rH8', '1IP4vn', 'Yo40', 'Qui7R', 'DaV3', '0cE', 'lOT10', 'V;/34', 'hGIPw83' ]);
		let lesson16 = shuffle(["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part","Because","should", "Could", 'Type', 'Game', 'Tree', 'Fallen', 'Gusty', 'Place', 'Quiet', 'Reading', 'Place', 'Manage', 'Team', 'Picture', 'Ritzy', 'Posh', 'Between', 'Against', 'Screen', 'Castle', 'Team', 'Sense', 'Thought', 'Style', 'Program', 'Laugh', 'Fish', 'Holiday', 'Member', 'Dream', 'Direct', 'Force', 'Bring', 'Wine', 'Stagger', 'Oscar', 'waves', 'See', 'saw', 'doctor', 'acorn', 'reason', 'sand', 'couple', 'continue', 'predict', 'hosts', 'statesman', 'specials', 'survival','timer', 'Flip', 'snow', 'Super', 'cup', 'plot', 'go', 'pour', 'market', 'map', 'league', 'trust', 'single', 'Page']);
		let lesson17 = shuffle(["'?\\", ":[]", "<{:", ">?\\]", "'\\[?}", "?>", "'>?\\", "['}:", ">?[", "'}]"]);
		let lesson18;
		
		//lesson change for choice of keyboard
		if(this.props.flagSelect1 === 'usLayout flagHighlighted') {
		 lesson18 = shuffle(['!#', '@(^', '^%$', '%#)', '(*)@', '&$%@', ')!*%', '#$%^&', '&^#!', '(*&@^)']);
		}
		else {
			 lesson18 = shuffle(['!£', '"(^', '^%$', '%£)', '(*)"', '&$%"', ')!*%', '£$%^&', '&^£!', '(*&"^)']);
		}
		
		let lesson19;
		if(this.props.flagSelect1 === 'usLayout flagHighlighted'){
		 lesson19 = shuffle(['ˋ|"', '~"', 'ˋ-=_', 'ˋ+ˋ~', '"-=', '=|""', '_-+=', '~"|+', '"+=', '+_', '"ˋ=~|']);
		}
		else {
		 lesson19 = shuffle(['ˋ|@', '~#', 'ˋ¬-=_', 'ˋ¬+ˋ@~', '#¬-=', '=|@#', '_-+=', '~¬@|+', '¬+=', '#+_', '#ˋ=~|']);
		}
		
		let lesson20;
		if(this.props.flagSelect1 === 'usLayout flagHighlighted'){
		 lesson20 = shuffle(['ˋ*)', '@!#_', '+"$~', '~($|)', '\'*ˋ', '_"+?', '&^~|', ':(<ˋ\\', '>#+', '||>&', '@ˋ~$%', '%^*', '=@!~']);
		}
		else {
		  lesson20 = shuffle(['ˋ*)', '@!#_', '+"$~', '¬($|)', '\'*ˋ', '_"+?', '&^¬|', ':(<ˋ\\', '>#¬+', '||>&', '@ˋ¬$%', '%^*', '=@!¬~']);	
		}
		
		let lesson21;
		if(this.props.flagSelect1 === 'usLayout flagHighlighted'){
			lesson21 = shuffle(["*.ei", "iIqP3", '-_=qi',  "Hh/.", "Qiu8[", ",#ˋ", "1&s%", "^ip+", "+Gg|", "e'Ez}", "Bc)A!", "#V", "0=kK;", "fS~|\|", 'P"hn#', "gm*,R5$", 'we%', "y@qG", "hir", "e,9", "#:d2", "wi1!2", "Z?82c", "/0G*", "H*(U)", "bnj)&*", "@'kj7", "TK>/", ">sw", ")JG76", "mcnvb74", "dui_=64", "~;j57", "MN", ".jf93.", "9G", "|F6", "$y{gdr}", "09uh(", "j8t", "9!hlr", "JQWin", "^YT@h", "I7Pu", "U(!wzc", "tTˋ9ˋnZ"]);
		}
		else {
			lesson21 = shuffle(["*.ei", "iIqP3", '-_=qi', "Hh/.", "Qiu8[", ",#ˋ", "1&s%", "^ip+", "+Gg|", "e'Ez}", "Bc)A!", "#¬V", "0=kK;", "fS~|\|", 'P"hn#', "gm*,R5$", 'we%', "y@qG¬", "hir", "e,9£", "#:d2", "wi1!2", "Z?82c", "/0G*", "H*(U)", "bnj)&*", "@'kj7", "TK>/", ">£sw", ")JG76", "mcnvb74", "dui_=64", "~;j57", "MN", ".jf93.", "9G", "|F6", "$y{gdr}", "09uh(", "¬j8t", "9!hlr", "JQWin", "^YT@h", "I7Pu", "U(!wzc", "tTˋ9ˋnZ"]);	
		}
		
		let textString;
		let currentLesson = words;
		let seed = 0;
		
        function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;

    // And swap it with the current element.
      temporaryValue = array[currentIndex];
			
	// randomise current index
			if(array.length < 150) {
			array[randomIndex] = array[randomIndex].split('');
		
		for(let i = array[randomIndex].length -1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			
			
			[array[randomIndex][i], array[randomIndex][j]] = [array[randomIndex][j], array[randomIndex][i]];
			
		}
			
		array[randomIndex] = array[randomIndex].join('');
		}// end randomise each index
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
     }
			
       return array;
   }
		
		
		
		
		//choose which array to use depending on lesson clicked
		switch(this.props.activeLesson) {
				case 'lesson1': 
					currentLesson = lesson1;
					seed = Math.floor((Math.random() * 100) + 1)
					break;
			case 'lesson2':
					currentLesson = lesson2;
					seed = Math.floor((Math.random() * 100) + 1)
					break;
			case 'lesson3':
					currentLesson = lesson3;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson4':
					currentLesson = lesson4;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson5':
					currentLesson = lesson5;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson6':
					currentLesson = lesson6;
					seed = Math.floor((Math.random() * 20) + 1)
					break;	
			case 'lesson7':
					currentLesson = lesson7;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson8':
					currentLesson = lesson8;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson9':
					currentLesson = lesson9;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson10':
					currentLesson = lesson10;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson11':
					currentLesson = lesson11;
					seed = Math.floor((Math.random() * 8) + 1)
					break;
			case 'lesson12':
					currentLesson = lesson12;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson13':
					currentLesson = lesson13;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			case 'lesson14':
					currentLesson = lesson14;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			
			case 'lesson15':
					currentLesson = lesson15;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson16':
					currentLesson = lesson16;
					
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson17':
					currentLesson = lesson17;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson18':
					currentLesson = lesson18;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			
			case 'lesson19':
					currentLesson = lesson19;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
				
			case 'lesson20':
					currentLesson = lesson20;
					seed = Math.floor((Math.random() * 20) + 1)
					break;	
			
			case 'lesson21':
					currentLesson = lesson21;
					seed = Math.floor((Math.random() * 20) + 1)
					break;
			default:
				break;
			}
		
		
		
		setTimeout(()=>{

			
			
		let innerText = this.refs.innerText;
		let innerTextUsed = this.refs.innerTextUsed;
			
			
		//textString returns the random string from the Lorem generator lowercase at the moment for lower lessons
		if(currentLesson === lesson1 || currentLesson === lesson2 || currentLesson === lesson3 || currentLesson === lesson4 || currentLesson === lesson5 || currentLesson === lesson6 || currentLesson === lesson7 || currentLesson === lesson8 || currentLesson === lesson12 || currentLesson === lesson13 || currentLesson === lesson17 || currentLesson === lesson18 || currentLesson === lesson19 || currentLesson === lesson20) {
		textString = document.getElementsByTagName('p')[0].firstChild.data.replace(/\./g,'').toLowerCase();
		}
		else if(currentLesson === lesson9 || currentLesson === lesson10 || currentLesson === lesson11 || currentLesson === lesson14)
		{
			textString = document.getElementsByTagName('p')[0].firstChild.data.toLowerCase();
		}
		else {
			textString = document.getElementsByTagName('p')[0].firstChild.data;
		}
			
		//send string to state once then return after each character struck;	
		if(this.props.needText){
		this.props.sendString(textString)
		
		
		}
		else{
			if(this.props.testString.length === 0){
				this.props.sendEnd();
				
			}
		// test which highlight to apply based on key correct or not
		if(this.props.mistakesLength > this.props.mistakesTemp) {
		innerText.innerHTML = this.props.testString.length > 0 ? '<strong className="highlight">' + this.props.testString[0] + '</strong>' + this.props.testString.substring(1,this.props.testString.length) : '<span className="highlight">' + ' ' + '</span>' + this.props.testString.substring(1,this.props.testString.length);
			
			
		}
		else {
			
		innerText.innerHTML = this.props.testString.length > 0 ? '<span className="highlight">' + this.props.testString[0] + '</span>' + this.props.testString.substring(1,this.props.testString.length) : '<span className="highlight">' +' ' + '</span>' + this.props.testString.substring(1,this.props.testString.length)  ;	
		}
			
			
		innerTextUsed.value =  this.props.usedString.split('').reverse().join('');
			
			
		}
			
		
		
		})
		
	
		
		return(
			<div className="typingArea">
			<form>
			<div className="textbox" id="textarea_id" ref="textarea_id" type="textArea" readOnly={true} >
			<div className="marker"></div>
			<div className="innerTextBox" ref="innerText" readOnly={true}></div>
			<textarea className="innerTextBoxUsed" ref="innerTextUsed" readOnly={true}   type="textArea"></textarea>
			</div>
			
			</form>
			<Lorem id="textGenerator" ref="text_content" mode="paragraphs" paragraphLowerBound={3} sentenceUpperBound={7}  count="1" words={currentLesson} seed={seed}/>
			
			</div>
			
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		currentKey: state.currentKey,
		testString: state.testString,
		usedString: state.usedString,
		needText: state.fetchText,
		letterCorrect: state.letterCorrect,
		activeLesson: state.activeLesson,
		mistakesLength: state.mistakesLength,
		mistakesTemp: state.mistakesTemp,
		flagSelect1: state.flagSelect1,
		flagSelect2: state.flagSelect2
	
		
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
		sendLessonKeys: (arr) => {dispatch({type: 'SENDLESSONKEYS', keys: arr})},
		sendEnd: () => {dispatch({type: 'SENDEND'})},
		
	
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TextArea);