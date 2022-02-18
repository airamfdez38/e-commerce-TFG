import mongoose from 'mongoose';


const productoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    marca: { type: String, required: true },
    imagen: { type: String, required: true },
    stock: { type: Number, required: true },
    precio_unidad: { type: Number, required: true },
    categoria: { type: String, required: true }

  },
  {
    timestamps: true,
  }
);
const Producto = mongoose.model('Producto', productoSchema);

export default Producto;