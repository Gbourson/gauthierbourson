gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Draggable);

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 7740);
});

setTimeout(() => {
  document.querySelector(".presentation").style.display = "block";
  document.querySelector(".contact").style.display = "flex";
  document.querySelector(".paperplane").style.display = "block";
  document.querySelector("#unlockplane").style.display = "block";
  document.querySelector("#lockplane").style.display = "block";
  document.querySelector(".gallery").style.opacity = "1";
  document.querySelector("#ABOUT").style.opacity = "1";
}, 8240);

gsap.to("#hand", {
  duration: 5.4,
  repeat: 0,
  delay: 1.52,
  display: "block",
  ease: "linear",
  motionPath: {
    path: "#handpath2",
    align: "#handpath2",
    autoRotate: false,
    alignOrigin: [0.5, 0.5],
  },
});

gsap.to("#paperplane2bis", {
  opacity: 100,
  duration: 8,
  delay: 18,
  ease: Power2.easeIn,
  motionPath: {
    path: "#flypath2",
    align: "#flypath2",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});

gsap.to("#paperplane5", {
  opacity: 100,
  duration: 18,
  repeat: 100,
  delay: 5,
  motionPath: {
    path: "#flypath3",
    align: "#flypath3",
    autoRotate: false,
    alignOrigin: [0.5, 0.5],
  },
});

gsap.to("#paperplane3", {
  opacity: 100,
  duration: 18,
  repeat: 100,
  motionPath: {
    path: "#flypath4",
    align: "#flypath4",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});

gsap.to("#paperplanedraw", {
  opacity: 0,
  delay: 19,
});

const paperplane2bis = document.getElementById("#paperplane2bis");
const gallery = document.querySelector(".gallery");

gsap.to(paperplane2bis, {
  opacity: 0,
  delay: 7.5,
});

gsap.from(gallery, {
  duration: 1,
  ease: Power3.easeIn,
  opacity: 0,
});

gsap.from("svg path", {
  duration: 1,
  width: 0,
  scrollTrigger: "svg path",
});

document.getElementById("unlockplane").onclick =
  function unlockplanefunction() {
    document.getElementById("global").style.left = "0%";
    document.getElementById("playground").style.left = "0%";

    document.getElementById("lockplane").style.background = "transparent";

    document.querySelector(".game").style.opacity = "100";

    var e = document.getElementById("unlockplane");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(0, 0, 0)") {
      document.getElementById("unlockplane").style.background = "#ffff";
    } else {
      document.getElementById("unlockplane").style.background = "#ffff";
    }
  };

document.getElementById("lockplane").onclick = function lockplanefunction() {
  document.getElementById("global").style.left = "-100%";
  document.getElementById("playground").style.left = "-100%";

  document.getElementById("unlockplane").style.background = "transparent";

  document.getElementById("lockplane").style.background = "#ffff";

  document.querySelector(".game").style.opacity = "0";
};

document.querySelector(".mychirolink").onclick = function Functionmychiro() {
  gsap.to(".gallery", {
    duration: 1,
    y: -1000,
    opacity: 0,
  });

  gsap.from(".projectscontainer", {
    opacity: 0,
    delay: 0.2,
    duration: 2,
    ease: Power3.easeInOut,
  });

  document.querySelector(".projectscontainer").style.display = "flex";
};

document.querySelector(".leilalink").onclick = function Functionleila() {
  gsap.to(".gallery", {
    duration: 1,
    y: -1000,
    opacity: 0,
  });

  gsap.from(".projectscontainer2", {
    opacity: 0,
    delay: 0.2,
    duration: 2,
    ease: Power3.easeInOut,
  });

  document.querySelector(".projectscontainer2").style.display = "flex";
};

document.querySelector(".koozylink").onclick = function Functionkoozy() {
  gsap.to(".gallery", {
    duration: 1,
    y: -1000,
    opacity: 0,
  });

  gsap.from(".projectscontainer3", {
    opacity: 0,
    delay: 0.2,
    duration: 2,
    ease: Power3.easeInOut,
  });

  document.querySelector(".projectscontainer3").style.display = "flex";
};

document.getElementById("ABOUT").onclick = function aboutfunction() {
  gsap.to("#ABOUT", {
    y: -300,
  });

  gsap.to("#RETURN", {
    y: +280,
  });

  gsap.to(".gallery", {
    x: -2000,
    duration: 1,
  });

  gsap.to(".my-div", {
    opacity: 1,
    duration: 1,
  });

  document.querySelector(".my-div").style.zIndex = "100";

  document.querySelector(".aboutcontainer").style.display = "block";

  gsap.to(".projectscontainer", {
    x: -2000,
    duration: 1,
  });
  gsap.to(".projectscontainer2", {
    x: -2000,
    duration: 1,
  });
  gsap.to(".projectscontainer3", {
    x: -2000,
    duration: 1,
  });

  gsap.to("#unlockplane", {
    opacity: 1,
    duration: 1,
  });

  gsap.to("#lockplane", {
    opacity: 1,
    duration: 1,
  });

  gsap.to(".paperplane", {
    opacity: 1,
    duration: 1,
  });
};

document.getElementById("RETURN").onclick = function returnfunction2() {
  document.querySelector("body").style.width = "100%";

  gsap.to("#RETURN", {
    y: -500,
  });

  gsap.to("#ABOUT", {
    y: +10,
  });

  gsap.to(".gallery", {
    x: 0,
    duration: 1,
  });

  gsap.to(".my-div", {
    opacity: 0,
    duration: 1,
  });

  document.querySelector(".my-div").style.zIndex = "-100";
  document.querySelector(".aboutcontainer").style.display = "none";

  gsap.to(".projectscontainer", {
    x: 0,
    duration: 1,
  });
  gsap.to(".projectscontainer2", {
    x: 0,
    duration: 1,
  });
  gsap.to(".projectscontainer3", {
    x: 0,
    duration: 1,
  });

  gsap.to("#unlockplane", {
    opacity: 0,
    duration: 1,
  });

  gsap.to("#lockplane", {
    opacity: 0,
    duration: 1,
  });

  gsap.to(".paperplane", {
    opacity: 0,
    duration: 1,
  });

  gsap.to(".game", {
    opacity: 0,
    duration: 1,
  });

  document.getElementById("stage").style.display = "none";
  document.getElementById("global").style.left = "-100%";
  document.getElementById("playground").style.left = "-100%";
  document.getElementById("unlockplane").style.background = "transparent";
  document.getElementById("lockplane").style.background = "#ffff";
};

document.querySelector(".game").onclick = function startgamefunction() {
  document.getElementById("stage").style.display = "block";
  document.getElementById("stage").style.zIndex = "100";
  document.getElementById("global").style.left = "-100%";
  document.getElementById("playground").style.left = "-100%";
};

let iteration = 0;

gsap.set(".cards li", { xPercent: 400, opacity: 0, scale: 0 });

const spacing = 0.11, 
  snapTime = gsap.utils.snap(spacing), 
  cards = gsap.utils.toArray(".cards li"),
  
  animateFunc = (element) => {
    const tl = gsap.timeline();
    tl.fromTo(
      element,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        zIndex: 1,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power1.in",
        immediateRender: false,
      }
    ).fromTo(
      element,
      { xPercent: 400 },
      { xPercent: -400, duration: 1, ease: "none", immediateRender: false },
      0
    );
    return tl;
  },
  seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
  playhead = { offset: 0 },
  wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()),
  scrub = gsap.to(playhead, {
  
    offset: 0,
    onUpdate() {
      seamlessLoop.time(wrapTime(playhead.offset));
    },
    duration: 0.5,
    ease: "power3",
    paused: true,
  }),
  trigger = ScrollTrigger.create({
    start: 0,
    onUpdate(self) {
      let scroll = self.scroll();
      if (scroll > self.end - 1) {
        wrap(1, 1);
      } else if (scroll < 1 && self.direction < 0) {
        wrap(-1, self.end - 1);
      } else {
        scrub.vars.offset =
          (iteration + self.progress) * seamlessLoop.duration();
        scrub.invalidate().restart(); 
      }
    },
    end: "+=2500",
    pin: ".gallery",
  }),

  progressToScroll = (progress) =>
    gsap.utils.clamp(
      1,
      trigger.end - 1,
      gsap.utils.wrap(0, 1, progress) * trigger.end
    ),
  wrap = (iterationDelta, scrollTo) => {
    iteration += iterationDelta;
    trigger.scroll(scrollTo);
    trigger.update();
  };

ScrollTrigger.addEventListener("scrollEnd", () =>
  scrollToOffset(scrub.vars.offset)
);

function scrollToOffset(offset) {
  let snappedTime = snapTime(offset),
    progress =
      (snappedTime - seamlessLoop.duration() * iteration) /
      seamlessLoop.duration(),
    scroll = progressToScroll(progress);
  if (progress >= 1 || progress < 0) {
    return wrap(Math.floor(progress), scroll);
  }
  trigger.scroll(scroll);
}

document
  .querySelector(".next")
  .addEventListener("click", () => scrollToOffset(scrub.vars.offset + spacing));
document
  .querySelector(".prev")
  .addEventListener("click", () => scrollToOffset(scrub.vars.offset - spacing));

function buildSeamlessLoop(items, spacing, animateFunc) {
  let rawSequence = gsap.timeline({ paused: true }),
    seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1, 
      onRepeat() {
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      },
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 100);
      },
    }),
    cycleDuration = spacing * items.length,
    dur; 

  items
    .concat(items)
    .concat(items)
    .forEach((item, i) => {
      let anim = animateFunc(items[i % items.length]);
      rawSequence.add(anim, i * spacing);
      dur || (dur = anim.duration());
    });

  seamlessLoop.fromTo(
    rawSequence,
    {
      time: cycleDuration + dur / 2,
    },
    {
      time: "+=" + cycleDuration,
      duration: cycleDuration,
      ease: "none",
    }
  );
  return seamlessLoop;
}

Draggable.create(".drag-proxy", {
  type: "x",
  trigger: ".cards",
  onPress() {
    this.startOffset = scrub.vars.offset;
  },
  onDrag() {
    scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
    scrub.invalidate().restart();
  },
  onDragEnd() {
    scrollToOffset(scrub.vars.offset);
  },
});

var pg = document.getElementById("playground");
var b = document.getElementById("ball");
var starter = document.getElementById("ABOUT");
var r = b.offsetWidth / 2;

var g = 1; 
var fr = 0.999; 
var frG = 0.8; 
var frB = 0.85; 
var tv = 100; 


var dragging = false;
pg.addEventListener("mousedown", mouseDown, false);
pg.addEventListener("mouseup", mouseUp, false);


var mx = 0,
  my = 0;
pg.addEventListener("mousemove", mouseMove, false);


var screenWMax = pg.offsetWidth - r;
var screenWMin = r;
var screenHMax = pg.offsetHeight - r;
var screenHMin = r;


var x = 0,
  y = 0,
  vx = 0,
  vy = 0;
var x1 = 0,
  y1 = 0,
  x2 = 0,
  y2 = 0;
x = pg.offsetWidth / 1.22;
y = pg.offsetHeight / 3;
x1 = x;
y1 = y;
x2 = x1;
y2 = y1;
b.style.left = x + "px";
b.style.top = y + "px";


function move() {
  x2 = x1;
  y2 = y1;
  x1 = x;
  y1 = y;

  if (dragging) {
    x = mx;
    y = my;
    vx = x - x1;
    vy = y - y1;

    if (clickT != null) {
      clearTimeout(clickT);
      clickT = null;
      clickHelp.classList.remove("show");
    }
  } else {
    if (y == screenHMax) {
      vx = vx * frG;
    } else {
      vx = vx * fr;
    }
    vy = vy * fr + g;

    x = x + vx;
    y = y + vy;
  }

  if (y > screenHMax) {
    y = screenHMax;
    vy = -vy * frB;
  }
  if (x > screenWMax) {
    x = screenWMax;
    vx = -vx * frB;
  }
  if (x < screenWMin) {
    x = screenWMin;
    vx = -vx * frB;
  }

  if (Math.abs(vx) > tv) {
    vx = Math.sign(vx) * tv;
  }
  if (Math.abs(vy) > tv) {
    vy = Math.sign(vy) * tv;
  }

  if (Math.round(x) == Math.round(x1) && Math.round(x1) == Math.round(x2)) {
    vx = 0;
  }
  if (Math.round(y) == Math.round(y1) && Math.round(y1) == Math.round(y2)) {
    vy = 0;
  }

  b.style.left = x + "px";
  b.style.top = y + "px";
}

function tMove() {
  move(), setTimeout(tMove, 10);
}
tMove();

function isLeftClick(e) {
  e = e || window.e;
  if ("buttons" in e) {
    return e.buttons == 1;
  }
  var btn = e.which || e.button;
  return btn == 1;
} 


function mouseDown(e) {
  e.preventDefault();
  if (isLeftClick(e)) {
    dragging = true;
  }
}

function mouseUp(e) {
  e.preventDefault();
  dragging = false;
}

function mouseMove(e) {
  e.preventDefault();
  mx = e.clientX;
  my = e.clientY;
}

var gravInput = document.getElementById("ci-g");
var frInput = document.getElementById("ci-fr");
var frGrInput = document.getElementById("ci-frg");
var frBoInput = document.getElementById("ci-frb");
var tVelInput = document.getElementById("ci-tv");
var nameInput = document.getElementById("ci-name");

var gravDisp = document.getElementById("cd-g");
var frDisp = document.getElementById("cd-fr");
var frGrDisp = document.getElementById("cd-frg");
var frBoDisp = document.getElementById("cd-frb");
var tVelDisp = document.getElementById("cd-tv");
var nameDisp = document.getElementById("ball-name");

function gravChange(val) {
  if (!isNaN(parseInt(val))) {
    gravDisp.innerHTML = val;

    g = val * 1; 
  }
}
gravChange(gravInput.value);

function frChange(val) {
  if (!isNaN(parseInt(val))) {
    frDisp.innerHTML = val + "%";

    fr = 1 - val / 100;
  }
}
frChange(frInput.value);

function frGrChange(val) {
  if (!isNaN(parseInt(val))) {
    frGrDisp.innerHTML = val + "%";

    frG = 1 - val / 100;
  }
}
frGrChange(frGrInput.value);

function frBoChange(val) {
  if (!isNaN(parseInt(val))) {
    frBoDisp.innerHTML = val + "%";

    frB = val / 100;
  }
}
frBoChange(frBoInput.value);

function tVelChange(val) {
  if (!isNaN(parseInt(val))) {
    tVelDisp.innerHTML = val;

    tv = val;
  }
}
tVelChange(tVelInput.value);

function nameChange(val) {
  nameDisp.innerHTML = val;
  nameDisp.style.marginLeft = -(nameDisp.offsetWidth / 2) + "px";
}

var clickHelp = document.getElementById("msg-text");
var clickT = setTimeout(function () {
  clickHelp.classList.add("show");
}, 5000);

var myAnimation = new hoverEffect({
  parent: document.querySelector(".my-div"),
  intensity: 0.3,
  image1: "medias/photo1.jpg",
  image2: "medias/photo2.jpg",
  displacementImage: "medias/deplacement.jpg",
});
