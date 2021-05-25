const Nametag = ({ text, size }) => {
  return (
    <div className="Nametag" style={{ width: `${size}%` }}>
      <p style={{ flex: 1 }}>{text}</p>
    </div>
  );
};

export default Nametag;
