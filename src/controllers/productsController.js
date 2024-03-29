import Product from "../models/productsModel";

export const obtenerProductos = async (req, res) => {
  const productos = await Product.findAll();
  res.json(productos);
};

export const obtenerProductoPorId = async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  res.json(producto);
};

export const crearProducto = async (req, res) => {
  await Product.create(req.body);
  res.json({ message: "Producto creado" });
};

export const actualizarProductoPorId = async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  await producto.update(req.body);
  res.json({ message: "Producto actualizado" });
};

export const eliminarProductoPorId = async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  await producto.destroy();
  res.json({ message: "Producto eliminado" });
};
