import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    category:{
        type:String,
        required:true
    },
    discription:{
        type:String,
    },
    image:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId
    }
  },
  {
    timestamps: true,
  }
);

const documentModel = mongoose.models.users || mongoose.model("users", documentSchema);

export default documentModel;
