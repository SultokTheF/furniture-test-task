import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import MobileStepper, { MobileStepperProps } from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

import "./Home.css";

import furnitureData from "../../../data/furnitureData.json";

interface FurnitureItem {
  id: number;
  name: string;
  description: string;
  likes: number;
  dislikes: number;
  image: string;
}

const Home: React.FC = () => {
  const [index, setActiveStep] = useState<number>(0);
  const theme = useTheme();

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (furnitureData.length === 0) {
    return <div>Loading...</div>;
  }

  const CollectionSize = furnitureData.length;

  const mobileStepperProps: MobileStepperProps = {
    variant: "text",
    position: "static",
    steps: CollectionSize,
    activeStep: index,
    nextButton: (
      <Button
        size="small"
        onClick={goToNextPicture}
        disabled={index === CollectionSize - 1}
      >
        Next
        {theme.direction !== "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </Button>
    ),
    backButton: (
      <Button
        size="small"
        onClick={goToPrevPicture}
        disabled={index === 0}
      >
        {theme.direction !== "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
        Back
      </Button>
    ),
  };

  return (
    <div className="home">
      <div style={{ marginLeft: "35%" }}>
        <h2>Нужно было слайдер приделать</h2>
        <div style={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            style={{
              height: 50,
              display: "flex",
              paddingLeft: theme.spacing(4),
              backgroundColor: theme.palette.background.default,
              alignItems: "center",
            }}
          >
            <Typography>{furnitureData[index].name}</Typography>
          </Paper>
          <img
            src={furnitureData[index].image}
            style={{
              height: 255,
              width: "100%",
              maxWidth: 400,
              display: "block",
              overflow: "hidden",
            }}
            alt={furnitureData[index].name}
          />
          <MobileStepper {...mobileStepperProps} />
        </div>
      </div>
    </div>
  );
};

export default Home;
