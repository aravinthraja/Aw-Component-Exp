import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'aw-button',
  styleUrl: 'aw-button.css',
  shadow: true,
})
export class AwButton {
  /**
   * The last name
   */
  @Prop() label: string = 'Click Here';

  private getText(): string {
    return this.label === undefined ? 'Click Here' : this.label;
  }
  render() {
    return <button>{this.getText()}</button>;
  }
}
