import ActionMap from "@/utils/helperTypes";
import { FilterControlState } from ".";

export enum FilterActionTypes {
  SetImportant = "SET_IMPORTANT_FILTER",
}

type FilterPayload = {
  [FilterActionTypes.SetImportant]: boolean;
};

export type FilterActions =
  ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];

const filterReducer = (state: FilterControlState, action: FilterActions) => {
  switch (action.type) {
    case FilterActionTypes.SetImportant:
      return {
        ...state,
        important: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
