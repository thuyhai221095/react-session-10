import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionType';
// import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    // dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      (authors);
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
