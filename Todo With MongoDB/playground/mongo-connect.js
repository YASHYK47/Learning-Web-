//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
 // var obj=new ObjectID();
 // console.log(obj);

MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
if(err){
  return console.log('Unable to connect to mongoDB server');
}
console.log('Connected to MongoDB server');
// var db=client.db('TodoApp'); 
// db.collection('Todos').insertOne({
//   text:'Something to do',
//   completed:false
// },(err,result)=>{
//   if(err){
//     return console.log('Unable to insert Todo',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });
// var db=client.db('TodoApp');
// db.collection('Users').insertOne({
//   name:'Ankita Keshervani',
//   age:20,
//   location:'Faizabad'
// },(err,result)=>{
//   if(err){
//     return console.log('Unable to insert Todo',err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
// });
 client.close();
});
