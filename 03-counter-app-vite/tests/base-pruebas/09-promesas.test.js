import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync: promesa que debe de retornar un heroe', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id ).then(( heroe )=>{
            expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
            done();
        });
    });

    test('getHeroeByIdAsync: promesa que no encuentra heroe retorna error', ( done ) => {
        const id = 100;
        getHeroeByIdAsync( id )
        .then(( heroe )=>{

            expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
            done();

        }).catch(( error ) => {
        
            expect(error).toBe(`No se pudo encontrar el héroe con id: ${ id }`);
            done();

        });

    });
});