import { Producto } from '../models/Product.js';

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
        
        const resultado = await slug.fidOne({where : {slug: slug}})

        res.render('producto', {
            resultado
        })

    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaDetalleProducto
}