

const userId = window.location.href.split("/")[4]

const form = document.getElementById("createForm")

//function


function createTask(ev){
    ev.preventDefault();
    const data = new FormData(ev.target);
    fetch("/api/user/task/add", {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

        body: JSON.stringify({
            userId: userId,
            name:data.get("name"),
            category: data.get("category"),
            description: data.get("description"),
            done: false,
        })
    })
    .then(response=> document.location.href='./tasks')
    .catch((err) => {
        console.log(err);
    })
}

//main

form.addEventListener("submit",createTask)

const userId = window.location.href.split("/")[4]

const form = document.getElementById(createForm)

//function


function createTask(ev){
    ev.preventDefault();
    const data = new FormData(ev.target);

    fetch("/api/user/task/add", {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

        body: JSON.stringify({
            userId: userId,
            name:data.get("name"),
            category: data.get("category"),
            description: data.get("description"),
            done: false,
        })
    }).catch((err) => {
        console.log(err);
    })
}

//main

form.addEventListener("submit",createTask)