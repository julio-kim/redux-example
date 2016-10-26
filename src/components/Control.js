import React, { Component, PropTypes } from 'react';

const propTypes = {
	onPlus: PropTypes.func.isRequired,
	onSubtract: PropTypes.func.isRequired,
	onRandomizeColor: PropTypes.func.isRequired,
}

export default class Control extends Component {
	
	render() {
		return (
			<div>
				<button onClick={this.props.onPlus}>+</button>
				<button onClick={this.props.onSubtract}>-</button>
				<button onClick={this.props.onRandomizeColor}>Randomize Color</button>
			</div>
		);
	}	
}

Control.propTypes = propTypes;