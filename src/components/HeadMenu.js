import Button from "./Button";
import NameTag from "./Nametag";
import SpeedButton from "./SpeedButton";
import StopButton from "./StopButton";
import { Slider, Typography } from "@material-ui/core";

const HeadMenu = ({
  isRunning,
  animationDelay,
  onRandomArray,
  onSelectionSort,
  onBubbleSort,
  onMergeSort,
  onQuickSort,
  onAnimationDelayChange,
  onArraySizeChange,
  onStopAnimation,
}) => {
  return (
    <div className="HeadMenu">
      <div style={{ width: "10%" }}></div>
      <div style={{ width: "10%" }}>
        <div className="SpeedContainer">
          <SpeedButton
            className="SpeedContainerItem"
            speed={animationDelay}
            onClick={onAnimationDelayChange}
          />
          <StopButton
            className="SpeedContainerItem"
            onClick={onStopAnimation}
          />
        </div>
      </div>

      <div style={{ width: "10%" }}></div>

      <Button size={10} text={"random Array"} onClick={onRandomArray} />

      <div style={{ width: "5%" }}></div>

      <div style={{ width: "20%" }}>
        <Typography
          style={{ width: "100%" }}
          className="LabelArraySizeSlider"
          id="discrete-slider-small-steps"
          gutterBottom
        >
          Array Size
        </Typography>

        <Slider
          className="ArraySizeSlider"
          disabled={isRunning}
          defaultValue={50}
          min={10}
          max={200}
          aria-labelledby="discrete-slider-custom"
          step={10}
          valueLabelDisplay="auto"
          marks={[
            {
              value: 10,
              label: "10",
            },
            {
              value: 50,
              label: "50",
            },
            {
              value: 100,
              label: "100",
            },
            {
              value: 150,
              label: "150",
            },
            {
              value: 200,
              label: "200",
            },
          ]}
          onChange={(event, value) => {
            onArraySizeChange(value);
          }}
        />
      </div>

      <div style={{ width: "10%" }}></div>

      <div style={{ width: "10%" }}></div>

      <Button size={10} text={"Selectionsort"} onClick={onSelectionSort} />
      <Button size={10} text={"Bubblesort"} onClick={onBubbleSort} />
      <Button size={10} text={"Mergesort"} onClick={onMergeSort} />
      <Button size={10} text={"Quicksort"} onClick={onQuickSort} />

      <div style={{ width: "10%" }}></div>

      <NameTag size={10} text={"Simon Schindler"} />

      <div style={{ width: "5%" }}></div>
    </div>
  );
};

export default HeadMenu;
