import { Suspense } from "react";
import { CoverCanvas } from "@/components/CoverCanvas";
import { CoverForm } from "@/components/CoverForm";
import { useCoverParams } from "@/hooks/useCoverParams";

function CoverGenerator() {
  const {
    backgroundImageUrl,
    setBackgroundImageUrl,
    title,
    setTitle,
    subtitle,
    setSubtitle,
  } = useCoverParams();

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
              backgroundImageUrl={backgroundImageUrl}
              title={title}
              subtitle={subtitle}
            />
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
