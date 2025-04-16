let stat = document.querySelector("h5");
let add = document.querySelector("#add");
let flag = 0;

add.addEventListener("click", () => {
    if (flag === 0) {
        stat.innerHTML = "Friends";
        stat.style.color = "green";
        add.innerHTML = "Unfriend";
        add.style.backgroundColor = "red";
        add.classList.add("unfriend");
        flag = 1;
    } else {
        stat.innerHTML = "Stranger";
        stat.style.color = "red";
        add.innerHTML = "Add Friend";
        add.style.backgroundColor = "cadetblue";
        add.classList.remove("unfriend");
        flag = 0;
    }
});
