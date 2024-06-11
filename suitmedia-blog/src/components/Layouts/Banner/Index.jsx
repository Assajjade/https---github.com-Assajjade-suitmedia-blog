import second from '../../../assets/ideas-banner-1.jpg'

const Banner = ({ imageUrl }) => {
    return (
      <div className="relative h-96 overflow-hidden">
        {/* <div className=''></div> */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10"></div>
        <img src={second} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center z-20 text-white text-center">
          <div>
            <h1 className="text-4xl font-bold">Ideas</h1>
            <p>Where all our great things begin</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white z-10" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
      </div>
    );
  };
  
  export default Banner;
  