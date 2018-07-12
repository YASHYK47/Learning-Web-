const {ObjectID}=require('mongodb');
const jwt=require('jsonwebtoken');

const {Todo}=require('./../../models/todo.js');
const {Users}=require('./../../models/user.js');

const userOneId=new ObjectID();
const userTwoId=new ObjectID();
const users=[{
  _id:userOneId,
  email:'yashabc45@gmail.com',
  password:'userOnePassword',
  tokens:[{
    access:'auth',
    token:jwt.sign({_id:userOneId,access:'auth'},'abc123').toString()
  }]
},{
  _id:userTwoId,
  email:'yashdef56@gmail.com',
  password:'userTwoPass'
}];
const todos=[{
  _id:new ObjectID(),
  text:'First test todo'
},{
  _id:new ObjectID(),
  text:'Second test todo',
  completed:true,
  completedAt:333
}];

const populateTodos=(done)=>{
  Todo.remove({}).then(()=>{
  return Todo.insertMany(todos);
 }).then(()=>done());
};
const populateUsers=(done)=>{
  Users.remove({}).then(()=>{
    var userOne=new Users(users[0]).save();
    var userTwo=new Users(users[1]).save();
    return Promise.all([userOne,userTwo]);
  }).then(()=>done());
};
module.exports={todos,populateTodos,users,populateUsers};
