        const questions = [{question: "What does HTML stand for?", choices: ["HyperText Markup Language", "HyperTransfer Markup Language", "HyperText Management Language", "None of the above"], correct: 1},
    {question: "Which of the following tags is used to insert an image in an HTML document?", choices: ["<image>", "<src>", "<img>", "<picture>"], correct: 3},
    {question: "Which attribute is used to specify the destination URL in a hyperlink?", choices: ["src", "alt", "href", "link"], correct: 3},
    {question: "Which CSS property is used to change the font of an element?", choices: ["text-font", "font-family", "font-style", "font-type"], correct: 2},
    {question: "Which of the following tags is used to define an unordered list?", choices: ["<ul>", "<ol>", "<li>", "<list>"], correct: 1},
    {question: "Which CSS property is used to control the space between the content and its border in an element?", choices: ["margin", "border-spacing", "content-spacing", "padding"], correct: 4},
    {question: "How do you apply a background image to a webpage using CSS?", choices: ["background: image('url')", "background-image: url('image.jpg');", "background-url: url('image.jpg');", "background-image: image('image.jpg');"], correct: 2},
    {question: "Which HTML element is used to define a hyperlink?", choices: ["<link>", "<a>", "<href>", "<hyperlink>"], correct: 2},
    {question: "How can you include an external CSS file into an HTML document?", choices: ['<link rel="stylesheet" href="styles.css">', '<css src="styles.css">', '<style src="styles.css">', '<stylesheet href="styles.css">'], correct: 1},
    {question: "Which HTML attribute is used to specify the source of an image?", choices: ["href", "alt", "src", "source"], correct: 3}
];
 
        let currentQuestion = 0;
        let score = 0;

     function startQuiz()
     {
            document.getElementById('startQuizBtn').style.display = 'none'; 
            document.getElementById('quizContainer').style.display = 'block'; 
            document.getElementById('p1').style.display = 'none';
            document.getElementById('p2').style.display = 'none';
            loadQuestion();

     }

    function loadQuestion() 
    {
    const question = questions[currentQuestion];
    const questionNumber = currentQuestion + 1;
    let difficulty = "";
    let points = 0;


    if (questionNumber <= 5) {
        difficulty = "Easy";
        points = 1;
    } else if (questionNumber <= 7) {
        difficulty = "Medium";
        points = 2.5;
    } else {
        difficulty = "Hard";
        points = 5;
    }
     if(questionNumber <= 5)
    {
        document.getElementById('question').innerText = `Q${questionNumber}: ${question.question} (${difficulty} - ${points} point)`;
    }
    else
    {
        document.getElementById('question').innerText = `Q${questionNumber}: ${question.question} (${difficulty} - ${points} points)`;

    }
    document.getElementById('choice1').innerText = question.choices[0];
    document.getElementById('choice2').innerText = question.choices[1];
    document.getElementById('choice3').innerText = question.choices[2];
    document.getElementById('choice4').innerText = question.choices[3];

    const choices = document.getElementsByClassName('choice');
    for (let i = 0; i < choices.length; i++) {
        choices[i].classList.remove('correct', 'incorrect');
        choices[i].onclick = function () { checkAnswer(i + 1); };
    }

    document.getElementById('nextBtn').style.display = 'none';
 }


  function checkAnswer(selectedChoice) 
  {
            const correctChoice = questions[currentQuestion].correct;
            const choices = document.getElementsByClassName('choice');

            
            for (let i = 0; i < choices.length; i++) 
            {
                choices[i].onclick = null;
            }

            
            if (selectedChoice === correctChoice) 
            {
                if(currentQuestion<5)
                {
                    score++;
                }
                else if(currentQuestion<7)
                {
                     score=score+2.5;
                }
                else
                {
                     score=score+5;
                }
                document.getElementById(`choice${selectedChoice}`).classList.add('correct');
            } 
            else
            {
                document.getElementById(`choice${selectedChoice}`).classList.add('incorrect');
                const wrongChoice = document.getElementById(`choice${selectedChoice}`);
                wrongChoice.classList.add('shake');
                setTimeout(() => wrongChoice.classList.remove('shake'), 500); 
                document.getElementById(`choice${correctChoice}`).classList.add('correct');              
            }
           
            if (currentQuestion < questions.length - 1)
            {
                document.getElementById('nextBtn').style.display = 'block';
            } 
            else 
            {
                const message = getPerformanceMessage(score);
                document.getElementById('score').innerHTML = `Quiz Completed! Your final score: ${score} / 25<br>${message}`;
                document.getElementById('resetBtn').style.display = 'block';

            }
   }

   function nextQuestion()
   {
            currentQuestion++;
            loadQuestion();
    }

    function resetQuiz()
    {
            currentQuestion = 0;
            score = 0;
            document.getElementById('score').innerText = '';
            document.getElementById('resetBtn').style.display = 'none';
            loadQuestion();
    }
    function getPerformanceMessage(score) {
    if (score < 10) {
        return "You have a long way to go. Keep practicing!";
    } else if (score < 20) {
        return "Good job! You're getting there.";
    } else if (score < 25) {
        return "Great work! Almost perfect.";
    } else {
        return "Outstanding! You're a quiz master!";
    }
    }
