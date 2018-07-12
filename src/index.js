/* Component neni nutny pokud pouzivam JSX */
import React from 'react';

import ReactDOM from 'react-dom';

import {SkiDayCount} from './components/SkiDayCount';
import {SkiDayList} from './components/SkiDayList';


// tohle pripadne kvuli 'nejakym' errorum
//window.React = React;


const { render } = ReactDOM;



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



/* SkiDayCount ty 'atributy' jsou klic v objektu 'props'  */

/*
render(<SkiDayCount total = {50}
					powder = {20}
					backcountry = {10}
					goal = {100} />, document.getElementById('root'));
*/

