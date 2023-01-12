const btn = document.querySelector("#login_btn");
const txt = document.querySelector("#userN");
btn.addEventListener("click", () => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        let match = false;
        for (const user of data) {
            if (user.name === txt.value) {
                match = true;
                window.location.href = "http://localhost:5500/Web/chat.html";
            }
        }

        if (!match) {
            alert(`The NikName ${txt.value} is not register`);
        }
    })
    .catch(err => console.log(err));
});