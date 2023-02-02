const { response } = require('express');
const { request } = require('express');



const obtenerUser = (req = request, res = response) => {

const query = req.query;

    res.json(
        {
            ok: true,
            message: 'get - api Controller'
        }
    );
}

const createUser = (req = request, res = response) => {

    console.log(req.body);

    res.json({
        name: req.body.name,
        apellido: req.body.apellido

    });
}

const updateUser = (req, res) => {

    const id = req.params.id;

    res.json({

        msg: 'actualizando user',
        Id: 'id'
    });

}

const deleteUser = (req, res) => {
    res.json({
        msg: 'eliminado users'
    });
}



module.exports = {
    obtenerUser,
    createUser,
    updateUser,
    deleteUser

} 