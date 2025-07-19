import { Suspense, useRef } from "react";
import { CoverCanvas, type CoverCanvasRef } from "@/components/CoverCanvas";
import { CoverForm } from "@/components/CoverForm";
import { useCoverParams } from "@/hooks/useCoverParams";
import { Button } from "@/components/ui/button";

function CoverGenerator() {
  const canvasRef = useRef<CoverCanvasRef>(null);
  const {
    backgroundImageUrl,
    setBackgroundImageUrl,
    title,
    setTitle,
    subtitle,
    setSubtitle,
  } = useCoverParams();

  const handleDownload = () => {
    canvasRef.current?.downloadImage();
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 scroll-m-20 text-4xl font-extrabold">
          Notion Cover Generator
        </h1>

        <div className="grid gap-8 xl:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">設定</h2>
            <CoverForm
              backgroundImageUrl={backgroundImageUrl}
              title={title}
              subtitle={subtitle}
              onBackgroundImageUrlChange={setBackgroundImageUrl}
              onTitleChange={setTitle}
              onSubtitleChange={setSubtitle}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">プレビュー</h2>
            <CoverCanvas
              ref={canvasRef}
              backgroundImageUrl={backgroundImageUrl}
              title={title}
              subtitle={subtitle}
            />
            <Button onClick={handleDownload} className="w-full">
              画像をダウンロード
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoverGenerator />
    </Suspense>
  );
}

export default App;
