
const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.css",
          isFolder: false,
        },
        {
          name: "App.js",
          isFolder: false,
        },
        {
          name: "Index.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

export default explorer;
