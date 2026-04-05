// тема
document.getElementById("theme").onclick = () => {
    document.body.classList.toggle("light");
};

// бургер
document.getElementById("burger").onclick = () => {
    document.getElementById("menu").classList.toggle("show");
};

// прокрутка
function go(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// калькулятор
function calc(){
    let size = document.getElementById("size").value;
    let speed = document.getElementById("speed").value;

    if(!size || !speed){
        document.getElementById("calcResult").innerHTML = "Введите данные!";
        return;
    }

    let time = (size * 8) / speed;

    document.getElementById("calcResult").innerHTML =
        "⏱ Время загрузки: " + time.toFixed(2) + " сек";

    localStorage.setItem("lastCalc", time);
}

// загрузка сохраненного
window.onload = () => {
    let saved = localStorage.getItem("lastCalc");
    if(saved){
        document.getElementById("calcResult").innerHTML =
            "Последний расчет: " + saved + " сек";
    }
};

// тест
const quiz = [
    {q:"Что такое пакет?",a:["Файл","Часть данных","Сайт"],c:1},
    {q:"Что делает роутер?",a:["Передает","Удаляет","Хранит"],c:0},
    {q:"Что такое облако?",a:["Сервер","Диск","Программа"],c:0}
];

let i=0, score=0;

function load(){
    let q = quiz[i];
    document.getElementById("q").innerText = q.q;
    let aDiv = document.getElementById("a");
    aDiv.innerHTML="";

    q.a.forEach((t,ind)=>{
        let b=document.createElement("button");
        b.innerText=t;
        b.onclick=()=>check(ind);
        aDiv.appendChild(b);
    });
}

function check(ind){
    if(ind===quiz[i].c) score++;
    i++;
    if(i<quiz.length) load();
    else document.getElementById("res").innerText="Баллы: "+score;
}

load();

// галерея
function openModal(src){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modalImg").src=src;
}
function closeModal(){
    document.getElementById("modal").style.display="none";
}
// анимация появления
const blocks = document.querySelectorAll(".block");

window.addEventListener("scroll", () => {
    blocks.forEach(block => {
        const pos = block.getBoundingClientRect().top;

        if(pos < window.innerHeight - 100){
            block.classList.add("show");
        }
    });
});
const chart = document.getElementById("chart");
const ctx2 = chart.getContext("2d");

ctx2.fillRect(10,150,50,50);
ctx2.fillRect(80,100,50,100);
ctx2.fillRect(150,50,50,150);
