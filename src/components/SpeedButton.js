import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FastForwardIcon from "@material-ui/icons/FastForward";

const SpeedButton = ({ speed, onClick }) => {
  return (
    <div className="Button" onClick={onClick}>
      {speed === 5 ? (
        <FastForwardIcon style={{ fontSize: 40 }} />
      ) : speed === 100 ? (
        <PlayArrowIcon style={{ fontSize: 40 }} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SpeedButton;
