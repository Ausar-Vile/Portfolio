// function operation(a, b, operation){
//     let result = operation(a, b);
//     console.log(result);
//     return result;
// }

// function add(z, m){
//     return z + m; 
// }

// operation(20, 10, add);
    

function findUser(userName) {
    let data = [];
    let result = new Promise ((res, rej) => {
        // let users = get users();
        let users = ['ahmed'];

        if (users) {
            res(users);
        }else{
            rej('error in the api');
        }
    
    });

    result 
    .then ((x)=> {
        data = x;
        console.log(x, 'data from api');
    })
    .catch((x)=>{
        console.log(x);
    })
    return data;

}
console.log(findUser('Ahmed'));

