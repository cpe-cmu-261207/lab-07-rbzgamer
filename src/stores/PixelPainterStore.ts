import { Store } from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  cur: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      output[i].push('#FFFFFF')
    }
  }
  return output
}

const createRandomCanvas = () => {
  const output: string[][] = []
  let color = ['#000000','#804000','#FE0000','#FE6A00','#FFD800','#00FF01','#FFFFFF','#01FFFF','#0094FE','#0026FF','#B100FE','#FF006E']
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      output[i].push(color[Math.floor((Math.random()*12)%12)])
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  cur: '#000000'

})

export const empty = () => {
  PixelPainterStore.update(
    s => { s.canvas = createEmptyCanvas() }
  )
}

export const random = () => {
  PixelPainterStore.update(
    s => { s.canvas = createRandomCanvas() }
  )
}

export const currentColor = (color: string) => {
  PixelPainterStore.update(
    s => { s.cur = color }
  )
}

export const setColorCell = (x: number , y: number) => {
  PixelPainterStore.update(
    s => { s.canvas[y][x] = s.cur}
  )
}