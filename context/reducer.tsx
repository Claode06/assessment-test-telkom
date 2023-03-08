import { ActionProps, initialStateProps } from "../interface/context.type";

export const initialState: initialStateProps = {
  header: "Github Repositories",
};

const Reducer = (
  state: initialStateProps = initialState,
  action: ActionProps
): initialStateProps => {
  switch (action.type) {
    case "SET_HEADER": {
      return {
        ...state,
        header: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default Reducer;
