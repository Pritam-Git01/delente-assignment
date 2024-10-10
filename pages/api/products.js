// pages/api/products.js

let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      // Return the list of products
      res.status(200).json(products);
    } else if (req.method === 'POST') {
      // Add a new product to the list
      const { id, name, price } = req.body;
  
      if (!id || !name || !price) {
        return res.status(400).json({ error: 'All fields (id, name, price) are required.' });
      }
  
      const newProduct = { id, name, price };
      products.push(newProduct);
  
      return res.status(201).json(newProduct);
    } else {
      // Handle any other HTTP methods
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  