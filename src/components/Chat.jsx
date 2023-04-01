import React from 'react'

const Chat = () => {
  return (
    <div class="flex flex-col h-screen">
    <div class="flex-1 bg-gray-100 p-4 overflow-y-auto">
      <div class="flex items-end">
        <div class="rounded-lg p-3 bg-blue-500 text-white max-w-xs w-full break-word">
          Hello! How can I help you today?
        </div>
        <div class="ml-2 text-xs text-gray-500 self-end">
          3:30pm
        </div>
      </div>
      <div class="flex items-end mt-4">
        <div class="rounded-lg p-3 bg-gray-300 max-w-xs w-full break-word">
          I'm having trouble with my account.
        </div>
        <div class="ml-2 text-xs text-gray-500 self-end">
          3:31pm
        </div>
      </div>
      <div class="flex items-end mt-4">
        <div class="rounded-lg p-3 bg-blue-500 text-white max-w-xs w-full break-word">
          Sure thing! Can you tell me your username?
        </div>
        <div class="ml-2 text-xs text-gray-500 self-end">
          3:32pm
        </div>
      </div>
    </div>
    <div class="p-4 bg-gray-100">
      <div class="flex">
        <input type="text" placeholder="Type your message..." class="rounded-full w-full py-2 px-4 bg-gray-300 focus:outline-none focus:shadow-outline-blue focus:bg-white"/>
        <button class="ml-4 bg-blue-500 text-white rounded-full px-6 py-2 font-semibold">Send</button>
      </div>
    </div>
  </div>
  
  
  )
}

export default Chat