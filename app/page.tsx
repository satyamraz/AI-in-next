"use client";
import { useCallback, useState } from "react";
import { giminiRun } from "@/actions/gimini_action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
//await main();
import Markdown  from 'react-markdown';
export default function Home() {
  //const run = async()=> await giminiRun();
  const [res, setRes] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value);
    },
    []
  );

  const clickhandler = async (content: string) => {
    try {
      setLoading(true);
      const res = await giminiRun(content);
      setRes(res);
    } catch (err) {
      if (err) {
        throw err;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Ask Anything"
        value={content}
        onChange={(e) => onChangeHandler(e)}
      ></Input>
      <Button variant="secondary" onClick={() => clickhandler(content)}>
        Generate with AI
      </Button>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>AI response</CardTitle>         
        </CardHeader>
        <CardContent>
          {loading ? <p>Loading...</p> :<Markdown>{res}</Markdown> }
        </CardContent>    
      </Card>
    </div>
  );
}
