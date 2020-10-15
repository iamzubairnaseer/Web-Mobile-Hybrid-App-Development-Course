function Question(question,options,rightAnswer){
    this.question = question;
    this.options = options;
    this.rightAnswer = rightAnswer;
}

// var q1 = new Question("What is your name?",["Bilawal","Zubair","Hina","Hira"],"Zubair");
// var q2 = new Question("What is your age?",[18,21,27,30],21);
// var q3 = new Question("Which is your mother tongue",["English","Urdu","Sindhi","Pashto"],"Sindhi");

var question_bank = [
    new Question("What is your name?",["Bilawal","Zubair","Hina","Hira"],"Zubair"),
    new Question("What is your age?",[18,21,27,30],21),
    new Question("Which is your mother tongue",["English","Urdu","Sindhi","Pashto"],"Sindhi")
];

var score = 0;
var question_no = 0;
var opt = document.getElementById("options");

function nextBtn(){

    checkAnswer(question_no);

    question_no++;
    if(question_no<question_bank.length){
        opt.innerHTML = ""
        nextQuest(question_no);
    }
    // else{
    //     // var last = document.getElementById("last")
    //     // last.innerHTML = "You have reached end of the quiz"
    // }
    if(question_no === question_bank.length-1){
        // var subBtn = document.getElementById("subBtn");
        // subBtn.style.display = "block"
        var nextBtn = document.getElementById("nextBtn")
        nextBtn.setAttribute('onclick','end()');
        nextBtn.innerHTML = "Submit"
    }
}

function nextQuest(qNo=0){
    var quest = document.getElementById("question");

    var question = question_bank[qNo].question;
    var options = question_bank[qNo].options;

    quest.innerHTML = "<h1>"+ question +"</h1>";

    for (var i=0; i<options.length; i++){
        opt.innerHTML += "<li> <input type='radio' id='opt-"+i+"'>"+ options[i] +"</li>";
    }
}

function checkAnswer(qNo){
    var chosenOpts = chosenOpt();
    var rightAnswer = question_bank[qNo].rightAnswer;

    if(chosenOpts == rightAnswer){
        score++;
    }
}

function chosenOpt(){   
    var chosenOpt="";
    for(var i=0; i<4; i++){
        var opt = document.getElementById("opt-"+i);

        if(opt.checked == true){
            chosenOpt = opt.nextSibling.nodeValue;
            break
        }
    }
    return chosenOpt
}

function end(){
    checkAnswer(question_no);
    var end = document.getElementById("end");
    // end.innerHTML = "<h1>"+score+"<br>Thank You</h1>"
    end.style.display = "none";

    var scoreUpdate = document.getElementById("score");
    scoreUpdate.innerHTML = "<h1>"+score+"/"+question_bank.length+"</h1>";

    var note = document.getElementById("note");
    note.style.display = "flex";
}

nextQuest();