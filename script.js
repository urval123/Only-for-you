const febHolidays = [
    "Dear Best Friend💕",
    "I'm so lucky to have you in my life",
    "You accept me at my worst💞",
    "And make me feel amazing at my best",
    "We have our inside jokes",
    "That no one else but us understand✌🏻",
    "When I fall you laugh😆",
    "but you always there to pick me up!",
    "You get my UgLiEst photos and videos",
    "that could socially destory me🤪",
    "But I know you would never use them against me...😍",
    "Despite how smart we are😝",
    "We are stupid together and that okay😊",
    "I could be with you for hours",
    "And never get bored !",
    "You are irreplaceable,",
    "You are my other half😻💕",
    "I would never be able to imagine life without you,",
    "I am a better person when I'm with you!🥰",
    "I can always count on you",
    "To be there when I needed you most🤩",
    "You always stick up for me",
    "Even when I'm wrong",
    "(But I'm never wrong)😝🤚🏻",
    "And I want to thank you",
    "for everything for putting up with me",
    "when I get a LiTtLe annoying!",
    "You taught me new things...",
    "and I would trust you with my life🤗🤞🏻",
    "I LOVE YOU💕✨",
    "Thank you for being with me😭💕✨"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
