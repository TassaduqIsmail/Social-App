// Emoji.js

import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

const Emoji = () => {
  return (
    <Svg
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle
        cx="12.302"
        cy="12"
        r="7.698"
        stroke="#8E9BB7"
        stroke-width="1.00074"
      />
      <Path
        d="M14.5665 13.8475C13.9775 14.4741 13.1411 14.8655 12.2132 14.8655C11.2853 14.8655 10.4489 14.4741 9.85986 13.8475"
        stroke="#8E9BB7"
        stroke-width="1.1547"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.2898 10.8548C10.7649 10.8548 11.15 10.4697 11.15 9.99468C11.15 9.51963 10.7649 9.13452 10.2898 9.13452C9.81479 9.13452 9.42969 9.51963 9.42969 9.99468C9.42969 10.4697 9.81479 10.8548 10.2898 10.8548Z"
        fill="#8E9BB7"
      />
      <Path
        d="M14.1365 10.8544C14.6116 10.8544 14.9967 10.4692 14.9967 9.99419C14.9967 9.51914 14.6116 9.13403 14.1365 9.13403C13.6615 9.13403 13.2764 9.51914 13.2764 9.99419C13.2764 10.4692 13.6615 10.8544 14.1365 10.8544Z"
        fill="#8E9BB7"
      />
    </Svg>
  );
};

const Camara = () => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1 5.74323C1 4.63866 1.89543 3.74323 3 3.74323H4.49161C4.82818 3.74323 5.14217 3.57392 5.32712 3.29272L6.03558 2.21548C6.40546 1.65307 7.03345 1.31445 7.70659 1.31445H10.5037C11.1777 1.31445 11.8064 1.65394 12.1761 2.21752L12.8806 3.2917C13.0655 3.57349 13.3798 3.74323 13.7168 3.74323H15.3427C16.4473 3.74323 17.3427 4.63866 17.3427 5.74323V12.7145C17.3427 13.819 16.4473 14.7145 15.3427 14.7145H3C1.89543 14.7145 1 13.819 1 12.7145V5.74323Z"
        stroke="#8E9BB7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="9.17251"
        cy="8.81143"
        r="2.72378"
        stroke="#8E9BB7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const SendSvg = () => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.69032 1.06387L16.2007 7.62605C16.942 7.9861 16.954 9.03794 16.2211 9.41485L2.68191 16.3779C1.88476 16.7878 0.992414 16.0228 1.27588 15.1724L3.3915 8.8255C3.46182 8.61454 3.45982 8.38615 3.38581 8.17645L1.31042 2.2962C1.01294 1.45333 1.88631 0.673351 2.69032 1.06387Z"
        stroke="#F35BAC"
        stroke-width="1.5"
      />
    </Svg>
  );
};

export {Emoji, Camara, SendSvg};
export default Emoji;
