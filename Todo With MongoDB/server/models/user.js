var mongoose =require('mongoose');

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

module.exports={
  Users
};
