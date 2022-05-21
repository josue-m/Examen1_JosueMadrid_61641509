const { Schema, model } = require("mongoose");

const SchemaVideos = Schema(
{
    titulo: 
    {
        type: String,
    },
    
    descripcion: 
    {
        type: String
    },
    
    duracion: 
    {
        type: String
    },
    
    autor: 
    {
        type: String
    },
    
    enlace: 
    {
        type: String
    },
    
    fechayhora: 
    {
        type: String
    },

    activo: 
    {
        type: Boolean,
        default: true
    }

});

SchemaVideos.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}



module.exports = model("Videos", SchemaVideos);