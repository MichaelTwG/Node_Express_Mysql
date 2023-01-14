const divUsers = document.querySelector(".userList");


fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        let num = 1 ;
        for (const user of data) {
            console.log(user.name);
            const newLi = document.createElement("li");
            newLi.textContent = user.name;
            newLi.setAttribute("tabindex", num.toString())
            divUsers.appendChild(newLi);
            num =+ 1;
        }
    })
    .catch(error => console.log(error));