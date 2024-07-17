
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

// httpClient.then(response => {
//     // console.log(response)
//     response.json().then(data => {
//         console.log(data)
//     });
// });

httpClient
    .then(response => response.json())
    .then(data => console.log(data));

console.log('Hola que tal!');


