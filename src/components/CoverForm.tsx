import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PRESET_IMAGES = [
  {
    id: "gradient-1",
    url: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop",
    name: "グラデーション1",
  },
  {
    id: "gradient-2",
    url: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&h=1080&fit=crop",
    name: "グラデーション2",
  },
  {
    id: "nature-1",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
    name: "自然風景",
  },
  {
    id: "abstract-1",
    url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&h=1080&fit=crop",
    name: "アブストラクト",
  },
  {
    id: "city-1",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&h=1080&fit=crop",
    name: "シティ",
  },
  {
    id: "tech-1",
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
    name: "テクノロジー",
  },
  {
    id: "ocean-1",
    url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=1080&fit=crop",
    name: "オーシャン",
  },
  {
    id: "space-1",
    url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop",
    name: "スペース",
  },
];

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
  const [showPresets, setShowPresets] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="background-url">背景画像URL</Label>
        <div className="space-y-2">
          <Input
            id="background-url"
            type="url"
            placeholder="https://example.com/image.jpg"
            value={backgroundImageUrl}
            onChange={(e) => onBackgroundImageUrlChange(e.target.value)}
          />
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => setShowPresets(!showPresets)}
            className="w-full"
          >
            {showPresets ? "プリセットを閉じる" : "プリセットから選択"}
          </Button>
          {showPresets && (
            <div className="mt-2 grid grid-cols-2 gap-2">
              {PRESET_IMAGES.map((preset) => (
                <Button
                  key={preset.id}
                  variant="ghost"
                  type="button"
                  onClick={() => {
                    onBackgroundImageUrlChange(preset.url);
                    setShowPresets(false);
                  }}
                  className="hover:border-primary relative h-auto overflow-hidden rounded-lg border p-0 transition-colors"
                >
                  <img
                    src={preset.url}
                    alt={preset.name}
                    className="h-24 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-medium text-white">
                    {preset.name}
                  </div>
                </Button>
              ))}
            </div>
          )}
        </div>
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
