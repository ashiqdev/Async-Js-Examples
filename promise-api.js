// promise that is already resolved/rejected

const p = Promise.resolve({ id: 1 });

p.then(res => console.log(res));
