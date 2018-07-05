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
// db.collection('Todos').find({_id:new ObjectID("5b3cb0c9d15b3d043c212cbd")}).toArray().then((docs)=>{
//      console.log('Todos');
//      console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('Unable to fetch data',err);
// });
db.collection('Todos').find().count().then((count)=>{
     console.log('Todos-Count',count);
},(err)=>{
  console.log('Unable to fetch data',err);
});
// client.close();
});
