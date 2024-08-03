'use client'

import {useRouter} from "next/navigation";

const GuidelinesCameraPage = () => {
    const router = useRouter()

  return (
      <div className={'shadow-md rounded-md p-6 bg-white'}>
          <h2 className={'font-bold text-2xl mb-4'}>Guidelines for Camera Ready Submission</h2>
          <p>
              Authors are requested to submit electronically your final Camera ready Paper in PDF file only to the
              following link. </p>
          <span>http://icisct2022.org/openconf/openconf.php</span>
          <ol className={"text-sm list-decimal pl-4"}>
              <li>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Click on upload file, fill the field "Paper ID",
              </li>

              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <li> Fill the field "Password",
              </li>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <li>Click on "Browse" button to choose the PDF file of your final camera ready paper for
                  publication, <em className={'font-semibold'}>no front page, no footnote on the first page, double
                      column
                      include the abstract of your paper. </em>
              </li>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <li>Click on "Upload Paper" button to achieve the uploading process of your final version of your paper.<em
                  className={'font-semibold'}>
                  It replaces your old version with your new version on its entirety.</em>
              </li>
          </ol>
          <p className={'font-semibold my-4'}>The IEEE PDF eXpress Site is arranged for you to check only if your
              paper is in accordance with IEEE format.
          </p>
          <img src={'/PDFeXpress_mainNew.gif'} alt={'IEEE PDF eXpress Site'} className={'mb-4'}/>
          <span>Full Publication Title: <b>2024 International Conference on Information Science and Communications Technologies (ICISCT)</b></span>
          <span>IEEE PDF eXpress Site Dates</span><br/>
          <span>Site opens: <b>2024-09-xx</b></span><br/>
          <span>Submission deadline: <b>2024-10-xx</b></span><br/>
          <span>Site support is maintained via 24 hour online help (PDFSupport@ieee.org).</span>

          <div className="">
              <h1 className="text-2xl font-bold mb-4">
                  2024 International Conference on Information Science and Communications Technologies (ICISCT)
              </h1>

              <section className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Log in to the IEEE PDF eXpress<sup>TM</sup> site</h2>
                  <p>
                      <a href="http://www.pdf-express.org" className="text-blue-600 hover:underline">
                          http://www.pdf-express.org
                      </a>
                  </p>
              </section>

              <section className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Creating your PDF eXpress Account</h2>
                  <ol className="list-decimal list-inside mb-2">
                      <li>
                          Select the New Users -{' '}
                          <a href="http://www.pdf-express.org" className="text-blue-600 hover:underline">
                              Click Here link
                          </a>
                          .
                      </li>
                      <li>Enter the following:</li>
                      <ul className="list-disc list-inside ml-6 mb-2">
                          <li>xxxxxx for the Conference ID</li>
                          <li>your email address</li>
                          <li>a password</li>
                      </ul>
                      <li>Continue to enter information as prompted.</li>
                  </ol>
                  <p>
                      An online confirmation will be displayed and an email confirmation will be sent verifying your
                      account setup.
                      Previous users of PDF eXpress need to follow the above steps, but should enter the same password
                      that was used
                      for previous conferences. Verify that your contact information is valid.
                  </p>
              </section>

              <section className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Contacting PDF eXpress Support</h2>
                  <p>
                      Access the Publications Support Center for IEEE PDF eXpress.{' '}
                      <a
                          href="http://ieee.custhelp.com/app/answers/list/p/12"
                          className="text-blue-600 hover:underline"
                      >
                          http://ieee.custhelp.com/app/answers/list/p/12
                      </a>
                  </p>
                  <p>
                      Site support is maintained via 24-hour online help ({' '}
                      <a href="mailto:PDFSupport@ieee.org" className="text-blue-600 hover:underline">
                          PDFSupport@ieee.org
                      </a>{' '}
                      )
                  </p>
              </section>

              <section className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Publication and Copyright Form</h2>
                  <p>
                      This will allow you to convert your Word, LaTeX, or range of other source files into IEEE Xplore<sup>TM</sup>
                      compatible files. IEEE will send you information on how and where to log in to sign in for
                      copyrights.
                  </p>
              </section>

              <section className="mb-6 text-red-600">
                  <h2 className="text-xl font-semibold mb-2">Critical Information</h2>
                  <p>
                      At least one author per paper <span className="font-bold">MUST REGISTER FOR THE ICISCT 2024 CONFERENCE</span>.
                      If this is not done, your paper could be removed from publication. Please discuss paper
                      acceptance with each
                      other and your co-authors and your advisor/organization, if any, to be certain that at least one
                      of you has
                      registered. You may register by credit cards online for ICISCT 2024 conference: {' '}
                      <a
                          href="http://icisct2024.org/regPage2024.php"
                          className="text-blue-600 hover:underline"
                      >
                          http://icisct2024.org/regPage2024.php
                      </a>
                      , any question or problem regarding registration please send an Email to: {' '}
                      <a
                          href="mailto:Guy.Omidyar@IEEE.org"
                          className="text-blue-600 hover:underline"
                      >
                          Guy.Omidyar@IEEE.org
                      </a>
                      .
                  </p>
              </section>
          </div>
      </div>
  );
}

export default GuidelinesCameraPage;