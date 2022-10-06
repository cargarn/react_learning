describe("Pruebas de demostracion", () => {
    // Test with "toBe" in Jest
    test('Esta prueba no debe de fallar', () => {
        // 1. Inicializacion
        const message1 = "Hola Mundo";

        // 2. Estímulo
        const message2 = message1.trim();

        // 3. Aserciones (observar el comportamiento esperado)
        expect(message1).toBe(message2);
    });
});