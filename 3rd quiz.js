const quizData = [


{
   question : "Which Indian president was involved in the struggle for Irish independence",

   a: "V.V. Giri",
   b:"Neelam Sanjiva Reddy",
   c:"Gulzarilal Nanda",
   d:"S. Radhakrishnan",
   correct:"a",
},
{
   question : "Who was Karl Marx’s associate and fellow political theoretician",

   a: "Friedrich Nietzsche",
   b:"Friedrich II",
   c:"Friedrich Engels",
   d:"Friedrich Reich",

   correct:"c",
},
{
   question : "Where were the Aegean Bronze Age civilizations located",

   a: "Algeria",
   b:"India",
   c:"Greece",
   d:"Canada",

   correct:"c",
},
{
   question : "Which of these battles did not involve Roman soldiers",

   a: "Arretium",
   b:" Chalons",
   c:"Cannae",
   d:"Thermopylae",

   correct:"d",
},{
   question : "Which weapon was first used at the Battle of the Somme in World War I",

   a: "Submarine",
   b:"Tank",
   c:"Jet fighter",
   d:"Chariot",

   correct:"b",
},
{
   question : "World War I ended in",

   a: "1925",
   b:"1920",
   c:"1918",
   d:"1915",

   correct:"c",
},
{
   question : "Which of these people was a spy in World War I",

   a: "Mata Hari",
   b:" James Bond",
   c:"Benedict Arnold",
   d:"Serge Plekhanov",

   correct:"a",
},
{
   question : "How many republics made up the former Soviet Union",

   a: "15",
   b:"12",
   c:"20",
   d:"10",

   correct:"15",
},
{
   question : "When was the first Nobel Prize in economics awarded",

   a: "1969",
   b:" 1949",
   c:"1909",
   d:"1929",

   correct:"a",
},{
   question : "Whose death sparked World War I",

   a: "Kaiser Wilhelm",
   b:"Archbishop Ussher",
   c:"Queen Victoria",
   d:"Archduke Franz Ferdinand",
   correct:"d",
},

]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz () {
const currentQuizData = quizData[currentQuiz];
     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

}

loadQuiz();


function getSelected () {

      let answer = undefined;

      answerEls.forEach((answerEL)=> {
            if(answerEL.checked)
            {
            answer = answerEL.id;
            }
     
      });

      return answer;

}

function deselectAnswers () {
answerEls.forEach(answerEL=> {
            answerEL.checked = false;
     
      });
}

submit.addEventListener("click", ()=>{

  const answer = getSelected();
   
   if(answer){
         if(answer === quizData[currentQuiz].correct){

          score++;
         }
         
         currentQuiz++;

         if(currentQuiz < quizData.length){
          loadQuiz();
         }
         else{
          quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>`;
         }

   }











});
