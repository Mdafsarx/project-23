import SingleBookMark from "../singleBook/SingleBookMark";

const BookMark = () => {
    return (
        <div>
            
<div className="bg-slate-300 p-5 border-blue-800 border-2 rounded-xl">
    <h2 className="text-2xl font-bold text-[#6047EC]">Spent time on read : 177 min</h2>

</div>

<div className="bg-slate-200 p-5 my-6 rounded-xl">
    <h2 className="text-xl font-bold ">Bookmarked Blogs : 8</h2>

<div>
    <SingleBookMark/>
</div>


</div>

        </div>
    );
};

export default BookMark;