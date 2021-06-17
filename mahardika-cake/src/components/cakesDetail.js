import react from 'react'

export default function CakeDetail(props) {
  console.log(props, 'di detail komponen')
  return (
    <>
      <div className="container mx-auto px-4">
        <div class="mt-8 grid lg:grid-cols-2" style={{ paddingTop: '100px' }}>
          <div class="object-center">
            <img src={props.ImgURl} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
