export default function Footer({
  completedtodos,
  totaltodos,
  inprogresstodos,
}) {
  return (
    <div className="fixed bottom-0 bg-gradient-to-r from-blue-900 text-white text-center font-bold min-w-full text-xl p-5 max-full">
      <span className="m-20">Completed Todos:{completedtodos}</span>
      <span className="m-20">Inprogress Todos:{inprogresstodos}</span>
      <span className="m-20">Total Todos:{totaltodos}</span>
    </div>
  );
}
