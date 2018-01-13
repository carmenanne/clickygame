import React from "react";
import "./HuskyCard.css";

const HuskyCard = props => (
	<div className="card">
		<div className="img-container">
			<span className="click" onClick={() => props.shuffleDogs(props.id)}>
				<img alt="cute husky" src={props.image} />
			</span>
		</div>
	</div>		
);

export default HuskyCard;