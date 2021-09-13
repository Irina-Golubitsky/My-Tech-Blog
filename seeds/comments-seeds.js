const { Comment } = require('../models');

// add commet's data

const commentData = [{
        comment_text: "I like AI",
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: "Cool! Thanks for info",
        user_id: 5,
        post_id: 2
    },
    {
        comment_text: "I didn't know that",
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: "Assembly is the best",
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: "I like Quantum Computing ))) kidding",
        user_id: 2,
        post_id: 1
    },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;