var num1, num2, sum, input, score=0, ran_num1=5, ran_num2=5;

// Addition
function addition() {
  num1 = Math.floor(Math.random() * ran_num1);
  num2 = Math.floor(Math.random() * ran_num2);
  sum = num1 + num2;
  $('.question p').text(num1 + ' + ' + num2);
}

$('.answer button').click(function(){
  input = $('input[type=number]').val();
  if(input == sum){
    $('.correct').fadeIn(300, function(){
      $(this).fadeOut(300);
    });
    $('input[type=number]').val('');
    score += 5;
    ran_num1 += 2;
    ran_num2 += 2;
    $('.score').text('Score: ' + score);
    num1 = Math.floor(Math.random() * ran_num1);
    num2 = Math.floor(Math.random() * ran_num2);
    addition();
  }

  else {
    $('.wrong').fadeIn(500);
    $('.wrong').text('You Lose. The Answer Is : ' + sum +  ' . Your Score is ' + score + '.');
    $('a').text('Try Again!').appendTo('.wrong');

    $('.wrong a').click(function(){
      window.location = "../index.html";
    });

    $('input[type=number]').attr('disabled', 'disabled');
    $('.answer button').attr('disabled', 'disabled');
  }
});

addition();
