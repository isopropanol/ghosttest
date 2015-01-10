// Google Analytics Event Tracking Code

$('#top-signup-button').on('click', function() {
  ga('send', 'event', 'button', 'click', 'top sign up button click', 1);
});

$('#middle-signup-button').on('click', function() {
  ga('send', 'event', 'button', 'click', 'middle sign up button click', 1);
});

$('#bottom-signup-button').on('click', function() {
  ga('send', 'event', 'button', 'click', 'bottom sign up button click', 1);
});

$('#contactForm').on('submit', function() {
  ga('send', 'event', 'form', 'submit', 'form submission', 1);
});

