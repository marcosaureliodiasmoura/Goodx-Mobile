import { all, takeLatest } from 'redux-saga/effects';

// import { Types as ProjectsTypes } from '../ducks/projects';
// import { Types as UsersTypes } from '../ducks/users';
// import { Types as DonatesTypes } from '../ducks/donations';
// import { Types as ProjectsDetailsTypes } from '../ducks/projectsDetails';

// import { getProjects } from './projects';
// import { getUsers } from './users';
// import { getDonates } from './donates';
// import { getProjectsDetails } from './projectsDetails';

import { signIn, init, signOut } from './auth';
import { AuthTypes } from '../ducks/auth';
import { ProjectsTypes } from '../ducks/projects';

import { loadProjects } from './projects';

import { Types as ProjectsDetailsTypes } from '../ducks/projectsDetails';
import { getProjectsDetails } from './projectsDetails';

// Faz com que as coisas sejam escutadas primeiro GET_REQUEST
export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(ProjectsTypes.LOAD_REQUEST, loadProjects),
    takeLatest(ProjectsDetailsTypes.GET_REQUEST, getProjectsDetails),

    // takeLatest(AuthTypes.SIGN_OUT, signOut),

    // takeLatest(ProjectsTypes.GET_REQUEST, getProjects),
    // takeLatest(UsersTypes.GET_REQUEST, getUsers),
    // takeLatest(DonatesTypes.GET_REQUEST, getDonates),
    // takeLatest(ProjectsDetailsTypes.GET_REQUEST, getProjectsDetails),
  ]);
}
