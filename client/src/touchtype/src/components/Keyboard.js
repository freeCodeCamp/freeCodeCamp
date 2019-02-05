import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import Row5 from './Row5';
import Draggable from 'react-draggable';
class Keyboard extends Component {
	
	
	render() {
			let capOnoff = this.props.capsOnOff ? 'capsLight1On' : 'capsLight1';
			let keyboardClass = this.props.keyboardIsOn ? 'keyboard' : 'keyboardOff';
		return (
            <Draggable>
		 <div className={keyboardClass}>
			<hr className="borderLines" />
			<hr className="borderLines" />
			<span className="h7" style={{color: 'white'}}>FILCO</span>
			<div className={capOnoff} id="capsLight1"></div>
			<div className="capsLight2" id="capsLight2"></div>
			<Row1 />
			<Row2 />
			<Row3 />
			<Row4 />
			<Row5 />
			<hr className="borderLines" />
			
		 </div>
			</Draggable>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		capsOnOff: state.capsOnOff,
	    flagSelect3: state.flagSelect3,
		keyboardIsOn: state.keyboardIsOn
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
       
	
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);