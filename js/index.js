// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  console.log(price.innerHTML *1);
  const quantity = product.querySelector('.quantity input');
  console.log(quantity.value);
  const subtotal = price.innerHTML * quantity.value;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  console.log(products);
  let total = 0;
  products.forEach(product => {
    const result = updateSubtotal(product);
    total += result;
  });
  
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  console.log(event.path);

}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.text-input').value;
  const productPrice = document.querySelector('.number-input').value;
  const row = document.createElement('tr');
  row.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${productPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach (btn => addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
