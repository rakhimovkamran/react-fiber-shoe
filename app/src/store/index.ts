import { proxy } from 'valtio'
import { IShoeState } from '../interfaces'

export const state = proxy<IShoeState>({
  current: '',
  items: {
    laces: '#ffffff',
    mesh: '#ffffff',
    caps: '#ffffff',
    inner: '#ffffff',
    sole: '#ffffff',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff',
  },
})
