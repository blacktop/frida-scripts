// Parse WTF::String
var readWtfString = function (str) {
  const impl = str.readPointer();
  if (impl == 0x0) return "null";
  const m_refCount = Memory.readU32(impl);
  const m_length = Memory.readU32(impl.add(4));
  const m_data = Memory.readPointer(impl.add(4 * 2));
  console.log(
    `[args] m_refCount: ${m_refCount}, m_length: ${m_length}, m_data: ${m_data}`
  );
  if (m_length == 0) return "";
  console.log(hexdump(m_data), {
    offset: 0,
    length: m_length,
    header: true,
    ansi: true,
  });
  return m_data.readCString();
};
