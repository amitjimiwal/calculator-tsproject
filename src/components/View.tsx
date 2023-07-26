interface Props{
  display: string[];
}
type num=string;
const View = ({display}:Props) => {
  console.log("view render")
  return (
    <div className="bg-view p-5 w-full rounded-xl h-auto">
      <p className="text-white font-bold text-3xl tracking-wider p-3 object-scale-down w-full">{display.map((value : num)=> value)}</p>
    </div>
  )
}

export default View
