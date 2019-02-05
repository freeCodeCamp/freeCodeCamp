import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson8Instructions extends Component {
	
	
	render() {
		
	
	let lesson8 = 'We will begin learning Row 4. This Row includes the first symbols you have encountered so far. The Comma and the Period are on this row and obviously are important due to their frequent use. Here use  your left index finger for the V & B keys and right index finger for the N & M keys.';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 8</h6>
			<article>
			{lesson8}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "grey"}}>Z</div>
			<div style={{backgroundColor: "grey"}}>X</div>
			<div style={{backgroundColor: "grey"}}>C</div>
			<div style={{backgroundColor: "green"}}>V</div>
			<div style={{backgroundColor: "green"}}>B</div>
			<div style={{backgroundColor: "yellow"}}>N</div>
			<div style={{backgroundColor: "yellow"}}>M</div>
			<div style={{backgroundColor: "grey"}}>,</div>
			<div style={{backgroundColor: "grey"}}>.</div>
			<div style={{backgroundColor: "grey"}}>\/</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "grey"}}>L5</div>
			<div style={{backgroundColor: "grey"}}>L4</div>
			<div style={{backgroundColor: "grey"}}>L3</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "grey"}}>R3</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson8Instructions);