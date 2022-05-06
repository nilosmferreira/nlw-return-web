import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps {
  onChangeFeedbackType: (key: FeedbackType) => void;
}
export function FeedbackTypeStep({
  onChangeFeedbackType,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className='flex py-8 gap-2 w-full min-w-min '>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-default focus:border-brand-default focus:outline-none'
            onClick={() => onChangeFeedbackType(key as FeedbackType)}
            type='button'
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
