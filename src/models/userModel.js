import  mongoose,{ Schema,model }  from "mongoose";
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    dp:{
        type:String,
        default:"",
    }
},{timestamps:true});
const UserModel=model("users",userSchema);
export default UserModel;


