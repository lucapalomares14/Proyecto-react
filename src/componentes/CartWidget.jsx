function CartWidget() {
  return (
    <div style={styles.cart}>
      🛒
      <span style={styles.count}>3</span>
    </div>
  )
}

const styles = {
  cart: {
    position: "relative",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  count: {
    position: "absolute",
    top: "-8px",
    right: "-10px",
    backgroundColor: "red",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.8rem",
    color: "white",
  }
}

export default CartWidget