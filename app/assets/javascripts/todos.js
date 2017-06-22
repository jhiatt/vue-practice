/* global Vue */
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      task1: 'buy tickets',
      task2: 'do the dishes',
      task3: 'call mom',
      tasks: ['buy tickets', 'do the dishes', 'call mom']
    }
  });
});