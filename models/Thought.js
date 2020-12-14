// Thought Model
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Please enter a reaction.',
            trim: true,
            minLength: [1, 'TYou need more characters than this my friend'],
            maxLength: [280, 'Way to many characters buddy!!']           
        },
        username: {
            type: String,
            required: 'Enter your username.'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
          getters: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Enter a thought.',
            trim: true,
            minLength: [1, 'You need more characters than this my friend'],
            maxLength: [280, 'Way to many characters buddy!!']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'Enter your username.'
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Create the Thought Model using the above schema
const Thought = model('Thought', ThoughtSchema);

// Export the model
module.exports = Thought;