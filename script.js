function initBtn () {
  let button1 = document.getElementById('sous-btn');

  button1.onlick = function() {
    alert('Hello!!!');
    button1.innerHTML = 'Selected!';
    button1.style.background = 'Green';
  }
}

function changeBtn2 () {
  document.getElementById('head-btn').innerHTML = 'Selected!';
  document.getElementById('head-btn').style.background = 'Green';
}

function changeBtn3 () {
  document.getElementById('exec-btn').innerHTML = 'Selected!';
  document.getElementById('exec-btn').style.background = 'Green';
}

function thanks() {
  alert('Thanks for your interest! We will reach out to you shortly with more details.');
}