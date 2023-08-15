import Pizza from "./Pizza";

function Menu(props) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {props.pizzaData.map((data) => (
          <Pizza
            name={data.name}
            ingredients={data.ingredients}
            image={data.photoName}
            price={data.price}
            soldOut={data.soldOut}
            time={props.time}
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
