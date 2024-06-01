import asidePicture from '@/public/img/leaf.webp'
export default function HeroSection(){
    return(
        <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-lg h-full flex flex-col justify-center">
                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Segar dan Sehat dengan Hidroponik</p>
                <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
                  Tanaman Hidroponik ditanam dalam larutan nutrisi yang kaya akan mineral dan air, sehingga menghasilkan panen yang lebih segar, sehat, dan bebas pestisida.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                  >
                    Belanja Sekarang
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">
                    Kenapa hidroponik <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <img
              src="img/leaf.webp"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    )
}