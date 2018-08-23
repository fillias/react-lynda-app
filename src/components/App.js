/* State */

import React, { Component } from 'react';

import {Menu} from './Menu';
import {SkiDayList} from './SkiDayList';
import {SkiDayCount} from './SkiDayCount';
import {AddDayForm} from './AddDayForm';

class App extends Component {

	constructor (props) {
		console.log('app.js props:', props);
		super();

		this.state = {
			allSkiDays: 
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
	}
	
	/* spocita dny */
	countDays (filter) {
		return this.state.allSkiDays.filter(function(day){
			if (filter) {
				// console.log('filter: ', filter);
				// console.log('day[filter]: ', day[filter]);
				return day[filter];
			} else {
				// console.log('day: ', day);
				return day;
			}
		}).length;
	}

	render () {
		return (
			<div className="app">
			<Menu />
			{console.log('v render funkci - this.props: ', this.props)}
			{(this.props.location.pathname === "/") ?
			  	<SkiDayCount total={this.countDays()}
							 powder={this.countDays("powder")}
							 backcountry={this.countDays("backcountry")}
				/> 
				:
			 (this.props.location.pathname === "/add-day") ?
			 	<AddDayForm /> 
			 	:
			 	<SkiDayList days={this.state.allSkiDays}
							filter = {this.props.match.params.filter}
			 	/>				 
			}
					
			</div>
			)
	}
}


export {App};


