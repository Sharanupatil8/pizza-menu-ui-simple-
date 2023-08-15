function Footer({ time }) {
  return (
    <div className="footer">
      <div className="order">
        <p>We're open from 12:00 to 22:00. Come visit us or order online.</p>

        {time < 22 && time > 12 ? <button className="btn">Order</button> : ""}
      </div>
    </div>
  );
}

export default Footer;
