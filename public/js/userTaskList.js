import { createMarkup } from '/js/utils/dom.js'

const doneTaskC = document.getElementById("done-tasks-list")
const nDoneTaskC = document.getElementById("n-done-tasks-list")
const userId = window.location.href.split("/")[4]

//function

async function loadTasks() {
    try {
        const tasks = await (await fetch(`/api/user/${userId}/tasks`)).json()
        tasks.forEach(task => renderTask(task))
    } catch (error) {
        console.log(error);
    }
}

function renderTask(task) {
    const parent = task.done ? doneTaskC : nDoneTaskC
    const taskA = createMarkup("article", "", parent, [
        { value: task.id },
        { "aria-label": task.category },
        { class: `${task.category} task-box` }
    ]);

    const change = createMarkup("input", "", taskA, [
        { "aria-label": `${task.done ? "Marquer comme fini" : "Marqué comme non fini"}` },
        { type: "checkbox" },
    ])
    if (task.done) {
        change.setAttribute("checked", "true");
    }
    change.addEventListener("click", changeStatus)


    createMarkup("h3", task.name, taskA)

    createMarkup("button", "Détails", taskA).addEventListener("click", redirectDetails);

}

function changeStatus(ev) {
    const task = {
        id: ev.target.parentNode.getAttribute("value"),
        done: (!ev.target.hasAttribute("checked")),
    };
    if (task.done) {
        ev.target.setAttribute("checked", "true");
        doneTaskC.appendChild(ev.target.parentNode);
    } else {
        ev.target.removeAttribute("checked");
        nDoneTaskC.appendChild(ev.target.parentNode);
    }

    fetch("/api/user/task/done", {
        method: "PATCH",
        mode: "cors",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

        body: JSON.stringify({
            userId: userId,
            taskId: task.id,
            done: task.done
        })
    }).catch((err) => {
        console.log(err);
    })

}

function redirectDetails(ev) {
    window.location.replace(`/user/${userId}/task/${ev.target.parentNode.value}`)
}

//main
loadTasks()