import Image from "next/image";
import asidePicture from '@/public/img/strawberry.jpg'
export default function Stats({stats}: any) {
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-lime-600">
                  Potensi Hidroponik
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Fakta dan Angka Hidroponik
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Jelajahi Fakta dan Angka yang Menggambarkan Pertumbuhan dan Potensi Hidroponik
                </p>
                <dl className="grid grid-cols-1 gap-y-8 pt-8">
                  {stats.map((stat: any) => (
                    <div key={stat.id} className="flex max-w-xs flex-col gap-y-1">
                      <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                      <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src='img/strawberry.jpg'
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
  