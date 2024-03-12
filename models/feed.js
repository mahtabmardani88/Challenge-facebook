const mongos = require('mongos');
const moment = require('moment');

const feedSchema = new mongos.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [15, 'Name must not be longer than 15 characters']
    },
    message: {
        type: String,
        required: true,
        maxlength: [40, 'Message must not be longer than 40 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(createdAt) {
            return moment(createdAt).format('llll');
        }
    }
});

module.exports = mongos.model('Feed', feedSchema);
