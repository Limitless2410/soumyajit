const Input = ({ placeholder, type = "text", value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}          // 🔥 connect state
      onChange={onChange}    // 🔥 update state
      className="
        w-full p-3 rounded-xl 
        bg-white/10 
        border border-white/20 
        text-white 
        placeholder-gray-300
        focus:outline-none 
        focus:ring-2 focus:ring-blue-500
      "
    />
  );
};

export default Input;