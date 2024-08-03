import Head from "next/head";

const ConferenceContactPage = () => {

  return (
      <div>
          <div className="mx-auto p-4">
              <h1 className="text-3xl font-bold text-center mb-8">Conference Contacts</h1>

              <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Professor Dr. Myungkeun Yoon, Kookmin University, Republic
                      of Korea</h2>
                  <p><strong>Name:</strong> Dr. Prof. Han, Yoon</p>
                  <p><strong>Address:</strong> Graduate School of Business IT, 77 Jeongneung-ro, Seongbuk-gu, Seoul
                      02707, Republic of Korea</p>
                  <p><strong>Phone:</strong> +82-2-910-5472</p>
                  <p><strong>Email:</strong> <a href="mailto:yoonhan@kookmin.ac.kr"
                                                className="text-blue-500 underline">yoonhan@kookmin.ac.kr</a></p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Professor Dr. Ahn, Hyunchul</h2>
                  <p><strong>Name:</strong> Dr. Prof. Ahn, Hyunchul</p>
                  <p><strong>Address:</strong> Graduate School of Business IT, 77 Jeongneung-ro, Seongbuk-gu, Seoul
                      02707, Republic of Korea</p>
                  <p><strong>Phone:</strong> +82-2-910-4577</p>
                  <p><strong>Email:</strong> <a href="mailto:hcahn@kookmin.ac.kr"
                                                className="text-blue-500 underline">hcahn@kookmin.ac.kr</a></p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Head of International Department, Dr. Ibrohimbek
                      Yusupov</h2>
                  <p><strong>Name:</strong> Dr. Ibrohimbek Yusupov</p>
                  <p><strong>Address:</strong> 108, Amir Temur Str., Tashkent, Uzbekistan. TUIT, building C.</p>
                  <p><strong>Phone:</strong> +998 71 2350900</p>
                  <p><strong>Email:</strong> <a href="mailto:interdep@tuit.uz"
                                                className="text-blue-500 underline">interdep@tuit.uz</a></p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">General Chair, Prof. Dr. Guy Omidyar</h2>
                  <p><strong>Name:</strong> Prof. Dr. Guy Omidyar</p>
                  <p><strong>Address:</strong> Not Provided</p>
                  <p><strong>Phone:</strong> Not Provided</p>
                  <p><strong>Email:</strong> <a href="mailto:Guy.Omidyar@ieee.org"
                                                className="text-blue-500 underline">Guy.Omidyar@ieee.org</a></p>
              </div>

          </div>
      </div>
  )
}

export default ConferenceContactPage