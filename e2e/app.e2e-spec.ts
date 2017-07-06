import { MyFamilyTreePage } from './app.po';

describe('my-family-tree App', () => {
  let page: MyFamilyTreePage;

  beforeEach(() => {
    page = new MyFamilyTreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
