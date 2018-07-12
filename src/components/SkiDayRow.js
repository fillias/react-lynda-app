import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

/* stateles component syntax, return je rovnou JSX component
   local methods musi byt mimo */

/* predava to rovnou props:
const SkiDayRow = (props) => (....
pak je potreba uvnitr delat props.powder apod...

nebo muzu rovnou destructuring: 
const SkiDayRow = ({date, resort, powder, backcountry}) => (....
*/
const SkiDayRow = ({date, resort, powder, backcountry}) => (
			<tr>
				<td>
					{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
				</td>
				<td>
					{resort}
				</td>
				<td>
					{(powder) ? <SnowFlake /> : null }
				</td>
				<td>
					{(backcountry) ? <Terrain /> : null }
				</td>
			</tr>
)
	




/* pridej default props do tridy pokud chceme */
SkiDayRow.defaultProps = {
	date: new Date(),
	resort: 'default resort',
	total: 50,
	powder: true,
	backcountry: false,
	goal: 75
}

/* pridej propTypes  pokud chceme 
   - pokud se nebudou shodovat v konzoli bude warning */

SkiDayRow.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	total: PropTypes.number,
	powder: PropTypes.bool,
	backcountry: PropTypes.bool,
	goal: PropTypes.number
}

export { SkiDayRow };