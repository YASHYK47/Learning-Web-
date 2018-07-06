const mongoose =require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo=mongoose.model('Todo',{
//   text:{
//     type:String,
//     required:true,
//     minlength:5,
//     trim:true
//   },
//   completed:{
//     type:Boolean,
//     default:false
//   },
//   completedAt:{
//     type:Number,
//     default:null
//   }
// });
//  var newTodo=Todo({
//    text:"  Feed the Cat ",
//   completed:true,
//   completedAt:12345
//  });

var Users=mongoose.model('Users',{
  email:{
    type:String,
    required:true,
    minlength:5,
    trim:true
  },
  password:{
    type:String,
    required:true,
    minlength:8,
    trim:true
  }
});
 var newUser=Users({
   email:" abcd@fgh.com ",
  password:"  123456789  "
 });
 newUser.save().then((docs)=>{
   console.log('Saved Todo',docs);
 },(e)=>{
   console.log('Unable to save Todo',e);
 })
