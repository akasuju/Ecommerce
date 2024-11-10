const port = 4000;
const express = require("express");
const app = express();
const multer = require("multer");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Data Cpmmerction
mongoose.connect(
  "mongodb+srv://SujanEcommerce:user123@cluster0.kfnpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

//API creation

app.get("/", (req, res) => {
    res.send("xpress is running");
});

//Image storage engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage:storage});
//creating upload endpoint for images
app.use("/upload",express.static("upload/images"));

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
    sucess: 1,
    Image_url: `http://localhost:${port}/images/${req.file.filename}`    
    });
});

app.listen(port,(error)=>{
    if(error){
        console.log("Error in running server"+ error);
    }
    console.log("Server is running on port:"+port);
} )