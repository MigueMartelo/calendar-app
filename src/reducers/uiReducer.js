import { types } from '../types/types';

const initialState = {
  modalOpen: false,
  closeModal: true,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    case types.uiCloseModal:
      return {
        ...state,
        closeModal: false,
      };

    default:
      return state;
  }
};
