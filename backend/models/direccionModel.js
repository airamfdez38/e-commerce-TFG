import mongoose from 'mongoose';


const direccionSchema = new mongoose.Schema(
  {
    Direccion:[
      {
        via: { type: String, required: true},
        nombre: { type: String, required: true, unique: true },
        numero: { type: String, required: true },
        cod_postal: { type: String, required: true },
        ciudad: { type: String, required: true },
        pais: { type: String, required: true },
        cliente: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cliente',
          required: true,
        },
      },
    ],

  },
  {
    timestamps: true,
  }
);
const Direccion = mongoose.model('Direccion', direccionSchema);

export default Direccion;