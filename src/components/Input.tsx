export function Input({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="log">Log Anything</label>
      <input id="log" value={value} onChange={handleChange} />;
    </div>
  );
}
