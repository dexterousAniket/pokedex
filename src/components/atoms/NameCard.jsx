import React from 'react'

export default function NameCard() {
  return (
    <div className="flex flex-col items-center p-4 pt-1 px-6 border-dashed border-2 rounded-sm border-gray-500 bg-gradient-to-b from-GRASS to-POISON">
        <img className="mt-5 mb-4  h-28 w-24" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=""/>
        <h3 className="font-semibold text-sm">Bulbasaur</h3>
        <h5 className="text-xs">001</h5>
    </div>
  )
}
