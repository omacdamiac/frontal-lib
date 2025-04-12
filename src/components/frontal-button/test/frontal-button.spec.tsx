import { newSpecPage } from '@stencil/core/testing';
import { FrontalButton } from '../frontal-button';

describe('frontal-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrontalButton],
      html: `<frontal-button></frontal-button>`,
    });
    expect(page.root).toEqualHtml(`
      <frontal-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </frontal-button>
    `);
  });
});
