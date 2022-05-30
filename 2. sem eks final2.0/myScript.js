// Progress bar
var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  progress = document.querySelector('.progress'),
  scroll;

document.addEventListener('scroll', function() {
  scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  progress.style.setProperty('--scroll', scroll + '%');
});

// Burgermenu //



// Counter 
let counts=setInterval(updated);
        let upto=160374;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===8000000)
            {
                clearInterval(counts);
            }
        }

        
/* Text curve animation */
/* Credit til animation: https://codepen.io/team/keyframers/pen/NWKyNqK */
console.clear();

var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}

updateTextPathOffset(pathLength);

function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset( scrollPercent * 0.8 * pathLength );
  });
}

window.addEventListener('scroll',onScroll);



/* Nedtællingsur */
// Funktion defineres 
function getTimeRemaining(endtime) {

  // Tid defineres - tjek solbiler for god beskrivelse af tidsbestemmelse 
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (30 * 60 * 60 * 24));
    var years = Math.floor(t/ (29.25 * 60 * 60 *24));

     // Tid returneres 
    return {
      'total': t,
      'years':years,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var yearsSpan = clock.querySelector('.years')
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      yearsSpan.innerHTML = ('0' + t.years).slice(-2);
      daysSpan.innerHTML = ('0' + t.days).slice(-2);
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock(); 
    var timeinterval = setInterval(updateClock, 1000);
  }
  //var deadline = 'July 17 2017 07:59:59 GMT-0700';
  var deadline = new Date(Date.parse(new Date()) + 100 * 24 * 60 * 60 * 1000);  // sets 15 day countdown
  initializeClock('clockdiv', deadline);
  
  // getTimeRemaining(deadline).minutes;



// Scroll af første logo
let scrollPosition = window.scrollY;
const scrollDown = document.querySelector('.logo');

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 920) {
        scrollDown.classList.add('hide');
    } else {
        scrollDown.classList.remove('hide');
    }
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email]);
  checkLength(username, 3, 30);
  checkEmail(email);
});


  