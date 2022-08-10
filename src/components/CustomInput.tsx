interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({ handleChange }: Props): JSX.Element {
  return (
    <>
      <input
        type="text"
        placeholder="search for it"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}

export default CustomInput;
