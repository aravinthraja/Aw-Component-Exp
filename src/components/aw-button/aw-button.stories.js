export default {
  title: 'Aw Button',
  argTypes: {
    label: { control: 'text', defaultValue: 'Hello' },
  },
};

export const Default = ({ label }) => `
    <aw-button  label= "${label}" ></aw-button>
  `;
