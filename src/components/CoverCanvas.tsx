import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

// Notionカバー画像の標準サイズ
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1280;

// フォントサイズ定数
const TITLE_FONT_SIZE = 96;
const SUBTITLE_FONT_SIZE = 48;

// テキスト配置の定数（中央からのオフセット、フォントサイズの半分を基準）
const TITLE_Y_OFFSET = -TITLE_FONT_SIZE / 2 - 10; // タイトル分上に移動 + 少し余白
const SUBTITLE_Y_OFFSET = SUBTITLE_FONT_SIZE / 2 + 10; // サブタイトル分下に移動 + 少し余白

// 背景画像の透明度
const BACKGROUND_OPACITY = 0.7;

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
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // 黒背景
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

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

            // 透明度を設定
            ctx.globalAlpha = BACKGROUND_OPACITY;

            // cover スタイルで描画
            const imgAspect = img.width / img.height;
            const canvasAspect = CANVAS_WIDTH / CANVAS_HEIGHT;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgAspect > canvasAspect) {
              // 画像が横長の場合
              drawHeight = CANVAS_HEIGHT;
              drawWidth = drawHeight * imgAspect;
              offsetX = (CANVAS_WIDTH - drawWidth) / 2;
              offsetY = 0;
            } else {
              // 画像が縦長の場合
              drawWidth = CANVAS_WIDTH;
              drawHeight = drawWidth / imgAspect;
              offsetX = 0;
              offsetY = (CANVAS_HEIGHT - drawHeight) / 2;
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
          ctx.font = `${TITLE_FONT_SIZE}px Splatfont2, sans-serif`;
          ctx.fillText(
            title,
            CANVAS_WIDTH / 2,
            CANVAS_HEIGHT / 2 + TITLE_Y_OFFSET,
          );
        }

        // サブタイトルの描画
        if (subtitle) {
          ctx.font = `${SUBTITLE_FONT_SIZE}px Splatfont2, sans-serif`;
          ctx.fillText(
            subtitle,
            CANVAS_WIDTH / 2,
            CANVAS_HEIGHT / 2 + SUBTITLE_Y_OFFSET,
          );
        }
      };

      drawCover();
    }, [backgroundImageUrl, title, subtitle]);

    return (
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="h-auto max-w-full rounded-md border border-gray-300 shadow-lg"
      />
    );
  },
);

CoverCanvas.displayName = "CoverCanvas";
