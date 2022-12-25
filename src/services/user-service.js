const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');
const UserRepository = require('../repository/user-repository')
const bcrypt = require('bcrypt');

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Unable to create user");
            throw error;
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user, JWT_KEY,  {expiresIn: '1d'})
            return result;
        } catch (error) {
            console.log("Unable to create user");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Unable to create user", error);
            throw error; 
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);

        } catch (error) {
            console.log("Something went wrong in comparing input password");
            throw(error)
        }
    }
}

module.exports = UserService; 