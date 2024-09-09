const express = require('express');
const pessoasController = require('./controllers/PessoasController');
const router = express.Router();

router.post('/pessoas', pessoasController.createPessoa);
router.get('/pessoas', pessoasController.getAllPessoas);
router.get('/pessoas', pessoasController.getPessoaById);
router.put('/pessoas', pessoasController.updatePessoa);
router.delete('/pessoas', pessoasController.deletePessoa);

module.exports = router;