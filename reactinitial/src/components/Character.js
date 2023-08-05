import { Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import ShowMore from "./ShowMore";
import { useState } from "react";

const Character = ({ name, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const changeShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Paper elevation={4} sx={{ margin: "1rem", padding: "1rem" }}>
      <Typography variant="body1">{name}</Typography>
      {showDetails && <Typography variant="body2">{details}</Typography>}
      <ShowMore changeShowDetails={changeShowDetails} />
    </Paper>
  );
};

Character.protoTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Character;
