export default function openCard() {
 const card = document.querySelectorAll('.card i');
 const motivation = document.getElementById('motivation');
 const planner = document.getElementById('planner');
 const pomodoro = document.getElementById('pomodoro');
 const goals = document.getElementById('goals');
 const todo = document.getElementById('todo');
    card.forEach((item, index) => {
        item.addEventListener('click', () => {
            if(index === 0){
               todo.style.display = 'block';
            }
            else if(index === 1){
                planner.style.display = 'block';
            }
            else if(index === 2){
                motivation.style.display = 'block';
            }
            else if(index === 3){
                pomodoro.style.display = 'block';
            }
            else if(index === 4){
                goals.style.display = 'block';
            }
        })
    })
}