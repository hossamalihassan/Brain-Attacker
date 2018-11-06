var sub, num1, num2, input, sub_score=0, ran_num1=5, ran_num2=5, subt=0;

// Subtraction
function subtraction() {
  num1 = Math.floor(Math.random() * ran_num1);
  num2 = Math.floor(Math.random() * ran_num2);
  sub = num1 - num2;
  $('.question p').text(num1 + ' - ' + num2);
}

$('.answer button').click(function(){
  input = $('input[type=number]').val();
  if(input == sub){
    $('.correct').fadeIn(300, function(){
      $(this).fadeOut(300);
    });
    $('input[type=number]').val('');
    sub_score += 5;
    ran_num1 += 2;
    ran_num2 += 2;
    $('.score').text('Score: ' + sub_score);
    num1 = Math.floor(Math.random() * ran_num1);
    num2 = Math.floor(Math.random() * ran_num2);
    subtraction();
    subt += sub_score;
  }

  else {
    $('.wrong').fadeIn(500);
    $('.wrong').text('You Lose. The Answer Is : ' + sub +  ' . Your Score is ' + sub_score + '.');
    $('a').text('Try Again!').appendTo('.wrong');

    $('.wrong a').click(function(){
      window.location = "../index.html";
    });

    $('input[type=number]').attr('disabled', 'disabled');
    $('.answer button').attr('disabled', 'disabled');
  }
});

subtraction();
