export default function todo(){
    let todoArr = JSON.parse(localStorage.getItem('todo')) ?? [];

    const tasks = document.querySelector('.tasks');
    const delTasks = document.querySelector('.tasks-del');
    const form = document.querySelector('.title form');
    const taskDel = document.querySelector('.tasks-del');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let todoText = e.target[0].value;
        todoArr.push({
            id: crypto.randomUUID(),
            todo: todoText,
            isImp: false,
            isCheck: false,
            isDelete: false,
        })
        localStorage.setItem('todo', JSON.stringify(todoArr));
        renderTodo(todoArr);
        e.target[0].value = '';
        console.log(todoArr);
    })

    function renderTodo(todoArr){
        tasks.innerHTML = '';
        todoArr.forEach((item) => {
            let {id, todo, isImp, isCheck, isDelete} = item;
            let html = `
        <div class="task" data-id = "${id}">
                            <div class="task-text">
                                <p>${todo}</p>
                            </div>
                            <div class="marker">
                                <div class="imp">
                                    <i class="ri-star-line"></i>
                                </div>
                                <div class="check">
                                    <i class="ri-check-line"></i>
                                </div>
                                <div class="del">
                                    <i class="ri-close-circle-line"></i>
                                </div>
                            </div>
                        </div>
        `;

            tasks.innerHTML += html;
        })
    }
    renderTodo(todoArr);

    tasks.addEventListener('click', (e) => {
        if (e.target.closest('.del')) {
            const taskEl = e.target.closest('.task');
            const id = taskEl.dataset.id;
            deleteTodo(id);
        }
    });

    const delTodo = JSON.parse(localStorage.getItem('delTodo')) ?? [];
    function deleteTodo(id){
        let delArr = todoArr.find(item => item.id === id)
        todoArr = todoArr.filter(item => item.id !== id)
        localStorage.setItem('todo', JSON.stringify(todoArr));
        delTodo.push(delArr);
        localStorage.setItem('delTodo', JSON.stringify(delTodo));
        //const deletedArr = JSON.parse(localStorage.getItem('delTodo'));
        console.log(delTodo);
        renderDelete(delTodo);
        renderTodo(todoArr);
        }

        function renderDelete(delArr){
            taskDel.innerHTML = '';
        delArr.forEach((item) => {
            let {id, todo, isImp, isCheck, isDelete} = item;

            taskDel.innerHTML += `
            <div class="task" data-id = "${id}">
                            <div class="task-text">
                                <p>${todo}</p>
                            </div>
                        </div>
            `;
        })
        }
    }