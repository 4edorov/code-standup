console.log(1);

setTimeout(() => {
  console.log(2);
});

Promise.resolve(3).then(console.log);

console.log(4);

setTimeout(function() {
  console.log(5);
}, 0);

console.log(6)

// const foo = () => {
//   console.log("foo");
//   return Promise.resolve().then(foo);
// }

// foo();

// 1
// 4
// 6
// foo
// 3
// foo
// foo

const boo = () => {
  console.log("boo");
  setTimeout(boo);
}

boo()

// 1
// 4
// 6
// boo
// 3
// 2
// 5
// boo
// boo
// boo
