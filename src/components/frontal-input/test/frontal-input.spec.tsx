import { newSpecPage } from '@stencil/core/testing';
import { FrontalInput } from '../frontal-input';

describe('frontal-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrontalInput],
      html: `<frontal-input></frontal-input>`,
    });
    expect(page.root).toEqualHtml(`
      <frontal-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </frontal-input>
    `);
  });
});
