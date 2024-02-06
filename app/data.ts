export const data = {
  scenes: [
    {
      id: "0-1",
      name: "1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
      ],
      faceSize: 512,
      initialViewParameters: {
        yaw: 0.6329675740437057,
        pitch: 0.08982789610088737,
        fov: 1.3473765980835988,
      },
      linkHotspots: [
        {
          yaw: 0.13521700126966962,
          pitch: -0.09237745167522249,
          rotation: 6.283185307179586,
          target: "1-2",
        },
        {
          yaw: 1.1102177415845471,
          pitch: -0.0958872109074651,
          rotation: 0,
          target: "2-3",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.6028509921838481,
          pitch: -0.14400185970459134,
          title: "Room 1",
          text: "This is the first room",
        },
      ],
    },
    {
      id: "1-2",
      name: "2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
      ],
      faceSize: 512,
      initialViewParameters: {
        yaw: 0.6538105098325939,
        pitch: 0.07346841449012054,
        fov: 1.3473765980835988,
      },
      linkHotspots: [
        {
          yaw: -0.055830913786165226,
          pitch: 0.028137752554064477,
          rotation: 0,
          target: "0-1",
        },
        {
          yaw: 1.079221167375799,
          pitch: 0.06181883201430871,
          rotation: 0,
          target: "2-3",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.32847158345524363,
          pitch: -0.1894853894498425,
          title: "Room 2",
          text: "This is the second room",
        },
      ],
    },
    {
      id: "2-3",
      name: "3",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
      ],
      faceSize: 512,
      initialViewParameters: {
        yaw: 3.0283456816528824,
        pitch: 0.12624316991227857,
        fov: 1.3473765980835988,
      },
      linkHotspots: [
        {
          yaw: 2.992921892353589,
          pitch: 0.08789290977301611,
          rotation: 0,
          target: "1-2",
        },
        {
          yaw: -1.3617006006126893,
          pitch: 0.0573374332711154,
          rotation: 0,
          target: "0-1",
        },
      ],
      infoHotspots: [
        {
          yaw: 2.677376967817148,
          pitch: -0.07521163240361517,
          title: "Room 3",
          text: "This is the third room",
        },
      ],
    },
  ],
  name: "Coba Coba",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};
