export interface IShoeItems {
  laces: string
  mesh: string
  caps: string
  inner: string
  sole: string
  stripes: string
  band: string
  patch: string
}

export interface IShoeState {
  current: keyof IShoeItems | ''
  items: IShoeItems
}
