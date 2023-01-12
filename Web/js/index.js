const divUsers = document.querySelector(".userList");


fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));