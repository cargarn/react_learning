import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    // test('debe de hacer match con el snapshot', () => {
    //     const title = "Carlos";
    //     const { container } = render( <FirstApp title={ title } /> );

    //     expect(container).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo en un h1', () => {
        const title = "New";
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

        //expect(getByText( title )).toBeTruthy();
        expect( getByTestId('test-title').innerHTML).toBe(title);
    });

    test('debe de mostrar el subtitulo pasado por props', () => {
        const title = "New";
        const subTitle = "subtitle new";
        const { getByText, getAllByText } = render( <FirstApp title={ title } subTitle={ subTitle } /> );

        //expect(getByText( subTitle )).toBeTruthy();
        expect( getAllByText( subTitle ).length ).toBe(1);
    });
});