import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById: debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
    });

    test('getHeroeById: debe retornar undefined si n existe el id', () => {
        const id = 9999;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual( undefined );
        expect( heroe ).toBeFalsy();
    });

    test('getHeroesByOwner', () => {
        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner(owner);

        expect( heroesByOwner ).toEqual( [
            {id: 2,name: 'Spiderman',owner: 'Marvel'},
            {id: 5,name: 'Wolverine',owner: 'Marvel'},
        ] );

        expect( heroesByOwner.length ).toBe( 2 );
        
    });

});