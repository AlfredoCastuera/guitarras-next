import React from 'react'

export const range = (number) => {
  return [...Array(number).keys()].map(item=>item+1)
}