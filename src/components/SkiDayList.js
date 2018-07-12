import React from 'react';
//import {SkiDayCount} from './SkiDayCount';

import {SkiDayRow} from './SkiDayRow';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';



/* using spread */
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
								{...day}	
														
					/>
					)}
			</tbody>
		</table>

)





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