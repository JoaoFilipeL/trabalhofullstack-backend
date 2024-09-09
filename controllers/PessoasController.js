const axios = require('axios');
const { Pessoa } = require('../models');
console.log(Pessoa)

exports.createPessoa = async (req, res) => {
    try {
        const {id, nome, cpf, tel} = req.body;
        
        const novaPessoa = await Pessoa.create({
            id,
            nome,
            cpf,
            tel
        });

        res.status(201).json(novaPessoa);
    }catch(error) {
        console.error(error)
        res.status(500).json({ error: 'Erro ao criar cadastro', details: error.message});
    }
};

exports.getAllPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoas.findAll();
        res.status(200).json(pessoas);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message});
    }
};

exports.getPessoaById = async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoas = await Pessoas.findByPk(Id);

        if (!pessoas) {
            return res.status(404).json({ error: 'Cadastro não encontrado'});
        }

        res.status(200).json(pessoas);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message});
    }
}

exports.updatePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const {nome, cpf, tel} = req.body;

        const pessoas = await Pessoas.findByPk(Id);

        if (!pessoas) {
            return res.status(404).json({ error: 'Cadastro não encontrado'})
        }

        pessoas.nome = nome;
        pessoas.cpf = cpf;
        pessoas.tel = tel;

        await pessoas.save();

        res.status(200).json(pessoas)
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message})
    }
}

exports.deletePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoas = await Pessoas.findByPk(Id)

        if (!pessoas) {
            return res.status(404).json({ error: 'Cadastro não encontrado'})
        }

        await pessoas.destroy();

        res.status(204).send();
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message})
    }
}