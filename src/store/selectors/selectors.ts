import { RootState } from "../store";
import {IData} from "../types";

export const getDataSelector = (state: RootState): IData => state.data;
