import React from "react";
import styles from "./styles.css";

const partyDate = new Date("Jul 27, 2019 18:00:00").getTime();

function Home() {
  const [days, setDays] = React.useState(10);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [partyStarted, setPartyStarted] = React.useState(false);

  const timer = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = partyDate - now;

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(timer);
      setPartyStarted(true);
    }
  }, 1000);

  return (
    <div className={styles.container}>
      <div className={styles.countdown}>
        <div className={styles.title}>до вашего мальчишника осталось</div>
        <br />
        {partyStarted ? (
          <h1>ПОРА ТУСИТЬ</h1>
        ) : (
          <div className={styles.timer}>
            {days} дней : {hours} часов : {minutes} минут : {seconds} секунд
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
