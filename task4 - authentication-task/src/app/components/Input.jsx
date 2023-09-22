function Input({ label, id, type, ...props}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 font-semibold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        autoComplete="off"
        placeholder={id}
        className="px-4 py-2 border-2 w-full border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
        {...props}
      />
    </div>
  );
}

export default Input;
