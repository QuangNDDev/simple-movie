function Banner() {
  return (
    <section className="banner h-[500px] page-container mb-20">
      <div className="w-full h-full rounded-lg relative">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
        <img
          src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/hinh-nen-luffy-gear-5-1.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
        <div className="absolute left-5 bottom-5 w-full text-white mb-5">
          <h2 className="font-bold text-3xl mb-5">ONE PIECE</h2>
          <div className="flex items-center gap-x-3 mb-5">
            <span className="px-4 py-2 border border-white rounded-md">
              Anime
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Action
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Comedy
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Adventure
            </span>
          </div>
          <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
