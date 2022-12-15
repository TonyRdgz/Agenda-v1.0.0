//GET  /contactos
const express = require('express');
const router = require('express').Router();
const contactosController = require('./../controllers/contactos');

router.get('/contactos',contactosController.listar);
router.get('/contactos/:id', contactosController.ver);
router.get('/contactos/verNombre/:nombre', contactosController.verNombre);
router.get('/contactos/verCorreo/:correo', contactosController.verCorreo);
router.use('/contactos/', express.json());
router.post('/contactos/', contactosController.crear);
router.get('/contactos/actualizar/:id/:field/:valor', contactosController.actualizar);
router.get('/contactos/eliminar/:id', contactosController.eliminar);

module.exports = router;

