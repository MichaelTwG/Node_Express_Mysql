const btn = document.querySelector("#login_btn");
const txt = document.querySelector("#userN");

btn.addEventListener('click', () => {

    const data = {UName: txt.value};

    fetch('http://172.23.241.189:2000/login', 
    {method: 'POST', 
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "failed") {
            alert("Ese usuario no existe, registrate");
        } else if (data.status === "success"){
            window.location = "/chat";
        }
    })
    .catch(err => console.log(err));

})

// Areglar la creacion de users