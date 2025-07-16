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
        className="bg-white p-4 rounded-lg shadow-md w-80"
      >
        <h2 className="text-lg font-bold mb-2">Create a new card</h2>
        <textarea
          className="w-full border rounded p-2 mb-3 text-sm"
          rows={3}
          placeholder="Content..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 text-sm text-gray-600 hover:text-black"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewCardModal
