export default function goals(){
    const form = document.querySelector('#goal-section form');
    const goalInput = document.querySelector('.goal-input');

    const totalGoals = document.querySelector('.progress-value p .total');
    const completedGoals = document.querySelector('.progress-value p .completed');
    const progressCircle = document.querySelector('.progress-circle');


    let compGoal = 0;
    let goalsTodo = JSON.parse(localStorage.getItem('goals')) ?? [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let goalTodo = e.target[0].value;

        goalsTodo.push(
            {
                id: crypto.randomUUID(),
                todo: goalTodo,
                isCheck: false,
            }
        )
        localStorage.setItem('goals', JSON.stringify(goalsTodo));
        e.target[0].value = '';
        countComp();
        progress();
        renderGoal(goalsTodo);
    })

    function renderGoal(goalsTodo){
        goalInput.innerHTML = '';
        goalsTodo.forEach(item => {
            let {id, todo, isCheck} = item;
            goalInput.innerHTML+=`
        <div class="goal-done ${isCheck ? 'completed' : ''}" data-id="${id}">
                        <p>${todo}</p>
                        <div class="marker">
                            <i class="ri-check-line check"></i>
                            <i class="ri-pencil-line edit"></i>
                            <i class="ri-close-large-line del"></i>
                        </div>
                    </div>
        `;
        })

        completedGoals.textContent = compGoal.toString();
        totalGoals.textContent = goalsTodo.length.toString();
    }
    countComp();
    progress();
    renderGoal(goalsTodo);

    goalInput.addEventListener('click', (e) => {
        if(e.target.closest('.del')){
            const goalElem = e.target.closest('.goal-done');
            const id = goalElem.dataset.id;
            deleteGoals(id)
        }else if(e.target.closest('.check')){
            const goalElem = e.target.closest('.goal-done');
            const id = goalElem.dataset.id;
            checkGoals(id)
        }
    })

    function deleteGoals(id){
        goalsTodo = goalsTodo.filter(item => item.id !== id);
        localStorage.setItem('goals', JSON.stringify(goalsTodo));
        countComp();
        progress();
        renderGoal(goalsTodo);
    }

    function checkGoals(id){
        const goal = goalsTodo.find((item) => item.id === id);
        goal.isCheck = !goal.isCheck;
        localStorage.setItem('goals', JSON.stringify(goalsTodo));
        countComp();
        progress();
        renderGoal(goalsTodo);
    }

    function countComp(){
        compGoal = goalsTodo.filter(item => item.isCheck).length;
    }

    function progress(){
        let endCount = 0;
        let startCount = 0;

        endCount = Math.floor(((compGoal/goalsTodo.length)*100)/100*360);
        let interval = setInterval(()=>{
            if(startCount === endCount){
                clearInterval(interval);
            }
            startCount++;
            progressCircle.style.background = `conic-gradient(limegreen ${startCount}deg, white 0deg)`;
        },5);
    }
}