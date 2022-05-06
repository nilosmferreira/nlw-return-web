import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenshotButtonProps {
  onTakeScreenshot: (screenshot: string | null) => void;
  screenshot?: string | null;
}
export function ScreenshotButton({
  onTakeScreenshot,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    onTakeScreenshot(base64image);
    setIsTakingScreenshot(false);
  }
  function handleResetImage() {
    onTakeScreenshot(null);
  }
  if (screenshot) {
    return (
      <button
        type='button'
        onClick={handleResetImage}
        className='p-1 w-10 h-10 bg-zinc-800 rounded-md border-transparent 
        flex justify-end items-end hover:bg-zinc-800 hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
      focus:ring-brand-default text-text-secundary '
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Trash weight='fill' />
      </button>
    );
  }

  return (
    <button
      type='button'
      onClick={handleTakeScreenshot}
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-800 hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
    focus:ring-brand-default text-text-secundary '
    >
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  );
}
