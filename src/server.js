const app = require('./app')
const  { db } = require('./database/config')

db.authenticate()
.then(()=>{console.log("Success ")})
.catch(()=>{console.log("error")})
db.sync()
.then(()=>{console.log("Success ")})
.catch(()=>{console.log("error")})


app.listen(3000,()=>{
    console.log("Port Running ")
})