import getButtonStyling from "../../utils/ButtonStylingFunction";

function Button({
  name,
  onClickHandler,
  styleType = "primary",
  type = "button",
}) {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`${getButtonStyling(styleType)}
        px-6 py-3
        m-2
        rounded-lg
        font-medium
        text-sm
        tracking-wide
        shadow-sm
        border
        transition-all
        duration-200
        hover:shadow-md
        hover:-translate-y-0.5
        active:translate-y-0
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed`}
    >
      {name}
    </button>
  );
}

export default Button;
