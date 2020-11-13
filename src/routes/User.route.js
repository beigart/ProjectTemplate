import UserController from '../controllers/User.controller.js'
import UserModel from '../models/User.model.js'

const route = (app) => {
    app.post('/user', UserController.createUser)
    app.get('/user', UserController.getAllUsers)
    app.get('/user/:userId', UserController.findUserById)
    app.get('/searchuser', UserController.searchUsername)

}

export default {
    route
}