import { useState } from "react"
import { useCards } from "@/context/CardsContext"

type NewCardModalProps = {
  isOpen: boolean
  onClose: () => void
}

const NewCardModal = ({ isOpen, onClose }: NewCardModalProps) => {
  const [text, setText] = useState("")
  const { createCard } = useCards()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      createCard(text.trim())
      setText("")
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-zinc-900 min-h-[90vw] p-4 rounded-lg shadow-md min-w-[95vh] rotate-[90deg]"
      >
        <div className="flex flex-col justify-center flex-auto font-medium m-0">
          <h2 className="sr-only text-lg font-bold mb-2">Create a new card</h2>
          <textarea
            className="break-all h-[7rem] p-2 m-0 text-white text-8xl text-center focus:outline-0"
            rows={3}
            placeholder="Write here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="absolute left-[50%] translate-x-[-50%] flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 text-sm text-gray-600 hover:text-black"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-primary text-white px-3 py-1 rounded-full text-sm hover:primary"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewCardModal
