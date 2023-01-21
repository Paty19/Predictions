let text="Узнай, что ждет тебя...Нажми...";
let i=0;
let speed=100;
let textDelay=200
function type(){
    if(i<text.length){
        document.querySelector("#btn").textContent+=text.charAt(i);
        i++;
        setTimeout(type,speed);
      }
      else{
          setTimeout(erase,textDelay);
      }
    }

    function erase(){
        if(i>0){
            document.querySelector("#btn").textContent=text.substring(0,i-1);
            i--;
            setTimeout(erase,textDelay);
          }
          else{
           i=0;
           setTimeout(type,speed);
          }
        }
   
type();


const buttonTwo = document.querySelector("#myButton");
const audio=document.querySelector("#myAudio");
buttonTwo.addEventListener("click", function() {
if(audio.paused){
    audio.play();
}
else{
    audio.pause(); 
}
})


const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
    " Действуйте, даже если для этого нужен прыжок в неизвестность.",
    " Не пытайтесь навязывать свою волю.",
    " Внимательно прислушивайтесь к подсказкам судьбы.",
    " С новой весной в жизнь приходит новая любовь.",
    " Звезды к вам благосклонны.",
    " Вскорости бюджет вашей семьи будет пополнен.",
    " Исполнение желаний превзойдет все ожидания.",
    " Будьте инициативнее – и удача совсем скоро станет вашей спутницей."
]





button.addEventListener("click", () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  par.style.display = "block";
  par.textContent = randomQuote;
  const audio=document.querySelector("#myAudio"); 
document.querySelector("#myAudio").play(); 
})



