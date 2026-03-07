const WHATSAPP_NUMBER = "5533987051264"; // exemplo: 5531999999999

function resposta(){

document.querySelector(".container").innerHTML = `
<h1>Então está combinado 🌙</h1>

<p>
Às vezes o universo sorri<br>
quando duas histórias decidem caminhar juntas.
</p>

<p>
Estou te chamando no WhatsApp ✨
</p>
`;

showHearts();
showFireworks();

setTimeout(()=>{
window.location.href="https://wa.me/"+WHATSAPP_NUMBER+"?text=Eu%20aceito%20o%20convite%20🌷";
},4000);

}

function createFlower(){

const flower=document.createElement("div");

flower.classList.add("flower");

flower.innerHTML="🌷";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=(6+Math.random()*4)+"s";

flower.style.fontSize=(18+Math.random()*12)+"px";

document.body.appendChild(flower);

setTimeout(()=>flower.remove(),10000);

}

setInterval(createFlower,900);

function createStars(){

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.classList.add("star");

star.style.top=Math.random()*100+"vh";

star.style.left=Math.random()*100+"vw";

star.style.animationDuration=(1+Math.random()*2)+"s";

document.body.appendChild(star);

}

}

function showHearts(){

for(let i=0;i<25;i++){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";
heart.style.bottom="20px";
heart.style.animationDelay=(Math.random()*1)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),3000);

}

}

function showFireworks(){

for(let i=0;i<80;i++){

const spark=document.createElement("div");

spark.classList.add("spark");

spark.style.left=Math.random()*100+"vw";
spark.style.top=Math.random()*100+"vh";

document.body.appendChild(spark);

setTimeout(()=>spark.remove(),1200);

}

}

createStars();
