import { Card } from "@/types/card"
import { motion } from "motion/react"

type ListViewProps = {
  cards: Card[]
}

const ListView = ({ cards }: ListViewProps) => {
  return (
    <section className="px-6 pt-20 bg-zinc-950 min-h-screen">
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
          <li key={card.id} className="flex flex-col gap-2 py-3 text-sm border-b-[0.5px] border-zinc-800">
            <p className="font-medium text-white">{card.text}</p>
            <strong className="text-xs font-light text-zinc-400">{card.createdAt}</strong>
          </li>
        ))}
      </motion.ul>
    </section>
  )
}

export default ListView
