import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Viklang Seva - A Web Portal for Disabled",
    description:
      "An HCI based web portal which can help disabled to get job in a more efficient way.",
    technologies: ["React", "Tailwind css", "ExpressJS","NodeJS","MongoDB"],
    siteUrl: "https://github.com/Shivama-Max/Viklang-Seva",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "Yummy - A Food Blogging Website",
    description:
      "A website where people can post their recipes and others can watch them. It can help many who want to post food blogs so that others can read them.",
    technologies: ["Bootstrap","Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Ux",
    title: "E Voting Platform",
    description:
      "A platform where groups/parties can register and other registered individuals can vote. With enhanced security, it can easily replace pooling booths",
    technologies: ["Bootstrap", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
];

export default portfolios;
