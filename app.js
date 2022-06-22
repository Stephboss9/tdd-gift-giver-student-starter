
const express = require('express')
const morgan = require('morgan')
const myRouter = require('./routes/gift-exchange')
const {NotFoundError} = require("./utils/errors")



const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use("/gift-exchange", myRouter)

app.get('/', (req, res) => {
    res.status(200).json({ping: 'pong'});
  });

  app.use((req, res, next) => {
    return next(new NotFoundError())
})


app.use ((error, req, res, next) => {
    let status = error.status || 500
    let message = error.message ||"Something wen't wrong in the application"
    return res.status(status).json({error:{status,message}})
}) 



  module.exports = app
