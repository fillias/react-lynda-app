/* Component neni nutny pokud pouzivam JSX */
import React from 'react';

import ReactDOM from 'react-dom';

//import {SkiDayCount} from './components/SkiDayCount';
import {App} from './components/App';
import {Whoops404} from './components/Whoops404';
//import {SkiDayList} from './components/SkiDayList';

/* router se stara o to co renderovat podle cesty v URL */
//import { Router } from 'react-router';
import {
  BrowserRouter as Router, Route, Link, Switch, BrowserHistory
} from 'react-router-dom'

// tohle pripadne kvuli 'nejakym' errorum
//window.React = React;



const { render } = ReactDOM;

// :filter jde pak do this.props.params.filter
render (<Router history={BrowserHistory} >
	<div>
		<Switch>
			<Route exact path ="/"  component={App}/>
			<Route path ="/list-days"  component={App}/>
			
			{/* TODO :filter ve verzi 4 takto nefunguje */}
			<Route path="/list-days/:filter"  component={App}/> 
			
			<Route path ="/add-day"  component={App}/>
			<Route  component={Whoops404}/>
		</Switch>
	</div>
		</Router>
	, document.getElementById('root'));



/* render App bez routeru */
//render (<App />, document.getElementById('root'));

/*
render(<SkiDayList days = {
			[
				{
					resort: "spindl",
					date: new Date('1/2/2017'),
					powder: true,
					backcountry: false
				},
				{
					resort: "arber",
					date: new Date('3/27/2017'),
					powder: false,
					backcountry: true
				},
				{
					resort: "rakous",
					date: new Date('1/20/2017'),
					powder: true,
					backcountry: false
				}
			]
		} 
	/>, 
	document.getElementById('root')
);

*/

/* SkiDayCount ty 'atributy' jsou klic v objektu 'props'  */

/*
render(<SkiDayCount total = {50}
					powder = {20}
					backcountry = {10}
					goal = {100} />, document.getElementById('root'));
*/

