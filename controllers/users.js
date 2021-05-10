const {response, request} = require('express')
const getUsers = (req= request, res = response) => {
    const {q, name, apiKey} = req.query;
    res.json({
        msg: 'get API - Controlador',
        q,
        name,
        apiKey
    })
}

const postUsers = (req= request, res = response) => {
    const {name, age} = req.body;

    res.json({
        msg: 'post API - Controlador',
        name,
        age
    })
}

const putUsers = (req= request, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - Controlador',
        id
    })
}

const deleteUsers = (req= request, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    })
}

module.exports={
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}