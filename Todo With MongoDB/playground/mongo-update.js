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
// db.collection('Todos').findOneAndUpdate({
//   _id:ObjectID("5b3d058842da7f1bc081d782")},{
//   $set:{
//     completed:true
//   }
// },{returnOriginal:false
// }).then((results)=>{
//   console.log(results);
// })
db.collection('Users').findOneAndUpdate({
  _id:ObjectID("5b3cdce406a4a91ee0e8a6ef")},{
    $set:{
      name:'Yash Kesarwani'
    },$inc:{
         age:+5
  }
},{returnOriginal:false
}).then((results)=>{
  console.log(results);
})
// client.close();
});
