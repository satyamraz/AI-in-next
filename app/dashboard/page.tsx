'use client';
import React,{useCallback,useState,useEffect,useRef} from 'react';
import Template from '@/utils/template';
import Image from 'next/image'
import SearchBar from '@/components/ui/search-bar';
import { useRouter } from 'next/navigation';
interface TemplateProps {
  name: string,
  desc: string,
  icon: string, 
  category: string
  slug: string
}
export default function Dashboard() {
  const setIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [debounceSearchText, setDebounceSearchText] = useState<string>('');
  const [filteredText, setFilteredText] = useState<TemplateProps[]>([]);
  const router = useRouter();
  useEffect(()=>{
    setIntervalRef.current = setTimeout(()=>{
      
        setDebounceSearchText((pre)=>pre !== searchText ? searchText : pre);
      
      console.log("debounceSearchtext",debounceSearchText)
    },500)
    return () =>{
      setIntervalRef.current && clearInterval(setIntervalRef.current)
    }
  },[searchText]);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
   
    setSearchText(e.target.value);
  },[searchText]);
  useEffect( () => {
    const filteredData = Template.filter((item)=> 
      item.name.toLocaleLowerCase().includes(debounceSearchText))
    console.log("Filtered Templates:", filteredData);
    setFilteredText(filteredData);
  },[debounceSearchText])
  const urlHandler = (slug:string)=> {
    console.log('slug', slug);
    router.push(`/${slug}`)

   
  }
  const templateData = Object.keys(filteredText).length >0? filteredText : Template;
 return(
  
  <>
  <SearchBar onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e)}}></SearchBar>   
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  
  {templateData.map((item:any) => (
    
    <div 
       onClick={()=>urlHandler(item.slug)}
       key={item.name} 
       className="
        bg-white
        dark:bg-gray-800 p-4 
        shadow rounded 
        cursor-pointer 
        hover:shadow-lg 
        transition-shadow duration-300"
    >
        <Image
          src={item.icon}
          width={50}
          height={50}
          alt={item.slug}
         /> 
      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4">
  {item.name}
</h4>
      <div>{item.category}</div>
      <p>{item.desc}</p>
    </div>
  ))}
</div>
</>
        
    )
}
