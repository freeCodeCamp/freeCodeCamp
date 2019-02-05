import React, { Component } from 'react';
import { connect } from 'react-redux';
import MistakesCounter from './MistakesCounter';
import Clock from './Clock'
import WpmCounter from './WpmCounter';


class TimerFrame extends Component {
	
	
	render() {
		

	
	
		
		return (
			this.props.stringEnd === false ?
			<div className="timerContainer">
			<Clock />
			<WpmCounter/>
			<div className="charLength"><label>Total Characters: </label>{this.props.stringLength}</div>
			<MistakesCounter />
			</div>
			:
			<div className="timerContainer">
			<div className="clockDisplay" id="clock">{this.props.timevalue}</div>
			<div className="wpm"><label>Wpm: </label>{this.props.wpm}</div>
			<div className="charLength"><label>Total Characters: </label>{this.props.stringLength}</div>
			<MistakesCounter />
			</div>
		)
	}
}
	
const mapStateToProps = (state) => {
	return {
		timeOn: state.timeOn,
		stringLength: state.stringLength,
		timevalue: state.timevalue,
		stringEnd: state.stringEnd,
		wpm: state.wpm
	
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
	
	
	
	
	}	
	
	
	
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerFrame);