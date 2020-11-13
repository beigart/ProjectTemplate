import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import middlewares from './src/middleware/Middleware.js'
import configuration from './config/Configuration.js'
import UserRoute from './src/routes/User.route.js'

dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('common'))

app.get('/hej', (req, res) => {
    res.send("Hejsan")
})

UserRoute.route(app)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

configuration.databaseConnection()
configuration.connectToPort(app)
