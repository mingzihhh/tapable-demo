const { SyncBailHook, AsyncParallelBailHook } =require('tapable');

// const FrontEnd = new SyncBailHook(['name']);
// FrontEnd.tap('webpack',(name)=>{
//   console.log(name+" get webpack ")
//   return '不想学了QAQ';
// });
// FrontEnd.tap('react',(name)=>{
//   console.log(name+" get react")
// });
// FrontEnd.start=(...args)=>{
//   FrontEnd.call(...args)
// };
// FrontEnd.start('xiaoming');

const FrontEnd = new AsyncParallelBailHook(['name']);
FrontEnd.tapPromise('webpack',(name)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log(name+" get webpack ")
      resolve(123);
    }, 1000);
  })
});
FrontEnd.tapPromise('react',(name,cb)=>{
  return new Promise((resolve)=>{
    setTimeout(() => {
      console.log(name+" get react ")
      resolve();
    }, 2000);
  })
});
FrontEnd.start=(...args)=>{
  FrontEnd.promise(...args).then(()=>{
    console.log("end");
  },(err)=>{
    console.log(err)
  })
};
FrontEnd.start('xiaowang');
