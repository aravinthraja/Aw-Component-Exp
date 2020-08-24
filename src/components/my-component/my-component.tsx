import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The first name
   */
  @Prop() first: string;

  /**
  * The first name
  */
  @Prop() aga: number;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
