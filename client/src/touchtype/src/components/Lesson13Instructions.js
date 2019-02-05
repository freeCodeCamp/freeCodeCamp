import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson13Instructions extends Component {
	
	
	render() {
		
	
	let lesson13 = 'Use left index for keys 4 and 5, right index for keys 6 and 7, and right middle finger for key 8.';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 13</h6>
			<article>
			{lesson13}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "grey"}}>1</div>
			<div style={{backgroundColor: "grey"}}>2</div>
			<div style={{backgroundColor: "grey"}}>3</div>
			<div style={{backgroundColor: "green"}}>4</div>
			<div style={{backgroundColor: "green"}}>5</div>
			<div style={{backgroundColor: "yellow"}}>6</div>
			<div style={{backgroundColor: "yellow"}}>7</div>
			<div style={{backgroundColor: "yellow"}}>8</div>
			<div style={{backgroundColor: "grey"}}>9</div>
			<div style={{backgroundColor: "grey"}}>0</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "grey"}}>L5</div>
			<div style={{backgroundColor: "grey"}}>L4</div>
			<div style={{backgroundColor: "grey"}}>L3</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R3</div>
			<div style={{backgroundColor: "grey"}}>R4</div>
			<div style={{backgroundColor: "grey"}}>R5</div>
		
			</div>
			
		
			
			</div>
			</div>
		)
	}
}
	
const mapStateToProps = (state) => {
	return {
		activeLesson: state.activeLesson,
		lessonKeys: state.lessonKeys
		
	
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
	
	
	
	
	}	
	
	
	
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson13Instructions);