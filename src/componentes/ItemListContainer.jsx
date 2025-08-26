function ItemListContainer({ greeting }) {
  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
    </div>
  )
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontSize:"1.5rem"
  }
}

export default ItemListContainer