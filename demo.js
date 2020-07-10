const {SyncHook}= require('tapable');
const FrontEnd = new SyncHook(['name']);

// 绑定事件
// 支持传入2个参数，第一个参数是 '事件名称', 第二个参数为事件处理函数，函数参数为执行call(触发事件)时传入的参数的形参。
FrontEnd.tap('webpack',(name)=>{
  console.log(name+" get webpack")
});
FrontEnd.tap('react',(name)=>{
  console.log(name+" get react")
});

FrontEnd.start=(name)=>{
// 执行事件
  FrontEnd.call(name)
};
FrontEnd.start('xiaoming');
