"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
/** Reducers */
const main_reducers_1 = __importDefault(require("../../../../src/main/main.reducers"));
const location_reducer_1 = __importDefault(require("../../../location/event/location.reducer"));
/** Combine Reducers */
exports.default = redux_1.combineReducers({
    main: main_reducers_1.default,
    location: location_reducer_1.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXERldmVsb3BtZW50XFxuamFwcGxpY2F0aW9uc1xcd3V3aW5cXG1vZHVsZXNcXGNvbW1vblxcZXZlbnRcXHJlZHVjZXJzXFxhcHAucmVkdWNlcnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxpQ0FBd0M7QUFFeEMsZUFBZTtBQUNmLHVGQUE2RDtBQUM3RCxnR0FBdUU7QUFRdkUsdUJBQXVCO0FBQ3ZCLGtCQUFlLHVCQUFlLENBQUM7SUFDM0IsSUFBSSxFQUFHLHVCQUFXO0lBQ2xCLFFBQVEsRUFBRywwQkFBZTtDQUM3QixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQzpcXERldmVsb3BtZW50XFxuamFwcGxpY2F0aW9uc1xcd3V3aW5cXG1vZHVsZXNcXGNvbW1vblxcZXZlbnRcXHJlZHVjZXJzXFxhcHAucmVkdWNlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuLyoqIFJlZHVjZXJzICovXHJcbmltcG9ydCBtYWluUmVkdWNlciBmcm9tICcuLi8uLi8uLi8uLi9zcmMvbWFpbi9tYWluLnJlZHVjZXJzJztcclxuaW1wb3J0IGxvY2F0aW9uUmVkdWNlciBmcm9tICcuLi8uLi8uLi9sb2NhdGlvbi9ldmVudC9sb2NhdGlvbi5yZWR1Y2VyJztcclxuXHJcbi8qKiBBcHAgU3RhdGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZTxNYWluU3RhdGUsIExvY2F0aW9uU3RhdGU+IHtcclxuICAgIG1haW4gOiBNYWluU3RhdGVcclxuICAgIGxvY2F0aW9uIDogTG9jYXRpb25TdGF0ZVxyXG59XHJcblxyXG4vKiogQ29tYmluZSBSZWR1Y2VycyAqL1xyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgbWFpbiA6IG1haW5SZWR1Y2VyLFxyXG4gICAgbG9jYXRpb24gOiBsb2NhdGlvblJlZHVjZXJcclxufSk7ICJdLCJ2ZXJzaW9uIjozfQ==