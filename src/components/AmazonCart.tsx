import ProductCard from './ProductCard';
import './styles/AmazonCart.scss';

const products = [
    { id: 1, name: 'Laptop', price: 899.99, image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Smartphone', price: 499.99, image: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Headphones', price: 199.99, image: 'https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Smartwatch', price: 299.99, image: 'https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Tablet', price: 399.99, image: 'https://plus.unsplash.com/premium_photo-1706303406333-eab439ae3d65?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'Camera', price: 599.99, image: 'https://images.unsplash.com/photo-1457608135803-4827addc43e0?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 7, name: 'Bluetooth Speaker', price: 149.99, image: 'https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, name: 'Gaming Console', price: 499.99, image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 9, name: 'Wireless Mouse', price: 49.99, image: 'https://images.unsplash.com/photo-1492140260770-41aec2341f6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 10, name: 'Mechanical Keyboard', price: 89.99, image: 'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];
  

const AmazonCart = () => {
  return (
    <div className="amazon-cart">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default AmazonCart;
