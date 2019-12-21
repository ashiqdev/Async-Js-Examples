// promise holds the result of async operation

const p = new Promise((resolve, reject) => {
  // async operation
  setTimeout(() => {
    // resolve(1);
    reject(new Error("msg"));
  }, 2000);
});

p.then(res => console.log(res)).catch(err => console.log(err.message));
