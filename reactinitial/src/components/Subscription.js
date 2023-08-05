import { Paper, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const Subscription = ({ hideSubscription }) => {
  const [emailValue, setEmailValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setEmailValue(event.target.value);
    if (emailValue.includes("@") && emailValue.includes(".")) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = () => {
    if (!isValid) {
      return;
    }
    setLoading(true);
    fetch("https://demoapi.com/api/series/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailValue }),
    })
      .then(setSuccess(true))
      .catch((error) => console.log(error));

    setTimeout(() => {
      hideSubscription();
    }, 5000);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Typography variant="h2">Subscribe to our newsletter</Typography>
      {success ? (
        <Typography variant="body1">Subscribed</Typography>
      ) : !loading ? (
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <TextField
            variant="outlined"
            label="Email"
            id="email"
            type="email"
            value={emailValue}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Subscribe
          </Button>
        </Box>
      ) : null}
    </Paper>
  );
};

Subscription.propTypes = {
  hideSubscription: PropTypes.func.isRequired,
};

export default Subscription;
