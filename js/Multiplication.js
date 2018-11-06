var num1, num2, mul, input, score=0, ran_num1=5, ran_num2=5;

// Multiplication
function multiplication() {
  num1 = Math.floor(Math.random() * ran_num1);
  num2 = Math.floor(Math.random() * ran_num2);
  mul = num1 * num2;
  $('.question p').text(num1 + ' x ' + num2);
}

$('.answer button').click(function(){
  input = $('input[type=number]').val();
  if(input == mul){
    $('.correct').fadeIn(300, function(){
      $(this).fadeOut(300);
    });
    $('input[type=number]').val('');
    score += 5;
    ran_num1 += 3;
    ran_num2 += 3;
    $('.score').text('Score: ' + score);
    num1 = Math.floor(Math.random() * ran_num1);
    num2 = Math.floor(Math.random() * ran_num2);
    multiplication();
  }

  else {
    $('.wrong').fadeIn(500);
    $('.wrong').text('You Lose. The Answer Is : ' + mul +  ' . Your Score is ' + score + '.');
    $('a').text('Try Again!').appendTo('.wrong');

    $('.wrong a').click(function(){
      window.location = "../index.html";
    });

    $('input[type=number]').attr('disabled', 'disabled');
    $('.answer button').attr('disabled', 'disabled');
  }
});

multiplication();
