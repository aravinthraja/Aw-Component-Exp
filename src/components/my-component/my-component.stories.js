export default {
  title: 'My Component',
  argTypes: {
    first: { control: 'text' },
    middle: { control: 'text' },
    last: { control: 'text' },
  },
};

export const Default = ({ first, middle, last }) => `
  <my-component  first= ${first} middle=${middle} last=${last}></my-component>
`;
