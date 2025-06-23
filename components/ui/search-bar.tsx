import { Input } from "@/components/ui/input";

export default function SearchBar(param:any) {
  return (
    <div className="flex 2 col-end-2 relative w-full max-w-sm justify-center items-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <Input
        type="text"
        placeholder="Search"
        className="pl-10"
       {...param} 
      
      />
    </div>
  );
}