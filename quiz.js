const quizData=[
    {question:"What does HTML stands for?",
      a:'Hyper Text Transfer Language',
      b:'Hyper Text Markup Language',
      c:'Hyper Text Media Language',
      d:'Hyper Text Mark Language',
      correct:'b'
    },{
        question:"Who is the P.M. of India?",
      a:'Narendra Modi',
      b:'Manmohan Singh',
      c:'Rahul Gandhi',
      d:'Amit Shah',
      correct:'a'
    },
    
    {question:"What is the jersey no. of mahi?",
    a:'7',
    b:'3',
    c:'6',
    d:'17',
    correct:'a'},{question:"What is CSS stands for? ",
    a:'Casceding sheets',
    b:'Casceding styleless sheets',
    c:'Casceding style sheet',
    d:'None of the above',
    correct:'c'},{question:"What is ES stands for? ",
    a:'Ecma Script',
    b:'Ec Sc',
    c:'Both',
    d:'None of the above',
    correct:'a'},{question:"How many title does CSK won? ",
    a:'1',
    b:'3',
    c:'2',
    d:'None of the above',
    correct:'d'}
]

let currQuiz=0;
let score=0;
const select=document.querySelectorAll('.select');
const question=document.querySelector('.question');
const a_text=document.querySelector('#a_text');
const b_text=document.querySelector('#b_text');
const c_text=document.querySelector('#c_text');
const d_text=document.querySelector('#d_text');
const submit=document.querySelector('.submit');
const box=document.querySelector('.box');
loadQuiz();

function loadQuiz(){
    deselect();
    question.innerHTML=quizData[currQuiz].question;
    a_text.innerHTML=quizData[currQuiz].a;
    b_text.innerHTML=quizData[currQuiz].b;
    c_text.innerHTML=quizData[currQuiz].c;
    d_text.innerHTML=quizData[currQuiz].d;
    
}
let sahians=undefined;
function getSelected(){


    select.forEach((answer)=>{
     if(answer.checked){
        sahians= answer.id;
     }
    });
    return sahians;
}

function deselect(){
  select.forEach((answer)=>{
       answer.checked=false;
  });
}

submit.addEventListener("click",()=>{
    const ans= getSelected();
    if(ans){
        if(ans===quizData[currQuiz].correct){
            score++;
        }
        currQuiz++;
         if(currQuiz<quizData.length){
       
             loadQuiz();
     }else{
        box.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>.<button onClick="location.reload()">Reload</button>`;
        box.style.height="300px";
        

    }
}

   
})
