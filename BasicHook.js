const { AsyncParallelHook, AsyncSeriesHook } = require('tapable');
// const FrontEnd = new AsyncParallelHook(['name']);

// console.time('webpack');
// console.time('react');

// FrontEnd.tapAsync('webpack',(name,cb)=>{
//   setTimeout(() => {
//     console.log(name+" get webpack ");
//     console.timeEnd('webpack');
//     cb();
//   }, 1000);

// });
// FrontEnd.tapAsync('react',(name,cb)=>{
//   setTimeout(() => {
//     console.log(name+" get react")
//     console.timeEnd('react');
//     cb();
//   }, 2000);
// });
// FrontEnd.start=(...args)=>{
//   FrontEnd.callAsync(...args,()=>{
//     console.log("end");
//   })
// };
// FrontEnd.start('xiaowang');

const FrontEnd = new AsyncSeriesHook(['name']);

console.time('webpack');
console.time('react');

FrontEnd.tapAsync('webpack',(name,cb)=>{
  setTimeout(() => {
    console.log(name+" get webpack ");
    console.timeEnd('webpack');
    cb();
  }, 1000);

});
FrontEnd.tapAsync('react',(name,cb)=>{
  setTimeout(() => {
    console.log(name+" get react")
    console.timeEnd('react');
    cb();
  }, 2000);
});
FrontEnd.start=(...args)=>{
  FrontEnd.callAsync(...args,()=>{
    console.log("end");
  })
};
FrontEnd.start('xiaowang');
