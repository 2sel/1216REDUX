const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";
const CHANGE_LIST = "CHANGE_LIST";

export const addList = (payload) => {
  return {
    type: ADD_LIST,
    payload,
  };
};

export const deleteList = (payload) => {
  return {
    type: DELETE_LIST,
    payload,
  };
};

export const changeList = (payload) => {
  return {
    type: CHANGE_LIST,
    payload,
  };
};

const initialState = {
  lists: [
    {
      id: 1,
      title: "진짜",
      desc: "어렵다;ㅁ;",
      isDone: false,
    },
    {
      id: 2,
      title: "너무",
      desc: "어렵다:)...",
      isDone: true,
    },
  ],
};

const todolists = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };
    case CHANGE_LIST:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === action.payload) {
            return { ...list, isDone: !list.isDone };
          } else {
            return { ...list };
          }
        }),
      };
    default:
      return state;
  }
};

export default todolists;
