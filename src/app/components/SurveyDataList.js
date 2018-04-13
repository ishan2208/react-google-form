import React from "react";

export class SurveyDataList extends React.Component{

	constructor(){
		super();
		this.state={
			surverDataAvailable:false,
			surveyData:""
		}
	}

	componentDidMount(){
		console.log("component did mount");
		fetch("http://localhost:8081/getData").
			then(response=>response.json()).
			then(data=>{
				console.log(data);
				this.setState({
					surveyData : data.response,
					surverDataAvailable : true
				})
			});
	}

	render(){
		var tableData;
		var rows = [];
		
		if(this.state.surverDataAvailable){
			if(this.state.surveyData.length == 0){
				tableData=<div> No data present</div>;
			}else{
				for(let i=0;i<this.state.surveyData.length;i++){
				let row = this.state.surveyData[i];
				rows.push(<tr><td>{row.loggedInUserName}</td>
							<td className="columnWidth">{row.loggedInEmailId}</td>
							<td className="columnWidth">{row.userDepartment}</td>
							<td className="columnWidth">{row.userDesignation}</td>
							<td className="columnWidth">{row.organisationRate}</td>
							<td className="columnWidth">{row.ceoRate}</td>
							<td className="columnWidth">{row.adviceText}</td></tr>);
				}
				tableData = <tbody>
				      			{rows}
				    		</tbody>;
			}
			
		}else{
			tableData = <div>Loading data... Please wait..</div>
		}
		
		return(
			<div className="container-fluid">
				<table className="table table-striped tableWidth">
					 
					<thead>
				      <tr>
				        <th>Name</th>
				        <th>Email</th>
				        <th>User Department</th>
				        <th>User Designation</th>
				        <th>Organisation Rating</th>
				        <th>CEO Rating</th>
				        <th>Advice to Management</th>
				      </tr>
				    </thead>
				    {tableData}
				</table>
			</div>
		);
	}
}