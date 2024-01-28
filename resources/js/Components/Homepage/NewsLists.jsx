const isNews = (news) => {
    return news.map((data, i) => {
        const randomImageNumber = Math.floor(Math.random() * 100) + 1;
        const imageUrl = `https://picsum.photos/seed/${randomImageNumber}/800/600`;
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={imageUrl} alt="News" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">
                            {data.username}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return (
        <div className="flex justify-center items-center text-2xl mt-40">
            <p>Saat ini belum ada berita tersedia</p>
        </div>
    );
};
const NewsLists = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsLists;
