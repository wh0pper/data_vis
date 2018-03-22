import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {Day} from './day'

let body;

$(document).ready(function() {
  $('#date_form').submit(function(event) {
    event.preventDefault();
    let date = $('#date_input').val();
    let day = new Day(date);
    day.getBlocks().then(function(response) {
      body = JSON.parse(response);
      console.log(body);
      $('#output').text(`Number of blocks mined on ${date}: ` + body.blocks.length);
      
    }, function(error) {
      console.log(error.message);
    });


  });



})
