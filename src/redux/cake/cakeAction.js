import { BUY_CAKE } from './cakeType';

export const buyCake = (numToBuy = 1) => {
  return {
    type: BUY_CAKE,
    payload: numToBuy,
  };
};
