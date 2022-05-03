import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
export function Widget() {
  return (
    <Popover className='absolute bottom-4 right-4'>
      <Popover.Panel>Hello World</Popover.Panel>
      <Popover.Button className='flex items-center bg-brand-default rounded-full px-3 h-12 text-brand-text group hover:bg-brand-hover transition-colors '>
        <ChatTeardropDots className='w-6 h-6 ' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs  transition-all duration-700 ease-linear'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
