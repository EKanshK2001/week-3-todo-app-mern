export const Button = ({ completed, onClick }) => {
  return (
    <button
      className={`border px-5 py-3 ${
        completed ? "bg-neutral-100 text-black" : "bg-black text-white"
      }`}
      onClick={onClick}
    >
      {completed ? "completed!" : "mark as done"}
    </button>
  );
};
