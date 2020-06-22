var NQuestao = document.getElementById("Numero_questao");
var NQuestao_segundo = document.getElementById("Numero_questao_segundo");
var NQuestao_Terceiro = document.getElementById("Numero_questao_terceiro");
var NQuestao_quarto = document.getElementById("Numero_questao_quarto");
var NQuestao_quinto = document.getElementById("Numero_questao_quinto");
var NQuestao_sexto = document.getElementById("Numero_questao_sexto");


let contador = 1;
let contador2 = 0;
let contador_segundo = 10;
let contador_terceiro = 20;
let contador_quarto = 30;
let contador_quinto = 40;
let contador_sexto = 50;


var Certa_resposta = 0;
var Errada_resposta = 0;

NQuestao.innerHTML = `${contador}`;
NQuestao_segundo.innerHTML = `${contador}`;
NQuestao_Terceiro.innerHTML = `${contador}`;
NQuestao_quarto.innerHTML = `${contador}`;
NQuestao_quinto.innerHTML = `${contador}`;
NQuestao_sexto.innerHTML = `${contador}`;

let Resposta_quiz;

function Proxima0() {
    NQuestao.innerHTML = `${++contador}`;

    let Questionario = document.getElementsByClassName('Perguntas')[++contador2];
    Resposta_quiz = document.getElementById(`Perguntas${contador}`);
    let Pontuacao_quiz = document.getElementById("Pontuacao");
    let BoxEstudar = document.getElementById('CaixaEstudar0');
    
   
    // Resposta_quiz.style.background = 'blue';
   if (contador <= 10) {
        Questionario.style.display = 'none';    
         Resposta_quiz.style.display = 'block';
    }else{
         BoxEstudar.style.display = 'none';
        Pontuacao_quiz.style.display = 'inline-flex';
    }
    

    if (RespostaA0A.checked || RespostaA1A.checked || RespostaA2A.checked || RespostaA3A.checked || RespostaA4A.checked
        || RespostaA5A.checked || RespostaA6A.checked || RespostaA7A.checked || RespostaA8A.checked || RespostaA9A.checked) {
        Certa_resposta++;
    } else {
        Errada_resposta++; 
    }

    // console.log('Contador: ', contador);
    // console.log('Contador2: ', contador2);
    Corretas.innerHTML = `${Certa_resposta}`;
    Incorretas.innerHTML = `${Errada_resposta}`;

    document.getElementsByTagName('form')[contador2 - 1].reset();

    console.log('Resposta Certas: ', Certa_resposta);
    console.log('Resposta Erradas: ', Errada_resposta);
}

function Proxima1() {
    NQuestao_segundo.innerHTML = `${++contador}`;
    contador_segundo++;
    let Questionario = document.getElementsByClassName('Perguntas_segunda')[++contador2];
    Resposta_quiz = document.getElementById(`Perguntas${contador}_segundo`);
    let Pontuacao_quiz = document.getElementById("Pontuacao_segundo");
    let BoxEstudar = document.getElementById('CaixaEstudar1');

    // Resposta_quiz.style.background = 'blue';
    if (contador <= 10) {
        Questionario.style.display = 'none';    
         Resposta_quiz.style.display = 'block';
    }else{
         BoxEstudar.style.display = 'none';
        Pontuacao_quiz.style.display = 'inline-flex';
    }

    if (RespostaB0A.checked || RespostaB1A.checked || RespostaB2A.checked || RespostaB3A.checked || RespostaB4A.checked
        || RespostaB5A.checked || RespostaB6A.checked || RespostaB7A.checked || RespostaB8A.checked || RespostaB9A.checked) {
        Certa_resposta++;
    } else {
        Errada_resposta++;
    }

    Corretas_segundo.innerHTML = `${Certa_resposta}`;
    Incorretas_segundo.innerHTML = `${Errada_resposta}`;

    // console.log('Contador: ', contador);
    // console.log('Contador2: ', contador2);

    document.getElementsByTagName('form')[contador_segundo - 1].reset();

    console.log('Resposta Certas: ', Certa_resposta);
    console.log('Resposta Erradas: ', Errada_resposta);
}

function Proxima2() {
    NQuestao_Terceiro.innerHTML = `${++contador}`;
    contador_terceiro++;

    let Questionario = document.getElementsByClassName('Perguntas_terceira')[contador2++];
    Resposta_quiz = document.getElementById(`Perguntas${contador}_terceiro`);
    let Pontuacao_quiz = document.getElementById("Pontuacao_terceiro");
    let BoxEstudar = document.getElementById('CaixaEstudar2');

    // Resposta_quiz.style.background = 'blue';
    if (contador <= 10) {
        Questionario.style.display = 'none';    
         Resposta_quiz.style.display = 'block';
    }else{
         BoxEstudar.style.display = 'none';
        Pontuacao_quiz.style.display = 'inline-flex';
    }

    if (RespostaC0A.checked || RespostaC1A.checked || RespostaC2A.checked || RespostaC3A.checked || RespostaC4A.checked
        || RespostaC5A.checked || RespostaC6A.checked || RespostaC7A.checked || RespostaC8A.checked || RespostaC9A.checked) {
        Certa_resposta++;
    } else {
        Errada_resposta++;
    }

    Corretas_terceiro.innerHTML = `${Certa_resposta}`;
    Incorretas_terceiro.innerHTML = `${Errada_resposta}`;
    // console.log('Contador: ', contador);
    // console.log('Contador2: ', contador2);

    document.getElementsByTagName('form')[contador_terceiro - 1].reset();

    console.log('Resposta Certas: ', Certa_resposta);
    console.log('Resposta Erradas: ', Errada_resposta);
}

function Proxima3() {
    NQuestao_quarto.innerHTML = `${++contador}`;
    contador_quarto++;

    let Questionario = document.getElementsByClassName('Perguntas_quarto')[contador2++];
    Resposta_quiz = document.getElementById(`Perguntas${contador}_quarto`);
    let Pontuacao_quiz = document.getElementById("Pontuacao_quarto");
    let BoxEstudar = document.getElementById('CaixaEstudar3');

    if (contador <= 10) {
        Questionario.style.display = 'none';    
         Resposta_quiz.style.display = 'block';
    }else{
         BoxEstudar.style.display = 'none';
        Pontuacao_quiz.style.display = 'inline-flex';
    }

    if (RespostaD0A.checked || RespostaD1A.checked || RespostaD2A.checked || RespostaD3A.checked || RespostaD4A.checked
        || RespostaD5A.checked || RespostaD6A.checked || RespostaD7A.checked || RespostaD8A.checked || RespostaD9A.checked) {
        Certa_resposta++;
    } else {
        Errada_resposta++;
    }

    Corretas_quarto.innerHTML = `${Certa_resposta}`;
    Incorretas_quarto.innerHTML = `${Errada_resposta}`;
    // console.log('Contador: ', contador);
    // console.log('Contador2: ', contador2);

    document.getElementsByTagName('form')[contador_quarto - 1].reset();

    console.log('Resposta Certas: ', Certa_resposta);
    console.log('Resposta Erradas: ', Errada_resposta);
}

function Proxima4() {
    NQuestao_quinto.innerHTML = `${++contador}`;
    contador_quinto++;
    let Questionario = document.getElementsByClassName('Perguntas_quinto')[++contador2];
    Resposta_quiz = document.getElementById(`Perguntas${contador}_quinto`);
    let Pontuacao_quiz = document.getElementById("Pontuacao_quinto");
    let BoxEstudar = document.getElementById('CaixaEstudar4');

    // Resposta_quiz.style.background = 'blue';
    if (contador <= 10) {
        Questionario.style.display = 'none';    
         Resposta_quiz.style.display = 'block';
    }else{
         BoxEstudar.style.display = 'none';
        Pontuacao_quiz.style.display = 'inline-flex';
    }

    if (RespostaE0A.checked || RespostaE1A.checked || RespostaE2A.checked || RespostaE3A.checked || RespostaE4A.checked
        || RespostaE5A.checked || RespostaE6A.checked || RespostaE7A.checked || RespostaE8A.checked || RespostaE9A.checked) {
        Certa_resposta++;
    } else {
        Errada_resposta++;
    }

    Corretas_quinto.innerHTML = `${Certa_resposta}`;
    Incorretas_quinto.innerHTML = `${Errada_resposta}`;
    // console.log('Contador: ', contador);
    // console.log('Contador2: ', contador2);

    document.getElementsByTagName('form')[contador_quinto - 1].reset();

    console.log('Resposta Certas: ', Certa_resposta);
    console.log('Resposta Erradas: ', Errada_resposta);
}

function Proxima5() {
    NQuestao_sexto.innerHTML = `${++contador}`;
    contador_sexto++;

    let Questionario = document.getElementsByClassName('Perguntas_sexto')[contador2++];
    Resposta_quiz = document.getElementById(`Perguntas${contador}_sexto`);
    let Pontuacao_quiz = document.getElementById("Pontuacao_sexto");
    let BoxEstudar = document.getElementById('CaixaEstudar5');

    if (contador <= 10) {
        Questionario.style.display = 'none';    
         Resposta_quiz.style.display = 'block';
    }else{
         BoxEstudar.style.display = 'none';
        Pontuacao_quiz.style.display = 'inline-flex';
    }

    if (RespostaF0A.checked || RespostaF1A.checked || RespostaF2A.checked || RespostaF3A.checked || RespostaF4A.checked
        || RespostaF5A.checked || RespostaF6A.checked || RespostaF7A.checked || RespostaF8A.checked || RespostaF9A.checked) {
        Certa_resposta++;
    } else {
        Errada_resposta++;
    }

    Corretas_sexto.innerHTML = `${Certa_resposta}`;
    Incorretas_sexto.innerHTML = `${Errada_resposta}`;
    // console.log('Contador: ', contador);
    // console.log('Contador2: ', contador2);

    document.getElementsByTagName('form')[contador_sexto - 1].reset();

    console.log('Resposta Certas: ', Certa_resposta);
    console.log('Resposta Erradas: ', Errada_resposta);
}
