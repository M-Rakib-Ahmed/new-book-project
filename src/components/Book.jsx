
const Book = ({book}) => {
   const {image, bookName, author}=book;
    
    return (
        <div>
            <div className="card bg-base-100  shadow-sm p-7">
                <figure>
                    <img className="h-[200px] w-[150px]"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Book;