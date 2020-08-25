export default {
  title: 'Aw Button',
  argTypes: {
    label: { control: 'text' },
  },
};

export const Default = ({ label }) => `
    <aw-button  label= "${label}" ></aw-button>
  `;
