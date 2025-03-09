// Javascript Promise;
function getUser() {
  return [
    { userName: "devil", email: "devil@gmail.com" },
    { userName: "moniruzzaman", email: "themilon9@gmail.com" },
  ];
}

function findUser(userName) {
  const users = getUser();
  const user = users.find((user) => user.userName === userName);
  return user;
}

console.log(findUser("moniruzzaman"));

console.log(findUser("devil"));

// Using setTimeOut();

function getUser2() {
  let users = [];
  setTimeout(() => {
    users = [
      { userName: "devil", email: "devil@gmail.com" },
      { userName: "moniruzzaman", email: "themilon9@gmail.com" },
    ];
  }, 1000);
  return users;
}

function findUser2(userName) {
  const users = getUser2();
  console.log(users);

  const user = users.find((user) => user.userName === userName);
  return user;
}

console.log(findUser2("devil"));

// Using callbacks to deal with an asynchronous operation;

function getUser3(callback) {
  setTimeout(() => {
    callback([
      { userName: "devil", email: "devil@gmail.com" },
      { userName: "moniruzzaman", email: "themilon9@gmail.com" },
    ]);
  }, 1000);
}

function findUser3(userName, callback) {
  getUser3((users) => {
    const user = users.find((user) => user.userName === userName);
    callback(user);
  });
}

findUser3("devil", console.log);

// Understanding JavaScript Promises

function getUserPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { userName: "devil", email: "devil@gmail.com" },
        { userName: "moniruzzaman", email: "themilon9@gmail.com" },
      ]);
    }, 1000);
  });
}

const promise = getUserPromise();
promise.then((user) => {
  console.log(user);
});

// reject part

let success = true;
function getUserPromiseWithReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { userName: "devil", email: "devil@gmail.com" },
          { userName: "moniruzzaman", email: "themilon9@gmail.com" },
        ]);
      } else {
        reject("Filed to the user list");
      }
    }, 1000);
  });
}

const resolveAndReject = getUserPromiseWithReject();
resolveAndReject
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

// A practical JavaScript Promise example

// function loadUrl(url) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = () => {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(this.status);
//       } else {
//         reject(this.status);
//       }
//     };

//     request.open("GET", url, true);
//     request.send();
//   });
// }

// function load(url) {
//   return new Promise(function (resolve, reject) {
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status == 200) {
//         resolve(this.response);
//       } else {
//         reject(this.status);
//       }
//     };
//     request.open("GET", url, true);
//     request.send();
//   });
// }

function load(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(`HTTP Error: ${this.status}`);
        }
      }
    };

    // Handle network errors
    request.onerror = function () {
      reject("Network error occurred");
    };

    request.open("GET", url, true);
    request.send();
  });
}

const url = "https://www.javascripttutorial.net/sample/promise/api.json";
const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

// btn.addEventListener("click", () => {
//   load(URL)
//     .then((response) => {
//       const result = JSON.parse(response);
//       msg.innerHTML = result.message;
//     })
//     .catch((error) => {
//       msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
//     });
// });

btn.addEventListener("click", () => {
  load(url)
    .then((response) => {
      const result = JSON.parse(response);
      msg.innerHTML = result.message;
    })
    .catch((error) => {
      msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
    });
});
