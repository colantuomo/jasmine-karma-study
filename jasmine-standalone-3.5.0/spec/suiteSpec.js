describe('Common Validations', function () {
    it('should sum two numbers and return 4', () => {
        expect(sumTwoNumbers(2, 2)).toEqual(4);
    });

    xit('should sum two numbers and return 5', () => {
        expect(sumTwoNumbers(3, 2)).toEqual(5);
    });

    it('should only accept string', () => {
        const str = 'str'
        expect(typeof str).toBe('string')
    });

    it('should contain a especified word', () => {
        const text = 'Teste'
        expect(text).toMatch(/teste/i);
    });

    it('should be a CEP', () => {
        const text = '01309-001'
        expect(text).toMatch(/^\d{5}-\d{3}$/i);
    });

    it('should be a RG', () => {
        const text = '43.757.649-8'
        expect(text).toMatch(/^\d{2}.\d{3}.\d{3}-\d{1}$/i);
    });

    it('should variable be undefined', () => {
        let t;
        expect(t).toBeUndefined();
    });

    it('should variable be defined', () => {
        let t = '';
        expect(t).toBeDefined();
    });

    it('should variable be null', () => {
        const t = null;
        expect(t).toBeNull();
    });

    it('should variable not to be null', () => {
        const t = 'null';
        expect(t).not.toBeNull();
    });

    it('should contain "nome" in a string', () => {
        const t = 'estou escrevendo um texto com nome';
        expect(t).toContain('nome')
    });

    it('shoud contain "Paulo" in array', () => {
        const t = ['Joazinho', 'Maria', 'Paulo'];
        expect(t).toContain('Paulo')
    });

    it('should throw a error', function () {
        function t() {
            return numero * 10;
        }
        expect(t).toThrow();
        // usar toThrowError se quiser validar um erro especifico (tipo ou msg)
    });

    it('should behave...', () => {
        pending('pending test just for show (Can be used for TDD)')
    });

    it('should create a test (Can be used for TDD)');
})
