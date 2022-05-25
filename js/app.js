const app = {
    init: function() {
 
       const reponseUser = app.askQuestion(0);
       
        
    },
    askQuestion: function (numQuestion) {

    // Récupérer la première question et la stocker dans une variable
    const question = questions[numQuestion];

    const newQuestionElmt = document.querySelector('#titreQuestion');
    document.querySelector('#numero').textContent=numQuestion;
    newQuestionElmt.textContent=question;
    document.querySelector("input").id =numQuestion ;

    formElmt = document.querySelector('form');
    formElmt.addEventListener('submit', app.handleSubmit);
    },
    handleSubmit: function (evt) {
        evt.preventDefault();
        const reponseUser = document.querySelector("input").value;
        let num = document.querySelector('#numero').textContent;
        document.querySelector('#numero').textContent ='';
        document.querySelector("input").value='';

        app.checkResponse(num, reponseUser);
        num++;
        if (num < questions.length) {
            app.askQuestion(num);
        }
        else {
            document.querySelector('.divquestion').classList.add('d-none');
            document.querySelector('#result').classList.remove('d-none'); 
            app.score();
        }
        
      
    },
    checkResponse: function (numReponse, reponseUser) {
        let ulElmt;
        const bonneReponse = responses[numReponse];
        if (reponseUser == bonneReponse) {
            ulElmt = document.querySelector(".alert-success .responses");
        } else {
            ulElmt = document.querySelector(".alert-danger .responses");
        }
        const liElmt = document.createElement("li");
        liElmt.textContent = questions[numReponse] + "   (" + responses[numReponse] + ")";
        ulElmt.appendChild(liElmt);
        
    },
    score: function () {
        let goodElmt=document.querySelectorAll(".alert-success li");
        let score = goodElmt.length;
        document.querySelector("#score").textContent=score;
        document.querySelector(".scorefinal").classList.remove('d-none');

    }
};
   

document.addEventListener('DOMContentLoaded', app.init);