"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const character_routes_1 = __importDefault(require("./routes/character.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Success',
        status: {
            code: 200,
            text: 'OK',
        },
    });
});
app.use('/api/character', character_routes_1.default);
app.use((req, res) => {
    res.status(404).json({
        message: `Route ${req.path} not found.`,
        method: `${req.method}`,
    });
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        message: 'Internal Server Error',
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map