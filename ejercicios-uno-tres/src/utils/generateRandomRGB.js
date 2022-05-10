import { generateRandomNum } from "./generateRandomNum";

export const generateRandomRGB = () => {
  return `rgb(${generateRandomNum(255)},${generateRandomNum(
    255
  )},${generateRandomNum(255)})`;
};
