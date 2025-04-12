import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'frontal-button',
  styleUrl: 'frontal-button.scss',
  shadow: true,
})
export class FrontalButton {
  @Prop() color: string;
  @Prop() text: string;
  @Prop() class: string;
  @Prop() disabled: boolean= false;

  render() {
    return <button disabled={this.disabled} data-color={this.color} class={`frontal-button ${this.class}`}>{this.text}</button>;
  }
}
