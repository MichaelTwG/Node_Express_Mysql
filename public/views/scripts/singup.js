const btn = document.querySelector("#login_btn");
const nickName = document.querySelector("#userN");

btn.addEventListener('click', () => {

    const data = {UName: nickName.value};

    fetch('http://172.23.241.189:2000/usercreate', 
    {method: 'POST', 
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "failed") {
            alert("Ese usuario ya existe, logeate");
        } else if (data.status === "success"){
            console.log(data);
        }
    })
    .catch(err => console.log(err));

})

// Areglar la creacion de users