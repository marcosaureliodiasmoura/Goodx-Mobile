import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import ProjectsActions from '../ducks/projects';

export function* loadProjects() {
  try {
    const response = yield call(api.get, 'projects');

    yield put(ProjectsActions.loadSuccess(response.data));
  } catch (err) {
    yield put(ProjectsActions.loadFailure());
  }
}
