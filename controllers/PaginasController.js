import { Producto } from "../models/Product.js";
import { Op } from "sequelize";

const paginaInicio = async (req, res) => {
  try {
    const producto = await Producto.findAll();
    res.render("inicio", {
      producto,
    });
  } catch (error) {
    console.log(error);
  }
};

const api = async (req, res) => {
  const { slug } = req.params;

  try {
    if(slug){
        const resultado = await Producto.findOne({ where: { slug: slug } });

        res.json(resultado);
    }else{
        const producto = await Producto.findAll();
        res.json(producto);
    }
    

  } catch (error) {
    
  }
};

const error404 = async(req, res)=>{

    res.status(404).json();
}

const paginaDetalleProducto = async (req, res) => {
  const { slug } = req.params;

  try {
    const resultado = await Producto.findOne({ where: { slug: slug } });
    const resultado1 = await Producto.findAll({
      where: { slug: { [Op.not]: slug } },
    });

    res.render("producto", {
      resultado,
      resultado1,
    });

    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};

export { paginaInicio, paginaDetalleProducto, api, error404 };
