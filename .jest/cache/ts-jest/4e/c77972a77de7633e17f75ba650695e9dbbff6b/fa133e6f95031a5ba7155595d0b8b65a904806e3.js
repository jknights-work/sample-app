"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const app_reducers_1 = __importDefault(require("../reducers/app.reducers"));
exports.AppStore = redux_1.createStore(app_reducers_1.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXERldmVsb3BtZW50XFxuamFwcGxpY2F0aW9uc1xcd3V3aW5cXG1vZHVsZXNcXGNvbW1vblxcZXZlbnRcXHN0b3JlXFxhcHAuc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBb0M7QUFDcEMsNEVBQWdEO0FBRW5DLFFBQUEsUUFBUSxHQUFHLG1CQUFXLENBQUMsc0JBQVEsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxEZXZlbG9wbWVudFxcbmphcHBsaWNhdGlvbnNcXHd1d2luXFxtb2R1bGVzXFxjb21tb25cXGV2ZW50XFxzdG9yZVxcYXBwLnN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgUmVkdWNlcnMgZnJvbSAnLi4vcmVkdWNlcnMvYXBwLnJlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBTdG9yZSA9IGNyZWF0ZVN0b3JlKFJlZHVjZXJzKTsiXSwidmVyc2lvbiI6M30=