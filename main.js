// function show() {
//     alert("Hi from function");
// }

// let username = prompt("enter your name");

// console.log(username, "this is what you have entered");

// function showInput()  {
//     let input = document.getElementById("username").value;
//     document.getElementById("output").textContent = input;
// }
 
function showInfo() {
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let output = document.getElementById("output");
    console.log(name.value, password.value);
    output.innerHTML = `<div>
    <p>name: ${name.value}</p>
    <p>password: ${password.value}</p>
    </div>`;
    return false;
}

let btn = document.getElementById("btn");
function showalert(event) {
    console.log(event);

}
btn.addEventListener("click",showalert);

function avg(x,y,z) {
    let sum = x+y+z;
    let avg = sum/3;
    console.log(avg)
    if (avg>=50 && avg<60) {console.log("good")};
    if (avg<50) {console.log("Failed")};
    if (avg>=80) {console.log("Excellant")}; 
    if (avg>=61 && avg<=79) {console.log("very good")};

    return (avg)
}

console.log(avg(70,80,70));

class football {
    constructor(name) {
        this.name = name;
    }

    Goals() {
        return `${this.name} has the most goals`;
    }
}
class Sport extends football {
    play() {
        return `${this.name} plays football`;
    }
}

let mySport = new Sport("Ronaldo"); 
console.log(mySport.play());