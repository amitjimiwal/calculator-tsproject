interface Props{
  display: string[];
  history?:number;
}
type num=string;
const View = ({display,history}:Props) => {
  console.log("view render")
  return (
    <div className="bg-view p-5 w-full rounded-xl h-auto shadow-xl">
      <p className="text-white text-xl tracking-wider mb-2 pl-3 object-scale-down w-full">{history ? history : 0}</p>
      <p className="text-white font-bold text-3xl tracking-wider p-3 object-scale-down w-full">{display.length>0 ? display.map((value : num)=> value) : 0}</p>
    </div>
  )
}

export default View
