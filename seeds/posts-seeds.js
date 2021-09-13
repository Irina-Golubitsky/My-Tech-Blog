const { Post } = require('../models');

// add post's data

const postData = [{
        title: "TECH TRENDS",
        post_text: `Here is the list of the top 9 new technology trends:
        Artificial Intelligence (AI) and Machine Learning.
        Robotic Process Automation (RPA)
        Edge Computing.
        Quantum Computing.
        Virtual Reality and Augmented Reality.
        Blockchain.
        Internet of Things (IoT)
        5G.`,
        user_id: 1

    },
    {
        title: "AI",
        post_text: "C3 AI is a leading enterprise AI software provider for building enterprise-scale AI applications and accelerating digital transformation.",
        user_id: 2
    },
    {
        title: "Tutorials",
        post_text: "Tinkercad.com provides a free web-based tool for designing in 3D. It has tutorials to take users from basic concepts to finished designs. Tinkercad requires a free registration.",
        user_id: 3
    },
    {
        title: "Programming languages",
        post_text: " The portion of the language that a computer can understand is called a “binary.” Translating programming language into binary is known as “compiling.”",
        user_id: 4
    },
    {
        title: "Tech Conferences",
        post_text: "International System-on-Chip Conference, Exhibit & Workshops (SoC) Calit2, Irvine   36.5 Miles from Los Angeles",
        user_id: 5
    },
    {
        title: "Tech News",
        post_text: " Facebook's smart Ray-Ban glasses are disappointingly familiar. The Ray-Ban Stories are a fusion of Bose Frames and Snap Spectacles, with a big question mark for what comes after this first-gen attempt.",
        user_id: 6
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;