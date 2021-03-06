import * as types from './actionType';
import courseAPI from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
    return function(dispatch) {
        return courseAPI.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    }
}

export function saveCourse(course) {
    return function(dispatch, getState) {
        return courseAPI.saveCourse(course).then(course => {
            course.id ? dispatch(updateCourseSuccess(course)) : 
            dispatch(createCourseSuccess(course));
        }).catch(error => {
            throw(error);
        });
    }
}