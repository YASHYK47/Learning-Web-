const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose.js');
const {Todo}=require('./../server/models/todo.js');
const {Users}=require('./../server/models/user.js');

// Todo.remove({}).then((results)=>{
//   console.log(results);
// });

//findOneAndRemove

Todo.findByIdAndRemove('5b42600442da7f2304c6f28f').then((todo)=>{
  console.log(todo);
});
