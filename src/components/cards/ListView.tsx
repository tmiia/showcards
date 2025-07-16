import { Card } from "@/types/card"
import { motion } from "motion/react"
import DeleteIcon from "../svg/delete"
import { useCards } from "@/context/CardsContext"

type ListViewProps = {
  cards: Card[]
}

const ListView = ({ cards }: ListViewProps) => {
  const { removeCard } = useCards()

  return (
    <section className="px-6 pt-20 bg-zinc-900 min-h-screen">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3, ease: "easeInOut" }
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3, ease: "easeOut" }
        }}>
        <h1 className="font-bold text-4xl text-white">All Cards</h1>
      </motion.header>

    {cards && cards.length > 0 ? (
      <motion.ul
        className="bg-zinc-900 rounded-2xl px-6 pt-3 mt-6"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3, ease: "easeInOut" }
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3, ease: "easeOut" }
        }}>
        {cards.map((card) => (
          <li
            key={card.id}
            className="flex justify-between align-middle gap-2 py-3 text-sm border-b-[0.5px] border-zinc-800"
          >
            <div className="flex flex-col">
              <p className="font-medium text-white">{card.text}</p>
              <strong className="text-xs font-light text-zinc-400">
                {card.createdAt}
              </strong>
            </div>
            <button onClick={() => removeCard(card.id)}>
              <DeleteIcon />
              <span className="sr-only">Delete</span>
            </button>
          </li>
        ))}
      </motion.ul>
    ) : (
      <p className="text-sm text-zinc-500 mt-6">Aucune carte pour le moment.</p>
    )}




    </section>
  )
}

export default ListView
