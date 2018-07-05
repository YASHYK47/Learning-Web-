//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
 // var obj=new ObjectID();
 // console.log(obj);

MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
if(err){
  return console.log('Unable to connect to mongoDB server');
}
console.log('Connected to MongoDB server');
var db=client.db('TodoApp');
//deleteMany
// db.collection('Todos').deleteMany({completed:true}).then((results)=>{
//   console.log(results);
// });

//deleteOne
// db.collection('Todos').deleteOne({text:"To watch TV"}).then((results)=>{
//   console.log(results);
// });

//FindOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((results)=>{
//   console.log(results);
// });
db.collection('Users').findOneAndDelete({_id:new ObjectID("5b3cba6f3485e81854945840")}).then((results)=>{
  console.log(results);
});

// client.close();
});
