import { useState } from "react"
import { useCards } from "@/context/CardsContext"
import ListView from "./ListView"
import SwiperView from "./SwiperView"
import SwitchCustom from "../Switch"
import { motion, AnimatePresence } from "motion/react"

type ViewMode = "list" | "card"

const CardView = () => {
  const { cards } = useCards()
  const [view, setView] = useState<ViewMode>("list")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const toggleView = async () => {
    setIsTransitioning(true)

    await new Promise(resolve => setTimeout(resolve, 250))

    setView((prev) => (prev === "list" ? "card" : "list"))
    setIsTransitioning(false)
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <SwitchCustom view={view} toggleView={toggleView} />

      <AnimatePresence mode="wait">
        {view === "list" ? (
          <motion.div
            key="list-view"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            className="w-full h-full"
          >
            <ListView cards={cards} />
          </motion.div>
        ) : (
          <motion.div
            key="card-view"
            initial={{ opacity: 1, scale: 3 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            exit={{
              opacity: 1,
              scale: 1.3,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            className="w-full h-full"
          >
            <SwiperView viewState={view} cards={cards} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CardView
