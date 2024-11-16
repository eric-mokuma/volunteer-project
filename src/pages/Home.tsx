export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-black mb-4">
        Welcome to Our Website!
      </h1>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <button
          className="btn-blue rounded-t-lg"
          onClick={() => {
            /* Add navigation logic here */
          }}
        >
          <img src="/home.webp" alt="" />
        </button>
        <div className="p-5">
          <button
            className="btn-blue text-left mb-2 text-2xl font-bold tracking-tight dark:text-white"
            onClick={() => {
              /* Add navigation logic here */
            }}
          >
            Noteworthy technology acquisitions 2021
          </button>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            className="btn-blue inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            href="/about"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
