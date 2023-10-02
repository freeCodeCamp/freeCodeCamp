import React from 'react';

import colorList from '../colors.css';
import { Color, ColorList, PaletteProps } from './types';

// ---------------------------------------------------------- //
//                      HELPER FUNCTIONS                      //
// ---------------------------------------------------------- //
/**
 * Transform colorList from an object to an array of objects
 * @example
 * Input: { '--blue10': 'var(--blue10)' }
 * Output: [{ label: 'blue10', value: 'var(--blue10)' }]
 */
const transformedColorList = Object.keys(colorList as ColorList).map(
  colorName => ({
    label: colorName.replace('--', ''),
    value: (colorList as ColorList)[colorName]
  })
);

// Get the background and text color values of each palette item
const getPaletteItemStyle = (color: Color) => {
  const itemTextColor = color.label.substring(color.label.length - 2);

  return {
    backgroundColor: color.value,
    // Extract the scale from the color label.
    // If the scale is greater or equal to 50, use white text for the label; otherwise, use dark text.
    color: parseInt(itemTextColor, 10) >= 50 ? '#ffffff' : '#0a0a23'
  };
};

const getPaletteByColorName = (name: string) =>
  transformedColorList.filter(color => color.label.includes(name));

// ---------------------------------------------------------- //
//                         COMPONENTS                         //
// ---------------------------------------------------------- //
const Palette = ({ colors }: PaletteProps) => {
  return (
    <div className='inline-flex flex-col m-4 w-3/12'>
      {colors.map(color => (
        <div
          className='flex items-center p-2 h-8'
          key={color.label}
          style={getPaletteItemStyle(color)}
        >
          {color.label}
        </div>
      ))}
    </div>
  );
};

export const AllPalettes = (): JSX.Element => {
  return (
    <>
      <Palette colors={getPaletteByColorName('gray')} />
      <Palette colors={getPaletteByColorName('purple')} />
      <Palette colors={getPaletteByColorName('yellow')} />
      <Palette colors={getPaletteByColorName('blue')} />
      <Palette colors={getPaletteByColorName('green')} />
      <Palette colors={getPaletteByColorName('red')} />
    </>
  );
};
