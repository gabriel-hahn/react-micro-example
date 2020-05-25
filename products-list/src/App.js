import React from 'react';

const productsItemsArr = ['Rice', 'Beans', 'Fries', 'Steak'];

const styles = {
  productsList: {
    display: 'flex',
    padding: '0'
  },
  product: {
    padding: '30px',
    listStyle: 'none',
    border: '1px solid #000',
    margin: '5px'
  }
};

const App = () => (
  <section>
    <h2>Products</h2>
    <ul style={styles.productsList}>
      { productsItemsArr.map((product) => (
        <li style={styles.product}>
          <b>{product}</b> <br />
          $ {(Math.random() * 100).toFixed(2)} <br />
          <button>Buy</button>
        </li>
      )) }
    </ul>
  </section>
);

export default App;
