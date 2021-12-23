// importing the Thought, and User model
const { User, Thought } = require('../models');

const resolvers = {
    Query: {
        thoughts: async (parent, { username }) => {
            // using a find() method to return an array of "thoughts". And sort it by descending order with .sort({ createdAt: -1 })
            const params = username ? { username } : {}; 
            return Thought.find(params).sort({ createdAt: -1 });
        },

        // single thought 
        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
        },

        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
        },

        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username }) 
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
        },
    }
};

module.exports = resolvers;