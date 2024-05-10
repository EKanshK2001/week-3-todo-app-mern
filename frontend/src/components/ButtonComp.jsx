
export const Button = ({text, onClick}) => {
    return (
      <button className="border px-5 py-3 bg-black text-white" onClick={onClick}>
        {text}
      </button>
    );
  };
  