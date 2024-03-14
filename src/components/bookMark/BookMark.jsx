import SingleBookMark from "../singleBook/SingleBookMark";

const BookMark = ({bookMark,read}) => {
    return (
        <div className="w-[35%]">
            
<div className="bg-slate-300 p-5 border-blue-800 border-2 rounded-xl">
    <h2 className="text-2xl font-bold text-[#6047EC]">Spent time on read : <span>{read}</span> min</h2>

</div>

<div className="bg-slate-200 p-5 my-6 rounded-xl">
    <h2 className="text-xl font-bold ">Bookmarked Blogs : <span>{bookMark.length}</span></h2>

<div>
    {
        bookMark.map((bookM,inx)=><SingleBookMark key={inx} bookTitle={bookM.title}/>)
    }
</div>


</div>

        </div>
    );
};

export default BookMark;