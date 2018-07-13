import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/ui.scss';

import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

class SkiDayCount extends Component {

	percetnToDecimal (decimal) {
		return (decimal * 100) + '%';
	}

	calcGoalProgress(total, goal) {
		return this.percetnToDecimal(total / goal);
	}
	
	render() {
		return(
			<div className="ski-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<Calendar />
					<span>days</span>
				</div>

				<div className="powder-days">
					<span>{this.props.powder}</span>
					<SnowFlake />
					<span>days</span>
				</div>

				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
					<Terrain />
					<span>days</span>
				</div>

				<div>
					<span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
				</div>
			</div>
		)
	}

}


/* pridej default props do tridy pokud chceme */
SkiDayCount.defaultProps = {
	date: new Date(),
	resort: 'default resort',
	total: 50,
	powder: true,
	backcountry: false,
	goal: 75
}

/* pridej propTypes  pokud chceme 
   - pokud se nebudou shodovat v konzoli bude warning */

SkiDayCount.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	total: PropTypes.number,
	powder: PropTypes.number,
	backcountry: PropTypes.number,
	goal: PropTypes.number
}

export { SkiDayCount };

/*

/* tohle je bez es6 ale chce to instalovat nejakej dalsi modul create-class

const SkiDayCount = React.createClass({
	render() {
		return(
			<div className="ski-day-count">
				<div className="total-days">
					<span>5 days</span>
				</div>

				<div className="powder-days">
					<span>2 days</span>
				</div>

				<div className="backcountry-days">
					<span>1 hiking day</span>
				</div>
			</div>
		)
	}

});
*/






//export default SkiDayCount;