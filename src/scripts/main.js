// import js libraries
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

// import styles
require('../styles/main.scss');

$(document).ready(() => {

	$('#test_tag').on('click', function(e){
		e.preventDefault();
		window.history.replaceState({}, 'foo', '/photos');
		console.log('hi');
	});

    console.log('foo bar');
    require('./homepage.js');
    require('./polaroids');
});
