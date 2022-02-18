import mongoose from 'mongoose';

const proveedorSchema = new mongoose.Schema(
  {
    cif: { type: String, required: true, unique: true },
    nombre_empresa: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono:{ type: String, required: false},
    email: { type: String, required: true, unique: true }
    
  },
  {
    timestamps: true,
  }
);
const Proveedor = mongoose.model('Proveedor', proveedorSchema);
export default Proveedor;