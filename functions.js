// Create a list function. It will take one argument (an array of clients) and return an HTML string. The string will contain a list item template (shown below) for each client in the array. The map() method with an arrow function should be used.
function list(clients) {
    return clients.map(client => 
      `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance.toFixed(2)}</strong>
      </li>`
    ).join(''); // Join to return a single HTML string
  }
//   Create an order function. It will take two arguments (an array of clients, a string of a property in the client object) and return an array of clients sorted by a specified property. The sort() method with an arrow function should be used.


function order(clients, property) {
    return clients.sort((a, b) => a[property] - b[property]);
}
// Create an total function. It will take one argument (an array of clients) and return a number. The number will be total sum of the balances from every client. The reduce() method with an arrow function should be used.
function total(clients) {
    return clients.reduce((total, client) => total + client.balance, 0);
}    
// Create an info function. It will take one argument (a number matching the index of the desired client) and return an object containing the desired clients information. The find() method with an arrow function should be used.

function info(index) {
    return clients.find(client => client.index === index);
}
// Create an search function. It will take one argument (a string containing the search query) and return an array of clients that includes the query in their name. The filter() method with an arrow function should be used. Hint: To avoid issues with case, use toLowerCase() on the query and client's name.

function search(query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
}

