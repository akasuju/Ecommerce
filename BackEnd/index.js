const port = 4000;
const express = require("express");
const app = express();
const multer = require("multer");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const { Console, error } = require("console");

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
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });
//creating upload endpoint for images
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});
//schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(products);
  await product.save();
  console.log("Product added");
  res.json({
    sucess: true,
    name: req.body.name,
  });
});

// Creating api for add Product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Product removed");
  res.json({
    sucess: true,
    name: req.body.name,
  });
});

//Creating api for get all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products are fetched");
  res.send(products);
});

//Schema user model
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  carData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//crearting endpoint for user registration
app.post("/signup", async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, message: "Email already exists" });
  }
  let cart={};
  for (let i=0;i<300; i++){
    cart[i]=0;
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  const data={
    user:{
      id:user.id,
    },
  };
  const token=jwt.sign(data, 'secret_ecom');
  res.json({success:true, token});
});

//creating endpoint for user listings
app.post("/login", async (req, res) => {
  let user=await User.findOne({
    email:req.body.email,
  })
  if(user){
    const passMatch= req.body.password===user.password;
    if(passMatch){
      const data={
        user:{
          id:user.id,
        },
      };
      const token=jwt.sign(data, 'secret_ecom');
      res.json({success:true, token});
    }
    else{
      res.json({success:false, errors:"Password does not match"});
    }
  }
  else{
    res.json({success:false, errors:"Wrong Email address"});
  }
});

//creating endpoint for latestProducts
app.get("/newcollection", async (req, res) => {
let product= await Product.find({});
let newCollection=product.slice(1).slice(-8);
console.log("New Collection fetched");
res.send(newCollection);
});


app.listen(port, (error) => {
  if (error) {
    console.log("Error in running server" + error);
  }
  console.log("Server is running on port:" + port);
});
