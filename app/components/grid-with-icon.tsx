
export default function GridWithIconSection({items}: any) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-lime-600">Keuntungan Hidroponik</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Berbagai macam keuntungan hidroponik
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Jika Anda ingin menikmati hasil panen yang segar, sehat, dan ramah lingkungan, hidroponik adalah pilihan yang tepat.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {items.map((item: any) => (
                <div key={item.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600">
                      <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {item.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }