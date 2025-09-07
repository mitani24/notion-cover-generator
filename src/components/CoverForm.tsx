import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PRESET_IMAGES = [
  {
    id: "pattern-forest",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&h=1080&fit=crop",
    name: "Forest",
  },
  {
    id: "pattern-mountain",
    url: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=1920&h=1080&fit=crop",
    name: "Mountain",
  },
  {
    id: "pattern-desert",
    url: "https://images.unsplash.com/photo-1529927066849-305fb31a3ec8?w=1920&h=1080&fit=crop",
    name: "Desert",
  },
  {
    id: "pattern-night-sky",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1920&h=1080&fit=crop",
    name: "Night Sky",
  },
  {
    id: "pattern-city-night",
    url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1920&h=1080&fit=crop",
    name: "City Night",
  },
  {
    id: "pattern-blue-ocean",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop",
    name: "Blue Ocean",
  },
  {
    id: "pattern-aurora",
    url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&h=1080&fit=crop",
    name: "Aurora",
  },
  {
    id: "pattern-flower-field",
    url: "https://images.unsplash.com/photo-1503919545880-b8fdfbff5d11?w=1920&h=1080&fit=crop",
    name: "Flower Field",
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
