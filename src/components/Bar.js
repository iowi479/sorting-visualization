const Bar = ({ value, color, amount, maxValue }) => {
  const relHeight = 100 * (value / maxValue);
  const relWidth = (100 / amount) * (3 / 4);
  const margin = (100 / amount) * (1 / 8);

  let backgroundColor;
  switch (color) {
    case 0:
      backgroundColor = "cornflowerblue";
      break;

    case 1:
      backgroundColor = "crimson";
      break;

    case 2:
      backgroundColor = "forestgreen";
      break;

    case 3:
      backgroundColor = "gold";
      break;

    default:
      backgroundColor = "white";
      break;
  }

  return (
    <div
      className="Bar"
      style={{
        height: `${relHeight}%`,
        width: `${relWidth}%`,
        marginLeft: `${margin}%`,
        marginRight: `${margin}%`,
        backgroundColor: `${backgroundColor}`,
      }}
    ></div>
  );
};

Bar.defaultProps = {
  value: 0,
  color: 0,
  amount: 0,
  maxValue: 200,
};

export default Bar;
