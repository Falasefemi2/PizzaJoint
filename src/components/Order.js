import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const childVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}


const Order = ({ pizza, setShowModal }) => {
useEffect(() => {
  setTimeout(() => {
    setShowModal(true)
  }, 5000)
}, [setShowModal])

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container order"
    >

          <h2>Thank you for your order :)</h2>
      
      <motion.p
        variants={childVariant}
      >
        You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariant}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;