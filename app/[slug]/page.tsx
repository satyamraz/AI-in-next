'use client'
import { useParams, useRouter } from 'next/navigation';
import Template from "@/utils/template"
import { useCallback, useState } from "react";
import { giminiRun } from "@/actions/gimini_action";
import { Button } from "@/components/ui/button";
import {AIButton,AIInput,AIContent} from "@/components/ui/custum-utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Markdown from 'react-markdown';
export default function Slug() {
    const params = useParams();
    const  slug  = params.slug; ;
    const data = Template.find(item => item.slug === slug);
    console.log("data", data);
    const [content, setContent] = useState("");
    const [res, setRes] = useState<any>("");
    const [loading, setLoading] = useState(false);
    const clickhandler = async (content: string) => {
      try {
        setLoading(true);
        const res = await giminiRun(data?.aiPrompt + ' ' +content);
        setRes(res);
      } catch (err) {
        if (err) {
          throw err;
        }
      } finally {
        setLoading(false);
      }
    };
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value);
    },
    []
  );
    return (
        
        <div>
      {/* <Input
        type="text"
        placeholder={data?.form[0].label}
        value={content}
        onChange={(e) => onChangeHandler(e)}
      ></Input> */}
      <AIInput 
        onChange ={onChangeHandler} 
        type={data?.form[0].field}
        placeholder={data?.form[0].label}
        value={content}
        >       
      </AIInput>
      <Button 
        variant="secondary" 
        onClick={() => clickhandler(content)}
      >
     
        {data?.name}
      </Button>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>{data?.aiPrompt}</CardTitle>         
        </CardHeader>
        <CardContent>
          {loading ? <p>Loading...</p> :<Markdown>{res}</Markdown> }
        </CardContent>    
      </Card>
    </div>
     
    )
}