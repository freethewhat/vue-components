import { icons } from 'feather-icons';

export type FeatherAttributeProps = {
  height?: Number;
  width?: Number;
  'stroke-width'?: number;
  'stroke-linecap'?: StrokeLineCap;
  'stroke-linejoin'?: StrokeLineJoin;
};

export type FeatherIconAttributes = FeatherAttributes & FeatherAttributeProps;

export type StrokeLineCap = 'butt' | 'round' | 'square';
export type StrokeLineJoin =
  | 'arcs'
  | 'bevel'
  | 'miter'
  | 'miter-clip'
  | 'round';
