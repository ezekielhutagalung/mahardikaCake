import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cake from '../components/cakes'
import Explanation from '../components/explanation'
import BigCard from '../components/lowOpacity'
import RasaIndah from '../components/rasaindah'
import imageOne from '../pictures/kueDepan.jpg'
import { CakeFetch } from '../Store/actions'

export default function Home() {
  const dispatch = useDispatch()
  const cakes = useSelector((state) => state.Cake)

  useEffect(() => {
    dispatch(CakeFetch())
  }, [dispatch])

  return (
    <>
      <div class="">
        <div class="flex items-end relative text-right">
          <div class="items-end text-xl tracking-wider text-black text-sha uppercase font-normal p-4 self-center content-center absolute text-right w-full mb-32 md:text-xl ">
            <svg
              className="ml-auto mr-28 mt-5 "
              width="423"
              height="25"
              viewBox="0 0 423 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7812 19H11.7891V10.9375H2.76562V19H0.773438V1.86719H2.76562V9.15625H11.7891V1.86719H13.7812V19ZM26.0977 19L25.7109 17.1719H25.6172C24.9766 17.9766 24.3359 18.5234 23.6953 18.8125C23.0625 19.0938 22.2695 19.2344 21.3164 19.2344C20.043 19.2344 19.043 18.9062 18.3164 18.25C17.5977 17.5938 17.2383 16.6602 17.2383 15.4492C17.2383 12.8555 19.3125 11.4961 23.4609 11.3711L25.6406 11.3008V10.5039C25.6406 9.49609 25.4219 8.75391 24.9844 8.27734C24.5547 7.79297 23.8633 7.55078 22.9102 7.55078C21.8398 7.55078 20.6289 7.87891 19.2773 8.53516L18.6797 7.04688C19.3125 6.70312 20.0039 6.43359 20.7539 6.23828C21.5117 6.04297 22.2695 5.94531 23.0273 5.94531C24.5586 5.94531 25.6914 6.28516 26.4258 6.96484C27.168 7.64453 27.5391 8.73438 27.5391 10.2344V19H26.0977ZM21.7031 17.6289C22.9141 17.6289 23.8633 17.2969 24.5508 16.6328C25.2461 15.9688 25.5938 15.0391 25.5938 13.8438V12.6836L23.6484 12.7656C22.1016 12.8203 20.9844 13.0625 20.2969 13.4922C19.6172 13.9141 19.2773 14.5742 19.2773 15.4727C19.2773 16.1758 19.4883 16.7109 19.9102 17.0781C20.3398 17.4453 20.9375 17.6289 21.7031 17.6289ZM37.418 5.92188C37.9883 5.92188 38.5 5.96875 38.9531 6.0625L38.6836 7.86719C38.1523 7.75 37.6836 7.69141 37.2773 7.69141C36.2383 7.69141 35.3477 8.11328 34.6055 8.95703C33.8711 9.80078 33.5039 10.8516 33.5039 12.1094V19H31.5586V6.15625H33.1641L33.3867 8.53516H33.4805C33.957 7.69922 34.5312 7.05469 35.2031 6.60156C35.875 6.14844 36.6133 5.92188 37.418 5.92188ZM43.3008 19H41.3555V6.15625H43.3008V19ZM41.1914 2.67578C41.1914 2.23047 41.3008 1.90625 41.5195 1.70312C41.7383 1.49219 42.0117 1.38672 42.3398 1.38672C42.6523 1.38672 42.9219 1.49219 43.1484 1.70312C43.375 1.91406 43.4883 2.23828 43.4883 2.67578C43.4883 3.11328 43.375 3.44141 43.1484 3.66016C42.9219 3.87109 42.6523 3.97656 42.3398 3.97656C42.0117 3.97656 41.7383 3.87109 41.5195 3.66016C41.3008 3.44141 41.1914 3.11328 41.1914 2.67578ZM61.9453 15.4961C61.9453 16.6914 61.5 17.6133 60.6094 18.2617C59.7188 18.9102 58.4688 19.2344 56.8594 19.2344C55.1562 19.2344 53.8281 18.9648 52.875 18.4258V16.6211C53.4922 16.9336 54.1523 17.1797 54.8555 17.3594C55.5664 17.5391 56.25 17.6289 56.9062 17.6289C57.9219 17.6289 58.7031 17.4688 59.25 17.1484C59.7969 16.8203 60.0703 16.3242 60.0703 15.6602C60.0703 15.1602 59.8516 14.7344 59.4141 14.3828C58.9844 14.0234 58.1406 13.6016 56.8828 13.1172C55.6875 12.6719 54.8359 12.2852 54.3281 11.957C53.8281 11.6211 53.4531 11.2422 53.2031 10.8203C52.9609 10.3984 52.8398 9.89453 52.8398 9.30859C52.8398 8.26172 53.2656 7.4375 54.1172 6.83594C54.9688 6.22656 56.1367 5.92188 57.6211 5.92188C59.0039 5.92188 60.3555 6.20312 61.6758 6.76562L60.9844 8.34766C59.6953 7.81641 58.5273 7.55078 57.4805 7.55078C56.5586 7.55078 55.8633 7.69531 55.3945 7.98438C54.9258 8.27344 54.6914 8.67188 54.6914 9.17969C54.6914 9.52344 54.7773 9.81641 54.9492 10.0586C55.1289 10.3008 55.4141 10.5312 55.8047 10.75C56.1953 10.9688 56.9453 11.2852 58.0547 11.6992C59.5781 12.2539 60.6055 12.8125 61.1367 13.375C61.6758 13.9375 61.9453 14.6445 61.9453 15.4961ZM70.5469 19.2344C68.6484 19.2344 67.1484 18.6562 66.0469 17.5C64.9531 16.3438 64.4062 14.7383 64.4062 12.6836C64.4062 10.6133 64.9141 8.96875 65.9297 7.75C66.9531 6.53125 68.3242 5.92188 70.043 5.92188C71.6523 5.92188 72.9258 6.45312 73.8633 7.51562C74.8008 8.57031 75.2695 9.96484 75.2695 11.6992V12.9297H66.4219C66.4609 14.4375 66.8398 15.582 67.5586 16.3633C68.2852 17.1445 69.3047 17.5352 70.6172 17.5352C72 17.5352 73.3672 17.2461 74.7188 16.668V18.4023C74.0312 18.6992 73.3789 18.9102 72.7617 19.0352C72.1523 19.168 71.4141 19.2344 70.5469 19.2344ZM70.0195 7.55078C68.9883 7.55078 68.1641 7.88672 67.5469 8.55859C66.9375 9.23047 66.5781 10.1602 66.4688 11.3477H73.1836C73.1836 10.1211 72.9102 9.18359 72.3633 8.53516C71.8164 7.87891 71.0352 7.55078 70.0195 7.55078ZM94.9688 19V10.6445C94.9688 9.62109 94.75 8.85547 94.3125 8.34766C93.875 7.83203 93.1953 7.57422 92.2734 7.57422C91.0625 7.57422 90.168 7.92188 89.5898 8.61719C89.0117 9.3125 88.7227 10.3828 88.7227 11.8281V19H86.7773V10.6445C86.7773 9.62109 86.5586 8.85547 86.1211 8.34766C85.6836 7.83203 85 7.57422 84.0703 7.57422C82.8516 7.57422 81.957 7.94141 81.3867 8.67578C80.8242 9.40234 80.543 10.5977 80.543 12.2617V19H78.5977V6.15625H80.1797L80.4961 7.91406H80.5898C80.957 7.28906 81.4727 6.80078 82.1367 6.44922C82.8086 6.09766 83.5586 5.92188 84.3867 5.92188C86.3945 5.92188 87.707 6.64844 88.3242 8.10156H88.418C88.8008 7.42969 89.3555 6.89844 90.082 6.50781C90.8086 6.11719 91.6367 5.92188 92.5664 5.92188C94.0195 5.92188 95.1055 6.29688 95.8242 7.04688C96.5508 7.78906 96.9141 8.98047 96.9141 10.6211V19H94.9688ZM106.91 19.2344C106.074 19.2344 105.309 19.082 104.613 18.7773C103.926 18.4648 103.348 17.9883 102.879 17.3477H102.738C102.832 18.0977 102.879 18.8086 102.879 19.4805V24.7656H100.934V6.15625H102.516L102.785 7.91406H102.879C103.379 7.21094 103.961 6.70312 104.625 6.39062C105.289 6.07812 106.051 5.92188 106.91 5.92188C108.613 5.92188 109.926 6.50391 110.848 7.66797C111.777 8.83203 112.242 10.4648 112.242 12.5664C112.242 14.6758 111.77 16.3164 110.824 17.4883C109.887 18.6523 108.582 19.2344 106.91 19.2344ZM106.629 7.57422C105.316 7.57422 104.367 7.9375 103.781 8.66406C103.195 9.39062 102.895 10.5469 102.879 12.1328V12.5664C102.879 14.3711 103.18 15.6641 103.781 16.4453C104.383 17.2188 105.348 17.6055 106.676 17.6055C107.785 17.6055 108.652 17.1562 109.277 16.2578C109.91 15.3594 110.227 14.1211 110.227 12.543C110.227 10.9414 109.91 9.71484 109.277 8.86328C108.652 8.00391 107.77 7.57422 106.629 7.57422ZM117.48 6.15625V14.4883C117.48 15.5352 117.719 16.3164 118.195 16.832C118.672 17.3477 119.418 17.6055 120.434 17.6055C121.777 17.6055 122.758 17.2383 123.375 16.5039C124 15.7695 124.312 14.5703 124.312 12.9062V6.15625H126.258V19H124.652L124.371 17.2773H124.266C123.867 17.9102 123.312 18.3945 122.602 18.7305C121.898 19.0664 121.094 19.2344 120.188 19.2344C118.625 19.2344 117.453 18.8633 116.672 18.1211C115.898 17.3789 115.512 16.1914 115.512 14.5586V6.15625H117.48ZM136.254 5.92188C136.824 5.92188 137.336 5.96875 137.789 6.0625L137.52 7.86719C136.988 7.75 136.52 7.69141 136.113 7.69141C135.074 7.69141 134.184 8.11328 133.441 8.95703C132.707 9.80078 132.34 10.8516 132.34 12.1094V19H130.395V6.15625H132L132.223 8.53516H132.316C132.793 7.69922 133.367 7.05469 134.039 6.60156C134.711 6.14844 135.449 5.92188 136.254 5.92188ZM148.98 19V10.6914C148.98 9.64453 148.742 8.86328 148.266 8.34766C147.789 7.83203 147.043 7.57422 146.027 7.57422C144.684 7.57422 143.699 7.9375 143.074 8.66406C142.449 9.39062 142.137 10.5898 142.137 12.2617V19H140.191V6.15625H141.773L142.09 7.91406H142.184C142.582 7.28125 143.141 6.79297 143.859 6.44922C144.578 6.09766 145.379 5.92188 146.262 5.92188C147.809 5.92188 148.973 6.29688 149.754 7.04688C150.535 7.78906 150.926 8.98047 150.926 10.6211V19H148.98ZM162.832 19L162.445 17.1719H162.352C161.711 17.9766 161.07 18.5234 160.43 18.8125C159.797 19.0938 159.004 19.2344 158.051 19.2344C156.777 19.2344 155.777 18.9062 155.051 18.25C154.332 17.5938 153.973 16.6602 153.973 15.4492C153.973 12.8555 156.047 11.4961 160.195 11.3711L162.375 11.3008V10.5039C162.375 9.49609 162.156 8.75391 161.719 8.27734C161.289 7.79297 160.598 7.55078 159.645 7.55078C158.574 7.55078 157.363 7.87891 156.012 8.53516L155.414 7.04688C156.047 6.70312 156.738 6.43359 157.488 6.23828C158.246 6.04297 159.004 5.94531 159.762 5.94531C161.293 5.94531 162.426 6.28516 163.16 6.96484C163.902 7.64453 164.273 8.73438 164.273 10.2344V19H162.832ZM158.438 17.6289C159.648 17.6289 160.598 17.2969 161.285 16.6328C161.98 15.9688 162.328 15.0391 162.328 13.8438V12.6836L160.383 12.7656C158.836 12.8203 157.719 13.0625 157.031 13.4922C156.352 13.9141 156.012 14.5742 156.012 15.4727C156.012 16.1758 156.223 16.7109 156.645 17.0781C157.074 17.4453 157.672 17.6289 158.438 17.6289ZM183.27 17.2773H183.164C182.266 18.582 180.922 19.2344 179.133 19.2344C177.453 19.2344 176.145 18.6602 175.207 17.5117C174.277 16.3633 173.812 14.7305 173.812 12.6133C173.812 10.4961 174.281 8.85156 175.219 7.67969C176.156 6.50781 177.461 5.92188 179.133 5.92188C180.875 5.92188 182.211 6.55469 183.141 7.82031H183.293L183.211 6.89453L183.164 5.99219V0.765625H185.109V19H183.527L183.27 17.2773ZM179.379 17.6055C180.707 17.6055 181.668 17.2461 182.262 16.5273C182.863 15.8008 183.164 14.6328 183.164 13.0234V12.6133C183.164 10.793 182.859 9.49609 182.25 8.72266C181.648 7.94141 180.684 7.55078 179.355 7.55078C178.215 7.55078 177.34 7.99609 176.73 8.88672C176.129 9.76953 175.828 11.0195 175.828 12.6367C175.828 14.2773 176.129 15.5156 176.73 16.3516C177.332 17.1875 178.215 17.6055 179.379 17.6055ZM194.672 19.2344C192.773 19.2344 191.273 18.6562 190.172 17.5C189.078 16.3438 188.531 14.7383 188.531 12.6836C188.531 10.6133 189.039 8.96875 190.055 7.75C191.078 6.53125 192.449 5.92188 194.168 5.92188C195.777 5.92188 197.051 6.45312 197.988 7.51562C198.926 8.57031 199.395 9.96484 199.395 11.6992V12.9297H190.547C190.586 14.4375 190.965 15.582 191.684 16.3633C192.41 17.1445 193.43 17.5352 194.742 17.5352C196.125 17.5352 197.492 17.2461 198.844 16.668V18.4023C198.156 18.6992 197.504 18.9102 196.887 19.0352C196.277 19.168 195.539 19.2344 194.672 19.2344ZM194.145 7.55078C193.113 7.55078 192.289 7.88672 191.672 8.55859C191.062 9.23047 190.703 10.1602 190.594 11.3477H197.309C197.309 10.1211 197.035 9.18359 196.488 8.53516C195.941 7.87891 195.16 7.55078 194.145 7.55078ZM211.512 19V10.6914C211.512 9.64453 211.273 8.86328 210.797 8.34766C210.32 7.83203 209.574 7.57422 208.559 7.57422C207.215 7.57422 206.23 7.9375 205.605 8.66406C204.98 9.39062 204.668 10.5898 204.668 12.2617V19H202.723V6.15625H204.305L204.621 7.91406H204.715C205.113 7.28125 205.672 6.79297 206.391 6.44922C207.109 6.09766 207.91 5.92188 208.793 5.92188C210.34 5.92188 211.504 6.29688 212.285 7.04688C213.066 7.78906 213.457 8.98047 213.457 10.6211V19H211.512ZM227.977 6.15625V7.38672L225.598 7.66797C225.816 7.94141 226.012 8.30078 226.184 8.74609C226.355 9.18359 226.441 9.67969 226.441 10.2344C226.441 11.4922 226.012 12.4961 225.152 13.2461C224.293 13.9961 223.113 14.3711 221.613 14.3711C221.23 14.3711 220.871 14.3398 220.535 14.2773C219.707 14.7148 219.293 15.2656 219.293 15.9297C219.293 16.2812 219.438 16.543 219.727 16.7148C220.016 16.8789 220.512 16.9609 221.215 16.9609H223.488C224.879 16.9609 225.945 17.2539 226.688 17.8398C227.438 18.4258 227.812 19.2773 227.812 20.3945C227.812 21.8164 227.242 22.8984 226.102 23.6406C224.961 24.3906 223.297 24.7656 221.109 24.7656C219.43 24.7656 218.133 24.4531 217.219 23.8281C216.312 23.2031 215.859 22.3203 215.859 21.1797C215.859 20.3984 216.109 19.7227 216.609 19.1523C217.109 18.582 217.812 18.1953 218.719 17.9922C218.391 17.8438 218.113 17.6133 217.887 17.3008C217.668 16.9883 217.559 16.625 217.559 16.2109C217.559 15.7422 217.684 15.332 217.934 14.9805C218.184 14.6289 218.578 14.2891 219.117 13.9609C218.453 13.6875 217.91 13.2227 217.488 12.5664C217.074 11.9102 216.867 11.1602 216.867 10.3164C216.867 8.91016 217.289 7.82812 218.133 7.07031C218.977 6.30469 220.172 5.92188 221.719 5.92188C222.391 5.92188 222.996 6 223.535 6.15625H227.977ZM217.734 21.1562C217.734 21.8516 218.027 22.3789 218.613 22.7383C219.199 23.0977 220.039 23.2773 221.133 23.2773C222.766 23.2773 223.973 23.0312 224.754 22.5391C225.543 22.0547 225.938 21.3945 225.938 20.5586C225.938 19.8633 225.723 19.3789 225.293 19.1055C224.863 18.8398 224.055 18.707 222.867 18.707H220.535C219.652 18.707 218.965 18.918 218.473 19.3398C217.98 19.7617 217.734 20.3672 217.734 21.1562ZM218.789 10.2695C218.789 11.168 219.043 11.8477 219.551 12.3086C220.059 12.7695 220.766 13 221.672 13C223.57 13 224.52 12.0781 224.52 10.2344C224.52 8.30469 223.559 7.33984 221.637 7.33984C220.723 7.33984 220.02 7.58594 219.527 8.07812C219.035 8.57031 218.789 9.30078 218.789 10.2695ZM238.512 19L238.125 17.1719H238.031C237.391 17.9766 236.75 18.5234 236.109 18.8125C235.477 19.0938 234.684 19.2344 233.73 19.2344C232.457 19.2344 231.457 18.9062 230.73 18.25C230.012 17.5938 229.652 16.6602 229.652 15.4492C229.652 12.8555 231.727 11.4961 235.875 11.3711L238.055 11.3008V10.5039C238.055 9.49609 237.836 8.75391 237.398 8.27734C236.969 7.79297 236.277 7.55078 235.324 7.55078C234.254 7.55078 233.043 7.87891 231.691 8.53516L231.094 7.04688C231.727 6.70312 232.418 6.43359 233.168 6.23828C233.926 6.04297 234.684 5.94531 235.441 5.94531C236.973 5.94531 238.105 6.28516 238.84 6.96484C239.582 7.64453 239.953 8.73438 239.953 10.2344V19H238.512ZM234.117 17.6289C235.328 17.6289 236.277 17.2969 236.965 16.6328C237.66 15.9688 238.008 15.0391 238.008 13.8438V12.6836L236.062 12.7656C234.516 12.8203 233.398 13.0625 232.711 13.4922C232.031 13.9141 231.691 14.5742 231.691 15.4727C231.691 16.1758 231.902 16.7109 232.324 17.0781C232.754 17.4453 233.352 17.6289 234.117 17.6289ZM252.762 19V10.6914C252.762 9.64453 252.523 8.86328 252.047 8.34766C251.57 7.83203 250.824 7.57422 249.809 7.57422C248.465 7.57422 247.48 7.9375 246.855 8.66406C246.23 9.39062 245.918 10.5898 245.918 12.2617V19H243.973V6.15625H245.555L245.871 7.91406H245.965C246.363 7.28125 246.922 6.79297 247.641 6.44922C248.359 6.09766 249.16 5.92188 250.043 5.92188C251.59 5.92188 252.754 6.29688 253.535 7.04688C254.316 7.78906 254.707 8.98047 254.707 10.6211V19H252.762ZM266.871 12.4258C267.207 11.9492 267.719 11.3242 268.406 10.5508L272.555 6.15625H274.863L269.66 11.6289L275.227 19H272.871L268.336 12.9297L266.871 14.1953V19H264.949V0.765625H266.871V10.4336C266.871 10.8633 266.84 11.5273 266.777 12.4258H266.871ZM279.387 6.15625V14.4883C279.387 15.5352 279.625 16.3164 280.102 16.832C280.578 17.3477 281.324 17.6055 282.34 17.6055C283.684 17.6055 284.664 17.2383 285.281 16.5039C285.906 15.7695 286.219 14.5703 286.219 12.9062V6.15625H288.164V19H286.559L286.277 17.2773H286.172C285.773 17.9102 285.219 18.3945 284.508 18.7305C283.805 19.0664 283 19.2344 282.094 19.2344C280.531 19.2344 279.359 18.8633 278.578 18.1211C277.805 17.3789 277.418 16.1914 277.418 14.5586V6.15625H279.387ZM297.727 19.2344C295.828 19.2344 294.328 18.6562 293.227 17.5C292.133 16.3438 291.586 14.7383 291.586 12.6836C291.586 10.6133 292.094 8.96875 293.109 7.75C294.133 6.53125 295.504 5.92188 297.223 5.92188C298.832 5.92188 300.105 6.45312 301.043 7.51562C301.98 8.57031 302.449 9.96484 302.449 11.6992V12.9297H293.602C293.641 14.4375 294.02 15.582 294.738 16.3633C295.465 17.1445 296.484 17.5352 297.797 17.5352C299.18 17.5352 300.547 17.2461 301.898 16.668V18.4023C301.211 18.6992 300.559 18.9102 299.941 19.0352C299.332 19.168 298.594 19.2344 297.727 19.2344ZM297.199 7.55078C296.168 7.55078 295.344 7.88672 294.727 8.55859C294.117 9.23047 293.758 10.1602 293.648 11.3477H300.363C300.363 10.1211 300.09 9.18359 299.543 8.53516C298.996 7.87891 298.215 7.55078 297.199 7.55078ZM320.297 15.4961C320.297 16.6914 319.852 17.6133 318.961 18.2617C318.07 18.9102 316.82 19.2344 315.211 19.2344C313.508 19.2344 312.18 18.9648 311.227 18.4258V16.6211C311.844 16.9336 312.504 17.1797 313.207 17.3594C313.918 17.5391 314.602 17.6289 315.258 17.6289C316.273 17.6289 317.055 17.4688 317.602 17.1484C318.148 16.8203 318.422 16.3242 318.422 15.6602C318.422 15.1602 318.203 14.7344 317.766 14.3828C317.336 14.0234 316.492 13.6016 315.234 13.1172C314.039 12.6719 313.188 12.2852 312.68 11.957C312.18 11.6211 311.805 11.2422 311.555 10.8203C311.312 10.3984 311.191 9.89453 311.191 9.30859C311.191 8.26172 311.617 7.4375 312.469 6.83594C313.32 6.22656 314.488 5.92188 315.973 5.92188C317.355 5.92188 318.707 6.20312 320.027 6.76562L319.336 8.34766C318.047 7.81641 316.879 7.55078 315.832 7.55078C314.91 7.55078 314.215 7.69531 313.746 7.98438C313.277 8.27344 313.043 8.67188 313.043 9.17969C313.043 9.52344 313.129 9.81641 313.301 10.0586C313.48 10.3008 313.766 10.5312 314.156 10.75C314.547 10.9688 315.297 11.2852 316.406 11.6992C317.93 12.2539 318.957 12.8125 319.488 13.375C320.027 13.9375 320.297 14.6445 320.297 15.4961ZM328.898 19.2344C327 19.2344 325.5 18.6562 324.398 17.5C323.305 16.3438 322.758 14.7383 322.758 12.6836C322.758 10.6133 323.266 8.96875 324.281 7.75C325.305 6.53125 326.676 5.92188 328.395 5.92188C330.004 5.92188 331.277 6.45312 332.215 7.51562C333.152 8.57031 333.621 9.96484 333.621 11.6992V12.9297H324.773C324.812 14.4375 325.191 15.582 325.91 16.3633C326.637 17.1445 327.656 17.5352 328.969 17.5352C330.352 17.5352 331.719 17.2461 333.07 16.668V18.4023C332.383 18.6992 331.73 18.9102 331.113 19.0352C330.504 19.168 329.766 19.2344 328.898 19.2344ZM328.371 7.55078C327.34 7.55078 326.516 7.88672 325.898 8.55859C325.289 9.23047 324.93 10.1602 324.82 11.3477H331.535C331.535 10.1211 331.262 9.18359 330.715 8.53516C330.168 7.87891 329.387 7.55078 328.371 7.55078ZM353.32 19V10.6445C353.32 9.62109 353.102 8.85547 352.664 8.34766C352.227 7.83203 351.547 7.57422 350.625 7.57422C349.414 7.57422 348.52 7.92188 347.941 8.61719C347.363 9.3125 347.074 10.3828 347.074 11.8281V19H345.129V10.6445C345.129 9.62109 344.91 8.85547 344.473 8.34766C344.035 7.83203 343.352 7.57422 342.422 7.57422C341.203 7.57422 340.309 7.94141 339.738 8.67578C339.176 9.40234 338.895 10.5977 338.895 12.2617V19H336.949V6.15625H338.531L338.848 7.91406H338.941C339.309 7.28906 339.824 6.80078 340.488 6.44922C341.16 6.09766 341.91 5.92188 342.738 5.92188C344.746 5.92188 346.059 6.64844 346.676 8.10156H346.77C347.152 7.42969 347.707 6.89844 348.434 6.50781C349.16 6.11719 349.988 5.92188 350.918 5.92188C352.371 5.92188 353.457 6.29688 354.176 7.04688C354.902 7.78906 355.266 8.98047 355.266 10.6211V19H353.32ZM365.262 19.2344C364.426 19.2344 363.66 19.082 362.965 18.7773C362.277 18.4648 361.699 17.9883 361.23 17.3477H361.09C361.184 18.0977 361.23 18.8086 361.23 19.4805V24.7656H359.285V6.15625H360.867L361.137 7.91406H361.23C361.73 7.21094 362.312 6.70312 362.977 6.39062C363.641 6.07812 364.402 5.92188 365.262 5.92188C366.965 5.92188 368.277 6.50391 369.199 7.66797C370.129 8.83203 370.594 10.4648 370.594 12.5664C370.594 14.6758 370.121 16.3164 369.176 17.4883C368.238 18.6523 366.934 19.2344 365.262 19.2344ZM364.98 7.57422C363.668 7.57422 362.719 7.9375 362.133 8.66406C361.547 9.39062 361.246 10.5469 361.23 12.1328V12.5664C361.23 14.3711 361.531 15.6641 362.133 16.4453C362.734 17.2188 363.699 17.6055 365.027 17.6055C366.137 17.6055 367.004 17.1562 367.629 16.2578C368.262 15.3594 368.578 14.1211 368.578 12.543C368.578 10.9414 368.262 9.71484 367.629 8.86328C367.004 8.00391 366.121 7.57422 364.98 7.57422ZM375.832 6.15625V14.4883C375.832 15.5352 376.07 16.3164 376.547 16.832C377.023 17.3477 377.77 17.6055 378.785 17.6055C380.129 17.6055 381.109 17.2383 381.727 16.5039C382.352 15.7695 382.664 14.5703 382.664 12.9062V6.15625H384.609V19H383.004L382.723 17.2773H382.617C382.219 17.9102 381.664 18.3945 380.953 18.7305C380.25 19.0664 379.445 19.2344 378.539 19.2344C376.977 19.2344 375.805 18.8633 375.023 18.1211C374.25 17.3789 373.863 16.1914 373.863 14.5586V6.15625H375.832ZM394.605 5.92188C395.176 5.92188 395.688 5.96875 396.141 6.0625L395.871 7.86719C395.34 7.75 394.871 7.69141 394.465 7.69141C393.426 7.69141 392.535 8.11328 391.793 8.95703C391.059 9.80078 390.691 10.8516 390.691 12.1094V19H388.746V6.15625H390.352L390.574 8.53516H390.668C391.145 7.69922 391.719 7.05469 392.391 6.60156C393.062 6.14844 393.801 5.92188 394.605 5.92188ZM407.332 19V10.6914C407.332 9.64453 407.094 8.86328 406.617 8.34766C406.141 7.83203 405.395 7.57422 404.379 7.57422C403.035 7.57422 402.051 7.9375 401.426 8.66406C400.801 9.39062 400.488 10.5898 400.488 12.2617V19H398.543V6.15625H400.125L400.441 7.91406H400.535C400.934 7.28125 401.492 6.79297 402.211 6.44922C402.93 6.09766 403.73 5.92188 404.613 5.92188C406.16 5.92188 407.324 6.29688 408.105 7.04688C408.887 7.78906 409.277 8.98047 409.277 10.6211V19H407.332ZM421.184 19L420.797 17.1719H420.703C420.062 17.9766 419.422 18.5234 418.781 18.8125C418.148 19.0938 417.355 19.2344 416.402 19.2344C415.129 19.2344 414.129 18.9062 413.402 18.25C412.684 17.5938 412.324 16.6602 412.324 15.4492C412.324 12.8555 414.398 11.4961 418.547 11.3711L420.727 11.3008V10.5039C420.727 9.49609 420.508 8.75391 420.07 8.27734C419.641 7.79297 418.949 7.55078 417.996 7.55078C416.926 7.55078 415.715 7.87891 414.363 8.53516L413.766 7.04688C414.398 6.70312 415.09 6.43359 415.84 6.23828C416.598 6.04297 417.355 5.94531 418.113 5.94531C419.645 5.94531 420.777 6.28516 421.512 6.96484C422.254 7.64453 422.625 8.73438 422.625 10.2344V19H421.184ZM416.789 17.6289C418 17.6289 418.949 17.2969 419.637 16.6328C420.332 15.9688 420.68 15.0391 420.68 13.8438V12.6836L418.734 12.7656C417.188 12.8203 416.07 13.0625 415.383 13.4922C414.703 13.9141 414.363 14.5742 414.363 15.4727C414.363 16.1758 414.574 16.7109 414.996 17.0781C415.426 17.4453 416.023 17.6289 416.789 17.6289Z"
                fill="#333333"
              />
            </svg>
            <svg
              className="ml-auto mr-32 mt-8 "
              width="398"
              height="59"
              viewBox="0 0 398 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.5104 51.168C45.2304 52.272 45.9744 53.16 46.7424 53.832C47.5104 54.504 48.4944 55.08 49.6944 55.56V57C46.3344 56.856 42.5904 56.784 38.4624 56.784C35.2944 56.784 32.2464 56.856 29.3184 57V55.56C30.6624 55.464 31.6224 55.32 32.1984 55.128C32.8224 54.936 33.1344 54.6 33.1344 54.12C33.1344 53.736 32.8704 53.136 32.3424 52.32L21.9024 35.4C20.9424 33.864 20.1264 32.832 19.4544 32.304C18.8304 31.776 17.9664 31.464 16.8624 31.368V49.368C16.8624 51.192 16.9824 52.512 17.2224 53.328C17.5104 54.144 18.0144 54.696 18.7344 54.984C19.4544 55.272 20.6304 55.464 22.2624 55.56V57C19.6704 56.856 16.0464 56.784 11.3904 56.784C6.25441 56.784 2.46241 56.856 0.0144064 57V55.56C1.59841 55.464 2.75041 55.272 3.47041 54.984C4.23841 54.696 4.74241 54.144 4.98241 53.328C5.27041 52.512 5.41441 51.192 5.41441 49.368V13.656C5.41441 11.832 5.27041 10.512 4.98241 9.696C4.74241 8.88 4.23841 8.328 3.47041 8.04C2.75041 7.752 1.59841 7.56 0.0144064 7.464V6.024C2.46241 6.168 6.25441 6.24 11.3904 6.24C16.0464 6.24 19.6704 6.168 22.2624 6.024V7.464C20.6304 7.56 19.4544 7.752 18.7344 8.04C18.0144 8.328 17.5104 8.88 17.2224 9.696C16.9824 10.512 16.8624 11.832 16.8624 13.656V29.856C18.7824 29.76 20.5344 29.184 22.1184 28.128C23.7024 27.072 25.5024 25.392 27.5184 23.088L31.7664 17.976C33.9744 15.432 35.0784 13.2 35.0784 11.28C35.0784 10.128 34.5984 9.216 33.6384 8.544C32.7264 7.872 31.4304 7.488 29.7504 7.392V6.024C33.2544 6.168 36.8064 6.24 40.4064 6.24C43.1904 6.24 45.4464 6.168 47.1744 6.024V7.392C43.3344 8.304 39.8544 10.608 36.7344 14.304L27.7344 25.032L44.5104 51.168ZM85.8457 49.152C85.8457 51.36 86.1817 52.968 86.8537 53.976C87.5737 54.984 88.7737 55.488 90.4537 55.488V57C88.9657 56.856 87.4777 56.784 85.9897 56.784C81.8137 56.784 78.3097 57.12 75.4777 57.792V51.312C73.2697 55.776 69.4057 58.008 63.8857 58.008C60.2857 58.008 57.6697 57.072 56.0377 55.2C55.2697 54.288 54.6937 53.112 54.3097 51.672C53.9737 50.184 53.8057 48.24 53.8057 45.84V27.624C53.8057 25.416 53.4457 23.808 52.7257 22.8C52.0537 21.792 50.8777 21.288 49.1977 21.288V19.776C50.6857 19.92 52.1737 19.992 53.6617 19.992C57.8377 19.992 61.3417 19.656 64.1737 18.984V48.792C64.1737 50.808 64.4617 52.32 65.0377 53.328C65.6617 54.336 66.8137 54.84 68.4937 54.84C70.4137 54.84 72.0457 54.048 73.3897 52.464C74.7817 50.832 75.4777 48.84 75.4777 46.488V27.624C75.4777 25.416 75.1177 23.808 74.3977 22.8C73.7257 21.792 72.5497 21.288 70.8697 21.288V19.776C72.4057 19.92 73.8937 19.992 75.3337 19.992C79.5097 19.992 83.0137 19.656 85.8457 18.984V49.152ZM114.822 52.104C118.758 52.104 121.926 50.184 124.326 46.344L125.622 46.776C124.662 49.896 122.934 52.56 120.438 54.768C117.99 56.928 114.918 58.008 111.222 58.008C106.134 58.008 102.078 56.4 99.0538 53.184C96.0778 49.92 94.5898 45.12 94.5898 38.784C94.5898 32.304 96.1978 27.36 99.4138 23.952C102.63 20.496 106.902 18.768 112.23 18.768C121.254 18.768 125.766 24.096 125.766 34.752H105.534C105.486 35.472 105.462 36.6 105.462 38.136C105.462 41.304 105.894 43.944 106.758 46.056C107.67 48.168 108.822 49.704 110.214 50.664C111.654 51.624 113.19 52.104 114.822 52.104ZM111.798 20.28C110.07 20.28 108.63 21.36 107.478 23.52C106.374 25.632 105.678 28.92 105.39 33.384H116.694C116.79 29.592 116.406 26.472 115.542 24.024C114.726 21.528 113.478 20.28 111.798 20.28ZM173.596 5.016C176.476 5.016 178.924 5.424 180.94 6.24C182.956 7.056 184.924 8.208 186.844 9.696C187.372 10.128 187.828 10.344 188.212 10.344C189.172 10.344 189.796 8.904 190.084 6.024H191.74C191.548 9.288 191.452 15.096 191.452 23.448H189.796C189.364 19.896 188.788 17.184 188.068 15.312C187.348 13.44 186.124 11.808 184.396 10.416C183.196 9.264 181.804 8.4 180.22 7.824C178.636 7.2 176.98 6.888 175.252 6.888C170.404 6.888 166.804 9.264 164.452 14.016C162.1 18.72 160.924 24.6 160.924 31.656C160.924 38.664 162.148 44.52 164.596 49.224C167.044 53.928 170.692 56.28 175.54 56.28C177.172 56.28 178.78 55.992 180.364 55.416C181.996 54.792 183.364 53.904 184.468 52.752C186.244 51.408 187.468 49.728 188.14 47.712C188.86 45.696 189.412 42.744 189.796 38.856H191.452C191.452 47.544 191.548 53.592 191.74 57H190.084C189.94 55.464 189.724 54.384 189.436 53.76C189.196 53.088 188.836 52.752 188.356 52.752C187.972 52.752 187.468 52.944 186.844 53.328C184.684 54.864 182.62 56.04 180.652 56.856C178.684 57.624 176.308 58.008 173.524 58.008C168.436 58.008 163.972 56.976 160.132 54.912C156.34 52.848 153.388 49.872 151.276 45.984C149.164 42.048 148.108 37.368 148.108 31.944C148.108 26.664 149.188 21.984 151.348 17.904C153.508 13.824 156.508 10.656 160.348 8.4C164.236 6.144 168.652 5.016 173.596 5.016ZM216.081 18.768C221.601 18.768 225.921 20.352 229.041 23.52C232.161 26.64 233.721 31.608 233.721 38.424C233.721 45.24 232.161 50.208 229.041 53.328C225.921 56.448 221.601 58.008 216.081 58.008C210.609 58.008 206.289 56.448 203.121 53.328C200.001 50.208 198.441 45.24 198.441 38.424C198.441 31.608 200.001 26.64 203.121 23.52C206.289 20.352 210.609 18.768 216.081 18.768ZM216.081 20.208C214.017 20.208 212.361 21.72 211.113 24.744C209.913 27.72 209.313 32.28 209.313 38.424C209.313 44.568 209.913 49.128 211.113 52.104C212.361 55.08 214.017 56.568 216.081 56.568C218.193 56.568 219.849 55.104 221.049 52.176C222.249 49.2 222.849 44.616 222.849 38.424C222.849 32.232 222.225 27.648 220.977 24.672C219.777 21.696 218.145 20.208 216.081 20.208ZM274.089 51.744C274.857 52.896 275.481 53.76 275.961 54.336C276.441 54.864 277.065 55.248 277.833 55.488V57C273.993 56.808 271.473 56.712 270.273 56.712C268.689 56.712 265.593 56.808 260.985 57V55.488C261.657 55.488 262.185 55.368 262.569 55.128C262.953 54.888 263.145 54.552 263.145 54.12C263.145 53.88 263.025 53.52 262.785 53.04L255.657 40.152C255.177 39.336 254.673 38.784 254.145 38.496C253.617 38.208 252.945 38.016 252.129 37.92V50.304C252.129 52.272 252.441 53.64 253.065 54.408C253.689 55.128 254.817 55.488 256.449 55.488V57C251.649 56.808 248.529 56.712 247.089 56.712C245.457 56.712 242.145 56.808 237.153 57V55.488C238.833 55.488 240.009 55.128 240.681 54.408C241.401 53.64 241.761 52.272 241.761 50.304V9.264C241.761 7.056 241.401 5.448 240.681 4.44C240.009 3.432 238.833 2.928 237.153 2.928V1.416C238.689 1.56 240.177 1.632 241.617 1.632C245.793 1.632 249.297 1.296 252.129 0.623996V36.552C253.089 36.456 253.905 36.264 254.577 35.976C255.297 35.688 255.921 35.256 256.449 34.68L261.921 29.352C263.505 27.768 264.297 26.304 264.297 24.96C264.297 23.856 263.793 22.992 262.785 22.368C261.777 21.696 260.433 21.312 258.753 21.216V19.776C261.393 19.92 264.201 19.992 267.177 19.992C271.161 19.992 273.969 19.92 275.601 19.776V21.216C272.769 21.84 269.769 23.688 266.601 26.76L261.993 31.512L274.089 51.744ZM299.111 52.104C303.047 52.104 306.215 50.184 308.615 46.344L309.911 46.776C308.951 49.896 307.223 52.56 304.727 54.768C302.279 56.928 299.207 58.008 295.511 58.008C290.423 58.008 286.367 56.4 283.343 53.184C280.367 49.92 278.879 45.12 278.879 38.784C278.879 32.304 280.487 27.36 283.703 23.952C286.919 20.496 291.191 18.768 296.519 18.768C305.543 18.768 310.055 24.096 310.055 34.752H289.823C289.775 35.472 289.751 36.6 289.751 38.136C289.751 41.304 290.183 43.944 291.047 46.056C291.959 48.168 293.111 49.704 294.503 50.664C295.943 51.624 297.479 52.104 299.111 52.104ZM296.087 20.28C294.359 20.28 292.919 21.36 291.767 23.52C290.663 25.632 289.967 28.92 289.679 33.384H300.983C301.079 29.592 300.695 26.472 299.831 24.024C299.015 21.528 297.767 20.28 296.087 20.28ZM328.912 50.304C328.912 52.272 329.248 53.64 329.92 54.408C330.592 55.128 331.792 55.488 333.52 55.488V57C328.528 56.808 325.312 56.712 323.872 56.712C322.24 56.712 318.928 56.808 313.936 57V55.488C315.616 55.488 316.792 55.128 317.464 54.408C318.184 53.64 318.544 52.272 318.544 50.304V9.264C318.544 7.056 318.184 5.448 317.464 4.44C316.792 3.432 315.616 2.928 313.936 2.928V1.416C315.472 1.56 316.96 1.632 318.4 1.632C322.576 1.632 326.08 1.296 328.912 0.623996V50.304ZM346.087 57.504C343.015 57.504 340.711 56.712 339.175 55.128C337.687 53.544 336.943 51.456 336.943 48.864C336.943 46.704 337.495 44.928 338.599 43.536C339.751 42.096 341.119 40.992 342.703 40.224C344.335 39.456 346.399 38.64 348.895 37.776C351.535 36.864 353.455 36.048 354.655 35.328C355.903 34.56 356.527 33.528 356.527 32.232V26.616C356.527 24.6 356.047 23.04 355.087 21.936C354.175 20.784 352.735 20.208 350.767 20.208C348.463 20.208 346.711 20.784 345.511 21.936C346.855 22.416 347.887 23.136 348.607 24.096C349.375 25.056 349.759 26.184 349.759 27.48C349.759 29.112 349.207 30.408 348.103 31.368C346.999 32.328 345.655 32.808 344.071 32.808C342.391 32.808 341.095 32.28 340.183 31.224C339.271 30.168 338.815 28.848 338.815 27.264C338.815 25.92 339.127 24.792 339.751 23.88C340.423 22.92 341.431 22.032 342.775 21.216C344.071 20.448 345.655 19.848 347.527 19.416C349.447 18.984 351.535 18.768 353.791 18.768C356.143 18.768 358.183 19.008 359.911 19.488C361.639 19.968 363.079 20.784 364.231 21.936C365.287 22.992 365.983 24.288 366.319 25.824C366.703 27.36 366.895 29.448 366.895 32.088V51.672C366.895 52.824 366.991 53.64 367.183 54.12C367.423 54.6 367.855 54.84 368.479 54.84C369.199 54.84 370.063 54.432 371.071 53.616L371.791 54.84C369.631 56.616 366.991 57.504 363.871 57.504C361.231 57.504 359.383 56.976 358.327 55.92C357.271 54.864 356.719 53.448 356.671 51.672C354.271 55.56 350.743 57.504 346.087 57.504ZM351.631 52.896C353.503 52.896 355.135 51.912 356.527 49.944V35.184C355.951 36.144 354.727 37.2 352.855 38.352C350.983 39.552 349.567 40.752 348.607 41.952C347.647 43.152 347.167 44.88 347.167 47.136C347.167 49.104 347.575 50.568 348.391 51.528C349.207 52.44 350.287 52.896 351.631 52.896ZM388.465 19.776H396.961V21.216H388.465V50.304C388.465 51.744 388.705 52.776 389.185 53.4C389.713 53.976 390.529 54.264 391.633 54.264C393.697 54.264 395.329 52.824 396.529 49.944L397.753 50.592C395.929 55.536 392.641 58.008 387.889 58.008C384.721 58.008 382.321 57.192 380.689 55.56C379.681 54.552 378.985 53.304 378.601 51.816C378.265 50.28 378.097 48.192 378.097 45.552V21.216H372.049V19.776H378.097V10.272C382.081 10.272 385.537 9.504 388.465 7.968V19.776Z"
                fill="#694A1C"
              />
            </svg>
            <div className="flex justify-end py-10 mr-56">
              <button className="flex bg-yellow-600 font-normal text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-500 mr-6">
                Hubungi kami
              </button>
            </div>
          </div>

          <img
            class="w-full object-cover h-full  mx-auto  sm:block sm:w-full"
            src={imageOne}
            alt="Banner"
            width="1920"
            height="288"
          />
        </div>
        <RasaIndah />
        <BigCard />
        <Explanation />
        <div className="flex flex-wrap -mx-3 overflow-hidden md:-mx-1 lg:ml-14 lg:mr-14">
          {cakes.map((cakes) => (
            <Cake key={cakes.id} cakes={cakes} />
          ))}
        </div>
      </div>
    </>
  )
}