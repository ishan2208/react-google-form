import React from "react";

export class Form extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userDepartment:"",
			userDesignation:"",
			organisationRate:1,
			ceoRate:1,
			adviceText:"",
			loggedInEmailId:props.loggedInID,
			loggedInUserName:props.loggedInName
		}
	}

	onChange(event){
		this.setState({
			[event.target.name]:event.target.value
		})
	}

	onReset(event){
		event.preventDefault();
		this.setState({
			userDepartment:"",
			userDesignation:"",
			organisationRate:1,
			ceoRate:1,
			adviceText:""
		})
	}


	onSubmit(event){
		event.preventDefault();
		console.log(this.state);
		fetch("http://localhost:8081/addData",{
			method:'post',
			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
			body:JSON.stringify(this.state)
		}).then(response=>response.json()).then(data=>console.log(data));
		
		alert("Data Submitted Successfully");

		
		this.setState({
			userDepartment:"",
			userDesignation:"",
			organisationRate:1,
			ceoRate:1,
			adviceText:""
		})
	}
	render(){
		return(
			<div className="formPosition">
				<form onSubmit={(event)=>this.onSubmit(event)}>
					<div className="form-group">
						<label for="dept">User Department</label>
						<input name="userDepartment" 
							type="text" 
							className="form-control maxWidth" 
							id="dept" 
							placeholder="Max 50 Characters" 
							value={this.state.userDepartment} 
							onChange={(event)=>this.onChange(event)} 
							required="required" 
							maxlength="50"/>
					</div>

					<div className="form-group">
						<label for="userDesignation">User Designation</label>
						<input 
							name="userDesignation"
						 	type="text" 
						 	className="form-control" 
						 	id="userDesignation" 
						 	placeholder="Max 50 Characters" 
						 	value={this.state.userDesignation}
						 	onChange={(event)=>this.onChange(event)} 
						 	required 
						 	maxlength="50"/>
					</div>

					<div className="form-group">
						<label for="rateOrganization">Rate your organization</label>
						<select name="organisationRate" 
							className="form-control" 
							id="rateOrganization" 
							value={this.state.organisationRate}
							onChange={(event)=>this.onChange(event)}>
							    <option value="1">1</option>
							    <option value="2">2</option>
							    <option value="3">3</option>
							    <option value="4">4</option>
							    <option value="5">5</option>
						</select>
					</div>

					<div className="form-group">
						<label for="rateCEO">Rate your CEO</label>
						<select name="ceoRate" 
							className="form-control" 
							id="rateCEO" 
							value={this.state.ceoRate}
							onChange={(event)=>this.onChange(event)}>
							    <option value="1">1</option>
							    <option value="2">2</option>
							    <option value="3">3</option>
							    <option value="4">4</option>
							    <option value="5">5</option>
						</select>
					</div>

					<div className="form-group">
						<label for="adviceText">Advice to Management</label>
						<textarea name="adviceText" 
							id="adviceText" 
							className="form-control" 
							placeholder="Optional" 
							value={this.state.adviceText}
							onChange={(event)=>this.onChange(event)} 
							maxlength="1000"/>
					</div>

					<div className="form-group">
						<input type="submit" value="Submit" className="btn btn-primary button"/>
						<button onClick={(event)=>this.onReset(event)} className="btn btn-primary">Reset</button>
					</div>
				</form>
			</div>
		);
	}
}