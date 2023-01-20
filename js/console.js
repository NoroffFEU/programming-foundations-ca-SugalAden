const console = {
  brand: "Sony Computer Entertainment, Playstation 5",
  price: 7.29,
  releaseYear: 2020,
  weight: 4.5,
  display: "Hdmi",
  colors: ["Midnight Black", "Cosmic Red"],
  isOn: false,
  power: function () {
    if (console.isOn === true) {
      console.log("Power ON");
    } else {
      console.log("Power OFF");
    }
  },
};
