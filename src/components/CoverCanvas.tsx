import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

interface CoverCanvasProps {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
}

export interface CoverCanvasRef {
  downloadImage: () => void;
}

export const CoverCanvas = forwardRef<CoverCanvasRef, CoverCanvasProps>(
  ({ backgroundImageUrl, title, subtitle }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const downloadImage = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const link = document.createElement("a");
      link.download = "notion-cover.png";
      link.href = canvas.toDataURL();
      link.click();
    };

    useImperativeHandle(ref, () => ({
      downloadImage,
    }));

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const drawCover = async () => {
        // キャンバスクリア
        ctx.clearRect(0, 0, 1920, 1280);

        // 黒背景
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 1920, 1280);

        // 背景画像の描画
        if (backgroundImageUrl) {
          try {
            const img = new Image();
            img.crossOrigin = "anonymous";

            await new Promise<void>((resolve, reject) => {
              img.onload = () => resolve();
              img.onerror = () => reject();
              img.src = backgroundImageUrl;
            });

            // 透明度を0.7に設定
            ctx.globalAlpha = 0.7;

            // cover スタイルで描画
            const imgAspect = img.width / img.height;
            const canvasAspect = 1920 / 1280;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgAspect > canvasAspect) {
              // 画像が横長の場合
              drawHeight = 1280;
              drawWidth = drawHeight * imgAspect;
              offsetX = (1920 - drawWidth) / 2;
              offsetY = 0;
            } else {
              // 画像が縦長の場合
              drawWidth = 1920;
              drawHeight = drawWidth / imgAspect;
              offsetX = 0;
              offsetY = (1280 - drawHeight) / 2;
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
          } catch (error) {
            console.error("背景画像の読み込みに失敗しました:", error);
          } finally {
            // 透明度をリセット
            ctx.globalAlpha = 1.0;
          }
        }

        // フォントの読み込みと設定
        try {
          const font = new FontFace("Splatfont2", "url(/fonts/Splatfont2.ttf)");
          await font.load();
          document.fonts.add(font);
        } catch (error) {
          console.error("フォントの読み込みに失敗しました:", error);
        }

        // テキストの描画設定
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // タイトルの描画
        if (title) {
          ctx.font = "96px Splatfont2, sans-serif";
          ctx.fillText(title, 960, 590);
        }

        // サブタイトルの描画
        if (subtitle) {
          ctx.font = "48px Splatfont2, sans-serif";
          ctx.fillText(subtitle, 960, 690);
        }
      };

      drawCover();
    }, [backgroundImageUrl, title, subtitle]);

    return (
      <canvas
        ref={canvasRef}
        width={1920}
        height={1280}
        className="h-auto max-w-full rounded-md border border-gray-300 shadow-lg"
      />
    );
  },
);

CoverCanvas.displayName = "CoverCanvas";
