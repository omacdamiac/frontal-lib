import { newE2EPage } from '@stencil/core/testing';

describe('frontal-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frontal-button></frontal-button>');

    const element = await page.find('frontal-button');
    expect(element).toHaveClass('hydrated');
  });
});
