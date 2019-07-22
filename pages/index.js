import React from "react";
import Particles from 'react-particles-js';
import styles from "./styles.css";

const partyDate = new Date("Jul 27, 2019 15:30:00").getTime();

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
      <div className={styles.sideSection}>
      </div>
      <div className={styles.mainSection}>
        <Particles className={styles.particles}
          params={{
            "particles": {
                "color":{"value":"#1194ca"},
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            }
          }} />
        <div className={styles.eventInfoWrapper}>
          <div className={styles.eventInfoHeader}>
            <div className={styles.eventInfoTitle}>
              <h1>Kolyan's<br/>bachelor party</h1>
            </div>
            <div className={styles.eventInfoDate}>
              <span className={styles.dateDay}>27</span>
              <span className={styles.dateMonth}>Июля</span>
            </div>
          </div>
          <div className={styles.eventInfoGuests}>
            <span className={styles.guestsTitle}>На мальчишнике будут:</span>
            <span className={styles.guestsList}>Валера, Егор, Ваня, Дима, Саша, Федя, Паша, Леша</span>
          </div>
          <div className={styles.eventInfoGuests}>
            <span className={styles.guestsTitle}>Вы торжественно приглашены:</span>
            <span className={styles.guestsList}>Для того что бы попасть на свой мальчишник, вам нужно выйти из своего подъезда в 15:30</span>
          </div>
        </div>
        <div className={styles.eventTimerWrapper}>
          <span className={styles.eventTimerTitle}>До мальчишника осталось:</span>
          <div className={styles.countdown}>
            {partyStarted ? (
              <h1>ПОРА ТУСИТЬ</h1>
            ) : (
              <div className={styles.timerWrapper}>
                <div className={styles.timerCell}>
                  <span className={styles.timerNum}>{convertNumber(days)}</span>
                  <span className={styles.timerText}>дней</span>
                </div>
                <div className={styles.timerCell}>
                  <span className={styles.timerNum}>{convertNumber(hours)}</span>
                  <span className={styles.timerText}>часов</span>
                </div>
                <div className={styles.timerCell}>
                  <span className={styles.timerNum}>{convertNumber(minutes)}</span>
                  <span className={styles.timerText}>минут</span>
                </div>
                <div className={styles.timerCell}>
                  <span className={styles.timerNum}>{convertNumber(seconds)}</span>
                  <span className={styles.timerText}>секунд</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

function convertNumber(n){
  return n > 9 ? "" + n: "0" + n;
}

export default Home;
