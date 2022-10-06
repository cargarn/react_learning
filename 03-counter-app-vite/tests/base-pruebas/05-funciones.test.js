import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser: Debe retornar un objeto', () => {
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const resultValue = getUser();

        expect( resultValue ).toEqual(user);
    });

    test('getUsuarioActivo: Debe retornar el usuario (un objeto)', () => {
        const nombre = "Carlos";
        const activeUser = {
            uid: 'ABC567',
            username: nombre,
        };

        const resultValue = getUsuarioActivo( nombre );

        expect( resultValue ).toEqual( activeUser );
    });
});