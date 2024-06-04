export default function createInt8TypedArray(length, position, value) {
  // Validate position
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer with enough space for 'length' Int8 elements
  const buffer = new ArrayBuffer(length * Int8Array.BYTES_PER_ELEMENT);

  // Create an Int8Array view on the buffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  // Create a DataView on the underlying ArrayBuffer
  const dataView = new DataView(int8Array.buffer);

  return dataView;
}
