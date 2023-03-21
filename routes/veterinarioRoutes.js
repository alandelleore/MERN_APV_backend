import express from 'express';
const router = express.Router();
import { registrar, perfil, confirmar, autenticar, recuperarPassword, comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword } from '../controllers/veterinmarioController.js';
import checkAuth from '../middleware/authMiddleware.js';

// AREA PUBLICA
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/recuperar-password', recuperarPassword); // validar usuario
router.get('/recuperar-password/:token', comprobarToken); // leer el token
router.post('/recuperar-password/:token', nuevoPassword); // almacena el nuevo pass


// AREA PRIVADA
router.get('/perfil',checkAuth, perfil);
router.put('/perfil/:id', checkAuth, actualizarPerfil)
router.put('/actualizar-password', checkAuth, actualizarPassword )




export default router;