const form = document.getElementById("user-login")

//functions
async function fillSelectUser() {
    try {
        const users = await(await fetch("api/users")).json();
        
        const select = document.getElementById("user-select");

        users.forEach(user => {
            const option = document.createElement("option");
            option.setAttribute("value", user.id);
            option.innerText = `${user.id} -- ${user.name}`;
            select.appendChild(option);
        });

    } catch (error) {
        console.log(error);
    }
}

function selectUser(ev){
    ev.preventDefault()
    const data =new FormData(ev.target)

    window.location.replace(`/user/${data.get("user-id")}/tasks`)
}

//main

fillSelectUser();

form.addEventListener("submit",selectUser)