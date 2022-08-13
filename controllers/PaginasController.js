import { Producto } from '../models/Product.js';
import { Op } from 'sequelize';

const paginaInicio = async(req, res)=>{
    
    const producto = await Producto.findAll();

    console.log(producto);

    res.render('inicio',{
    producto,
    });
}


const paginaDetalleProducto = async(req,res) => {
    
    const { slug } = req.params;
            
    try {
        
        const resultado = await Producto.findOne({ where : { slug: slug}});
        const resultado1 = await Producto.findAll({ where: { slug: {[Op.not]: slug}}});

        res.render('producto',{
            resultado,
            resultado1
        })

        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaDetalleProducto
}