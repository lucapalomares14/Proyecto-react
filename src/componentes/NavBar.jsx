import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav style={styles.nav}>
      {/* Logo / Brand */}
      <h1 style={styles.logo}>MiTienda</h1>

      {/* Enlaces de navegación */}
      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
    color: "white",
    widht:"100%",
    boxSizing: "border-box"
  },
  logo: {
    fontSize: "1.5rem",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin:0,
    padding:0

}
}

export default NavBar
