export default class ArrayBufferConverter {
  static load(buffer) {
    const bufferView = new Uint16Array(buffer);
    return bufferView;
  }

  static toString(bufferView) {
    const potentialString = [];
    for (let i = 0; i < bufferView.length; i += 1) {
      potentialString.push((String.fromCharCode(bufferView[i])));
    }
    return potentialString.join('');
  }
}
