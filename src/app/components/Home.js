import React from "react";
import {Form} from "./Form";
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { SurveyDataList } from "./SurveyDataList";
import {Link} from "react-router-dom";

import LoggedInDetail from './LoggedInDetails';

export class Home extends React.Component{

	constructor(){
		super();
		this.state={
			isLoggedIn:false,
			loggedInEmailId:"",
			loggedInUserName:""
		}
	}
	successResponseFromGoogle(response){
		console.log("logged In!",response);
		this.setState({
			isLoggedIn:true,
			loggedInEmailId:response.w3.U3,
			loggedInUserName:response.w3.ig
		})
	}

	errorResponseFromGoogle(error){
		console.log("error!",error);
		this.setState({
			isLoggedIn:false
		})
	}

	onGoogleLogout(response){
		console.log("Logout",response);
		this.setState({
			isLoggedIn:false,
			loggedInEmailId:""
		})
	}

	render(){
		var form;
		var googleLoginLogoutButton;
		var loggedInDetails;
		var showData;
		if(this.state.isLoggedIn){
			form = <Form loggedInID={this.state.loggedInEmailId} loggedInName={this.state.loggedInUserName}/>;
			googleLoginLogoutButton = 
					<div className="well"><GoogleLogout
								    buttonText="Logout"
								    onLogoutSuccess={(response)=>{this.onGoogleLogout(response)}}/></div>;
			loggedInDetails = <LoggedInDetail loggedInID={this.state.loggedInEmailId} loggedInName={this.state.loggedInUserName} className="moveRight"/>;
			showData="";
			
		}else{
			form = "";
			googleLoginLogoutButton = <div className="panel panel-default">
										<div className="panel-heading">Login to take survey</div>
										<div className="panel-body"><GoogleLogin
																	    clientId="773916631163-1saek3f7d2kafkcj36pjh8g0kr7m1r5m.apps.googleusercontent.com"
																	    buttonText="Login with Google"
																	    onSuccess={(response)=>{this.successResponseFromGoogle(response)}}
																	    onFailure={(error)=>{this.errorResponseFromGoogle(error)}}/>
										</div>
									</div>;
			showData= <div className="panel panel-default">
						<div className="panel-heading">See Filled data here</div>
						<div className="panel-body"><Link to="/surveyData"><button className="btn btn-primary">Show Survey Data</button></Link></div>
					</div>;
		}
		
		return(
			<div className="container-fluid">
				<div className="jumbotron">
					<h2>Employee Survey Form</h2>
				</div>
				<div>{loggedInDetails}</div>
				{googleLoginLogoutButton}
				{showData}
									
				
				{form}	
			</div>
		);
	}
}
