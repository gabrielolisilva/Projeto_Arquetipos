/* const botao = document.querySelector('#botao')
let radios = document.body.querySelectorAll("input[type='radio']");
let resultado = []
let opcoes = []

for (let i = 0; i < radios.length; i++){
    radios[i].onclick = function(){
        puxarParaArray(this.value)
    }
}

function puxarParaArray (i){
    console.log(i)
    resultado.push(i)
}

botao.addEventListener('click', function(e){
    let inocente = 0;
    let orfao = 0;
    let heroi = 0;
    let cuidador = 0;
    let explorador = 0;
    let rebelde = 0;
    let amante = 0;
    let criador = 0;
    let comediante = 0;
    let sabio = 0;
    let mago = 0;
    let governante = 0;

    e.preventDefault();
    if(resultado.length === 0 || resultado.length < 40) {
        alert('Você deve responder todas as perguntas!');
        return
    };
    

    for(let valor of resultado){
        if(valor === 'o inocente') inocente ++;
        if(valor === 'órfão') orfao ++;
        if(valor === 'herói') heroi ++;
        if(valor === 'o cuidador') cuidador ++;
        if(valor === 'o explorador') explorador ++;
        if(valor === 'o rebelde') rebelde ++;
        if(valor === 'o amante') amante ++;
        if(valor === 'o criador') criador ++;
        if(valor === 'o comediante') comediante ++;
        if(valor === 'o sábio') sabio ++;
        if(valor === 'o mago') mago ++;
        if(valor === 'o governante') governante ++;
    }

    opcoes.push(inocente, orfao, heroi, cuidador, explorador, rebelde, amante, criador, comediante, sabio, mago, governante);
    
    const maxValue = opcoes.reduce (function(prev, current) {
        return prev > current ? prev : current;
    })

    if(opcoes[0] === maxValue) abrirPágina('./páginas/inocente.html');
    if(opcoes[1] === maxValue) abrirPágina('./páginas/órfão.html');
    if(opcoes[2] === maxValue) abrirPágina('./páginas/herói.html');
    if(opcoes[3] === maxValue) abrirPágina('./páginas/cuidador.html');
    if(opcoes[4] === maxValue) abrirPágina('./páginas/explorador.html');
    if(opcoes[5] === maxValue) abrirPágina('./páginas/rebelde.html');
    if(opcoes[6] === maxValue) abrirPágina('./páginas/amante.html');
    if(opcoes[7] === maxValue) abrirPágina('./páginas/criador.html');
    if(opcoes[8] === maxValue) abrirPágina('./páginas/comediante.html');
    if(opcoes[9] === maxValue) abrirPágina('./páginas/sábio.html');
    if(opcoes[10] === maxValue) abrirPágina('./páginas/mago.html');
    if(opcoes[11] === maxValue) abrirPágina('./páginas/governante.html');
})


function abrirPágina(nomePagina){
    window.location.href = `${nomePagina}`;
}
 */

const quiz = document.getElementById("container");
const question = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const f_text = document.getElementById("f_text");
const g_text = document.getElementById("g_text");
const h_text = document.getElementById("h_text");
const i_text = document.getElementById("i_text");
const j_text = document.getElementById("j_text");
const k_text = document.getElementById("k_text");
const l_text = document.getElementById("l_text");

let current_quiz = 0;

async function loadQuiz() {
  deselectOptions();
  const quizData = await fetch("http://localhost:3500/quizData").then((resp) =>
    resp.json()
  );
  const currentDataQuiz = quizData[current_quiz];
  question.innerHTML = currentDataQuiz.question;
  a_text.innerHTML = currentDataQuiz.a;
  b_text.innerHTML = currentDataQuiz.b;
  c_text.innerHTML = currentDataQuiz.c;
  d_text.innerHTML = currentDataQuiz.d;
  e_text.innerHTML = currentDataQuiz.e;
  f_text.innerHTML = currentDataQuiz.f;
  g_text.innerHTML = currentDataQuiz.g;
  h_text.innerHTML = currentDataQuiz.h;
  i_text.innerHTML = currentDataQuiz.i;
  j_text.innerHTML = currentDataQuiz.j;
  k_text.innerHTML = currentDataQuiz.k;
  l_text.innerHTML = currentDataQuiz.l;
}

function deselectOptions() {
  answersEls.forEach((answersEl) => (answersEl.checked = false));
}

loadQuiz();
