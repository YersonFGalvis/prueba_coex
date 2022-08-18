import sequelize from "sequelize";
import db from '../config/db.js';

export const Producto = db.define('producto',{
nombre:{
    type: sequelize.STRING
},
precio:{
    type: sequelize.FLOAT
},
stock:{
    type: sequelize.NUMBER
},
imagen:{
    type: sequelize.STRING
},
iva:{
    type: sequelize.STRING
},
slug:{
    type: sequelize.STRING
},
cat_id:{
    type: sequelize.NUMBER
},
});