import mongoose from 'mongoose';

const facturaSchema = new mongoose.Schema(
  {
      Factura:[
        {
            importe: { type: Number, required: true },
            pedido:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Pedido',
                required: true,
            }
        }
      ]
  },
  {
    timestamps: true,
  }
);
const Factura = mongoose.model('Factura', facturaSchema);
export default Factura;