
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react'

export function Widget(){
    return (
        <Popover className="absolute bottom-5 right-5">
            <Popover.Panel>Modal</Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" weight="light"/>
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">Feedback</span>
            </Popover.Button>
        </Popover>
    )
}