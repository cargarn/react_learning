import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const initialValue = 10;

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <CounterApp value={ initialValue } /> );
        expect(container).toMatchSnapshot();
    });

    test('debe de encontrar el valor inicial pasado por props', () => {
        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText(100) ).toBeTruthy();
    });

    test('debe de incrementar con el boton +1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click(screen.getByText("+"));
        expect( screen.getByText(initialValue + 1) ).toBeTruthy();
    });
    
    test('debe de incrementar con el boton -1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click(screen.getByText("-"));
        expect( screen.getByText(initialValue - 1) ).toBeTruthy();
    });
        
    test('debe de funcionar el boton de reset', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click(screen.getByText("+")); // incrementamos el valor
        fireEvent.click(screen.getByText("Reset")); // reseteamos el valor inicial
        expect( screen.getByText(initialValue) ).toBeTruthy();
    });
});