import { PixelPainterStore, setColorCell } from "../stores/PixelPainterStore"

type CellProps = {
  x: number;
  y: number;
}

const Cell = ({ x, y }: CellProps) => {

  const state = PixelPainterStore.useState()

  return (
    <td onClick={() => setColorCell(x,y)} className="w-6 h-6 cursor-pointer" style={{backgroundColor: state.canvas[y][x]}}>
    </td>
  )
}

export default Cell