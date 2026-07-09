export default function goBack() {
    const todo = document.getElementById('todo');
    const motivation = document.getElementById('motivation');
    const goBack = document.querySelectorAll('.ri-arrow-go-back-line');
    const planner = document.getElementById('planner');
    const pomodoro = document.getElementById('pomodoro');
    const goals = document.getElementById('goals');
    const setting = document.querySelector('#settings');

    goBack.forEach((item, index) => {
        item.addEventListener('click', () => {
            if(index === 0){
                todo.style.display = 'none';
            }
            else if(index === 1){
                planner.style.display = 'none';
            }
            else if(index === 2){
                motivation.style.display = 'none';
            }
            else if(index === 3){
                pomodoro.style.display = 'none';
            }
            else if(index === 4){
                goals.style.display = 'none';
            }
            else if(index === 5){
                setting.style.display = 'none';
            }
        })
    })
}