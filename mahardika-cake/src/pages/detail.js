import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CakeById } from '../Store/actions'
import CakeDetail from '../components/cakesDetail'

export default function Detail() {
  const { id } = useParams()
  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(CakeById(id))
  }, [id])

  const { cakeDetails } = useSelector((state) => state.CakeId)

  console.log(cakeDetails, 'ini di detail')
  return (
    <>
      <CakeDetail cakes={cakeDetails} />
    </>
  )
}
