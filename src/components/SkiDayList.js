import React from 'react';
//import {SkiDayCount} from './SkiDayCount';
import { NavLink } from 'react-router-dom';
/* Proptypes checkuje typy promennych apod, validuje */
import PropTypes from 'prop-types';

import {SkiDayRow} from './SkiDayRow';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';



/* using spread */
export const SkiDayList = ({days, filter}) => {

console.log('filter: ', filter);
//console.log('days: ', days);
	// TODO, ve verzi 4 routeru to takhle nefunguje
	const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ? 
						days : days.filter(day => day[filter]);
	
	/* filteredlist podle toho na co kliknu */
	//const filteredList = (!filter || !filter.match(/powder|backcountry/)) ? days : days.filter( (day) => day[filter] );
	return (
		
		<div className="ski-day-list">
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>resort</th>
						<th>powder</th>
						<th>backcountry</th>
					</tr>
					<tr>
					<td colSpan={4}>
						<NavLink to="/list-days">
							All Days 
						</NavLink>
						<NavLink to="/list-days/powder">
							Powder Days 
						</NavLink>
						<NavLink to="/list-days/backcountry">
							Backcountry Days 
						</NavLink>
					</td>
				</tr>
				</thead>
				<tbody>
					{ 
						filteredDays.map( (day, i) =>  
						<SkiDayRow 	key = {i}
									{...day}	
															
						/>
						)}
				</tbody>
			</table>
		</div>
	)
}




SkiDayList.propTypes = {
	days: PropTypes.array.isRequired
}
/* pripadne lze i custom validace pres funkci:
SkiDayList.propTypes = {
	days: function (props) {
		if (!Array.isArray(props.days)) {
			return new Error ("SkiDayList ma byt array");
		} else {
			return null;
		}
	}
}


/*
export const SkiDayList = ({days}) => (
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>resort</th>
					<th>powder</th>
					<th>backcountry</th>
				</tr>
			</thead>
			<tbody>
				{ days.map( (day, i) =>  
					<SkiDayRow 	key = {i}
								resort = {day.resort}
								date = {day.date}	
								powder = {day.powder}
								backcountry = {day.backcountry}	
														
					/>
					)}
			</tbody>
		</table>

)
*/