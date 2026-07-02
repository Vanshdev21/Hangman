function TextInput({ type = "text", placeholder = "", value, onChange }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        px-4
        py-3
        rounded-lg
        border
        border-gray-300
        text-gray-800
        placeholder-gray-400
        outline-none
        transition
        duration-200
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-200
      "
    />
  );
}

export default TextInput;
