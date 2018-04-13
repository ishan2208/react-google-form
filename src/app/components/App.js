import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import {Home} from './Home';
import {SurveyDataList} from "./SurveyDataList";
import PageNotFound from "./PageNotFound";

export class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Redirect from="/" exact to="/home"/>
					<Route path="/home" exact component={Home}/>
					<Route path="/surveyData" exact component={SurveyDataList}/>
					<Route path="/404" component={PageNotFound}/>
					<Redirect to="/404"/>
				</Switch>
			</BrowserRouter>
		);
	}
}
