import readme from './readme.md'

export default {
    title: 'My Component',
    component: 'my-component',
    parameters: {
        markdown: readme,
    },
    argTypes: {
        first: { control: 'text' },
        middle: { control: 'text' },
        last: { control: 'text' },
    }
};

export const Default = ({ first, middle, last }) => `
  <my-component  first= ${first} middle=${middle} last=${last}></my-component>
`