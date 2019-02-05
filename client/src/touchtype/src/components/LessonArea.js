import React, { Component } from 'react';
import { connect } from 'react-redux';



class LessonArea extends Component {
	
	startLesson = (e) => {
		
		let lessonNumber = e.target.id;
		
		let keys = e.target.dataset.keys || 'Space';
		keys = keys.split(',');

		setTimeout(()=> {
		this.props.startLesson(lessonNumber, keys);
		}, 500)
	}
	
	render() {
		
		const lessonAreaDisplay = document.getElementById("lessonPanel");
        setTimeout(()=> {
             lessonAreaDisplay.style.visibility = 'visible';
        }, 100);
		
		let lessonAreaClass = this.props.lessonsActive ? 'lessonArea animated bounceInDown' : 'lessonArea animated bounceOutUp';
		
      
		return (
		this.props.flagSelect1 === 'usLayout flagHighlighted' ?
		<section className={lessonAreaClass} id="lessonPanel" ref="lessonMain">
			
			<div id="lessonSetOne">
			
			
		
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson1" data-keys="KeyF,KeyJ,KeyG,KeyH,Space" onClick={this.startLesson}>LESSON 1</h5>
			<h4>f, j, g, h</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson2" data-keys="KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,Space" onClick={this.startLesson}>LESSON 2</h5>
			<h4>a, s, d, k , l & ;</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson3" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,Space" onClick={this.startLesson}>LESSON 3</h5>
			<h4>Home Row (Row 3)</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson4" data-keys="KeyR,KeyT,KeyY,KeyU,KeyI,Space" onClick={this.startLesson}>LESSON 4</h5>
			<h4>r, t, y, u & i</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson5" data-keys="KeyQ,KeyW,KeyE,KeyO,KeyP,Space" onClick={this.startLesson}>LESSON 5</h5>
			<h4>q, w, e, o & p</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson6" data-keys="KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,Space" onClick={this.startLesson}>LESSON 6</h5>
			<h4>Row 2</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson7" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,Space" onClick={this.startLesson}>LESSON 7</h5>
			<h4>Row 2 & Row 3</h4></div>		
			</div>
			
			
			<div id="lessonSetTwo">
			
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson8" data-keys="KeyV,KeyB,KeyN,KeyM,Space" onClick={this.startLesson}>LESSON 8</h5>
			<h4>v, b, n & m</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson9" data-keys="KeyZ,KeyX,KeyC,Comma,Period,Slash,Space" onClick={this.startLesson}>LESSON 9</h5>
			<h4>z, x, c, ., comma & /</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson10" data-keys="KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Space" onClick={this.startLesson}>LESSON 10</h5>
			<h4>Row 4</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson11" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Space" onClick={this.startLesson}>LESSON 11</h5>
			<h4>Rows 2, 3, 4</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson12" data-keys="Digit1,Digit2,Digit3,Digit9,Digit0,Space" onClick={this.startLesson}>LESSON 12</h5>
			<h4>Numbers 1, 2, 3, 9, 0</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson13" data-keys="Digit4,Digit5,Digit6,Digit7,Digit8,Space" onClick={this.startLesson}>LESSON 13</h5>
			<h4>Numbers 4, 5, 6, 7, 8</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson14" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Digit1,Digit2,Digit3,Digit9,Digit0,Digit4,Digit5,Digit6,Digit7,Digit8,Space" onClick={this.startLesson}>LESSON 14</h5>
			<h4>Rows 1, 2, 3, 4</h4></div>	
			</div>
		
			
			<div id="lessonSetThree">
				
		
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson15" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Digit1,Digit2,Digit3,Digit9,Digit0,Digit4,Digit5,Digit6,Digit7,Digit8,ShiftLeft,ShiftRight,Space" onClick={this.startLesson}>LESSON 15</h5>
			<h4>Capital Letters</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson16" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,ShiftLeft,ShiftRight,Period,Space" onClick={this.startLesson}>LESSON 16</h5>
			<h4>Words words words..</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson17" data-keys="Comma,Period,Slash,Semicolon,BracketLeft,BracketRight,Quote,ShiftLeft,ShiftRight,IntlBackslash,Space" onClick={this.startLesson}>LESSON 17</h5>
				<h4>Symbols {"[] {} <> ? ' : \\"}  </h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson18" data-keys="Digit1,Digit2,Digit3,Digit8,Digit6,Digit9,Digit0,Digit7,Digit4,Digit5,ShiftLeft,ShiftRight,Space" onClick={this.startLesson}>LESSON 18</h5>
			<h4>Symbols {'! @ * ^ ( ) & $ % #'}</h4></div>
				
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson19" data-keys="Backquote,IntlBackslash,Minus,Equal,Quote,ShiftLeft,ShiftRight,Space" onClick={this.startLesson}>LESSON 19</h5>
			<h4>Symbols {'` _ - + = | " ~'}</h4></div>
			
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson20" data-keys="Comma,Period,Slash,Semicolon,BracketLeft,BracketRight,Quote,ShiftLeft,ShiftRight,IntlBackslash,Digit1,Digit2,Digit3,Digit8,Digit6,Digit9,Digit0,Digit7,Digit4,Digit5,Backquote,Minus,Equal,Quote,Space" onClick={this.startLesson}>LESSON 20</h5>
			<h4>All Symbols</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson21" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Digit1,Digit2,Digit3,Digit9,Digit0,Digit4,Digit5,Digit6,Digit7,Digit8,BracketLeft,BracketRight,Quote,ShiftLeft,ShiftRight,IntlBackslash,Backquote,Minus,Equal,Space" onClick={this.startLesson}>LESSON 21</h5>
			<h4>Full Keyboard</h4></div>	
			</div>
				
				
			
			
		
		</section>
		:
			
		<section className={lessonAreaClass} id="lessonPanel" ref="lessonMain">
			
			<div id="lessonSetOne">
			
			
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson1" data-keys="KeyF,KeyJ,KeyG,KeyH,Space" onClick={this.startLesson}>LESSON 1</h5>
			<h4>f, j, g, h</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson2" data-keys="KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,Space" onClick={this.startLesson}>LESSON 2</h5>
			<h4>a, s, d, k , l & ;</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson3" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,Space" onClick={this.startLesson}>LESSON 3</h5>
			<h4>Home Row (Row 3)</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson4" data-keys="KeyR,KeyT,KeyY,KeyU,KeyI,Space" onClick={this.startLesson}>LESSON 4</h5>
			<h4>r, t, y, u & i</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson5" data-keys="KeyQ,KeyW,KeyE,KeyO,KeyP,Space" onClick={this.startLesson}>LESSON 5</h5>
			<h4>q, w, e, o & p</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson6" data-keys="KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,Space" onClick={this.startLesson}>LESSON 6</h5>
			<h4>Row 2</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson7" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,Space" onClick={this.startLesson}>LESSON 7</h5>
			<h4>Row 2 & Row 3</h4></div>		
			</div>
			
		
			<div id="lessonSetTwo">
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson8" data-keys="KeyV,KeyB,KeyN,KeyM,Space" onClick={this.startLesson}>LESSON 8</h5>
			<h4>v, b, n & m</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson9" data-keys="KeyZ,KeyX,KeyC,Comma,Period,Slash,Space" onClick={this.startLesson}>LESSON 9</h5>
			<h4>z, x, c, ., comma & /</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson10" data-keys="KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Space" onClick={this.startLesson}>LESSON 10</h5>
			<h4>Row 4</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson11" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Space" onClick={this.startLesson}>LESSON 11</h5>
			<h4>Rows 2, 3, 4</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson12" data-keys="Digit1,Digit2,Digit3,Digit9,Digit0,Space" onClick={this.startLesson}>LESSON 12</h5>
			<h4>Numbers 1, 2, 3, 9, 0</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson13" data-keys="Digit4,Digit5,Digit6,Digit7,Digit8,Space" onClick={this.startLesson}>LESSON 13</h5>
			<h4>Numbers 4, 5, 6, 7, 8</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson14" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Digit1,Digit2,Digit3,Digit9,Digit0,Digit4,Digit5,Digit6,Digit7,Digit8,Space" onClick={this.startLesson}>LESSON 14</h5>
			<h4>Rows 1, 2, 3, 4</h4></div>	
			</div>
		
		
			<div id="lessonSetThree">
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson15" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Digit1,Digit2,Digit3,Digit9,Digit0,Digit4,Digit5,Digit6,Digit7,Digit8,ShiftLeft,ShiftRight,Space" onClick={this.startLesson}>LESSON 15</h5>
			<h4>Capital Letters</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson16" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,ShiftLeft,ShiftRight,Period,Space" onClick={this.startLesson}>LESSON 16</h5>
			<h4>Words words words..</h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson17" data-keys="Comma,Period,Slash,Semicolon,BracketLeft,BracketRight,Quote,ShiftLeft,ShiftRight,IntlBackslash,Space" onClick={this.startLesson}>LESSON 17</h5>
				<h4>Symbols {"[] {} <> ? ' : \\"}  </h4></div>
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson18" data-keys="Digit1,Digit2,Digit3,Digit8,Digit6,Digit9,Digit0,Digit7,Digit4,Digit5,ShiftLeft,ShiftRight,Space" onClick={this.startLesson}>LESSON 18</h5>
			<h4>Symbols {'! " * ^ ( ) & $ % £'}</h4></div>
				
			
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson19" data-keys="Backquote,IntlBackslash,Minus,Equal,Quote,Backslash,ShiftLeft,ShiftRight,Space" onClick={this.startLesson}>LESSON 19</h5>
			<h4>Symbols {'` ¬ _ - + = | @ ~ #'}</h4></div>
			
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson20" data-keys="Comma,Period,Slash,Semicolon,BracketLeft,BracketRight,Quote,ShiftLeft,ShiftRight,IntlBackslash,Digit1,Digit2,Digit3,Digit8,Digit6,Digit9,Digit0,Digit7,Digit4,Digit5,Backquote,IntlBackslash,Minus,Equal,Quote,Backslash,Space" onClick={this.startLesson}>LESSON 20</h5>
			<h4>All Symbols</h4></div>
				
			<div className="lessonContainer" id="lessonDiv">
			<h5 className="lessonTitle" id="lesson21" data-keys="KeyF,KeyG,KeyH,KeyJ,KeyA,KeyS,KeyD,KeyK,KeyL,Semicolon,KeyQ,KeyW,KeyE,KeyO,KeyP,KeyR,KeyT,KeyY,KeyU,KeyI,KeyV,KeyB,KeyN,KeyM,KeyZ,KeyX,KeyC,Comma,Period,Slash,Digit1,Digit2,Digit3,Digit9,Digit0,Digit4,Digit5,Digit6,Digit7,Digit8,BracketLeft,BracketRight,Quote,ShiftLeft,ShiftRight,IntlBackslash,Backquote,Minus,Equal,Backslash,Space" onClick={this.startLesson}>LESSON 21</h5>
			<h4>Full Keyboard</h4></div>
				
			</div>
				
				
			
			
		
		</section>	
		
		)
	}
}

const mapStateToProps = (state) => {
	return {
		lessonsActive: state.displayLessonsMenu,
		flagSelect1: state.flagSelect1,
		flagSelect2: state.flagSelect2
	
	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        startLesson: (lessonNumber,keys) => {dispatch({type: 'STARTLESSON', lessonNumber: lessonNumber, keys: keys})},
		
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonArea);