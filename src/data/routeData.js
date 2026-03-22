export const routeData = {
  start: {
    id: "phoenix",
    name: "Phoenix, AZ",
    coordinates: [-112.0740, 33.4484],
    description: "The journey begins here. Fully charged and ready to hit the road.",
    image: "/tesla-route-stream/phoenix_start_cute_1774151876560.png",
    type: "start"
  },
  parks: [
    {
      id: "grand-canyon",
      name: "Grand Canyon",
      state: "AZ",
      coordinates: [-112.1129, 36.1069],
      description: "A jaw-dropping natural wonder. Hike the rim or descend into the canyon.",
      activities: ["Hike the Bright Angel Trail", "Helicopter Tour", "Sunset at Hopi Point"],
      image: "/tesla-route-stream/grand_canyon_cute_1774151888415.png"
    },
    {
      id: "joshua-tree",
      name: "Joshua Tree",
      state: "CA",
      coordinates: [-115.9010, 33.8734],
      description: "Where two deserts meet. Surreal rock formations and iconic twisted trees.",
      activities: ["Stargazing at Skull Rock", "Climb Hidden Valley", "Keys View Sunset"],
      image: "/tesla-route-stream/joshua_tree_cute_1774151904390.png"
    },
    {
      id: "zion",
      name: "Zion",
      state: "UT",
      coordinates: [-113.0263, 37.2982],
      description: "Massive canyon walls and emerald pools. A true hiker's paradise.",
      activities: ["Climb Angels Landing", "Wade The Narrows", "Canyon Overlook Trail"],
      image: "/tesla-route-stream/zion_cute_1774151918028.png"
    },
    {
      id: "death-valley",
      name: "Death Valley",
      state: "CA",
      coordinates: [-116.8259, 36.5323],
      description: "The hottest and driest. Discover salt flats, sand dunes, and mysterious moving rocks.",
      activities: ["Badwater Basin", "Zabriskie Point Sunrise", "Mesquite Flat Sand Dunes"],
      image: "/tesla-route-stream/death_valley_cute_1774151929577.png"
    },
    {
      id: "sequoia",
      name: "Sequoia",
      state: "CA",
      coordinates: [-118.5658, 36.4864],
      description: "Home of the giants. Walk among the largest trees on the planet.",
      activities: ["General Sherman Tree", "Climb Moro Rock", "Tunnel Log Drive"],
      image: "/tesla-route-stream/sequoia_cute_1774151941038.png"
    },
    {
      id: "yosemite",
      name: "Yosemite",
      state: "CA",
      coordinates: [-119.5383, 37.8651],
      description: "Iconic granite cliffs, towering waterfalls, and lush valleys.",
      activities: ["Hike Half Dome", "Yosemite Falls", "Glacier Point View"],
      image: "/tesla-route-stream/yosemite_cute_1774151953507.png"
    },
    {
      id: "bryce-canyon",
      name: "Bryce Canyon",
      state: "UT",
      coordinates: [-112.1871, 37.5930],
      description: "The largest collection of hoodoos in the world. An alien landscape of red rock.",
      activities: ["Navajo Loop Trail", "Sunrise Point", "Stargazing Tour"],
      image: "/tesla-route-stream/bryce_canyon_cute_1774151966231.png"
    }
  ],
  routes: [
    { from: "phoenix", to: ["grand-canyon", "joshua-tree"] },
    { from: "grand-canyon", to: ["zion", "bryce-canyon"] },
    { from: "joshua-tree", to: ["death-valley"] },
    { from: "death-valley", to: ["sequoia"] },
    { from: "sequoia", to: ["yosemite"] },
    { from: "zion", to: ["bryce-canyon", "yosemite"] }
  ]
};
