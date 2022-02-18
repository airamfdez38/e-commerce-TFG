import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema(
  {
    Pedido: [
      {
        cantidad: { type: Number, required: true },
        total: { type: Number, required: true },
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Producto',
          required: true,
        },
        cliente: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cliente',
          required: true,
        }

      },
    ],
  },
  {
    timestamps: true,
  }
);
const Pedido = mongoose.model('Pedido', pedidoSchema);
export default Pedido;