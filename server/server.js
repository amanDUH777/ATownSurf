const express = require('express');
const app = express();
const connectDB = require('./config/db');
const customerRoutes = require('./routes/customerRoute');
const productRoutes = require('./routes/productRoute');
const learnRoutes = require('./routes/learnRoute');
const cors = require('cors')

require('dotenv').config();
// const mongoose = require('mongoose');

connectDB();

app.use(cors())

// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiesTopology: true, useCreateIndex: true});


const port = process.env.PORT || 8000;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));



// connecting routes
app.use('/api/customer', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/learn', learnRoutes)


app.listen(port, () => console.log(`Server running on port ${port}`));
