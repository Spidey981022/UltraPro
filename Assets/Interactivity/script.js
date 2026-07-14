import getTheme from './theme.js';
import goback from './goBack.js';
import open from './openCard.js';
import pomodoro from './pomodoro.js';
import todo from './todo.js';
import motivation from './motivation.js';
import weather from './weather.js';
import setting from './setting.js';
import goals from './goals.js';
import sideNavigation from './sideNavigation.js';
import planner, {calendar} from './planner.js';

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

//DYNAMIC BACKGROUND

const dynamicElement = document.querySelector('.dynamicDay');
function dynamicDay(){
    const dayTime = '06:00';
    const afterTime = '12:00';
    const eveTime = '16:00';
    const nightTime = '20:00';
    console.log(dayTime);
    setInterval(()=>{
        const time = new Date();
        const currentTime = time.toLocaleTimeString(
            [], {hour12: false}
        );
        if(nightTime <= currentTime) {
            dynamicElement.innerHTML =
            `<img src="https://i.pinimg.com/originals/b9/08/86/b90886beff7a7664af28e02792674ce7.gif" alt="">`;
                `<!--<img src="https://i.pinimg.com/736x/50/9b/08/509b083d81333ef29bfa8e527f08011a.jpg" alt="">-->`;
        }
        else if(eveTime <= currentTime){
            dynamicElement.innerHTML =
                `<img src="https://i.pinimg.com/originals/65/ff/25/65ff25ffbe3786b2de094f7051bbd873.gif" alt="">`;
        }
        else if(afterTime <= currentTime){
            dynamicElement.innerHTML =
                `<img src="https://i.pinimg.com/originals/ca/cb/5c/cacb5ced00608d768cc17af4f1916bb8.gif" alt="">`;
        }
        else if(dayTime <= currentTime){
            dynamicElement.innerHTML =
                `<img src="https://i.pinimg.com/originals/44/09/b6/4409b640649e255e9814b74e1231cda2.gif" alt="">`;
        }
    },1000);
}
dynamicDay();

sideNavigation();
goback();
getTheme();
open();
pomodoro();
todo();
motivation();
weather();
setting();
goals();
planner();
calendar();