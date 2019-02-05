import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row4 extends Component {
	
	
	displayValue = (e) => {
	
		this.props.capsOnOff || this.props.shiftOnOff ?
			
		this.props.typeAdd(e.target.getAttribute('secval'))
		:
		this.props.typeAdd(e.target.getAttribute('val'));
	}
		

	
	
	
	
	render() {
		
		let shiftHalfOnoff = this.props.shiftOnOff ? 'shiftHalfOn' : 'shiftHalf';
		let shiftFullOnoff = this.props.shiftOnOff ? 'shiftFullOn' : 'shiftFull';
        let shiftFullOnoffUSLeft = this.props.shiftOnOff ? 'shiftFullOnUSLeft' : 'shiftFullUSLeft'
		return (
            this.props.flagSelect1 === 'usLayout flagHighlighted' ?
			<div className="row4">
			<div className={shiftFullOnoffUSLeft}  id="ShiftLeft" val="null" secval="null">
			 <br />
			shift 
			</div>
			
			<div className="mainKey" id="KeyZ" val="z" secval="Z">
			Z<br/>
			 <br />	 	
			</div>
			<div className="mainKey" id="KeyX" val="x" secval="X">
			X<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyC" val="c" secval="C">
			C<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyV" val="v" secval="V">
			V<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyB" val="b" secval="B">
			B<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyN" val="n" secval="N">
			N<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyM" val="m" secval="M">
			M<br/>
			<br />
			</div>
			<div className="mainKey" id="Comma" val="," secval="<">
			{'<'}<br/>
			 ,<br />
			</div>
			<div className="mainKey" id="Period" val="." secval=">">
			{'>'}<br/>
			.
			</div>
			<div className="mainKey" id="Slash" val="/" secval="?">
			?<br/>
			/
			</div>
			<div className={shiftFullOnoff} id="ShiftRight" val="null" secval="null">
			<br/>
			shift
			</div>
			
			
			</div>
            
            :
            
            <div className="row4">
			<div className={shiftHalfOnoff}  id="ShiftLeft" val="null" secval="null">
			 <br />
			shift 
			</div>
			<div className="mainKey" id="IntlBackslash" val="\" secval="|">
			|<br />
			\<br />
			</div>
			<div className="mainKey" id="KeyZ" val="z" secval="Z">
			Z<br/>
			 <br />	 	
			</div>
			<div className="mainKey" id="KeyX" val="x" secval="X">
			X<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyC" val="c" secval="C">
			C<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyV" val="v" secval="V">
			V<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyB" val="b" secval="B">
			B<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyN" val="n" secval="N">
			N<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyM" val="m" secval="M">
			M<br/>
			<br />
			</div>
			<div className="mainKey" id="Comma" val="," secval="<">
			{'<'}<br/>
			 ,<br />
			</div>
			<div className="mainKey" id="Period" val="." secval=">">
			{'>'}<br/>
			.
			</div>
			<div className="mainKey" id="Slash" val="/" secval="?">
			?<br/>
			/
			</div>
			<div className={shiftFullOnoff} id="ShiftRight" val="null" secval="null">
			<br/>
			shift
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

export default connect(mapStateToProps, mapDispatchToProps)(Row4);