"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { Card } from "@/types/card"

type CardsContextType = {
  cards: Card[]
  createCard: (text: string) => void
  removeCard: (id: string) => void
}

const CardsContext = createContext<CardsContextType | undefined>(undefined)

export const CardsProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("cards")
    if (stored) setCards(JSON.parse(stored))
  }, [])

  const createCard = (text: string) => {
    const newCard = { id: crypto.randomUUID(), text, createdAt: Date.now() }
    const updated = [...cards, newCard]
    setCards(updated)
    localStorage.setItem("cards", JSON.stringify(updated))
  }

  const removeCard = (id: string) => {
    const updated = cards.filter((card) => card.id !== id)
    setCards(updated)
    localStorage.setItem("cards", JSON.stringify(updated))
  }

  return (
    <CardsContext.Provider value={{ cards, createCard, removeCard }}>
      {children}
    </CardsContext.Provider>
  )
}


export const useCards = () => {
  const context = useContext(CardsContext)
  if (!context) {
    throw new Error("useCards must be used within a CardsProvider")
  }
  return context
}
