import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row3 extends Component {
	
	
	
	
	

	
	render() {
		
		
		
		let capOnoff = this.props.capsOnOff ? 'doubleKeyandAbitOn' : 'doubleKeyandAbit'
		
		return (
			this.props.flagSelect1 === 'usLayout flagHighlighted' ?
			<div className="row3">
			<div className={capOnoff} id="CapsLock">
			 <br />
			caps 
			</div>
			<div className="mainKey" id="KeyA" val="a" secval="A">
			A<br />
			  <br />
			</div>
			
			<div className="mainKey" id="KeyS" val="s" secval="S">
			S<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyD" val="d" secval="D">
			D<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyF" val="f" secval="F">
			F<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyG" val="g" secval="G">
			G<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyH" val="h" secval="H">
			H<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyJ" val="j" secval="J">
			J<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyK" val="k" secval="K">
			K<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyL" val="l" secval="L">
			L<br/>
			 <br />	 	
			</div>
			<div className="mainKey" id="Semicolon" val=";" secval=":">
			:<br/>
			;
			</div>
			<div className="mainKey" id="Quote" val="'" secval='"'>
			{'"'}<br/>
			{"'"}
			</div>
			<div className="usEnter" id="Enter" val="&#13;&#13;" secval="&#13;">
			<small>ENTER</small><br/>&crarr;
		
			</div>
			
			
			</div>
			
			
			:
			
			<div className="row3">
			<div className={capOnoff} id="CapsLock">
			 <br />
			caps 
			</div>
			<div className="mainKey" id="KeyA" val="a" secval="A">
			A<br />
			  <br />
			</div>
			
			<div className="mainKey" id="KeyS" val="s" secval="S">
			S<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyD" val="d" secval="D">
			D<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyF" val="f" secval="F">
			F<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyG" val="g" secval="G">
			G<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyH" val="h" secval="H">
			H<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyJ" val="j" secval="J">
			J<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyK" val="k" secval="K">
			K<br/>
			<br />
			</div>
			<div className="mainKey" id="KeyL" val="l" secval="L">
			L<br/>
			 <br />	 	
			</div>
			<div className="mainKey" id="Semicolon" val=";" secval=":">
			:<br/>
			;
			</div>
			<div className="mainKey" id="Quote" val="'" secval="@">
			@<br/>
			{"'"}
			</div>
			<div className="mainKey specialKeyRule" id="Backslash" val="#" secval="~">
			~<br/>
			{'#'}
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
		
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row3);