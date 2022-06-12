import { Color } from "./color.model";

export interface BaseTag {
  id: number,
  name: string,
  color?: Color,

  isSelected: boolean,
  isEdit: boolean,
}

export const BaseTagColumns = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },

  {
    key: 'name',
    type: 'text',
    label: 'Name',
    required: true,
  },
  {
    key: 'color',
    type: 'text',
    label: 'Color',
  },


  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
