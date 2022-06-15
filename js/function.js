document.addEventListener("DOMContentLoaded", () => {
  let waypoint = new Waypoint({
    element: document.querySelector("h3"),
    handler: function () {
      anime({
        targets: ["h3"],
        easing: "easeOutExpo",
        translateY: [-100, 5],
        opacity: [0, 1],
        delay: 200,
        duration: 3000,
      });
      this.destroy();
    },
    context: document.querySelector(".article"),
    offset: "100%",
  });
  let waypoint2 = new Waypoint({
    element: document.querySelector("h1"),
    handler: function () {
      anime({
        targets: ["h1"],
        easing: "easeOutExpo",
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: 400,
        duration: 3000,
      });
      this.destroy();
    },
    context: document.querySelector(".article"),
    offset: "100%",
  });
  let waypoint3 = new Waypoint({
    element: document.querySelector("h2"),
    handler: function () {
      anime({
        targets: ["h2"],
        easing: "easeOutExpo",
        translateX: [100, 0],
        opacity: [0, 1],
        delay: 700,
        duration: 3000,
      });
      this.destroy();
    },
    context: document.querySelector(".article"),
    offset: "100%",
  });
  let waypoint4 = new Waypoint({
    element: document.querySelector("#p1", "#p3", "#p5", "#p7", "#p9"),
    handler: function () {
      anime({
        targets: ["#p1", "#p3", "#p5", "#p7", "#p9"],
        easing: "easeOutExpo",
        translateY: [-100, 20],
        opacity: [0, 1],
        delay: 1000,
        duration: 3000,
      });
      this.destroy();
    },
    context: document.querySelector(".article"),
    offset: "100%",
  });

  let waypoint5 = new Waypoint({
    element: document.querySelector("#p2", "#p4", "#p6", "#p8"),
    handler: function () {
      anime({
        targets: ["#p2", "#p4", "#p6", "#p8"],
        easing: "easeOutExpo",
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: 1200,
        duration: 3000,
      });
      this.destroy();
    },
    context: document.querySelector(".article"),
    offset: "100%",
  });
});
