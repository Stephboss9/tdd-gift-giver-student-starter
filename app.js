
const express = require('express')
const morgan = require('morgan')
const myRouter = require('./routes/gift-exchange')



const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use("/gift-exchange", myRouter)

app.get('/', (req, res) => {
    res.status(200).json({ping: 'pong'});
  });


app.use ((error, req, res, next) => {
    let newStatus = !error.status?500:error.status
    let newMessage = !error.message?"Something wen't wrong in the application":error.message
    return res.status(newStatus).json({error:{newStatus,newMessage}})
}) 



  module.exports = app
