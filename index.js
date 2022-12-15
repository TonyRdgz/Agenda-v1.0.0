const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./src/routes/api');

const app = express();
app.use(apiRoutes)
const port = 3000;

app.get('',(req,res)=>{
    res.send('api works!!');
});
const uri = 'mongodb+srv://TonyRS:Karman2022@cluster0.gtfqvca.mongodb.net/Agenda2022?retryWrites=true&w=majority';

mongoose.connect(uri, (err)=>{
if(err){
    console.log('No se pudo conectar a la Base de datos');
}else{
    console.log ('Se conecto correctamente a la Base de datos')

    app.listen(port,()=>{
        console.log('app is running in port '+ port);
    });
}

});

