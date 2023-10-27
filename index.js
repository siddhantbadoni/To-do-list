const title = document.getElementById("title");
title.setAttribute('placeholder' , 'Title Here');
const description = document.getElementById("description");
 description.setAttribute('placeholder' , 'Description Here')
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
showAllTask();

function showAllTask() {
    tasks.forEach((value,index) => {
        const div = document.createElement("div");
        div.setAttribute("class" , "task");
        const innerDiv = document.createElement("div")
        div.append(innerDiv);
        const p = document.createElement("p");
        p.innerText = value.title
        innerDiv.append(p);
        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);
        const btnDel = document.createElement("button");
        btnDel.setAttribute("class" , "btn-del");
        btnDel.innerText ="-"
        btnDel.addEventListener("click",() => {
           removeTask();
           tasks.splice(index , 1)
           localStorage.setItem("tasks" ,JSON.stringify(tasks));
           showAllTask();
        })
        div.append(btnDel);
        container.append(div);
    })
}

function removeTask() {
    tasks.forEach(value => {
        const task = document.querySelector(".task")
        task.remove();
    })
}
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    removeTask();
    tasks.push(
        {title : title.value,
        description : description.value,})
        localStorage.setItem("tasks" ,JSON.stringify(tasks));
        showAllTask();
        form.reset();
  
})