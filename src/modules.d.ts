declare module '*.png' {
  const value: any;
  export default value;
}

declare module 'react-slick' {
  import React from 'react';

  class Slider extends React.Component<SliderProps, SliderState> {}

  export default Slider;
}