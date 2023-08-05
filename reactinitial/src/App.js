import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState(null);
  const [showSubscription, setShowSubscription] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://demoapi.com/api/series/howimetyourmother")
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response);
        setIsLoading(false);
        setTimeout(() => {
          setShowSubscription(true);
        }, 10000);
      })
      .catch((err) => console.error(err));
  }, []);

  const hideSubscription = () => {
    setShowSubscription(false);
  };

  if (isLoading) {
    return <LoadingMask />;
  } else {
    return (
      <>
        {showSubscription && (
          <Subscription hideSubscription={hideSubscription} />
        )}
        {characters &&
          characters.map((character, i) => (
            <Character
              key={i}
              name={character.name}
              details={character.details}
            />
          ))}
      </>
    );
  }
};

export default App;
