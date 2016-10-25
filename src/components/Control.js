import React, { Component } from 'react';

export default class Control extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<button>+</button>
				<button>-</button>
				<button>Randomize Color</button>
			</div>
		);
	}	
}