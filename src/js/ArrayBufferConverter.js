export default class ArrayBufferConverter {
  static load(buffer) {
    const bufferView = new Uint16Array(buffer);
    return bufferView;
  }

  static toString(bufferView) {
    return bufferView.reduce(
      (sum, current) => sum + String.fromCharCode(current), '',
    );
  }
}
