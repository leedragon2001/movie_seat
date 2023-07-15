import { DAT_GHE, HUY_GHE } from "./constant";

export const bookingSeatAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const deleteSeatAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe,
  };
};
