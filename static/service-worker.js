console.log("activated");
const interval = setInterval(() => {
  const partyStart = new Date("Jul 27, 2019 15:30:00");
  const now = new Date().getTime();
  const isStarted = partyStart.getTime() - now <= 0;

  if (isStarted) {
    clearInterval(interval);
    return;
  }

  if (self.registration.active.state === "activated" && !isStarted) {
    const distance = partyStart.getTime() - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const notifTime = hours == 0 && minutes == 0 && seconds == 0;
    const start = days == 0;

    if (notifTime) {
      if (start) {
        self.registration.showNotification("ВЫХОДИ БРАТАН", {
          body: "ВРЕМЯ ТУСИТЬ",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample"
        });
      }
      self.registration.showNotification("До мальчишника осталось", {
        body: `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`,
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "vibration-sample"
      });
    }
  }
}, 1000);
