const Card = (product) => {
  return `
    <article class="Card">
      <img src="${product.images[0]}" alt="${product.title}" />
      <h2>
        ${product.title}
        <small>$ ${product.price}</small>
      </h2>
    </article>
    `;
};

export default Card;