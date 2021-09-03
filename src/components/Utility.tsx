import { empty, PixelPainterStore, random } from "../stores/PixelPainterStore"


const Utility = () => {

  const state = PixelPainterStore.useState()

  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={()=> empty() }>Clear</button>
      <button className="w-36" onClick={()=> random()}>Random color</button>
    </div>
  )
}

export default Utility