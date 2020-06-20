var Box0 = document.getElementById('CaixaQuiz0');
var Box1 = document.getElementById('CaixaQuiz1');
var Box2 = document.getElementById('CaixaQuiz2');
var Box3 = document.getElementById('CaixaQuiz3');
var Box4 = document.getElementById('CaixaQuiz4');
var Box5 = document.getElementById('CaixaQuiz5');
var Box6 = document.getElementById('CaixaQuiz6');
var Box7 = document.getElementById('CaixaQuiz7');
var Box8 = document.getElementById('CaixaQuiz8');
/* ----------------------------------------------------------------------------------- */
var BoxQuiz0 = document.getElementById('CaixaEstudar0');
var BoxQuiz1 = document.getElementById('CaixaEstudar1');
var BoxQuiz2 = document.getElementById('CaixaEstudar2');
var BoxQuiz3 = document.getElementById('CaixaEstudar3');
var BoxQuiz4 = document.getElementById('CaixaEstudar4');
var BoxQuiz5 = document.getElementById('CaixaEstudar5');
var BoxQuiz6 = document.getElementById('CaixaEstudar6');
var BoxQuiz7 = document.getElementById('CaixaEstudar7');
var BoxQuiz8 = document.getElementById('CaixaEstudar8');
/* ----------------------------------------------------------------------------------- */
function CaixaEstudar0() {
    Box0.style.display = 'none';
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    BoxQuiz0.style.display = 'inline-flex';
}

function Desistir0() {
    Box0.style.display = 'inline-flex';
    Box1.style.display = 'inline-flex';
    Box2.style.display = 'inline-flex';
    BoxQuiz0.style.display = 'none';  
    
    contador = 1;
    contador2 = 0;
    Certa_resposta = 0;
    Errada_resposta = 0;
    Resposta_quiz.style.display = 'none';
    document.getElementById(`Perguntas1`).style.display = 'block';
    NQuestao.innerHTML = `${contador}`;
}
/* ----------------------------------------------------------------------------------- */
function CaixaEstudar1() {
    Box0.style.display = 'none';
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    BoxQuiz1.style.display = 'inline-flex';
}

function Desistir1() {
    Box0.style.display = 'inline-flex';
    Box1.style.display = 'inline-flex';
    Box2.style.display = 'inline-flex';
    BoxQuiz1.style.display = 'none';
    
    contador = 1;
    contador2 = 0;
    Certa_resposta = 0;
    Errada_resposta = 0;
    Resposta_quiz.style.display = 'none';
    document.getElementById(`Perguntas1_segundo`).style.display = 'block';
    NQuestao_segundo.innerHTML = `${contador}`;    
}
    /* ----------------------------------------------------------------------------------- */
    function CaixaEstudar2() {
    Box0.style.display = 'none';
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    BoxQuiz2.style.display = 'inline-flex';
}

function Desistir2() {
    Box0.style.display = 'inline-flex';
    Box1.style.display = 'inline-flex';
    Box2.style.display = 'inline-flex';
    BoxQuiz2.style.display = 'none';

    contador = 1;
    contador2 = 0;
    Certa_resposta = 0;
    Errada_resposta = 0;
    Resposta_quiz.style.display = 'none';
    document.getElementById(`Perguntas1_terceiro`).style.display = 'block';
    NQuestao_Terceiro.innerHTML = `${contador}`; 
}

 /* ----------------------------------------------------------------------------------- */
 function CaixaEstudar3() {
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    Box5.style.display = 'none';
    BoxQuiz3.style.display = 'inline-flex';
}

function Desistir3() {
    Box3.style.display = 'inline-flex';
    Box4.style.display = 'inline-flex';
    Box5.style.display = 'inline-flex';
    BoxQuiz3.style.display = 'none';
}
/* ----------------------------------------------------------------------------------- */
function CaixaEstudar4() {
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    Box5.style.display = 'none';
    BoxQuiz4.style.display = 'inline-flex';
}

function Desistir4() {
    Box3.style.display = 'inline-flex';
    Box4.style.display = 'inline-flex';
    Box5.style.display = 'inline-flex';
    BoxQuiz4.style.display = 'none';
}
    /* ----------------------------------------------------------------------------------- */
    function CaixaEstudar5() {
        Box3.style.display = 'none';
    Box4.style.display = 'none';
    Box5.style.display = 'none';
    BoxQuiz5.style.display = 'inline-flex';
}

function Desistir5() {
    Box3.style.display = 'inline-flex';
    Box4.style.display = 'inline-flex';
    Box5.style.display = 'inline-flex';
    BoxQuiz5.style.display = 'none';
}
     /* ----------------------------------------------------------------------------------- */
     function CaixaEstudar6() {
    Box6.style.display = 'none';
    Box7.style.display = 'none';
    Box8.style.display = 'none';
    BoxQuiz6.style.display = 'inline-flex';
}

function Desistir6() {
    Box6.style.display = 'inline-flex';
    Box7.style.display = 'inline-flex';
    Box8.style.display = 'inline-flex';
    BoxQuiz6.style.display = 'none';
}
/* ----------------------------------------------------------------------------------- */
function CaixaEstudar7() {
    Box6.style.display = 'none';
    Box7.style.display = 'none';
    Box8.style.display = 'none';
    BoxQuiz7.style.display = 'inline-flex';
}

function Desistir7() {
    Box6.style.display = 'inline-flex';
    Box7.style.display = 'inline-flex';
    Box8.style.display = 'inline-flex';
    BoxQuiz7.style.display = 'none';
}
    /* ----------------------------------------------------------------------------------- */
    function CaixaEstudar8() {
    Box6.style.display = 'none';
    Box7.style.display = 'none';
    Box8.style.display = 'none';
    BoxQuiz8.style.display = 'inline-flex';
}

function Desistir8() {
    Box6.style.display = 'inline-flex';
    Box7.style.display = 'inline-flex';
    Box8.style.display = 'inline-flex';
    BoxQuiz8.style.display = 'none';
}