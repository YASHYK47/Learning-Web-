const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose.js');
const {Todo}=require('./../server/models/todo.js');
const {Users}=require('./../server/models/user.js');

var id="5b3e636b3eb55a2d584bf71f";
Users.findById(id).then((User)=>{
if(!User){
  return console.log('User Not Found');
}  console.log('User Info',User);
}).catch((e)=>console.log(e));

// var id="5b40b4d94f40e7200c09bf1a11";
// if(!ObjectID.isValid(id)){
//   console.log('Given Id is not valid');
// }
// Todo.find({
//    _id:id
// }).then((todos)=>{
//   console.log("Todos Find ", todos);
// });
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   if(!todo){
//     return console.log('Todo Not Found');
//   }
//   console.log("Todo From Find By One", todo);
// });
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id Not Found');
//   }
//   console.log('Todo By Id',todo);
// }).catch((e)=>console.log(e));
