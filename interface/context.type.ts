import React, { ReactNode } from "react";

export interface initialStateProps {
  header: string;
}

export interface ActionProps {
  type: string;
  payload: any;
}

export interface stateProps {
  children: ReactNode;
}
