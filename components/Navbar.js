import Link from "next/link"; 

export default function Navbar() { 
  return ( 
    <nav style={styles.navbar}> 
      <Link href="/" style={styles.link}>Home</Link> 
      <Link href="/fruit" style={styles.link}>Fruit Catalog</Link> 
      <Link href="/cart" style={styles.link}>Cart</Link> 
      <Link href="/contact" style={styles.link}>Contact</Link> 
    </nav> 
  ); 
}
const styles = { 
  navbar: { 
    display: "flex", 
    padding: "10px", 
    background: "#000000",  
    width: "100%",  
    margin: "0",  
    boxSizing: "border-box", 
  }, 
  link: {
    color: "#FFFFFF",  
    textDecoration: "none", 
    margin: "0 15px", 
  }
};
