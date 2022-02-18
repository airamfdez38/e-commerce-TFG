import mongoose from 'mongoose';


const productoSchema = new mongoose.Schema(
  {
    Producto:[
      {
        nombre: { type: String, required: true, unique: true },
        marca: { type: String, required: true },
        imagen: { type: String, required: true },
        stock: { type: Number, required: true },
        precio_unidad: { type: Number, required: true },
        categoria: { type: String, required: true },
        proveedor: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Proveedor',
          required: true,
        },
      },
    ],

  },
  {
    timestamps: true,
  }
);
const Producto = mongoose.model('Producto', productoSchema);

export default Producto;