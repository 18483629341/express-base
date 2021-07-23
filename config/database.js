if (process.env.NODE_ENV == "production") {
    module.export = {
        mongoURL: "mongodb+srv://chenjia:lmn@123456@cluster0.5mty7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
} else {
    module.exports = {
        mongoURL: "mongodb://localhost/node-app"
    }
}