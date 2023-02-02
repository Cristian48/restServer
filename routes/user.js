const { Router } = require('express');
const {obtenerUser, createUser, updateUser, deleteUser} = require('../controllers/user');

const router = Router();


router.get('/', obtenerUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/', deleteUser)



module.exports = router;