import React from "react";

const LoggedInDetail = (props) => {
	return(
		<div>
			<div>You are logged in as {props.loggedInID}</div>
			<div>Name:  {props.loggedInName}</div>
		</div>
	);
}

export default LoggedInDetail;