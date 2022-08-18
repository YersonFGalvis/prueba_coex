import  express  from "express";
import {   
    paginaInicio,
    paginaDetalleProducto,
    api,
    error404
} from "../controllers/PaginasController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/producto/:slug',paginaDetalleProducto);

router.get('/api/productos',api)

router.get('/api/productos/:slug',api)

router.get('/*',error404)



export default router;