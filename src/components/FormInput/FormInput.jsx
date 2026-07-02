import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function FormInput({
  type,
  onToggleBtnClick,
  handleTextInputChange,
  formSubmitHandler,
  value,
}) {
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Hangman
          </h1>

          <p className="mt-2 text-center text-gray-500">
            Enter a secret word to start the game.
          </p>

          <div className="mt-6">
            <TextInput
              value={value}
              placeholder="Enter secret word...."
              type={type}
              onChange={handleTextInputChange}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClickHandler={onToggleBtnClick}
              name={type === "password" ? "Show" : "Hide"}
              styleType="primary"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <Button type="submit" name="Start Game" styleType="success" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormInput;
