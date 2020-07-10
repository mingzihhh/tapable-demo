const { SyncWaterfallHook, AsyncSeriesWaterfallHook} = require('tapable');
const FrontEnd = new SyncWaterfallHook(['name']);
FrontEnd.tap('webpack',(name)=>{
  console.log(name+" get webpack ")
  return '学完webpack了，该学react了';
});
FrontEnd.tap('react',(name)=>{
  console.log(name+" get react")
});
FrontEnd.start=(...args)=>{
  FrontEnd.call(...args)
};
FrontEnd.start('xiaoming');

// const FrontEnd = new AsyncSeriesWaterfallHook(['name']);
// FrontEnd.tapAsync('webpack',(name,cb)=>{
//     setTimeout(() => {
//       console.log(name+" get webpack ")
//       cb(null, '小李');
//     }, 1000);
// });
// FrontEnd.tapAsync('webpack',(name,cb)=>{
//   setTimeout(() => {
//     console.log(name+" get webpack ")
//     cb(null,'小张');
//   }, 1000);
// });
// FrontEnd.tapAsync('webpack',(name,cb)=>{
//   setTimeout(() => {
//     console.log(name+" get webpack ")
//     cb(null,'小红');
//   }, 1000);
// });
// FrontEnd.start=(...args)=>{
//   FrontEnd.callAsync(...args,(data)=>{
//     console.log("全学完了",)
//   })
// };
// FrontEnd.start('小王');
