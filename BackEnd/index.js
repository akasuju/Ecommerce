const port=4000;
const express = require('express');
const app = express();
const multer = require('multer');
const mangoose = require('mongoose');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');


app.use(cors());
app.use(express.json());
