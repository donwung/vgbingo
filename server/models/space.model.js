const mongoose = require('mongoose');


const SpaceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, `{PATH} is required`]
        },
        spaces: {
            type: Array,
            required: [true, `{PATH} is required`],
            default: [
                1, 2, 3, 4, 5, 6, 7, 8, 9,
                10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27,
                28, 29, 30
            ]
        }
    },
    { timestamps: true }
)

//register schema with mongoose
const Space = mongoose.model('Space', SpaceSchema)

module.exports = { Space };