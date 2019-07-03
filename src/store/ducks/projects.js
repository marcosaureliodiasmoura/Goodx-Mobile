import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types e Creators
const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

export const ProjectsTypes = Types;
export default Creators;

// Initial State
export const INITIAL_STATE = Immutable({
  data: [],
});

// Reducer (ActionTypes na Esquerda e o que vai acontecer com o nosso Estado na direita)
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
  // [Types.LOAD_SUCCESS]: (state, { action }) => ({ ...state, data: action.data }),
});
