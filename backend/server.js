const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = 5000;
const DB_URL = 'mongodb://localhost:27017/collection';

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(DB_URL),then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Failed to connect to MongoDB',err);
})

app.use('/',authRoutes);

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}`));