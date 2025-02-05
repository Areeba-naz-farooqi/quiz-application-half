
var questions = [
    {
        question: "In what year did the Great October Socialist Revolution take place?",

        option1: 1923,
        option2: 1917,
        option3: 1914,
        option4: 1920,
        correct: 1917
    },
    {
        question: " What is the largest lake in the world?",

        option1: "Caspian Sea",
        option2: "Baikal",
        option3: "Lake Superior",
        option4: "Ontari",
        correct: "Caspian Sea"
    },
    {
        question: "Which planet in the solar system is known as the “Red Planet”?",

        option1: "Venus",
        option2: "Earth",
        option3: "Mars",
        option4: "Jupiter",
        correct: "Mars"
    }, {
        question: "Which country hosted the 2024 FIFA U-20 Women's World Cup?",

        option1: "India",
        option2: "Nigeria",
        option3: "Colombia",
        option4: "Japan",
        correct: "Colombia"
    },
    {
        question: "What significant new feature did Apple announce in their June 2024 WWDC?",

        option1: "Mixed Reality headset",
        option2: "Quantum computing chip",
        option3: "Mind-controlled interface",
        option4: "Apple Car prototype",
        correct: "Apple Car prototype"
    },
    {
        question: "What is the chemical symbol for Gold?",

        option1: "Gd",
        option2: "Au",
        option3: "Ag",
        option4: "Go",
        correct: "Au"
    },
    {
        question: "What is the color of blood when it's inside your body?",
        option1: "Red",
        option2: "Blue",
        option3: "Green",
        option4: "yellow",
        correct: "Red"
    },
    {
        question: "Which is the fastest bird in the world?",
        option1: "Raven",
        option2: "Hummingbird",
        option3: "Peregrine Falcon",
        option4: "Bald Eagle",
        correct: "Peregrine Falcon"
    }
]

 

var index = 0
var score = 0
var previousBtn = document.getElementById("previousBtn")
var questionDiv = document.getElementById("questionBox")
var playAgain = document.getElementById("playAgain")
var NextBtn = document.getElementById("Next")

var firstObj = questions[index]
questionBox.innerHTML = `<p>${questions[index].question}</p>


<label>
    <input type="radio"   name="option" value="${questions[index].option1}" >
    ${questions[index].option1}
</label>
<br>
<label>
    <input type="radio" name="option" value="${questions[index].option2}" >
          ${questions[index].option2}
</label>
<br>
<label>
    <input type="radio" name="option" value="${questions[index].option3}" >
     ${questions[index].option3}
</label>`

selectingOptions()


function showQuestions() {



    NextBtn.disabled = true
    index++;
    if (!questions[index]) {
        questionBox.innerHTML = `quiz completed ${score}`
        NextBtn.style.display = "none"
    }
   
    else {
        questionBox.innerHTML = `<p>${questions[index].question}</p>
        


        <label>
            <input type="radio"   name="option" value="${questions[index].option1}" >
            ${questions[index].option1}
        </label>
        <br>
        <label>
            <input type="radio" name="option" value="${questions[index].option2}" >
                  ${questions[index].option2}
        </label>
        <br>
        <label>
            <input type="radio" name="option" value="${questions[index].option3}" >
             ${questions[index].option3}
        </label>

`

        // enabling next Btn

        selectingOptions()

    }
}



function next() {
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (options[i].value === questions[index].correctOption) {
                score++

            }

        }

    }

    showQuestions();

}


function selectingOptions() {
    for (var i = 0; i < options.length; i++) {



        options[i].addEventListener("click", function () {
            NextBtn.disabled = false
        })

    }
}