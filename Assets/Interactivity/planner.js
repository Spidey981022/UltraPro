export default function planner() {
    const planList = document.querySelectorAll('.plan-list');
    const buttons = document.querySelectorAll('.btn');

    let planArr = JSON.parse(localStorage.getItem('plansStorage')) ?? [];

    function renderPlan(){
        planList.forEach((list) => {
            console.log(list);
            const time = list.dataset.time;
            const btn = list.querySelector('.btn');

            list.querySelectorAll('.plan').forEach((item) => {
                return item.remove();
            })

            const plans = planArr.filter(item => {
               return item.time === time;
            })

            plans.forEach(plan => {
                const element = document.createElement('textarea');
                element.classList.add('plan');
                element.placeholder="What's your plan?";
                element.value = plan.content;

                element.addEventListener('input', (e) => {
                    plan.content = e.target.value;
                    localStorage.setItem('plansStorage', JSON.stringify(planArr));
                })

                element.addEventListener('dblclick', (e) => {
                    planArr = planArr.filter((item) => {
                        return item.id !== plan.id ;
                    })
                    localStorage.setItem('plansStorage', JSON.stringify(planArr));
                    renderPlan();
                })

                list.insertBefore(element, btn);
            })
        })
    }
    renderPlan();

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parentPlan = e.target.closest('.plan-list');
            planArr.push(
                {
                    id: Date.now(),
                    content: '',
                    time: parentPlan.dataset.time,
                }
            )
            localStorage.setItem('plansStorage', JSON.stringify(planArr));
            renderPlan();
        })
    })

}