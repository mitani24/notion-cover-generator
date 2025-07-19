import { useQueryState } from "nuqs";

export function useCoverParams() {
  const [backgroundImageUrl, setBackgroundImageUrl] = useQueryState("bg", {
    defaultValue: "",
  });

  const [title, setTitle] = useQueryState("title", {
    defaultValue: "ここにタイトルが入ります",
  });

  const [subtitle, setSubtitle] = useQueryState("subtitle", {
    defaultValue: "ここにサブタイトルが入ります",
  });

  return {
    backgroundImageUrl,
    setBackgroundImageUrl,
    title,
    setTitle,
    subtitle,
    setSubtitle,
  };
}
