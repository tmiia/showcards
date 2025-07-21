"use client"

import CardView from "@/components/cards/ CardView";
import NewCardModal from "@/components/cards/NewCardModal";
import Menu from "@/components/Menu";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Menu onOpenCreateModal={() => setModalOpen(true)} />

      <main>
        <CardView />
      </main>

      <NewCardModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
