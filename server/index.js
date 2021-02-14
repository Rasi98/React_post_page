import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app=express();

//http://localhost:5000/posts
app.use('/posts',postRoutes);

app.use(bodyParser.json({limit:"30mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}));
app.use(cors());

const CONNECTION_URL="mongodb+srv://project2_user:project2_user@cluster0.ksatw.mongodb.net/Project_2?retryWrites=true&w=majority";
const PORT=process.env.PORT||5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>console.log('server running successfully')))
    .catch((error)=>console.log(error.message));

    mongoose.set('useFindAndModify',false);