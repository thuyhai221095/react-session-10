import * as types from '../actions/actionType';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) { //export default can import any. if not default so have to use {importState}
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
            
        default:
            return state;
    }
}