import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from "@/types/card"
import 'swiper/css';
import 'swiper/css/effect-cards';
import { motion } from "motion/react"

import { EffectCards } from 'swiper/modules';

type SwiperViewProps = {
  cards: Card[];
  viewState: "list" | "card";
}

const SwiperView = ({ cards, viewState }: SwiperViewProps) => {
  return (
    <>
      <motion.div
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper z-30 h-screen p-6! max-h-screen overflow-hidden!"
        >
          {cards && cards.length > 0 ? (
            <>
             {cards.map((card, index) => (
              <SwiperSlide key={index} className="relative justify-between bg-zinc-900 rounded-4xl p-6">
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                  className="absolute top-[50%] left-[50%] translate-[-50%] font-medium text-white text-7xl text-center w-fit rotate-[90deg]"
                >
                  {card.text}
                </motion.p>
              </SwiperSlide>
            ))}
            </>
            ) : (
              <SwiperSlide className="relative justify-between bg-zinc-900 rounded-4xl p-6">
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                  className="absolute top-[50%] left-[50%] translate-[-50%] font-medium text-white text-lg text-center w-fit"
                >
                  Aucune carte pour le moment.
                </motion.p>
              </SwiperSlide>
          )}
        </Swiper>
      </motion.div>
    </>
  )
}

export default SwiperView
