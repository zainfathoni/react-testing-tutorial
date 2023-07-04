import { useState } from "react";
import { convertToUpperCase } from "../utils/uppercase";
import { Input } from "./Input";

export function Form({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(convertToUpperCase(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={value} onChange={setValue} />
      <button type="submit">Submit</button>
    </form>
  );
}
