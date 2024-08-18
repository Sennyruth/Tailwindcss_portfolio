

const Title = ({title,des}) => {
  return (
    
    <div className="flex flex-col gap-4 font-titleFont mb-14">
    <h1 className="text-5m  uppercase font-light text-designColor tracking-wide">{title}</h1>
    <h2 className="text-5xl text-gray-300 font-bold capitalize">{des}</h2>
    </div>
  )
}

export default Title
