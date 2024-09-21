function Button({ onClick, className = "bg-primary", children }) {
  return (
    <>
      <button
        className={`w-full px-6 py-3 mt-auto font-semibold capitalize rounded-lg ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
