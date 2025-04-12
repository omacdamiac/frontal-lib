import { newE2EPage } from '@stencil/core/testing';

describe('frontal-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frontal-input></frontal-input>');

    const element = await page.find('frontal-input');
    expect(element).toHaveClass('hydrated');
  });
});
