import { Button } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const ShowMore = ({ changeShowDetails }) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
    changeShowDetails();
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      {!showMore ? "Show More" : "Show Less"}
    </Button>
  );
};

ShowMore.propTypes = {
  changeShowDetails: PropTypes.func.isRequired,
};

export default ShowMore;
