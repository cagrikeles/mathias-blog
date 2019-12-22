export const getPosts = () => {
  return [
    {
      title: "Hakkımda",
      slug: "about-me",
      details: require("./posts/aboutme.md").default,
      date: "22 Aralık 2019"
    },
    {
      title: "Yazılım Nedir?",
      slug: "whatis-software",
      details: require("./posts/nasil-yazdim.md").default,
      date: "22 Aralık 2019"
    },
    {
      title: "guncelyazi",
      slug: "guncelyazi",
      details: require("./posts/guncelyazi.md").default,
      date: "22 Aralık 2019"
    },
  ];
};
