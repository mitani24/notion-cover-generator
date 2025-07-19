import { useQueryState } from "nuqs";

export function useCoverParams() {
  const [backgroundImageUrl, setBackgroundImageUrl] = useQueryState(
    "bg",
    { defaultValue: "" }
  );
  
  const [title, setTitle] = useQueryState(
    "title", 
    { defaultValue: "" }
  );
  
  const [subtitle, setSubtitle] = useQueryState(
    "subtitle",
    { defaultValue: "" }
  );

  return {
    backgroundImageUrl,
    setBackgroundImageUrl,
    title,
    setTitle,
    subtitle,
    setSubtitle,
  };
}