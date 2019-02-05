import React, { Component } from 'react';
import { connect } from 'react-redux';





class Clock extends Component {
	
	
	render() {
		
	let idArray = [];
	let startTimer = (display,sendfunction)=> {
		var seconds = 0;
    	var minutes =  '0' + Math.floor( seconds / 60 );
  let id =   setInterval(function () {
		
       if(seconds < 10) seconds = '0' + seconds;
		
		if(seconds === 60) {
			minutes = minutes < 10 ? '0' + ++minutes : ++minutes;
			seconds = '0' + 0;
		} 
		
        display.textContent = minutes + ":" + seconds;
	  	sendfunction(display.textContent)
      seconds++
    }, 1000);
		
		idArray.push(id);
		this.props.sendIntervalId(idArray);
}
		
		//if timer started start else display 00:00
		setTimeout(()=> {
			
		if(this.props.timeOn === true){	
		
			let clock = document.getElementById('clock');
			startTimer(clock, this.props.sendTimeValue);
			
		}
		else{
			
		let clock = document.getElementById('clock');	
			clock.textContent =  '00:00';
			
			
		}
		},200);	
		
	
	
		
		return (
		
		
			<div className="clockDisplay" id="clock"></div>
	
	
	
			
		
		)
	}
}
	
const mapStateToProps = (state) => {
	return {
		timeOn: state.timeOn,
		
		
		
	
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendIntervalId: (value) => {dispatch({type: 'INTERVALID', value: value})},
		sendTimeValue: (time) => {dispatch({type: 'SENDTIMEVALUE', time: time})}
	
	}	
	
	
	
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);