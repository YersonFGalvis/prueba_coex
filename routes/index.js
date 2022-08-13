import  express  from "express";
import {   
    paginaInicio,
    paginaDetalleProducto
} from "../controllers/PaginasController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/producto/:slug',paginaDetalleProducto);


export default router;