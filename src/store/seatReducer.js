import React from "react";
import data from "../danhSachGhe.json";

const initialState = {
  listSeat: data,
};

const moiveReducer = (state = initialState, action) => {
  return <div>moiveReducer</div>;
};

export default moiveReducer;
