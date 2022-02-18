import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      nombre: 'Maria',
      apellidos: 'Fernández Sánchez', 
      email: 'admin@example.com',
      dni: '11111111K',
      password: bcrypt.hashSync('1234', 8),
      telefono: '625910136',
      isAdmin: true,
    },
    {
      nombre: 'Lucía',
      apellidos: 'Ruíz Ojeda',
      dni: '22222222L',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      nombre: 'Camiseta JavaScript',
      marca: 'JavaScript',
      imagenn: '/imagens/j1.jpg',
      stock: 10,
      precio_unidad: 28,
      categoria: 'Shirts'
    },
    {
      nombre: 'Camiseta React ',
      marca: 'React',
      imagen: '/imagens/r1.jpg',
      stock: 20,
      precio_unidad: 34,
      categoria: 'Shirts'
    },
    {
      nombre: 'Camiseta Node',
      marca: 'Node',
      imagen: '/imagens/n1.jpg',
      stock: 0,
      precio_unidad: 220,
      categoria: 'Shirts'
    },
    {
      nombre: 'Sudadera HTML',
      marca: 'HTML',
      imagen: '/imagens/h1.jpg',
      stock: 15,
      precio_unidad: 58,
      categoria: 'Hoodies'
    },
    {
      nombre: 'Sudadera Sass',
      marca: 'Sass',
      imagen: '/imagens/s1.jpg',
      stock: 5,
      precio_unidad: 65,
      categoria: 'Hoodies'
    },
    {
      nombre: 'Sudadera CSS',
      marca: 'CSS',
      imagen: '/imagens/c1.jpg',
      stock: 12,
      precio_unidad: 52,
      categoria: 'Hoodies'
    },
  ],
};
export default data;