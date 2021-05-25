import StopIcon from "@material-ui/icons/Stop";

const StopButton = ({ onClick }) => {
  return (
    <div className="Button" onClick={onClick}>
      {<StopIcon style={{ fontSize: 40 }} onClick={onClick} />}
    </div>
  );
};

export default StopButton;
