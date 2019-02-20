"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Caleb Snow
   Date:   2/14/19

   Filename:   ph_clock.js     
   
*/


//These are four variables that that provide the order time that the user has to submit and finish their order. THe variables also have their corresponding content such as the clockID which makes sure it works every second the order is being done.
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = minsLeft * 60 + secsLeft;
var clockID = setInterval("countdown()", 1000);


// Creating a function of countdown which calls in multiple functions including the minutes and seconds Strings to make it function with the countdown.
function countdown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - 60 * minsLeft;
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    document.getElementById("seconds").textContent = secsString;
    document.getElementById("minutes").textContent = minsString;
    checkTimer();
    timeLeft--;
}


// This function stops the clock that is running to show the countdown itself and it displayes a message to the user to say that the order has expired
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML('beforeend', " <br />(Order Expired)")
    clearInterval(clockID);
}
/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}