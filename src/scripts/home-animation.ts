import SplitType from "split-type";

const play = true;

window.addEventListener("DOMContentLoaded", () => {
  if (!play) return;
  const isAtTop = window.scrollY <= 0;

  if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
    return;
  }

  if (isAtTop) playLandingPageAnimations();
  else skipLandingPageAnimations();
});

function playLandingPageAnimations() {
  const header = SplitType.create("header h1", {
    types: "words,lines",
  });

  if (header.lines) {
    for (let i = 0; i < (header.lines?.length ?? 0); i++) {
      const line = header.lines[i];
      line.style.setProperty("--line-index", `${i}`);

      line.querySelectorAll(".word").forEach((word, j) => {
        (word as HTMLElement).style.transform = "translateY(100%)";

        word.animate([{ transform: "translateY(100%) skew(5deg)" }, { transform: "translateY(0) skew(0deg)" }], {
          duration: 700,
          delay: 100 * i ** 2 + 50 * j,
          fill: "forwards",
          easing: "ease",
        });
      });
    }
  }

  const subtitle = document.querySelector("header p") as HTMLParagraphElement;
  subtitle.style.opacity = "0";
  subtitle.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 700,
    delay: 1200,
    easing: "ease",
    fill: "forwards",
  });

  const content = document.querySelector(".content") as HTMLDivElement;
  content.style.opacity = "0";
  content.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 700,
    delay: 1400,
    easing: "ease",
    fill: "forwards",
  });
}

function skipLandingPageAnimations() {
  console.log("Skip");
}
