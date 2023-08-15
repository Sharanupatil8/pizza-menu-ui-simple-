function Pizza({ name, image, price, ingredients, soldOut, time }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

export default Pizza;
