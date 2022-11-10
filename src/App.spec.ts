describe('테스트', () => {
  const fn = jest.fn();

  it('테스트', () => {
    fn();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
