const express=require('express')
const app = express()
const hbs =require('hbs')
const PORT = process.env.port ||5000
app.use(date=(req ,res,next)=>{
    let requestAt=new Date()
    console.log(requestAt )
    next()
}
)

app.get("/home",(req,res)=>{
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/service",(req,res)=>{
    res.sendFile(__dirname + "/public/service.html")
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname + "/public/contact.html")
})
app.set("view engine",hbs)

app.get("/user",(req,res)=>{
    res.render('User.hbs',{name:"med"})

})
app.listen(PORT,(err)=>{
    if(err) {
        throw (err)
    }
     console.log('server is runnig')

})