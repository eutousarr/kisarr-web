import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-screen">
        <div className="w-full h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
        {/* <div className="w-full h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div> */}
      </div>
      <div className="relative z-10 flex items-center justify-center bg-black bg-opacity-50 h-full">
        <div className="text-center text-white flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold md:text-6xl">Kis@rr-<span className='text-orange-500'>Web</span></h1>
          <p className="mt-4 text-xl md:text-2xl"></p>
          <Link href="/sign-in">
            <button className=" bg-orange-500 hover:bg-orange-600 text-white rounded-md p-3">
              Commencer l'aventure
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
