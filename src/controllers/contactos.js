
const { response } = require('express');
const contacto = require('./../models/contacto'); 

module.exports = {
    listar: (req,res) => {
        contacto.find({status: 1})
            .then(data=>{
                res.send(data);
            })
            .catch(err=>{
                res.status(400).send('Algo salio mal');
            });

    },
    ver: (req, res) => {
        const id = req.params.id;
        contacto.findOne({status: 1, _id: id })
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(400).send('Algo salio mal'); // BAD REQUEST
        });
    },
    verNombre: (req, res) => {
        const nombre = req.params.nombre;
        contacto.find({status: 1, nombre: nombre })
        .then(data => {
            res.send(data);
            console.log(nombre);
        })
        .catch(err =>{
            res.status(400).send('Algo salio mal'); // BAD REQUEST
        });
    },
    verCorreo: (req, res) => {
        const correo = req.params.correo;
        contacto.find({status: 1, correo: correo})
        .then(data => {
            res.send(data);
            console.log(correo);
        })
        .catch(err =>{
            res.status(400).send('Algo salio mal'); // BAD REQUEST
        });
    },
    crear: (req, res) => {
        const data = req.body;
        contacto.create(data).then(response=>{
            res.send(response);
        })
    },
    actualizar: (req,res) => {
        const id = req.params.id;
        const field = req.params.field;
        const valor = req.params.valor;

        contacto.findOne({_id: id})
            .then(data=>{
                data[field]=valor;
                data.save();
                res.send(data);
            })
            .catch(err=>{
                res.status(400).send('Algo salio mal')
            });
    },
    eliminar: (req, res) => {
        const id = req.params.id;
        contacto.findOne({_id: id })
            .then(data => {
                data.status=2;
                data.save();
                res.send(data);
            })
            .catch(err =>{
                res.status(400).send('Algo salio mal')
            });
    }
}