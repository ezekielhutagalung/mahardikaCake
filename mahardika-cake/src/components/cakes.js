import { useHistory } from 'react-router-dom'

export default function Cake({ cakes }) {
  const History = useHistory()

  const onDetailHandler = () => {
    History.push(`/Cake/${cakes.id}`)
  }
  return (
    <>
      <div class="my-3 px-10 w-82 overflow-hidden md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5">
        <div>
          <img
            clasName="transition duration-300 ease-in-out  "
            src={cakes.ImgUrl}
            alt="Sunset in the mountains"
          />
          <div className="flex justify-center">
            <button
              onClick={onDetailHandler}
              className="flex  justify-center font-bold text-black-500 px-4 py-3 transition duration-300 ease-in-out  hover:text-yellow-500"
            >
              {cakes.name}
            </button>
          </div>
          <h1 className="flex justify-center font-bold text-black-500 px-4 py-1">
            {cakes.price}
          </h1>
        </div>
      </div>
    </>
  )
}
