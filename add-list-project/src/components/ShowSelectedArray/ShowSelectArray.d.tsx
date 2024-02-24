import React from "react";

export interface SSAProps {
  showArray: number[];
  setShowArray: React.Dispatch<React.SetStateAction<number[]>>;
  inputInArray: number[];
  setInputInArray: React.Dispatch<React.SetStateAction<number[]>>
}

export type SSAhandleDeleteEventPera = number;