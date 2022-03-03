import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer'; 

import OrphanagesController from './controllers/OrphanagesController';

const Orfanato= new OrphanagesController();
const routes = Router();
const upload = multer(multerConfig);

routes.post('/CriarOrfanato',upload.single('image'), Orfanato.criar);
routes.post('/listarOrfanato', Orfanato.listar);
routes.get('/buscarOrfanato/:id', Orfanato.buscarOrfanato);


// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;