describe('Suites', function () {
    let counter;
    beforeAll(() => {
        counter = 0;
    });

    afterAll(() => {
        counter = undefined;
    });

    beforeEach(() => {
        counter++;
    });

    afterEach(() => {
        counter--;
    });
    // utilizando o before e o after pra somar e subtrair a cada teste
    it('should increment counter variable', () => {
        expect(counter).toEqual(1);
    });

    it('should increment counter variable', () => {
        expect(counter).toEqual(1);
    });
})
