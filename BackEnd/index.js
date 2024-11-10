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
//schema for creating products
const Product=mongoose.model("product",{
    id:{
      type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    //image:{
        //type: String,
        //required: true,
    //},
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: false,
    },
    old_price:{
        type: Number,
        required: true,
    },
    Date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        required: true,
    },

});


app.post("/addproduct",async(req,res)=>{
    let products = await Product.find({});
let id;
if(products.length>0){
    let last_product_array = products.slice(-1);
let last_product = last_product_array[0];
id = last_product.id+1;
}else{
    id=1;
}
   const product=new Product({
    id:id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
   })
console.log(product);
   await product.save();
   console.log("Product added");
   res.json({
sucess:true,
message:"Product added",

   });
});

// Creating api for add Product
app.post('removeproduct',async(req,res)=>{
    const id = req.body.id;})

app.listen(port,(error)=>{
    if(error){
        console.log("Error in running server"+ error);
    }
    console.log("Server is running on port:"+port);
} )