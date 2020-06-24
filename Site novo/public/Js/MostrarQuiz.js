var Box0 = document.getElementById('CaixaQuiz0');
var Box1 = document.getElementById('CaixaQuiz1');
var Box2 = document.getElementById('CaixaQuiz2');
var Box3 = document.getElementById('CaixaQuiz3');
var Box4 = document.getElementById('CaixaQuiz4');
/* ----------------------------------------------------------------------------------- */
var BoxQuiz0 = document.getElementById('CaixaEstudar0');
var BoxQuiz1 = document.getElementById('CaixaEstudar1');
var BoxQuiz2 = document.getElementById('CaixaEstudar2');
var BoxQuiz3 = document.getElementById('CaixaEstudar3');
var BoxQuiz4 = document.getElementById('CaixaEstudar4');
/* ----------------------------------------------------------------------------------- */
var Div_nivel = document.getElementById('Nivel2');

function CaixaEstudar0() {
    Box0.style.display = 'none';
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    BoxQuiz0.style.display = 'inline-flex';
}

function Desistir0() {
    Box0.style.display = 'inline-flex';
    Box1.style.display = 'inline-flex';
    Box2.style.display = 'inline-flex';
    Box3.style.display = 'inline-flex';
    Box4.style.display = 'inline-flex';
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
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    BoxQuiz1.style.display = 'inline-flex';
}

function Desistir1() {
    Box0.style.display = 'inline-flex';
    Box1.style.display = 'inline-flex';
    Box2.style.display = 'inline-flex';
    Box3.style.display = 'inline-flex';
    Box4.style.display = 'inline-flex';
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
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    BoxQuiz2.style.display = 'inline-flex';
}

function Desistir2() {
    Box0.style.display = 'inline-flex';
    Box1.style.display = 'inline-flex';
    Box2.style.display = 'inline-flex';
    Box3.style.display = 'inline-flex';
    Box4.style.display = 'inline-flex';
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
    Box0.style.display = 'none';
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    BoxQuiz3.style.display = 'inline-flex';
}

function Desistir3() {
    Box0.style.display = 'inline-flex';
    Box1.style.display = 'inline-flex';
    Box2.style.display = 'inline-flex';
    Box3.style.display = 'inline-flex';
    Box4.style.display = 'inline-flex';
    BoxQuiz3.style.display = 'none';

    contador = 1;
    contador2 = 0;
    Certa_resposta = 0;
    Errada_resposta = 0;
    Resposta_quiz.style.display = 'none';
    document.getElementById(`Perguntas1_quarto`).style.display = 'block';
    NQuestao_quarto.innerHTML = `${contador}`;
}
/* ----------------------------------------------------------------------------------- */
function CaixaEstudar4() {
    Box0.style.display = 'none';
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    BoxQuiz4.style.display = 'inline-flex';
}

function Desistir4() {
    Box0.style.display = 'inline-flex';
    Box1.style.display = 'inline-flex';
    Box2.style.display = 'inline-flex';
    Box3.style.display = 'inline-flex';
    Box4.style.display = 'inline-flex';
    BoxQuiz4.style.display = 'none';

    contador = 1;
    contador2 = 0;
    Certa_resposta = 0;
    Errada_resposta = 0;
    Resposta_quiz.style.display = 'none';
    document.getElementById(`Perguntas1_quinto`).style.display = 'block';
    NQuestao_quinto.innerHTML = `${contador}`;
}
/* ----------------------------------------------------------------------------------- */