"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocationState = {
    currentLocation: null,
    watchLocation: null,
    locationError: null
};
function default_1(state = LocationState, action) {
    let result = state;
    console.log("changing location type", action.type);
    switch (action.type) {
        case "ON_LOCATION":
            result = Object.assign({}, result, { currentLocation: action.model });
            break;
        case "ON_LOCATION_ERROR":
            result = Object.assign({}, result, { locationError: action.model });
            break;
        case "ON_WATCH_LOCATION":
            result = Object.assign({}, result, { watchLocation: action.model });
            break;
    }
    return result;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXERldmVsb3BtZW50XFxuamFwcGxpY2F0aW9uc1xcd3V3aW5cXG1vZHVsZXNcXGxvY2F0aW9uXFxldmVudFxcbG9jYXRpb24ucmVkdWNlci50cyIsIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLGFBQWEsRUFBRyxJQUFJO0NBQ3JCLENBQUM7QUFFRixtQkFBd0IsS0FBSyxHQUFHLGFBQWEsRUFBRSxNQUFXO0lBQ3hELElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxhQUFhO1lBQ2hCLE1BQU0scUJBQVEsTUFBTSxJQUFFLGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFFLENBQUM7WUFDdEQsTUFBTTtRQUNSLEtBQUssbUJBQW1CO1lBQ3BCLE1BQU0scUJBQU8sTUFBTSxJQUFFLGFBQWEsRUFBRyxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUM7WUFDbkQsTUFBTTtRQUNWLEtBQUssbUJBQW1CO1lBQ3BCLE1BQU0scUJBQU8sTUFBTSxJQUFFLGFBQWEsRUFBRyxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUM7WUFDbkQsTUFBTTtLQUNYO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWZELDRCQWVDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxEZXZlbG9wbWVudFxcbmphcHBsaWNhdGlvbnNcXHd1d2luXFxtb2R1bGVzXFxsb2NhdGlvblxcZXZlbnRcXGxvY2F0aW9uLnJlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCBMb2NhdGlvblN0YXRlID0ge1xyXG4gIGN1cnJlbnRMb2NhdGlvbjogbnVsbCxcclxuICB3YXRjaExvY2F0aW9uOiBudWxsLFxyXG4gIGxvY2F0aW9uRXJyb3IgOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IExvY2F0aW9uU3RhdGUsIGFjdGlvbjogYW55KSB7XHJcbiAgbGV0IHJlc3VsdCA9IHN0YXRlO1xyXG4gIGNvbnNvbGUubG9nKFwiY2hhbmdpbmcgbG9jYXRpb24gdHlwZVwiLCBhY3Rpb24udHlwZSk7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIk9OX0xPQ0FUSU9OXCI6XHJcbiAgICAgIHJlc3VsdCA9IHsgLi4ucmVzdWx0LCBjdXJyZW50TG9jYXRpb246IGFjdGlvbi5tb2RlbCB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJPTl9MT0NBVElPTl9FUlJPUlwiOlxyXG4gICAgICAgIHJlc3VsdCA9IHsuLi5yZXN1bHQsIGxvY2F0aW9uRXJyb3IgOiBhY3Rpb24ubW9kZWx9O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIk9OX1dBVENIX0xPQ0FUSU9OXCI6XHJcbiAgICAgICAgcmVzdWx0ID0gey4uLnJlc3VsdCwgd2F0Y2hMb2NhdGlvbiA6IGFjdGlvbi5tb2RlbH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIl0sInZlcnNpb24iOjN9