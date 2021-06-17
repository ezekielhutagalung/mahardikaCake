import react from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav class="sticky top-0 z-10 flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">
        <div class="container flex flex-col flex-wrap items-center justify-start py-5 mx-auto md:flex-row max-w-7xl ">
          <div class="flex justify content-around relative flex flex-col md:flex-row ">
            <Link to="/">
              <a class="flex items-center mb-5  font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span class="flex justify-start ml-10 mx-auto text-xl font-black leading-none text-yellow-900 select-none">
                  <svg
                    width="213"
                    height="19"
                    viewBox="0 0 213 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.55078 18L3.42578 4.55859H3.32031C3.46875 7.29297 3.54297 9.11719 3.54297 10.0312V18H0.296875V0.867188H5.24219L9.29688 13.9688H9.36719L13.668 0.867188H18.6133V18H15.2266V9.89062C15.2266 9.50781 15.2305 9.06641 15.2383 8.56641C15.2539 8.06641 15.3086 6.73828 15.4023 4.58203H15.2969L10.8789 18H7.55078ZM33.4258 18L32.1836 13.9219H25.9375L24.6953 18H20.7812L26.8281 0.796875H31.2695L37.3398 18H33.4258ZM31.3164 10.875C30.168 7.17969 29.5195 5.08984 29.3711 4.60547C29.2305 4.12109 29.1289 3.73828 29.0664 3.45703C28.8086 4.45703 28.0703 6.92969 26.8516 10.875H31.3164ZM53.5469 18H49.9258V10.6055H43.1406V18H39.5078V0.867188H43.1406V7.58203H49.9258V0.867188H53.5469V18ZM68.3711 18L67.1289 13.9219H60.8828L59.6406 18H55.7266L61.7734 0.796875H66.2148L72.2852 18H68.3711ZM66.2617 10.875C65.1133 7.17969 64.4648 5.08984 64.3164 4.60547C64.1758 4.12109 64.0742 3.73828 64.0117 3.45703C63.7539 4.45703 63.0156 6.92969 61.7969 10.875H66.2617ZM78.0859 8.47266H79.2578C80.4062 8.47266 81.2539 8.28125 81.8008 7.89844C82.3477 7.51562 82.6211 6.91406 82.6211 6.09375C82.6211 5.28125 82.3398 4.70312 81.7773 4.35938C81.2227 4.01562 80.3594 3.84375 79.1875 3.84375H78.0859V8.47266ZM78.0859 11.4258V18H74.4531V0.867188H79.4453C81.7734 0.867188 83.4961 1.29297 84.6133 2.14453C85.7305 2.98828 86.2891 4.27344 86.2891 6C86.2891 7.00781 86.0117 7.90625 85.457 8.69531C84.9023 9.47656 84.1172 10.0898 83.1016 10.5352C85.6797 14.3867 87.3594 16.875 88.1406 18H84.1094L80.0195 11.4258H78.0859ZM104.512 9.26953C104.512 12.0898 103.707 14.25 102.098 15.75C100.496 17.25 98.1797 18 95.1484 18H90.2969V0.867188H95.6758C98.4727 0.867188 100.645 1.60547 102.191 3.08203C103.738 4.55859 104.512 6.62109 104.512 9.26953ZM100.738 9.36328C100.738 5.68359 99.1133 3.84375 95.8633 3.84375H93.9297V15H95.4883C98.9883 15 100.738 13.1211 100.738 9.36328ZM108.062 18V0.867188H111.695V18H108.062ZM129.789 18H125.664L121.176 10.7812L119.641 11.8828V18H116.008V0.867188H119.641V8.70703L121.07 6.69141L125.711 0.867188H129.742L123.766 8.44922L129.789 18ZM142.434 18L141.191 13.9219H134.945L133.703 18H129.789L135.836 0.796875H140.277L146.348 18H142.434ZM140.324 10.875C139.176 7.17969 138.527 5.08984 138.379 4.60547C138.238 4.12109 138.137 3.73828 138.074 3.45703C137.816 4.45703 137.078 6.92969 135.859 10.875H140.324ZM162.027 3.64453C160.66 3.64453 159.602 4.16016 158.852 5.19141C158.102 6.21484 157.727 7.64453 157.727 9.48047C157.727 13.3008 159.16 15.2109 162.027 15.2109C163.23 15.2109 164.688 14.9102 166.398 14.3086V17.3555C164.992 17.9414 163.422 18.2344 161.688 18.2344C159.195 18.2344 157.289 17.4805 155.969 15.9727C154.648 14.457 153.988 12.2852 153.988 9.45703C153.988 7.67578 154.312 6.11719 154.961 4.78125C155.609 3.4375 156.539 2.41016 157.75 1.69922C158.969 0.980469 160.395 0.621094 162.027 0.621094C163.691 0.621094 165.363 1.02344 167.043 1.82812L165.871 4.78125C165.23 4.47656 164.586 4.21094 163.938 3.98438C163.289 3.75781 162.652 3.64453 162.027 3.64453ZM180.543 18L179.301 13.9219H173.055L171.812 18H167.898L173.945 0.796875H178.387L184.457 18H180.543ZM178.434 10.875C177.285 7.17969 176.637 5.08984 176.488 4.60547C176.348 4.12109 176.246 3.73828 176.184 3.45703C175.926 4.45703 175.188 6.92969 173.969 10.875H178.434ZM200.406 18H196.281L191.793 10.7812L190.258 11.8828V18H186.625V0.867188H190.258V8.70703L191.688 6.69141L196.328 0.867188H200.359L194.383 8.44922L200.406 18ZM212.43 18H202.562V0.867188H212.43V3.84375H206.195V7.60547H211.996V10.582H206.195V15H212.43V18Z"
                      fill="#694A1C"
                    />
                  </svg>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div class="container flex flex-col flex-wrap items-center justify-end py-5 mx-auto md:flex-row max-w-7xl ">
          <div class="flex justify content-around relative flex flex-col md:flex-row ">
            <Link to="/">
              <a class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span class="flex justify-start mx-auto mr-10 text-xl font-black leading-none text-brown-400 select-none">
                  Home
                </span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
