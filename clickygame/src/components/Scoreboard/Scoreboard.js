import React from "react";
import "./Scoreboard.css";

class Scoreboard extends React.Component {
	state = {
		count: 0,
		high_score: ""
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1});
	};

	render(){
		return (
			<div>
				Current Score: {this.state.count}
				<br></br>
				High Score: {this.state.high_score}
			</div>
		)
	}
}

export default Scoreboard;