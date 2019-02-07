import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row1 extends Component {
	
	//Start keypress listener.
    
    
	componentWillMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
	document.addEventListener("keyup", this.handleKeyUp.bind(this));       
}
	
	
	

	
	handleKeyPress = (e) => {
	
		e.preventDefault();
	    let capsDown = e.getModifierState("CapsLock");
	//unneeded keys
	if(e.keyCode === 27 || e.keyCode === 112 || e.keyCode === 113 || e.keyCode === 114 || e.keyCode === 115 || e.keyCode === 116 || e.keyCode === 117 || e.keyCode === 118 || e.keyCode === 119 || e.keyCode === 120 || e.keyCode === 121 || e.keyCode === 122 || e.keyCode === 123 || e.keyCode === 145 || e.keyCode === 19 || e.keyCode === 45 || e.keyCode === 36 || e.keyCode === 33 || e.keyCode === 46 || e.keyCode === 35 || e.keyCode === 34 || e.keyCode === 38 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 93 || e.keyCode === 37 || e.keyCode === 40 || e.keyCode === 39 || e.keyCode === 144 || e.keyCode === 111 || e.keyCode === 106 || e.keyCode === 109 || e.keyCode === 103 || e.keyCode === 104 || e.keyCode === 105 || e.keyCode === 100 || e.keyCode === 101 || e.keyCode === 102 || e.keyCode === 97 || e.keyCode === 98 || e.keyCode === 99 || e.keyCode === 96 || e.keyCode === 110 || e.keyCode === 107 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 93){
		return false;
	}
		
	
	

		
	else if (e.code){	
		
	let currentKey = document.getElementById(e.code);
	
	this.props.classChange(currentKey, capsDown);	
	}
		//added because ie seems to rewrite the rules for keyboard event objects
	else{
	
		let currentKey;
		if(e.keyCode === 16 && e.location === 1) currentKey = document.getElementById("ShiftLeft");
		if(e.keyCode === 16 && e.location === 2) currentKey = document.getElementById("ShiftRight");
		switch (e.keyCode) {

				case 223:
					currentKey = document.getElementById("Backquote");
					break;
				case 49:
					currentKey = document.getElementById("Digit1");
					break;
				case 50:
					currentKey = document.getElementById("Digit2");
					break;
				case 51:
					currentKey = document.getElementById("Digit3");
					break;
				case 52:
					currentKey = document.getElementById("Digit4");
					break;
				case 53:
					currentKey = document.getElementById("Digit5");
					break;
				case 54:
					currentKey = document.getElementById("Digit6");
					break;
				case 55:
					currentKey = document.getElementById("Digit7");
					break;
				case 56:
					currentKey = document.getElementById("Digit8");
					break;
				case 57:
					currentKey = document.getElementById("Digit9");
					break;
				case 48:
					currentKey = document.getElementById("Digit0");
					break;
				case 189:
					currentKey = document.getElementById("Minus");
					break;
				case 187:
					currentKey = document.getElementById("Equal");
					break;
				//row 2
				case 9:
					currentKey = document.getElementById("Tab");
					break;
				case 81:
					currentKey = document.getElementById("KeyQ");
					break;
				case 87:
					currentKey = document.getElementById("KeyW");
					break;
				case 69:
					currentKey = document.getElementById("KeyE");
					break;
				case 82:
					currentKey = document.getElementById("KeyR");
					break;
				case 84:
					currentKey = document.getElementById("KeyT");
					break;
				case 89:
					currentKey = document.getElementById("KeyY");
					break;
				case 85:
					currentKey = document.getElementById("KeyU");
					break;
				case 73:
					currentKey = document.getElementById("KeyI");
					break;
				case 79:
					currentKey = document.getElementById("KeyO");
					break;
				case 80:
					currentKey = document.getElementById("KeyP");
					break;
				case 219:
					currentKey = document.getElementById("BracketLeft");
					break;
				case 221:
					currentKey = document.getElementById("BracketRight");
					break;
				case 13:
					currentKey = document.getElementById("Enter");
					break;
				//third row
				case 20:
					currentKey = document.getElementById("CapsLock");
					break;
				case 65:
					currentKey = document.getElementById("KeyA");
					break;
				case 83:
					currentKey = document.getElementById("KeyS");
					break;
				case 68:
					currentKey = document.getElementById("KeyD");
					break;
				case 70:
					currentKey = document.getElementById("KeyF");
					break;
				case 71:
					currentKey = document.getElementById("KeyG");
					break;
				case 72:
					currentKey = document.getElementById("KeyH");
					break;
				case 74:
					currentKey = document.getElementById("KeyJ");
					break;
				case 75:
					currentKey = document.getElementById("KeyK");
					break;
				case 76:
					currentKey = document.getElementById("KeyL");
					break;
				case 186:
					currentKey = document.getElementById("Semicolon");
					break;
				case 192:
					currentKey = document.getElementById("Quote");
					break;
				case 222:
					currentKey = document.getElementById("Backslash");
					break;
				//row 4
			
				case 220:
					currentKey = document.getElementById("IntlBackslash");
					break;
				case 90:
					currentKey = document.getElementById("KeyZ");
					break;
				case 88:
					currentKey = document.getElementById("KeyX");
					break;
				case 67:
					currentKey = document.getElementById("KeyC");
					break;
				case 86:
					currentKey = document.getElementById("KeyV");
					break;
				case 66:
					currentKey = document.getElementById("KeyB");
					break;
				case 78:
					currentKey = document.getElementById("KeyN");
					break;
				case 77:
					currentKey = document.getElementById("KeyM");
					break;
				case 188:
					currentKey = document.getElementById("Comma");
					break;
				case 190:
					currentKey = document.getElementById("Period");
					break;
				case 191:
					currentKey = document.getElementById("Slash");
					break;
				case 32:
					currentKey = document.getElementById("Space");
					break;
				
			    default:
				break;


			}
		
		this.props.classChange(currentKey, capsDown);
	}	
		
	}
	
	
	
	handleKeyUp = (e) => {
		
		let capsDown = e.getModifierState("CapsLock");
		//unneeded keys
	if(e.keyCode === 27 || e.keyCode === 112 || e.keyCode === 113 || e.keyCode === 114 || e.keyCode === 115 || e.keyCode === 116 || e.keyCode === 117 || e.keyCode === 118 || e.keyCode === 119 || e.keyCode === 120 || e.keyCode === 121 || e.keyCode === 122 || e.keyCode === 123 || e.keyCode === 145 || e.keyCode === 19 || e.keyCode === 45 || e.keyCode === 36 || e.keyCode === 33 || e.keyCode === 46 || e.keyCode === 35 || e.keyCode === 34 || e.keyCode === 38 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 93 || e.keyCode === 37 || e.keyCode === 40 || e.keyCode === 39 || e.keyCode === 144 || e.keyCode === 111 || e.keyCode === 106 || e.keyCode === 109 || e.keyCode === 103 || e.keyCode === 104 || e.keyCode === 105 || e.keyCode === 100 || e.keyCode === 101 || e.keyCode === 102 || e.keyCode === 97 || e.keyCode === 98 || e.keyCode === 99 || e.keyCode === 96 || e.keyCode === 110 || e.keyCode === 107 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 93){
		return false;
	}
	else if (e.code){
	let releasedKey = document.getElementById(e.code);
	this.props.classChangeOff(releasedKey, capsDown);
		}
	else{
		let releasedKey;
		if(e.keyCode === 16 && e.location === 1) releasedKey = document.getElementById("ShiftLeft");
		if(e.keyCode === 16 && e.location === 2) releasedKey = document.getElementById("ShiftRight");
		switch (e.keyCode) {
				case 223:
					releasedKey = document.getElementById("Backquote");
					break;
				case 49:
					releasedKey = document.getElementById("Digit1");
					break;
				case 50:
					releasedKey = document.getElementById("Digit2");
					break;
				case 51:
					releasedKey = document.getElementById("Digit3");
					break;
				case 52:
					releasedKey = document.getElementById("Digit4");
					break;
				case 53:
					releasedKey = document.getElementById("Digit5");
					break;
				case 54:
					releasedKey = document.getElementById("Digit6");
					break;
				case 55:
					releasedKey = document.getElementById("Digit7");
					break;
				case 56:
					releasedKey = document.getElementById("Digit8");
					break;
				case 57:
					releasedKey = document.getElementById("Digit9");
					break;
				case 48:
					releasedKey = document.getElementById("Digit0");
					break;
				case 189:
					releasedKey = document.getElementById("Minus");
					break;
				case 187:
					releasedKey = document.getElementById("Equal");
					break;
				//row 2
				case 9:
					releasedKey = document.getElementById("Tab");
					break;
				case 81:
					releasedKey = document.getElementById("KeyQ");
					break;
				case 87:
					releasedKey = document.getElementById("KeyW");
					break;
				case 69:
					releasedKey = document.getElementById("KeyE");
					break;
				case 82:
					releasedKey = document.getElementById("KeyR");
					break;
				case 84:
					releasedKey = document.getElementById("KeyT");
					break;
				case 89:
					releasedKey = document.getElementById("KeyY");
					break;
				case 85:
					releasedKey = document.getElementById("KeyU");
					break;
				case 73:
					releasedKey = document.getElementById("KeyI");
					break;
				case 79:
					releasedKey = document.getElementById("KeyO");
					break;
				case 80:
					releasedKey = document.getElementById("KeyP");
					break;
				case 219:
					releasedKey = document.getElementById("BracketLeft");
					break;
				case 221:
					releasedKey = document.getElementById("BracketRight");
					break;
				case 13:
					releasedKey = document.getElementById("Enter");
					break;
				//third row
				case 20:
					releasedKey = document.getElementById("CapsLock");
					break;
				case 65:
					releasedKey = document.getElementById("KeyA");
					break;
				case 83:
					releasedKey = document.getElementById("KeyS");
					break;
				case 68:
					releasedKey = document.getElementById("KeyD");
					break;
				case 70:
					releasedKey = document.getElementById("KeyF");
					break;
				case 71:
					releasedKey = document.getElementById("KeyG");
					break;
				case 72:
					releasedKey = document.getElementById("KeyH");
					break;
				case 74:
					releasedKey = document.getElementById("KeyJ");
					break;
				case 75:
					releasedKey = document.getElementById("KeyK");
					break;
				case 76:
					releasedKey = document.getElementById("KeyL");
					break;
				case 186:
					releasedKey = document.getElementById("Semicolon");
					break;
				case 192:
					releasedKey = document.getElementById("Quote");
					break;
				case 222:
					releasedKey = document.getElementById("Backslash");
					break;
				//row 4
			
				case 220:
					releasedKey = document.getElementById("IntlBackslash");
					break;
				case 90:
					releasedKey = document.getElementById("KeyZ");
					break;
				case 88:
					releasedKey = document.getElementById("KeyX");
					break;
				case 67:
					releasedKey = document.getElementById("KeyC");
					break;
				case 86:
					releasedKey = document.getElementById("KeyV");
					break;
				case 66:
					releasedKey = document.getElementById("KeyB");
					break;
				case 78:
					releasedKey = document.getElementById("KeyN");
					break;
				case 77:
					releasedKey = document.getElementById("KeyM");
					break;
				case 188:
					releasedKey = document.getElementById("Comma");
					break;
				case 190:
					releasedKey = document.getElementById("Period");
					break;
				case 191:
					releasedKey = document.getElementById("Slash");
					break;
				case 32:
					releasedKey = document.getElementById("Space");
					break;
				
			    default:
				break;


			}
		
		this.props.classChangeOff(releasedKey, capsDown);
		
	}	
		
	}
	
	
	
	render() {

		return (
			this.props.flagSelect1 === 'usLayout flagHighlighted' ?
			
			<div className="row1">
			<div className="mainKey" id="Backquote" val="ˋ" secval="~">
			~<br />
			{"`"}
			</div>
			<div className="mainKey" id="Digit1" val="1" secval="!">
			!<br/>
			1
			</div>
			<div className="mainKey" id="Digit2" val="2" secval='@'>
			@<hr/>
			2
			</div>
			<div className="mainKey" id="Digit3" val="3" secval="#">
			#<br/>
			3
			</div>
			<div className="mainKey" id="Digit4" val="4" secval="$">
			$<hr/>
			4
			</div>
			<div className="mainKey" id="Digit5" val="5" secval="%">
			%<br/>
			5
			</div>
			<div className="mainKey" id="Digit6" val="6" secval="^">
			^<br/>
			6
			</div>
			<div className="mainKey" id="Digit7" val="7" secval="&">
			&<br/>
			7
			</div>
			<div className="mainKey" id="Digit8" val="8" secval="*">
			*<br/>
			8
			</div>
			<div className="mainKey" id="Digit9" val="9" secval="(">
			(<br/>
			9
			</div>
			<div className="mainKey" id="Digit0" val="0" secval=")">
			)<br/>
			0
			</div>
			<div className="mainKey" id="Minus" val="-" secval="_">
			_<br/>
			-
			</div>
			<div className="mainKey" id="Equal" val="=" secval="+">
			+<hr/>
			=
			</div>
			<div className="doubleKey" id="Backspace" val="null" secval="null">
			&larr;	<br/>
				<br/>
			</div>
			</div>
			:
			<div className="row1">
			<div className="mainKey" id="Backquote" val="ˋ" secval="¬">
			¬<br/>
			{"`"}
			</div>
			<div className="mainKey" id="Digit1" val="1" secval="!">
			!<br/>
			1
			</div>
			<div className="mainKey" id="Digit2" val="2" secval='"'>
			"<br/>
			2
			</div>
			<div className="mainKey" id="Digit3" val="3" secval="£">
			£<hr/>
			3
			</div>
			<div className="mainKey" id="Digit4" val="4" secval="$">
			$<br/>
			4
			</div>
			<div className="mainKey" id="Digit5" val="5" secval="%">
			%<br/>
			5
			</div>
			<div className="mainKey" id="Digit6" val="6" secval="^">
			^<br/>
			6
			</div>
			<div className="mainKey" id="Digit7" val="7" secval="&">
			&<br/>
			7
			</div>
			<div className="mainKey" id="Digit8" val="8" secval="*">
			*<historyr/>
			8
			</div>
			<div className="mainKey" id="Digit9" val="9" secval="(">
			(<br/>
			9
			</div>
			<div className="mainKey" id="Digit0" val="0" secval=")">
			)<hr/>
			0
			</div>
			<div className="mainKey" id="Minus" val="-" secval="_">
			_<br/>
			-
			</div>
			<div className="mainKey" id="Equal" val="=" secval="+">
			+<br/>
			=
			</div>
			<div className="doubleKey" id="Backspace" val="null" secval="null">
			&larr;	<br/>
				<br/>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		flagSelect1: state.flagSelect1,
		flagSelect2: state.flagSelect2

	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		typeAdd: (value) => {dispatch({type: 'TYPEADD', value: value})},
		deleteChar: () => {dispatch({type: 'DELETE'})},
		classChange: (id, capsDown) => {dispatch({type: 'PRESSED', id: id, capsDown: capsDown})},
		classChangeOff: (id, capsDown) => {dispatch({type: 'RELEASED', id: id, capsDown: capsDown})}
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row1);