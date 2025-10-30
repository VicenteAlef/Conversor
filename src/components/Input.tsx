interface InputProps {
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}

const Input = ({ value, onChangeText, label }: InputProps) => {
  return (
    <div className="bg-[var(--cardBackground)] flex flex-col py-5">
      <label className="text-white mb-4">{label}</label>
      <input
        type="number"
        placeholder="1.00"
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        className="bg-[var(--inputBackground)] p-4 rounded-md text-white"
      />
    </div>
  );
};

export default Input;
