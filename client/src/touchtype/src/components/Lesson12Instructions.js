import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson12Instructions extends Component {
	
	
	render() {
		
	
	let lesson12 = 'By now you should have an idea which fingers to use for the number keys. Left(pinky, ring, middle) for 1,2,3 and Right(ring, pinky) for 9 and 0';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 12</h6>
			<article>
			{lesson12}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>1</div>
			<div style={{backgroundColor: "green"}}>2</div>
			<div style={{backgroundColor: "green"}}>3</div>
			<div style={{backgroundColor: "grey"}}>4</div>
			<div style={{backgroundColor: "grey"}}>5</div>
			<div style={{backgroundColor: "grey"}}>6</div>
			<div style={{backgroundColor: "grey"}}>7</div>
			<div style={{backgroundColor: "grey"}}>8</div>
			<div style={{backgroundColor: "yellow"}}>9</div>
			<div style={{backgroundColor: "yellow"}}>0</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
			<div style={{backgroundColor: "aliceblue"}}>L4</div>
			<div style={{backgroundColor: "aliceblue"}}>L3</div>
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
			<div style={{backgroundColor: "grey"}}>R3</div>
			<div style={{backgroundColor: "aliceblue"}}>R4</div>
			<div style={{backgroundColor: "aliceblue"}}>R5</div>
		
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson12Instructions);