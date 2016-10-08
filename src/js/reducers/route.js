var ActionTypes = require('../actions/types');
var util = require('../util');
var Immutable = require('immutable');

const route = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_ROUTE:
            return {
                id: util.guid(),
                name: 'New Route',
                wayPoints: Immutable.List()
            };
        case ActionTypes.ADD_WAY_POINT_TO_ROUTE:
            let wayPoints = state.wayPoints;
            let pos = wayPoints.findIndex((wp)=> wp === action.tgtWayPoint);
            console.log(pos);
            if (pos === -1) {
                wayPoints = wayPoints.push(action.newWayPoint);
            } else {
                wayPoints = wayPoints.insert(pos + 1, action.newWayPoint);
            }
            console.log(wayPoints.toString());
            return Object.assign({}, state, {
                wayPoints: wayPoints
            });

        default:
            return state;
    }
};

module.exports = route;