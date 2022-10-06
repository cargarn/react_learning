import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo: Debe retornar el nombre "Carlos"', () => {
        const name = "Carlos";

        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`);
    });
});