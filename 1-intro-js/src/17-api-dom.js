


// httpClient
//     .then(response => response.json())
//     .then(data => console.log(data));

// this has to be used into a function

const findAllUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    // console.log(data);

    const ul = document.createElement('ul');


    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.append(li);
        console.log(user.name);
    });

    document.getElementById('root').append(ul);

    
}

findAllUsers();


console.log('Hola que tal!');


