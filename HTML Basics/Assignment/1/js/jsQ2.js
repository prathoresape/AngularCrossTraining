// script.js

const priceFilter = document.querySelector('#price-filter');
const products = document.querySelectorAll('.product');

priceFilter.addEventListener('change', () => {
  const filterValue = priceFilter.value;

  // show all products if filter value is "All"
  if (filterValue === 'all') {
    products.forEach(product => {
      product.style.display = 'block';
    });
  } else {
    // hide products that don't match the selected price range
    products.forEach(product => {
      const price = parseFloat(product.querySelector('.price').textContent.replace('$', ''));
      if (price >= filterValue.split('-')[0] && price <= filterValue.split('-')[1]) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
});
