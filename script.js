fetch('products.json')
  .then(r => r.json())
  .then(products => {
    const list = document.getElementById('product-list');
    if(!products || products.length === 0){
      list.innerHTML = '<p>No products yet. Add items to products.json</p>';
      return;
    }
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>${p.price} • <small>${p.category || ''}</small></p>
        <a class="buy" href="${p.link}" target="_blank">Shop Now</a>
      `;
      list.appendChild(card);
    });
  });