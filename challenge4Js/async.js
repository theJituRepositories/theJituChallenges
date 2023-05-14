//ES6 Tutorial practise
//promise abstract 
function getUsers(callback) {
    
    setTimeout(() => {
        callback([
            { username: 'john', email: 'johndoe@gmail.com' },
            { usernae: 'jane', email: 'janepie@outlook.com' },
        ]);

    },2000);
}
function findUsername(username, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
    });
}
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);

