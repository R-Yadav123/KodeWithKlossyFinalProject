// quiz Code
var quiz_outcome = [
  { name: "aren't very sustainable",
    description: "Try using more public transport and eating less meat and cheese!",
  },
  { name: "You're getting there",
    description: "Go to the resource page for more info!",
  },
  { name: "You could do more",
    description: "You could recyle more, or plant your own garden!",
  },
  { name: "You are doing well",
    description: "Go to the resource page for more info!",
  },
  { name: "You are very sustainable and eco-friendly",
    description: "You are doing amazing!!",
  }
]
var resultText = $(".results-container");
var submitQuiz = $(".submitquiz");
//Event listener 
submitQuiz.on("click", getResult);


//Function run when the button is clicked

function getResult() {  
    
  var total = 0;
  //Creates a loop to go through each question (i <= 3 because there are 3 questions if you have more questions, change this number)
  for (var i = 1; i <= 4; i++) {
    //Conditional that checks the class of each option for each question and then adds a value to the total depending on the option that was selected
    if ($(`.Q${i}OP1:checked`).val()) {
      total += 0;
    } else if ($(`.Q${i}OP2:checked`).val()) {
      total += 1;
    } else if ($(`.Q${i}OP3:checked`).val()) {
      total += 2;
    } else if ($(`.Q${i}OP4:checked`).val()) {
      total += 3;
    } else if ($(`.Q${i}OP5:checked`).val()) {
      total += 4;
    }
  } 

  
  // divide by number of questions
  var result = ( total / 4)
  //rounds total to a whole number
  var round = Math.round(result)

  //checks the numbers calculated
  console.log(total)
  console.log(result)
  console.log(round)

  //use the number as an index to select the results from the results Object (the very first thing we coded at the top)

 
  resultText.text(`Looks like you ${quiz_outcome[round].name}! ${quiz_outcome[round].description}`);
  
}





