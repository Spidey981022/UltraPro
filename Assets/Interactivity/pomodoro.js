export default function pomodoro() {
    const play = document.querySelector('.timer-media .play');
    const pause = document.querySelector('.timer-media .pause');
    const stop = document.querySelector('.timer-media .stop');
    const timer = document.querySelector('.timer p');

    let alarm = new Audio('./Assets/Items/Pomodoro.mp3');
    let time = 1500;
    let interval;

    function renderTime(min, sec){
        timer.innerText = `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;
    }

    play.addEventListener('click', () => {
        if(interval){
            clearInterval(interval);
        }
        interval = setInterval(() => {
            time--;
            let min = Math.floor(time/60);
            let sec = Math.floor(time%60);
            renderTime(min, sec);

            if(time <= 0){
                alarm.play();
                console.log(Boolean(alarm));
                clearInterval(interval);
            }
        },1000);
    });

    pause.addEventListener('click', () => {
        clearInterval(interval);
    })

    stop.addEventListener('click', () => {
        if(alarm){
            alarm.pause();
        }
        clearInterval(interval);
        renderTime(25, 0);
        time = 1500;
    })
}