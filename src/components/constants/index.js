import botcrypto from "../../assets/botcrypto.jpg";
import community from "../../assets/community.png";
import pokegeo from "../../assets/pokegeo.png";

export const projects = [
    {
        name: "TradingBot Binance - Personal",
        description:
            "A crypto trading bot that uses the Binance API to trade on the Binance exchange. The backend of the bot is hosted on a VPS and is currently working automatically. The front of the bot is currently in development and is not yet available for public use.",
        tags: [
            {
                name: "angular",
                color: "red-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nestjs",
                color: "pink-text-gradient",
            },
        ],
        image: botcrypto,
        link: null
    },
    {
        name: "Community - Professional",
        description:
            "Constellab Community is the easiest way to sustainably share, protect, and deliver standardised applications and services in biotechnology for the client of Gencovery Constellab. I'm continally working on this project to improve the user experience and add new features.",
        tags: [
            {
                name: "angular",
                color: "red-text-gradient",
            },
            {
                name: "nestjs",
                color: "pink-text-gradient",
            },
            {
                name: "mariadb",
                color: "orange-text-gradient",
            },
        ],
        image: community,
        link: "https://constellab.community/",
    },
    {
        name: "PokeGeo - School",
        description:
            "A Pokemon Go clone made for a school project. The goal of this project was to learn how to create a complete android application, it uses the Open Street Map API and the SQLite database. I'll continue to work on this project in the future as a personnal project.",
        tags: [
            {
                name: "androidstudio",
                color: "green-text-gradient-text-gradient",
            },
            {
                name: "sqllite",
                color: "orange-text-gradient",
            },
        ],
        image: pokegeo,
        link: null
    },
];