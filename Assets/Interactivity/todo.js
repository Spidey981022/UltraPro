export default function todo() {
    let todoArr = JSON.parse(localStorage.getItem('todo')) ?? [];

    const tasks = document.querySelector('.tasks');
    // const delTasks = document.querySelector('.tasks-del');
    const form = document.querySelector('.title form');
    const taskDel = document.querySelector('.tasks-del');
    const taskCheck = document.querySelector('.tasks-comp');
    const taskImp = document.querySelector('.tasks-imp');
    const taskNum = document.querySelector('.task-number h1');

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
        taskNumber();
    })

    function renderTodo(todoArr) {
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
        } else if (e.target.closest('.check')) {
            const taskEl = e.target.closest('.task');
            const id = taskEl.dataset.id;
            checkTodoArr(id);
        } else if (e.target.closest('.imp')) {
            const taskEl = e.target.closest('.task');
            const id = taskEl.dataset.id;
            impTodoArr(id);
        }
    });

    //DELETED TASK BOX
    const delTodo = JSON.parse(localStorage.getItem('delTodo')) ?? [];
    function deleteTodo(id) {
        let delArr = todoArr.find(item => item.id === id)
        todoArr = todoArr.filter(item => item.id !== id)
        localStorage.setItem('todo', JSON.stringify(todoArr));
        delTodo.push(delArr);
        localStorage.setItem('delTodo', JSON.stringify(delTodo));
        //const deletedArr = JSON.parse(localStorage.getItem('delTodo'));
        renderDelete(delTodo);
        renderTodo(todoArr);
        taskNumber();
    }

    function renderDelete(delArr) {
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


    //COMPLETED TASK BOX
    const checkTodo = JSON.parse(localStorage.getItem('checkedTodo')) ?? [];
    function checkTodoArr(id) {
        const checkItem = todoArr.find(item => item.id === id)
        checkTodo.push(checkItem);
        localStorage.setItem('checkedTodo', JSON.stringify(checkTodo));
        renderCheck(checkTodo)
    }

    function renderCheck(checkArr) {
        taskCheck.innerHTML = '';
        checkArr.forEach((item) => {
            let {id, todo, isImp, isCheck, isDelete} = item;

            taskCheck.innerHTML += `
            <div class="task" data-id = "${id}">
                            <div class="task-text">
                                <p>${todo}</p>
                            </div>
                        </div>
            `;
        })
    }

    //IMPORTANT TASK BOX
    const impTodo = JSON.parse(localStorage.getItem('importantTodo')) ?? [];
    function impTodoArr(id) {
        const impItem = todoArr.find(item => item.id === id)
        impTodo.push(impItem);
        localStorage.setItem('importantTodo', JSON.stringify(impTodo));
        renderImp(impTodo)
    }

    function renderImp(impArr) {
        taskImp.innerHTML = '';
        impArr.forEach((item) => {
            let {id, todo, isImp, isCheck, isDelete} = item;

            taskImp.innerHTML += `
            <div class="task" data-id = "${id}">
                            <div class="task-text">
                                <p>${todo}</p>
                            </div>
                        </div>
            `;
        })
    }

    function taskNumber(){
    taskNum.textContent = todoArr.length.toString();
    }

    taskNumber();
    renderImp(impTodo);
    renderDelete(delTodo);
    renderCheck(checkTodo)
}