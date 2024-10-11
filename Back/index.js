const express = require('express')
const mongoose =require('mongoose')
const cors =require('cors')
const UserModel =require('./models/emp')

const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/employeeDB", {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log("connected to MongoDB"))
.catch((err=> console.log("error",err)))

app.get('/', (req,res) =>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const userId = req.params.id;
    UserModel.findById(userId)   // Correct usage here
        .then(user => {
            if (user) res.status(200).json(user);
            else res.status(404).json({ message: 'User not found' });
        })
        .catch(err => res.status(404).json({ message: 'Could not find user', error: err }));
});

app.put('/updateUser/:id', (req, res) => {
    const userId = req.params.id;
    UserModel.findByIdAndUpdate(userId, { 
        name: req.body.name,
        empID: req.body.empID,
        email: req.body.email,
        age: req.body.age,
        role: req.body.role,
        contact: req.body.contact
    }, { new: true })  
    .then(user => {
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    })
    .catch(err => res.status(500).json({ message: 'Error updating user', error: err }));
});


app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err=>res.json(err))
})



app.post("/createEmp",(req, res) =>{
    console.log(req.body);
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.listen(4000, () =>{
    console.log("Server is running on port 4000")
})