import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CoverFormProps {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
  onBackgroundImageUrlChange: (value: string) => void;
  onTitleChange: (value: string) => void;
  onSubtitleChange: (value: string) => void;
}

export function CoverForm({
  backgroundImageUrl,
  title,
  subtitle,
  onBackgroundImageUrlChange,
  onTitleChange,
  onSubtitleChange,
}: CoverFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="background-url">背景画像URL</Label>
        <Input
          id="background-url"
          type="url"
          placeholder="https://example.com/image.jpg"
          value={backgroundImageUrl}
          onChange={(e) => onBackgroundImageUrlChange(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">タイトル</Label>
        <Input
          id="title"
          placeholder="タイトルを入力"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subtitle">サブタイトル</Label>
        <Input
          id="subtitle"
          placeholder="サブタイトルを入力"
          value={subtitle}
          onChange={(e) => onSubtitleChange(e.target.value)}
        />
      </div>
    </div>
  );
}
