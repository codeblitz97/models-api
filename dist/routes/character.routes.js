"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_controller_1 = require("../controllers/character.controller");
const express_1 = require("express");
const character_1 = __importDefault(require("../module/character"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Success',
        isAuthenticated: character_1.default.isAuthenticated(),
    });
});
router.post('/send-message', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(yield (0, character_controller_1.sendMessage)(req, res));
    }
    catch (error) {
        throw error;
    }
}));
exports.default = router;
//# sourceMappingURL=character.routes.js.map