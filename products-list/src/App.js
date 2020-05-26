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

const App = () => {
  const addToCart = (item) => () => {
    const event = new CustomEvent('addToCart', { detail: item });

    window.dispatchEvent(event);
  }

  const productItemView = (product, index) => {
    const price = parseFloat((Math.random() * 100).toFixed(2));

    return (
      <li key={index} style={styles.product}>
        <b>{product}</b> <br />
        $ {price} <br />
        <button onClick={addToCart({ product, price })}>Buy</button>
      </li>
    );
  };

  return (
    <section>
      <h2>Products</h2>
      <ul style={styles.productsList}>
        { productsItemsArr.map(productItemView) }
      </ul>
    </section>
  );
};

export default App;
