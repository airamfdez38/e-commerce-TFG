import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dni: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    telefono:{ type: String, required: false},
    isAdmin: { type: Boolean, default: false, required: true }
  },
  {
    timestamps: true,
  }
);
const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;