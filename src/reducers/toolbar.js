import { SELECT_TOOL } from 'actions';

const initState = {
  selectedToolId: 'PEN_TOOL'
};

export default function toolbarReducer(state = initState, action) {
  switch (action.type) {
    case SELECT_TOOL:
      return {
        ...state,
        selectedToolId: action.toolId
      }

    default:
      return state;
  }
}