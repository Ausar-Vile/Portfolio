let task = [];

let addbtn = document.getElementById("add");

addbtn.addEventListener("click",()=>{
    let text = document.getElementById("text").value;
    let randomNum = Math.random(0);
    console.log(randomNum);
    task.push({id:randomNum, name:text});
    showElment();
});
let list = document.getElementById("list");

function showElment() {
 list.innerHTML = ""
 task.forEach((user)=>{
    let div = document.createElement("div");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    div.textContent = user.name;
    div.appendChild(dele)
    list.appendChild(div);
 });
 };
 
//  function deleteItem(){
//     list.innerHTML = ""
//     task.filterUser((user)=>{
        
        
//         list.appendChild(button);
//     })
//  }


let deleteItem = (selectedId) =>{
    let filterUsers = user.filter((item)=> {
        return item.id != selectedId;
    });
 }


// deleteItem("user")
console.log(task, "todo list array");
