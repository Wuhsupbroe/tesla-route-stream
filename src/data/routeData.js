export const routeData = {
  start: {
    id: "phoenix",
    name: "Phoenix, AZ",
    description: "The journey begins here. Fully charged and ready to hit the road.",
    image: "https://images.unsplash.com/photo-1543884841-38e235e21fb5?q=80&w=1474&auto=format&fit=crop",
    type: "start"
  },
  parks: [
    {
      id: "grand-canyon",
      name: "Grand Canyon",
      state: "AZ",
      description: "A jaw-dropping natural wonder. Hike the rim or descend into the canyon.",
      activities: ["Hike the Bright Angel Trail", "Helicopter Tour", "Sunset at Hopi Point"],
      image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: "joshua-tree",
      name: "Joshua Tree",
      state: "CA",
      description: "Where two deserts meet. Surreal rock formations and iconic twisted trees.",
      activities: ["Stargazing at Skull Rock", "Climb Hidden Valley", "Keys View Sunset"],
      image: "https://images.unsplash.com/photo-1504280537473-10eb0fb637c3?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: "zion",
      name: "Zion",
      state: "UT",
      description: "Massive canyon walls and emerald pools. A true hiker's paradise.",
      activities: ["Climb Angels Landing", "Wade The Narrows", "Canyon Overlook Trail"],
      image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: "death-valley",
      name: "Death Valley",
      state: "CA",
      description: "The hottest and driest. Discover salt flats, sand dunes, and mysterious moving rocks.",
      activities: ["Badwater Basin", "Zabriskie Point Sunrise", "Mesquite Flat Sand Dunes"],
      image: "https://images.unsplash.com/photo-1470876798053-ec4e6f42c2aa?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: "sequoia",
      name: "Sequoia",
      state: "CA",
      description: "Home of the giants. Walk among the largest trees on the planet.",
      activities: ["General Sherman Tree", "Climb Moro Rock", "Tunnel Log Drive"],
      image: "https://images.unsplash.com/photo-1521192823678-0eec9f6a7071?q=80&w=1471&auto=format&fit=crop"
    },
    {
      id: "yosemite",
      name: "Yosemite",
      state: "CA",
      description: "Iconic granite cliffs, towering waterfalls, and lush valleys.",
      activities: ["Hike Half Dome", "Yosemite Falls", "Glacier Point View"],
      image: "https://images.unsplash.com/photo-1533246321-70bfb01e3e78?q=80&w=1632&auto=format&fit=crop"
    },
    {
      id: "bryce-canyon",
      name: "Bryce Canyon",
      state: "UT",
      description: "The largest collection of hoodoos in the world. An alien landscape of red rock.",
      activities: ["Navajo Loop Trail", "Sunrise Point", "Stargazing Tour"],
      image: "https://images.unsplash.com/photo-1517869661414-f4fa3ec677b1?q=80&w=1498&auto=format&fit=crop"
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
