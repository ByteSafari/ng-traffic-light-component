import { BsTrafficLightPage } from './app.po';

describe('bs-traffic-light App', () => {
  let page: BsTrafficLightPage;

  beforeEach(() => {
    page = new BsTrafficLightPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
