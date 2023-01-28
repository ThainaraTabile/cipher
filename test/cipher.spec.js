// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "DEFGHIJKLMNOPQRSTUVWXYZABC" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 3', () => {
      expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 3)).toBe('DEFGHIJKLMNOPQRSTUVWXYZABC');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    //it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
    //expect(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33)).toBe('hijklmnopqrstuvwxyzabcdefg');
  });

  // Hacker edition
  //
  // [Español]
  // Si decides implementar soporte para caracteres no alfabéticos descomenta
  // el test a continuación.
  //
  // [Português]
  // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
  // teste abaixo.
  //
  //it('should return " !@" for " !@"', () => {
  // expect(cipher.encode(' !@', 3)).toBe(' !@');
  // });
  //});

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "DEFGHIJKLMNOPQRSTUVWXYZABC" with offset 3', () => {
      expect(cipher.decode('DEFGHIJKLMNOPQRSTUVWXYZABC', 3)).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    ///it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
    // expect(cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33)).toBe('abcdefghijklmnopqrstuvwxyz');
  });

  // Hacker edition
  //
  // [Español]
  // Si decides implementar soporte para caracteres no alfabéticos descomenta
  // el test a continuación.
  //
  // [Português]
  // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
  // teste abaixo.
  //
  // it('should return " !@" para " !@"', () => {
  // expect(cipher.decode(' !@', 33)).toBe(' !@');
  // });
});