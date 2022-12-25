const express = require('express');
const bodyParser = require('body-parser')
// const userRepository = require('./repository/user-repository')

const app =express();
const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index')

const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api', apiRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        // const repo = new userRepository();
        // const user =await repo.getById(1);
        // console.log(user);

        
    })
}

module.exports = prepareAndStartServer();