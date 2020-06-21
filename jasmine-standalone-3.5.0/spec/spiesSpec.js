fdescribe('Spies', () => {

    let calculator = {
        sum: function (n1, n2) {
            return n1 + n2;
        },
        subtract: function (n1, n2) {
            return n1 - n2;
        }
    }

    let somar;

    // beforeAll(() => {
    //     spyOn(calculator, 'sum');
    // });

    // it('should spy function be undefined', () => {
    //     expect(calculator.sum(1, 1)).toBeUndefined();
    //     Verificar pq o 'it' que valida se foi chamado, conta essa chamada como válida
    // });
    beforeEach(() => {
        somar = jasmine.createSpy('somar');
    });

    it('should call sum function', () => {
        spyOn(calculator, 'sum');
        calculator.sum(2, 1);
        expect(calculator.sum).toHaveBeenCalled();
    });

    it('should call sum function 2 times', () => {
        spyOn(calculator, 'sum');
        calculator.sum(1, 1);
        calculator.sum(1, 5);
        expect(calculator.sum).toHaveBeenCalledTimes(2);
    });


    it('should call sum function with parameters', () => {
        spyOn(calculator, 'sum');
        calculator.sum(1, 1);
        calculator.sum(1, 5);
        expect(calculator.sum).toHaveBeenCalledWith(1, 1);
        expect(calculator.sum).toHaveBeenCalledWith(1, 5);
    });

    it('should call through sum and compare values', () => {
        spyOn(calculator, 'sum').and.callThrough();
        expect(calculator.sum(1, 1)).toEqual(2);
        // chama o metodo real usando o callTrough
    });

    it('should subtract function be undefined', () => {
        spyOn(calculator, 'subtract');
        expect(calculator.subtract(1, 1)).toBeUndefined();
    });

    it('should call through sum and return 10', () => {
        spyOn(calculator, 'sum').and.returnValue(10);
        expect(calculator.sum(1, 1)).toEqual(10);
        // Ele está ignorando os parametros que passei no expect pq estou usando returnValue no spy
    });

    it('should return only 2 values', () => {
        spyOn(calculator, 'sum').and.returnValues(10, 20);
        expect(calculator.sum(1, 1)).toEqual(10);
        expect(calculator.sum(1, 1)).toEqual(20);
        expect(calculator.sum(1, 1)).toBeUndefined();
        // conforme eu setei 2 valores no returnValues, a 3 chamada será undefined pois eu não especifiquei ela 

        //and.callFake pode substituir o metodo original por outra coisa
        // ex: a soma pode virar uma multiplicação
    });

    it('should use "calls" method to validate methods calls', () => {
        spyOn(calculator, 'sum');
        calculator.sum(1, 1);
        expect(calculator.sum.calls.any()).toBeTruthy();
        // teria o mesmo papel do tohaveBeenCalled()
    });

    it('should call with number parameters', () => {
        somar(1, 5);
        expect(somar).toHaveBeenCalledWith(
            jasmine.any(Number), jasmine.any(Number)
        )
        // usei o objeto global jasmine pra validar se foi chamado com um numero, independente do seu valor
        // poderia usar ao inves de any() o anything() que nao verifica tipo, mas sim se foi chaamdo com o parametro
    });
})
