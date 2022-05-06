import { ArrowLeft, Camera } from 'phosphor-react';
import { useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onBackClick: () => void;
}
export function FeedbackContentStep({
  feedbackType,
  onBackClick,
}: FeedbackContentStepProps) {
  const { title, image } = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  return (
    <>
      <header>
        <button
          type='button'
          className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 transition-colors'
          onClick={onBackClick}
        >
          <ArrowLeft className='w-4 h-4' />
        </button>
        <span className='flex items-center gap-2 text-xl leading-6'>
          <img src={image.source} alt={image.alt} className='w-6 h-6' />
          {title}
        </span>
        <CloseButton />
      </header>
      <form className='my-4 w-full'>
        <textarea
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400  text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-default focus:ring-brand-default focus:ring-1 resize-none
          scrollbar-thumb-zinc-700 scrollbar-track-transparent
          scrollbar-thin'
          placeholder='Conte o que esta acontecendo...'
        />
        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton
            screenshot={screenshot}
            onTakeScreenshot={setScreenshot}
          />
          <button
            type='submit'
            className='p-2 bg-brand-default rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
            focus:ring-brand-default
            transtion-colors'
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
