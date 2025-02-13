import Navbar from "../components/Navbar";
import FruitItem from "../components/FruitItem";
import { useCart } from "../context/CartContext"; 

export default function FruitList() {
  const { addToCart } = useCart(); 
  const fruits = [
    { name: "Apples", price: 3, inStock: true, image: "/images/apples.jpg" },
    { name: "Avacado", price: 2.5, inStock: false, image: "/images/avacado.jpg" },
    { name: "Bananas", price: 1.5, inStock: true, image: "/images/bananas.jpg" },
    { name: "Kiwi", price: 2, inStock: true, image: "/images/kiwi.jpg" },
    { name: "Orange", price: 4, inStock: true, image: "/images/orange.png" },
    { name: "Papaya", price: 5, inStock: false, image: "/images/papaya.jpg" },
    { name: "Pear", price: 2.8, inStock: true, image: "/images/pear.png" },
    { name: "Strawberry", price: 1.2, inStock: true, image: "/images/strawberry.jpeg" },
    { name: "Raspberry", price: 7, inStock: true, image: "/images/raspberry.jpg" },
    { name: "Pineapple", price: 3.5, inStock: true, image: "/images/pineapple.jpg" },
     { name: "Mango", price: 2.2, inStock: true, image: "/images/mango.webp" },
    { name: "Pomegranate", price: 4.5, inStock: false, image: "/images/pomegranate.jpg" },
    
  ];

  return (
    <div>
      <Navbar />
      <h1>Fresh Fruits!</h1>
      <div style={styles.grid}>
        {fruits.map((item, index) => (
          <FruitItem key={index} {...item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
};
