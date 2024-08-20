import { FlexgriddemoPage } from './app.po';

describe('flexgriddemo App', () => {
  let page: FlexgriddemoPage;

  beforeEach(() => {
    page = new FlexgriddemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
