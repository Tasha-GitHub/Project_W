// import js libraries
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

// import styles
require('../styles/main.scss');

$(document).ready(() => {
    console.log('foo bar');
    require('./homepage.js');
})
