const ImportantDatesPage = () => {
  return (
    <div className="flex flex-col gap-y-6 mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className={"text-2xl font-bold"}>Important Dates</h2>
      <div className={'font-semibold'}>
          <p>Paper Submissions is open: <span className={'text-red-600'}>June 1, 2024</span></p>
          <p>Notification of Paper Acceptance Date starts: <span className={'text-red-600'}>September 25, 2024</span></p>
          <p>Final Camera Ready Paper Submission Date: <span className={'text-red-600'}>October 5, 2024</span></p>
          <p>Conference Date: <span className={'text-red-600'}>November 7th, and 8th, 2024</span></p>
      </div>
    </div>
  );
}

export default ImportantDatesPage;