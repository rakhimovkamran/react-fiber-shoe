import React, { FC } from 'react'

import { HexColorPicker } from 'react-colorful'
import { useSnapshot } from 'valtio'

import { IShoeState } from '../../interfaces'

interface IPickerProps {
  proxyState: IShoeState
}

export const Picker: FC<IPickerProps> = ({ proxyState }) => {
  const snap = useSnapshot(proxyState)

  const handleColorChange = (color: string) => {
    if (snap.current) {
      proxyState.items[snap.current] = color
    }
  }

  return (
    <section className={'picker-section'} style={{ display: snap.current ? 'block' : 'none' }}>
      <HexColorPicker
        color={snap.current && snap.items[snap.current]}
        onChange={handleColorChange}
        className={'color-picker'}
      />
      <h1>{snap.current}</h1>
    </section>
  )
}
