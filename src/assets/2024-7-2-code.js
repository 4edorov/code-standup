function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const resultsPromises = [];
    let nextIndex = 0;
    for (let promise of promises) {
      promise
        .then((res) => {
          resultsPromises.push(res);
          nextIndex++;
          if (nextIndex === promises.length) {
            resolve(resultsPromises);
          }
        })
        .catch((err) => reject(err));
    }
  })
}


promiseAll(
  [
    Promise.resolve("test"),
    Promise.resolve("test1"),
    Promise.reject("test2")
  ]
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
