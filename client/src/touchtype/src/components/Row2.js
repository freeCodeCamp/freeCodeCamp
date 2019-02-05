import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row2 extends Component {
	

	
	displayValue = (e) => {
	
		this.props.capsOnOff || this.props.shiftOnOff ?
			
		this.props.typeAdd(e.target.getAttribute('secval'))
		:
		this.props.typeAdd(e.target.getAttribute('val'));
	}
	

	

	
	render() {

		return (
			this.props.flagSelect1 === 'usLayout flagHighlighted' ?
			<div className="row2">
			<div className="usTabKey" id="Tab" val="   " secval="   ">
			 tab<br/>
				<br/> 
			</div>
			<div className="mainKey" id="KeyQ" val="q" secval="Q">
			Q<br/>
			  <br/>
			</div>
			<div className="mainKey" id="KeyW" val="w" secval="W">
			W<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyE" val="e" secval="E">
			E<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyR" val="r" secval="R">
			R<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyT" val="t" secval="T">
			T<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyY" val="y" secval="Y">
			Y<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyU" val="u" secval="U">
			U<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyI" val="i" secval="I">
			I<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyO" val="o" secval="O">
			O<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyP" val="p" secval="P">
			P<br/>
			<br/>
			</div>
			<div className="mainKey" id="BracketLeft" val="[" secval="{">
			{'{'}<br/>
			{'['}
			</div>
			<div className="mainKey" id	="BracketRight" val="]" secval="}">
			{'}'}<br/>
			{']'}
			</div>
			<div className="usBackSlash" id="IntlBackslash" val="\" secval="|">
			  	|  <br/>
				\<br/>
			</div>
			
			
			</div>
			
			:
			
			<div className="row2">
			<div className="doubleKey" id="Tab" val="   " secval="   ">
			 tab<br/>
				<br/> 
			</div>
			<div className="mainKey" id="KeyQ" val="q" secval="Q">
			Q<br/>
			  <br/>
			</div>
			<div className="mainKey" id="KeyW" val="w" secval="W">
			W<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyE" val="e" secval="E">
			E<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyR" val="r" secval="R">
			R<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyT" val="t" secval="T">
			T<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyY" val="y" secval="Y">
			Y<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyU" val="u" secval="U">
			U<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyI" val="i" secval="I">
			I<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyO" val="o" secval="O">
			O<br/>
			<br/>
			</div>
			<div className="mainKey" id="KeyP" val="p" secval="P">
			P<br/>
			<br/>
			</div>
			<div className="mainKey" id="BracketLeft" val="[" secval="{">
			{'{'}<br/>
			{'['}
			</div>
			<div className="mainKey" id	="BracketRight" val="]" secval="}">
			{'}'}<br/>
			{']'}
			</div>
			<div className="enterKey" id="Enter" val="&#13;&#13;" secval="&#13;">
			  	&crarr;  <br/>
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
        classChange: (id) => {dispatch({type: 'PRESSED', id: id})},
		classChangeOff: (id) => {dispatch({type: 'RELEASED', id: id})},
		typeAdd: (value) => {dispatch({type: 'TYPEADD', value: value})}
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row2);