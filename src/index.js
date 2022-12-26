const express = require('express');
const bodyParser = require('body-parser')
// const userRepository = require('./repository/user-repository')
const db = require('./models/index')
const app =express();
const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index')
const userService = require('./services/user-service');
const sequelize = require('sequelize');
const UserRepository = require('./repository/user-repository');
const {User,Role} = require('./models/index');

const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api', apiRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        
        if(process.env.DB_SYNC){
            db.sequelize.sync({ alter: true })
        }

        // const u1 = await User.findByPk(4);
        // const r1 = await Role.findByPk(3);
        //u1.addRole(r1)

        //const service = new userService();
        // const newToken = service.createToken({email:'rivunaskar0@gmail.com', id:'1'});
        //console.log("new token is",newToken);

        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpdnVuYXNrYXIwQGdtYWlsLmNvbSIsImlkIjoiMSIsImlhdCI6MTY3MTk3NjQ1NCwiZXhwIjoxNjcxOTgwMDU0fQ.Yxp6cHixYAXjWUE_kodQ51E_ryFP1xstadmmBparHAk"

        // const response = service.verifyToken(token);
        // console.log(response);


    })
}

module.exports = prepareAndStartServer();