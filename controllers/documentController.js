import { cloudinaryUploadImg } from "../utils/cloudinary.js";
import asyncHandler from 'express-async-handler'
import fs from 'fs'
import documentModel from "../models/documentModel.js";
const addDocument = asyncHandler( async(req,res)=>{
   const {category,description,imageUrl} = req.body;
   const user_id = req.user._id;

   const newDocument = await documentModel.create({
     category,
     description,
     imageUrl,
     user_id
   })
   res.json({message:"document created successfully",newDocument});
})

const uploadImages = asyncHandler( async(req,res)=>{
    try {
        const uploader = (path) => cloudinaryUploadImg(path,"images");
        const urls = [];
        const files = req.files;
        for(const file of files){
           const {path} = file;
           const newPath = await uploader(path);
           urls.push(newPath);
           fs.unlinkSync(path);
        }
        const images = urls.map((file)=>{
           return file;
       })
       res.json(images);
    } catch (error) {
       throw new Error(error);
    }
})

export {
    uploadImages,
    addDocument
}