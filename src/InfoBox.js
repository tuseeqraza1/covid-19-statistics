import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isOrange, isRed, ...props }) {
  console.log(title, active);

  var colorCodeBar;
  var colorCodeText;

  if (isRed) {
    colorCodeBar = "infoBox--red";
    colorCodeText = "infoBox__cases--red";
  } else if (isOrange) {
    colorCodeBar = "infoBox--orange";
    colorCodeText = "infoBox__cases--orange";
  } else {
    colorCodeBar = "infoBox--green"
    colorCodeText = "infoBox__cases--green";
  }


  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${colorCodeBar}`}
    >
      <CardContent>
        <Typography className="infoBox__title" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${colorCodeText}`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
