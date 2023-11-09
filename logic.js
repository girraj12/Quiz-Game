const questionJson = [
{
    correctAnswer:'HTML,CSS AND JS',
    options:['HTML,CSS AND JS','Data science','BlockChain','none'],
    question:
        "How to make a frontend developer in few months",
    },
    {
        correctAnswer:'Graph can have loops but loops are not in tree',
        options:['Linear and Non-Linear',
        'Linear and Non-Linear',
        'none',
        'Graph can have loops but loops are not in tree'],
        question:
            "Difference between Graph and Tree",
        },
     {
    correctAnswer:'strictly check types by "===" operator',
    options:['equal',
    'strictly check data type by "===" operator',
    'strictly check data type by "==" operator',
    'none'],
     question:
     "Difference between == and === operator",
    },   
        ];

   let score = 0;
   let currentQuestion =0;
   let totalScore = questionJson.length;
 const questionEl  = document.getElementById("question");
 const optionsEl  = document.getElementById("options");
    const scoreEl  = document.getElementById("score");

    const nextEl = document.getElementById("next_btn");
      nextEl.addEventListener("click", () =>{
        scoreEl.textContent = `Score: ${score} / ${totalScore}`;
        nextQuestion();
      });

    showQuestion();
  function showQuestion(){
    const {
        question,
        correctAnswer,
        options,
       }=questionJson[currentQuestion];

       questionEl.textContent = question;

       const shuffledOptions = shuffleOptions(options);

       shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
         btn.textContent = opt;
         optionsEl.appendChild(btn);

     btn.addEventListener("click", () =>{
         if(opt === correctAnswer){
             score++;
         }
         else{
             score = score - 0.25;
         }
         scoreEl.textContent = `Score: ${score}/${totalScore}`;

         nextQuestion();

     });
 });
    }
     function nextQuestion(){
        currentQuestion++;
        optionsEl.textContent = '';
       if(currentQuestion >= questionJson.length){
        questionEl.textContent = "Quiz Completed";
          nextEl.remove();
       }
       else{
          showQuestion();
       }
     }
  function shuffleOptions(options){
        for(let i = options.length-1;i>=0;i--){
            const j = Math.floor(Math.random()*i+1);
           [ options[i],options[j] ]= [
             options[j],options[i],
           ];
        }
       return options;
    }
    shuffledOptions([1,2,3,4]);
