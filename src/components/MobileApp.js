export default function MobileApp() {
	return (
	  <div className="bg-purple-700 flex justify-between bg-mobile-app items-center mt-7 rounded-lg text-white">
		  <div className="flex flex-col gap-y-3  p-10">
			  <h3 className="text-2xl font-bold tracking-tight">Ahmet Acar Getir</h3>
			  <p className="font-semibold">İstediğiniz ürünleri Malesef  <br/> Getiremeyiz (:</p>
			  <nav className="mt-5 flex gap-x-2">
				  <a href="#" className="transition-all transform hover:scale-105">
					  <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
				  </a>
				  <a href="#" className="transition-all transform hover:scale-105">
					  <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
				  </a>
				  <a href="#" className="transition-all transform hover:scale-105">
					  <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
				  </a>
			  </nav>
		  </div>
		  <picture className="mt-6">
			  <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"/>
		  </picture>
	  </div>
	)
  }
  