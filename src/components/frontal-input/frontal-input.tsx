import { Component, Fragment, Prop, h } from '@stencil/core';

@Component({
  tag: 'frontal-input',
  styleUrl: 'frontal-input.scss',
  shadow: true,
})
export class FrontalInput {
  @Prop() label: string;
  @Prop() name: string;
  @Prop() color: string;
  @Prop() disabled: boolean = false;
  @Prop() value: string;
  @Prop() validator: Array<string>;

  render() {
    return (
      <Fragment>
        <fieldset disabled={this.disabled}>
          <label data-color={this.color} htmlFor={this.name}>
            {this.label}
          </label>
          <input value={this.value} data-color={this.color} type="text" name={this.name} id={this.name} />
        </fieldset>
      </Fragment>
    );
  }
}
