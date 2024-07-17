


// httpClient
//     .then(response => response.json())
//     .then(data => console.log(data));

// this has to be used into a function

const findAllUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    // console.log(data);
    return data;
}

const users = await findAllUsers();

console.log(users);

console.log('Hola que tal!');


