const {User} = require('../models/index');


class UserRepository{
    
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Unable to create user");
            throw error;
        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where: {
                    id:userId
                }
            })
            return true
        } catch (error) {
            console.log("Unable to create user");
            throw error;
        }
    }

    async getById(userId){
        try {
            const user = User.findByPk(userId,{
                attributes:['email', 'id']
            });
            return user;
        } catch (error) {
            console.log("Unable to create user");
            throw error;
        }
    }
}

module.exports = UserRepository