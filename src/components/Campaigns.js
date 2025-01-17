import {useState,useEffect} from 'react'
import Slider from 'react-slick';
import Banners from 'api/banners.json'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'



function NextBtn ({ onClick, className }) {
	return (
		<button className={`text-purple-700 absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevBtn ({ onClick, className }) {
	return (
		<button className={`text-purple-700  absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}


export default function Campaigns() {
    const[banners,setBanners] = useState([]);

	useEffect(() => {
        setBanners(Banners);
	},[])




	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll:1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3500,
		cssEase: "linear",
		nextArrow:<NextBtn/>,
		prevArrow:<PrevBtn/>,
		

	};

	return (
	  <div className='container mx-auto py-10'>
		  <h3 className="text-sm font-semibold mb-3 ">Kampanyalar</h3>
		  <Slider {...settings}>
				{banners.length && banners.map((banner,index)=>(
                <div key={banner.id}>
					<picture className='block px-2'>
					<img src={banner.image} className=" rounded-lg" />
					</picture>
				</div>
				
				))}
			</Slider>
	  </div>
	)
  }
  