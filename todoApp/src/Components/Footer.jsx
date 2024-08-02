export default function Footer({
  completedtodos,
  totaltodos,
  inprogresstodos,
}) {
  return (
    <div className="lg:fixed sm:flex sm:flex-row sm:space-y-4  bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 text-white text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
      <div className="flex justify-between items-center lg:pr-[60%]  text-white sm:flex-row ">
        <span className="sm:flex-none sm:text-left lg:pl-[35%]">
          Completed Todos: {completedtodos}
        </span>
        <span className="sm:flex-1 lg:pl-[35%]">
          Inprogress Todos: {inprogresstodos}
        </span>
        <span className="sm:flex-none  sm:text-right lg:pl-[35%]">
          Total Todos: {totaltodos}
        </span>
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-between items-center p-4 bg-gray-800 text-white" >
<span className="flex-none">Left</span>
<span className="flex-1 text-center">Center</span>
<span className="flex-none text-right">Right</span>
</div> */
}
{
  /* <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 text-white text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8"> */
}
