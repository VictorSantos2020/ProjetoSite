var NQuestao = document.getElementById("Numero_questao");
    var NQuestao_segundo = document.getElementById("Numero_questao_segundo");
    var NQuestao_Terceiro = document.getElementById("Numero_questao_terceiro");
    var NQuestao_quarto = document.getElementById("Numero_questao_quarto");
    var NQuestao_quinto = document.getElementById("Numero_questao_quinto");
    var NQuestao_sexto = document.getElementById("Numero_questao_sexto");


    let contador = 1;
    let contador2 = 0;

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

        let Questionario = document.getElementsByClassName('Perguntas')[contador2++];
        Resposta_quiz = document.getElementById(`Perguntas${contador}`);
        let Pontuacao_quiz = document.getElementById("Pontuacao");
        let BoxEstudar = document.getElementById('CaixaEstudar1');

        // Resposta_quiz.style.background = 'blue';
        Resposta_quiz.style.display = 'block';
        Questionario.style.display = 'none';

        if (contador == 11) {
            BoxEstudar.style.display = 'none';
            Pontuacao_quiz.style.display = 'inline-flex';
        }

        if (RespostaF0A.checked || RespostaF1A.checked || RespostaF2A.checked || RespostaF3A.checked || RespostaF4A.checked
            || RespostaF5A.checked || RespostaF6A.checked || RespostaF7A.checked || RespostaF8A.checked || RespostaF9A.checked) {
            Certa_resposta++;
        } else {
            Errada_resposta++;
        }

        console.log('Contador: ', contador);
        console.log('Contador2: ', contador2);

        document.getElementsByTagName('form')[contador2 - 1].reset();

        // console.log('Resposta Certas: ', Certa_resposta);
        // console.log('Resposta Erradas: ', Errada_resposta);
    }

    function Proxima1() {
        NQuestao_segundo.innerHTML = `${++contador}`;

        let Questionario = document.getElementsByClassName('Perguntas_segunda')[contador2++];
        Resposta_quiz = document.getElementById(`Perguntas${contador}_segundo`);
        let Pontuacao_quiz = document.getElementById("Pontuacao_segundo");
        let BoxEstudar = document.getElementById('CaixaEstudar1');

        // Resposta_quiz.style.background = 'blue';
        Resposta_quiz.style.display = 'block';
        Questionario.style.display = 'none';

        if (contador == 11) {
            BoxEstudar.style.display = 'none';
            Pontuacao_quiz.style.display = 'inline-flex';
        }

        if (RespostaB0A.checked || RespostaB1A.checked || RespostaB2A.checked || RespostaB3A.checked || RespostaB4A.checked
            || RespostaB5A.checked || RespostaB6A.checked || RespostaB7A.checked || RespostaB8A.checked || RespostaB9A.checked) {
            Certa_resposta++;
        } else {
            Errada_resposta++;
        }

        // console.log('Contador: ', contador);
        // console.log('Contador2: ', contador2);

        document.getElementsByTagName('form')[contador2 - 1].reset();

        console.log('Resposta Certas: ', Certa_resposta);
        console.log('Resposta Erradas: ', Errada_resposta);
    }

    function Proxima2() {
        NQuestao_Terceiro.innerHTML = `${++contador}`;

        let Questionario = document.getElementsByClassName('Perguntas_terceira')[contador2++];
        Resposta_quiz = document.getElementById(`Perguntas${contador}_terceiro`);
        let Pontuacao_quiz = document.getElementById("Pontuacao_terceiro");
        let BoxEstudar = document.getElementById('CaixaEstudar2');

        // Resposta_quiz.style.background = 'blue';
        Resposta_quiz.style.display = 'block';
        Questionario.style.display = 'none';

        if (contador == 11) {
            BoxEstudar.style.display = 'none';
            Pontuacao_quiz.style.display = 'inline-flex';
        }

        if (RespostaC0A.checked || RespostaC1A.checked || RespostaC2A.checked || RespostaC3A.checked || RespostaC4A.checked
            || RespostaC5A.checked || RespostaC6A.checked || RespostaC7A.checked || RespostaC8A.checked || RespostaC9A.checked) {
            Certa_resposta++;
        } else {
            Errada_resposta++;
        }

        // console.log('Contador: ', contador);
        // console.log('Contador2: ', contador2);

        document.getElementsByTagName('form')[contador2 - 1].reset();

        console.log('Resposta Certas: ', Certa_resposta);
        console.log('Resposta Erradas: ', Errada_resposta);
    }

    function Proxima3() {
        NQuestao_quarto.innerHTML = `${++contador}`;

        let Questionario = document.getElementsByClassName('Perguntas_quarto')[contador2++];
        Resposta_quiz = document.getElementById(`Perguntas${contador}_quarto`);
        let Pontuacao_quiz = document.getElementById("Pontuacao_quarto");
        let BoxEstudar = document.getElementById('CaixaEstudar3');

        // Resposta_quiz.style.background = 'blue';
        Resposta_quiz.style.display = 'block';
        Questionario.style.display = 'none';

        if (contador == 11) {
            BoxEstudar.style.display = 'none';
            Pontuacao_quiz.style.display = 'inline-flex';
        }

        if (RespostaD0A.checked || RespostaD1A.checked || RespostaD2A.checked || RespostaD3A.checked || RespostaD4A.checked
            || RespostaD5A.checked || RespostaD6A.checked || RespostaD7A.checked || RespostaD8A.checked || RespostaD9A.checked) {
            Certa_resposta++;
        } else {
            Errada_resposta++;
        }

        // console.log('Contador: ', contador);
        // console.log('Contador2: ', contador2);

        document.getElementsByTagName('form')[contador2 - 1].reset();

        console.log('Resposta Certas: ', Certa_resposta);
        console.log('Resposta Erradas: ', Errada_resposta);
    }

    function Proxima4() {
        NQuestao_quinto.innerHTML = `${++contador}`;

        let Questionario = document.getElementsByClassName('Perguntas_quinto')[contador2++];
        Resposta_quiz = document.getElementById(`Perguntas${contador}_quinto`);
        let Pontuacao_quiz = document.getElementById("Pontuacao_quinto");
        let BoxEstudar = document.getElementById('CaixaEstudar4');

        // Resposta_quiz.style.background = 'blue';
        Resposta_quiz.style.display = 'block';
        Questionario.style.display = 'none';

        if (contador == 11) {
            BoxEstudar.style.display = 'none';
            Pontuacao_quiz.style.display = 'inline-flex';
        }

        if (RespostaE0A.checked || RespostaE1A.checked || RespostaE2A.checked || RespostaE3A.checked || RespostaE4A.checked
            || RespostaE5A.checked || RespostaE6A.checked || RespostaE7A.checked || RespostaE8A.checked || RespostaE9A.checked) {
            Certa_resposta++;
        } else {
            Errada_resposta++;
        }

        // console.log('Contador: ', contador);
        // console.log('Contador2: ', contador2);

        document.getElementsByTagName('form')[contador2 - 1].reset();

        console.log('Resposta Certas: ', Certa_resposta);
        console.log('Resposta Erradas: ', Errada_resposta);
    }

    function Proxima5() {
        NQuestao_sexto.innerHTML = `${++contador}`;

        let Questionario = document.getElementsByClassName('Perguntas_sexto')[contador2++];
        Resposta_quiz = document.getElementById(`Perguntas${contador}_sexto`);
        let Pontuacao_quiz = document.getElementById("Pontuacao_sexto");
        let BoxEstudar = document.getElementById('CaixaEstudar5');

        // Resposta_quiz.style.background = 'blue';
        Resposta_quiz.style.display = 'block';
        Questionario.style.display = 'none';

        if (contador == 11) {
            BoxEstudar.style.display = 'none';
            Pontuacao_quiz.style.display = 'inline-flex';
        }

        if (RespostaF0A.checked || RespostaF1A.checked || RespostaF2A.checked || RespostaF3A.checked || RespostaF4A.checked
            || RespostaF5A.checked || RespostaF6A.checked || RespostaF7A.checked || RespostaF8A.checked || RespostaF9A.checked) {
            Certa_resposta++;
        } else {
            Errada_resposta++;
        }

        // console.log('Contador: ', contador);
        // console.log('Contador2: ', contador2);

        document.getElementsByTagName('form')[contador2 - 1].reset();

        console.log('Resposta Certas: ', Certa_resposta);
        console.log('Resposta Erradas: ', Errada_resposta);
    }
