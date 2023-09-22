'use client';
function Button({ onClick, children, type }) {
  const classes = {
    primary:
      'bg-blue-500 text-blue-50 font-semibold tracking-wide py-2 rounded-full block w-full hover:bg-blue-700 transition duration-200',
    danger:
      'bg-red-500 text-red-50 font-semibold tracking-wide py-2 rounded-full block w-full hover:bg-red-700 transition duration-200',
    secondary:
      'bg-gray-400 text-gray-100 font-semibold tracking-wide py-2 rounded-full block w-full hover:bg-gray-500 transition duration-200',
  };

  return (
    <button onClick={onClick} className={classes[type]}>
      {children}
    </button>
  );
}

export default Button;
