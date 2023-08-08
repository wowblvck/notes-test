import React from "react";
import { AppContext } from "./app.context";

export const useAppSelector = () => React.useContext(AppContext);
