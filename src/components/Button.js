const Button = ({ text, size, onClick }) => {
  return (
    <div className="Button" onClick={onClick} style={{ width: `${size}%` }}>
      <p style={{ flex: 1 }} onClick={onClick}>
        {text}
      </p>
    </div>
  );
};

export default Button;
