// jQuery code

$('.btn').click(function () {
  $(this).addClass('clicked').text('Selected!');
  
  //$(this).text('Selected!').css('background-color', 'green');
});

$('#submit').click(function() {
  alert('Thanks for your interest! We will reach out to you shortly with more details.')
});


/** Javascript code **/

/**
function changeBtn1() {
  document.getElementById("sous-btn").innerHTML = "Selected!";
  document.getElementById("sous-btn").style.background = "Green";
}

function changeBtn2() {
  document.getElementById("head-btn").innerHTML = "Selected!";
  document.getElementById("head-btn").style.background = "Green";
}

function changeBtn3() {
  document.getElementById("exec-btn").innerHTML = "Selected!";
  document.getElementById("exec-btn").style.background = "Green";
}

function thanks() {
  alert(
    "Thanks for your interest! We will reach out to you shortly with more details."
  );
}**/