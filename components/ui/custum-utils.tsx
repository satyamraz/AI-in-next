import { Input } from "./input";
interface AIInputProps {
    type: string | undefined;
    placeholder: string | undefined;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function AIInput({type, placeholder, value, onChange }:AIInputProps) {
   return (
    <Input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
   ) 
}
export function AIContent() {
    
}
export function AIButton() {
  //AIButton  
}