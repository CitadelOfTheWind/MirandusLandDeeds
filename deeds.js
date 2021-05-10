var deeds = [
  {
    name: "Homestead",
    description:
      "Humble Abode: This deed provides a house, a farming plot and a small space for a shop. The small number of plots gives the owner the advantage of being able to pack up this home and move it to a new location. It won't provide much protection but could be placed to take advantage of interesting locations.",
    numberinexistence: 1000,
    home: "10x10",
    plots: [
      {
        type: "Farming",
        amount: 1,
      },
      {
        type: "Small",
        amount: 1,
      },
    ],
    deedimage: "homesteaddeed.png",
    layoutimage: "homesteadblueprint.png",
    isoimage: "homestead3d.png",
  },
  {
    name: "Outpost",
    description:
      "Wilderness Station: A fortified area with some basic plots for farming and shops.",
    numberinexistence: 1000,
    home: "10x20",
    plots: [
      {
        type: "Farming",
        amount: 4,
      },
      {
        type: "Small",
        amount: 4,
      },
      {
        type: "Medium",
        amount: 1,
      },
    ],
    deedimage: "outpostdeed.png",
    layoutimage: "outpostblueprint.png",
    isoimage: "outpost3d.png",
  },
  {
    name: "Farming Hamlet",
    description:
      "Small Collective: Great for growing crops and raising a few animals. Some shop plots provide room to process goods and do some basic crafting.",
    numberinexistence: 1000,
    home: "10x20",
    plots: [
      {
        type: "Farming",
        amount: 36,
      },
      {
        type: "Ranching",
        amount: 4,
      },
      {
        type: "Small",
        amount: 4,
      },
      {
        type: "Medium",
        amount: 3,
      },
    ],
    deedimage: "farminghamletdeed.png",
    layoutimage: "farminghamletblueprint.png",
    isoimage: "farminghamlet3d.png",
  },
  {
    name: "Ranching Hamlet",
    description:
      "Livestock Focus: More room for animals than any other deed. Some small and medium plots suitable for barns or other animal crafts.",
    numberinexistence: 1000,
    home: "10x20",
    plots: [
      {
        type: "Farming",
        amount: 10,
      },
      {
        type: "Ranching",
        amount: 33,
      },
      {
        type: "Small",
        amount: 5,
      },
      {
        type: "Medium",
        amount: 3,
      },
    ],
    deedimage: "ranchinghamletdeed.png",
    layoutimage: "ranchinghamletblueprint.png",
    isoimage: "ranchinghamlet3d.png",
  },
  {
    name: "Village of the Farmer",
    description:
      "Agricultural Center: The most farm plots of any deed. Equipped with enough small and medium shop plots to handle farm crafts.",
    numberinexistence: 1000,
    home: "20x20",
    plots: [
      {
        type: "Farming",
        amount: 74,
      },
      {
        type: "Ranching",
        amount: 8,
      },
      {
        type: "Small",
        amount: 14,
      },
      {
        type: "Medium",
        amount: 4,
      },
    ],
    deedimage: "villagefarmerdeed.png",
    layoutimage: "villagefarmerblueprint.png",
    isoimage: "villagefarmer3d.png",
  },
  {
    name: "Village of the Baron",
    description:
      "Bustling Commerce: Eight medium and small plots allow for robust crafting and exchange of goods.",
    numberinexistence: 1000,
    home: "20x20",
    plots: [
      {
        type: "Farming",
        amount: 7,
      },
      {
        type: "Small",
        amount: 8,
      },
      {
        type: "Medium",
        amount: 8,
      },
    ],
    deedimage: "villageofthebarondeed.png",
    layoutimage: "villageofthebaronblueprint.png",
    isoimage: "villageofthebaron3d.png",
  },
  {
    name: "Village of the Viscount",
    description:
      "A Thriving Center: A large plot is accompanied by numerous medium and small ones. A place for crafting and room for some agriculture as well.",
    numberinexistence: 1000,
    home: "20x20",
    plots: [
      {
        type: "Farming",
        amount: 8,
      },
      {
        type: "Ranching",
        amount: 4,
      },
      {
        type: "Small",
        amount: 12,
      },
      {
        type: "Medium",
        amount: 10,
      },
      {
        type: "Large",
        amount: 1,
      },
    ],
    deedimage: "villageviscountdeed.png",
    layoutimage: "villageviscountblueprint.png",
    isoimage: "villageviscount3d.png",
  },
  {
    name: "Village of the Earl",
    description:
      "A Protected Marketplace: The Earl oversees many small and medium shops as well as one large plot. This deed also provides for small farm and ranch operations.",
    numberinexistence: 1000,
    home: "20x20",
    plots: [
      {
        type: "Farming",
        amount: 8,
      },
      {
        type: "Ranching",
        amount: 4,
      },
      {
        type: "Small",
        amount: 16,
      },
      {
        type: "Medium",
        amount: 12,
      },
      {
        type: "Large",
        amount: 1,
      },
    ],
    deedimage: "villageoftheearldeed.png",
    layoutimage: "villageoftheearlblueprint.png",
    isoimage: "villageoftheearl3d.png",
  },
  {
    name: "Town of the Marquess",
    description:
      "High-End Agriculture and Mercantile: With many crop plots to complement many medium and small shops, the Town of the Marquess is an active center of exchange. It also boasts two large plots.",
    numberinexistence: 1000,
    home: "20x20",
    plots: [
      {
        type: "Farming",
        amount: 20,
      },
      {
        type: "Ranching",
        amount: 4,
      },
      {
        type: "Small",
        amount: 18,
      },
      {
        type: "Medium",
        amount: 10,
      },
      {
        type: "Large",
        amount: 2,
      },
    ],
    deedimage: "townofthemarquessdeed.png",
    layoutimage: "townofthemarquessblueprint.png",
    isoimage: "townofthemarquess3d.png",
  },
  {
    name: "Town of the Duke",
    description:
      "Food Security: The Duke protects three large plots along with sixteen medium ones and farmland. A great location for producing high quality edible products",
    numberinexistence: 1000,
    home: "20x20",
    plots: [
      {
        type: "Farming",
        amount: 22,
      },
      {
        type: "Ranching",
        amount: 4,
      },
      {
        type: "Small",
        amount: 20,
      },
      {
        type: "Medium",
        amount: 16,
      },
      {
        type: "Large",
        amount: 3,
      },
    ],
    deedimage: "townofthedukedeed.png",
    layoutimage: "townofthedukeblueprint.png",
    isoimage: "townoftheduke3d.png",
  },
  {
    name: "Town of the Prince",
    description:
      "Getting Grand: The Town of the Prince boasts two grand plots. With additional shop space for all smaller sizes, this is a prime space for crafting high end gear and perhaps breeding horses.",
    numberinexistence: 1000,
    home: "20x40",
    plots: [
      {
        type: "Farming",
        amount: 18,
      },
      {
        type: "Ranching",
        amount: 3,
      },
      {
        type: "Small",
        amount: 16,
      },
      {
        type: "Medium",
        amount: 12,
      },
      {
        type: "Large",
        amount: 4,
      },
      {
        type: "Grand",
        amount: 2,
      },
    ],
    deedimage: "townoftheprincedeed.png",
    layoutimage: "townoftheprinceblueprint.png",
    isoimage: "townoftheprince3d.png",
  },
  {
    name: "Town of the Arch Duke",
    description:
      "Pride of the Kingdom: The largest deed outside the Citadel. Three Grand plots allow for very high-level crafting and production. It also provides space for crops and animals. Well protected.",
    numberinexistence: 1000,
    home: "20x40",
    plots: [
      {
        type: "Farming",
        amount: 36,
      },
      {
        type: "Ranching",
        amount: 8,
      },
      {
        type: "Small",
        amount: 22,
      },
      {
        type: "Medium",
        amount: 18,
      },
      {
        type: "Large",
        amount: 4,
      },
      {
        type: "Grand",
        amount: 3,
      },
    ],
    deedimage: "townofthearchdukedeed.png",
    layoutimage: "townofthearchdukeblueprint.png",
    isoimage: "townofthearchduke3d.png",
  },
];
