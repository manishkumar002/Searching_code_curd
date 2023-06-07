const express = require('express');
const moment=require('moment')
const app = express();
const PORT = process.env.PORT || 8080;

const cors = require('cors');
require('./db/config');
const User=require('./db/user')
app.use(express.json())
app.use(cors());

app.post('/register',async(req,resp)=>{
    let user = new User(req.body);
    let result =await user.save();
    result = result.toObject();
    resp.send(result);
})

app.get('/data',async(req,resp)=>{
    let result = await User.find();
    resp.send(result);
})

app.delete('/data/:id',async(req,resp)=>{
    let result = await User.deleteOne({_id:req.params.id});
    resp.send(result);
})

app.put('/data/:id',async(req,resp)=>{
    let result = await User.updateOne({_id:req.params.id},{$set:req.body});
    resp.send(result);
})


app.get("/search/:key",async(req,resp)=>
{
  let result = await User.find({
    "$or":[
        {date:{$regex:req.params.key}},
        {descriptions:{$regex:req.params.key}},
   
      
    ]
  })
  resp.send(result)

})


// app.get('/search/:key', (req, res) => {
//     const { key } = req.params;
//     const formattedDate = moment(date).format('YYYY-MM-DD'); // Format the input date to match the format in the data
  
//     const filteredData = data.filter(item => item.date === formattedDate);
    
//     res.json(filteredData);
//   });
  


app.listen(PORT,()=>{
    console.log('Server Started at Port = ',PORT)
})