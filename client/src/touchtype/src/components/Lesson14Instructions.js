import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson14Instructions extends Component {
	
	
	render() {
		
	
	let lesson14 = 'You should now be comfortable with all the main keys on the keyboard as well as some basic symbols like Comma, Period, Semi-colon and Forward slash.';

	

	
		return (
		
			
		<div className="instructionArea">
			<h6>LESSON 14</h6>
			<article>
			{lesson14}
			</article>
			<div className="chart" style={{height:  '240px'}}>
			<div className="col">
			<div style={{backgroundColor: "green"}}>1</div>
			<div style={{backgroundColor: "green"}}>2</div>
			<div style={{backgroundColor: "green"}}>3</div>
			<div style={{backgroundColor: "green"}}>4</div>
			<div style={{backgroundColor: "green"}}>5</div>
			<div style={{backgroundColor: "yellow"}}>6</div>
			<div style={{backgroundColor: "yellow"}}>7</div>
			<div style={{backgroundColor: "yellow"}}>8</div>
			<div style={{backgroundColor: "yellow"}}>9</div>
			<div style={{backgroundColor: "yellow"}}>0</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
			<div style={{backgroundColor: "aliceblue"}}>L4</div>
			<div style={{backgroundColor: "aliceblue"}}>L3</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R3</div>
			<div style={{backgroundColor: "aliceblue"}}>R4</div>
			<div style={{backgroundColor: "aliceblue"}}>R5</div>
		
			</div>
			
			
			
			<div className="col">
			<div style={{backgroundColor: "green"}}>Q</div>
			<div style={{backgroundColor: "green"}}>W</div>
			<div style={{backgroundColor: "green"}}>E</div>
			<div style={{backgroundColor: "green"}}>R</div>
			<div style={{backgroundColor: "green"}}>T</div>
			<div style={{backgroundColor: "yellow"}}>Y</div>
			<div style={{backgroundColor: "yellow"}}>U</div>
			<div style={{backgroundColor: "yellow"}}>I</div>
			<div style={{backgroundColor: "yellow"}}>O</div>
			<div style={{backgroundColor: "yellow"}}>P</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
			<div style={{backgroundColor: "aliceblue"}}>L4</div>
			<div style={{backgroundColor: "aliceblue"}}>L3</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R3</div>
			<div style={{backgroundColor: "aliceblue"}}>R4</div>
			<div style={{backgroundColor: "aliceblue"}}>R5</div>
		
			</div>
			
			<div className="col">
			<div style={{backgroundColor: "green"}}>A</div>
			<div style={{backgroundColor: "green"}}>S</div>
			<div style={{backgroundColor: "green"}}>D</div>
			<div style={{backgroundColor: "green"}}>F</div>
			<div style={{backgroundColor: "green"}}>G</div>
			<div style={{backgroundColor: "yellow"}}>H</div>
			<div style={{backgroundColor: "yellow"}}>J</div>
			<div style={{backgroundColor: "yellow"}}>K</div>
			<div style={{backgroundColor: "yellow"}}>L</div>
			<div style={{backgroundColor: "yellow"}}>;</div>
			</div>
			<div className="col">
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
			<div style={{backgroundColor: "aliceblue"}}>L4</div>
			<div style={{backgroundColor: "aliceblue"}}>L3</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R3</div>
			<div style={{backgroundColor: "aliceblue"}}>R4</div>
			<div style={{backgroundColor: "aliceblue"}}>R5</div>
			</div>
			
			<div className="col">
			<div style={{backgroundColor: "green"}}>Z</div>
			<div style={{backgroundColor: "green"}}>X</div>
			<div style={{backgroundColor: "green"}}>C</div>
			<div style={{backgroundColor: "green"}}>V</div>
			<div style={{backgroundColor: "green"}}>B</div>
			<div style={{backgroundColor: "yellow"}}>N</div>
			<div style={{backgroundColor: "yellow"}}>M</div>
			<div style={{backgroundColor: "yellow"}}>,</div>
			<div style={{backgroundColor: "yellow"}}>.</div>
			<div style={{backgroundColor: "yellow"}}>/</div>
			</div>
			<div className="col">
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
			<div style={{backgroundColor: "aliceblue"}}>L4</div>
			<div style={{backgroundColor: "aliceblue"}}>L3</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R3</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson14Instructions);