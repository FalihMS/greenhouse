import Image from "next/image";

export default function GridWithImageSection({items}: any) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center w-full mb-10">
          <h2 className="text-base font-semibold leading-7 text-lime-600">Produk Favorit</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hasil panen terbaik Favorit Pelanggan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dapatkan Hasil panen yang lebih segar, sehat, dan bebas pestisida metode produk hidroponik pilihan pelanggan kami!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item: any) => (
            <a key={item.id} href={item.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{item.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
