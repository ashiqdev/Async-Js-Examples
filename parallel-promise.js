const p1 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]).then(res => console.log(res));
