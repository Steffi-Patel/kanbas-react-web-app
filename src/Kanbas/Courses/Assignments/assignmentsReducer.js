// src/Kanbas/Courses/Assignments/assignmentsReducer.js
import db from "../../Database";
const initialState = db.assignments;

export const assignmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ASSIGNMENT':
      return [...state, action.payload];
    case 'DELETE_ASSIGNMENT':
      return state.filter(assignment => assignment._id !== action.payload);
    case 'UPDATE_ASSIGNMENT':
      return state.map(assignment =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    case 'SELECT_ASSIGNMENT':
      return state.find(assignment => assignment._id === action.payload);
    default:
      return state;
  }
};
