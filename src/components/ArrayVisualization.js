import Bar from "./Bar";

const ArrayVisualization = ({ array, colors }) => {
  const length = array.length;
  return (
    <div className="ArrayVisualization">
      {array.map((value, i) => (
        <Bar key={i} value={value} color={colors[i]} amount={length} />
      ))}
    </div>
  );
};

ArrayVisualization.defaultProps = {
  array: [],
  colors: [],
};

export default ArrayVisualization;
