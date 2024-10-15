var app = document.getElementById("typing");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 1,
});

typewriter
  .typeString("<span id='first_type'>Software Development Engineer</span>")
  .pauseFor(1500)
  .typeString("<br/>")
  .typeString("<span id='second_type'>ReactJs Developer</span>")
  .pauseFor(1500)
  .typeString("<br/>")
  .typeString("<span id='third_type'>Javascript Developer</span>")
  .pauseFor(1500)
  .start();
