function isEven(x) {
    let remain = x % 2;
    
    if (remain == 0) {
    return "it is Even!!";
    
}

else {
    return "if it is Odd!!";
}
}

console.log (isEven(7)) 

function result(x, y, z, u) {
    let sum = x+y+z+u

    let avg = sum/4;

    if (avg>50) {
        return "pass!!";
    }

    else {
        return "fail!!";
    }

}

console.log(result(88, 40, 30, 50));

let ul = document.getElementById("menu");
let li = document.createElement("li");
li.textContent = "work";
ul.appendChild(li);
