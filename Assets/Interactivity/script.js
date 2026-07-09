import getTheme from './theme.js';
import goback from './goBack.js';
import open from './openCard.js';
import pomodoro from './pomodoro.js';
import todo from './todo.js';
import motivation from './motivation.js';
import weather from './weather.js';
import setting from './setting.js';

const taarik = document.querySelector('.date-time p');
const samay = document.querySelector('.date-time h4');

//SETTING DATE AT NAVBAR
function currentDate(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    taarik.textContent = day.toString().padStart(2,'0') + '-' + month.toString().padStart(2,"0") + '-' + year;
}

//SETTING TIME AT NAVBAR
setInterval(()=>{
    let date = new Date();
    const hours24 = date.getHours();
    let hours = date.getHours() % 12 || 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    samay.textContent = hours.toString().padStart(2,"0") + ':' + minutes.toString().padStart(2,"0") + ':' + seconds.toString().padStart(2,"0") + " " + ampm;
},1000);

currentDate();

//RESETTING DATA
const resetAccount = document.querySelector('.reset-account button');
const reset = document.querySelector('.reset-account');
resetAccount.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();
    const para = document.createElement('p');
    para.classList.add('reset-warning');
    reset.appendChild(para);
    para.textContent = 'ACCOUNT RESET SUCCESSFULLY';
    para.style.marginTop = '10px';
    para.style.color = 'Red';
})



goback();
getTheme();
open();
pomodoro();
todo();
motivation();
weather();
setting();