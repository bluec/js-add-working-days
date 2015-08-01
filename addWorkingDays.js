/**
 * addWorkingDays( d, plusDays )
 *
 * A JavaScript function to add a number of working days to a date object taking account of holidays and weekends
 * Checks each day added for being a holiday or weekend, so potentially unsuitable for adding large number of days
 *
 * Holiday functionality from https://github.com/lsmith/addBusinessDays/blob/master/addBusinessDays.js
 * UK holiday dates from http://www.bluesock.com/bank_holidays_csv.php
 */

// Map of holidays, must be manually updated :(
var holidays = {
	all: {
	},
	2015: {
		'0101': 1, // or true
		'0403': 1,
		'0406': 1,
		'0504': 1,
		'0525': 1,
		'0831': 1,
		'1225': 1,
		'1228': 1,
	},
	2016: {
		'0101': 1,
		'0325': 1,
		'0328': 1,
		'0502': 1,
		'0530': 1,
		'0829': 1,
		'1226': 1,
		'1227': 1,
	},
	2017: {
		'0102': 1,
		'0414': 1,
		'0417': 1,
		'0501': 1,
		'0529': 1,
		'0828': 1,
		'1225': 1,
		'1226': 1,
	},
	2018: {
		'0101': 1,
		'0330': 1,
		'0402': 1,
		'0507': 1,
		'0528': 1,
		'0827': 1,
		'1225': 1,
		'1226': 1,	
	},
	2019: {
		'0101': 1,
		'0419': 1,
		'0422': 1,
		'0506': 1,
		'0527': 1,
		'0826': 1,
		'1225': 1,
		'1226': 1,
	},
	2020: {
		'0101': 1,
		'0410': 1,
		'0413': 1,
		'0504': 1,
		'0525': 1,
		'0831': 1,
		'1225': 1,
		'1228': 1,	
	}
};

// Test a Date instance against the holiday map above
function isHoliday(d) {
	function zeroPad(n) {
		n |= 0;
		return (n < 10 ? '0' : '') + n;
	}

	var day = zeroPad(d.getMonth() + 1) + zeroPad(d.getDate());

	return holidays.all[day] || holidays[d.getFullYear()][day];
}

// Add number of working days (n) to a Date object (d)
function addWorkingDays(d, n) {
	// while the number of days to add is greater than 0
	while (n > 0) {
		// set the date forward one day
		d.setDate(d.getDate() + 1);
		// if the date is not a weekend and not a holiday, decrement n
		if(d.getDay() != 0 && d.getDay() != 6 && !isHoliday(d)) {
			n--;
		 }
	}
}
