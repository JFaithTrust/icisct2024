'use client'

import {useRouter} from "next/navigation";

const GuidelinesSubmissionPage = () => {
    const router = useRouter()

    return (
        <div className="mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">Paper Submission Guidelines</h1>
            <p className="mb-4">
                Authors are requested to submit electronically a PDF file paper(s) only by the following link:
                <a href="http://ICISCT2024.org/openconf/openconf.php" className="text-blue-600 hover:underline">
                    http://ICISCT2024.org/openconf/openconf.php
                </a> (Make Submission Keep Your Paper ID and Password then, Upload File) any question contact
                <a href="mailto:guy.omidyar@ieee.org" className="text-blue-600 hover:underline">
                    guy.omidyar@ieee.org
                </a>.
            </p>
            <p className="mb-4 font-semibold">
                When you use make submission thereafter you also should file means your paper using your paper ID number
                and your password. Papers should be written in English and should preferably follow the instructions in
                Templates
                <a href="https://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                   className="text-blue-600 hover:underline">
                    https://www.ieee.org/conferences_events/conferences/publishing/templates.html
                </a>.
            </p>
            <p className="mb-4">
                Elsevier publishing house will be receiving all the titles of accepted papers from ICISCT2024 conference
                for inclusion in its databases. The identification numbers, the IEEE catalog number and ISBN and ISSN
                will be assigned to ICISCT2024 accepted papers.
            </p>
            <p className="mb-4">
                Preferred maximum paper length is 5 printed pages (10-point font) including figures. IEEE ICISCT2024
                will accept papers for review up to 7 pages in length. Accepted papers that are longer than 5 pages
                could be charged an over length fee of $100 USD for 6 pages and $200 USD for 7 pages. Under no
                circumstances may any submission should exceed 7 pages. Papers in excess of 7 pages will not be
                considered for review or publication, unless otherwise there will be special request from author(s). The
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                cover page is not included in the page count, do not use cover page. The title of the paper, author's
                name, affiliation, complete return address, telephone number and e-mail address should appear at the top
                of the first page under author(s) name followed by an abstract with a maximum of 100 words. Authors must
                state that their paper has neither been published before nor currently being submitted elsewhere.
                <span className="font-semibold">The language of the conference is English and papers must be in English language.</span> Accepted
                papers will be published in the conference&apos;s proceedings and/or CD-ROMs and the publication will be
                submitted for inclusion in IEEE Xplore<sup>TM</sup>. Selected papers could also be published in a
                journal if there are enough good papers in a special topics. Please note that final submission of
                accepted papers must be in accordance to IEEE publisher&apos;s formatting standards
                <a href="https://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                   className="text-blue-600 hover:underline">
                    https://www.ieee.org/conferences_events/conferences/publishing/templates.html
                </a>. Along with publication in IEEE Xplore, IEEE assures wide distribution of conference proceedings by
                providing abstracting and indexing information of all individual conference papers to worldwide
                databases. IEEE makes every reasonable attempt to ensure that abstracts and index entries of content
                accepted into the program are included in databases provided by independent abstracting and indexing
                services. Each abstracting and indexing partner makes its own editorial decision on what content to
                include. IEEE cannot guarantee entries are included in any particular database.
            </p>
            <p className="mb-4">
                The IEEE PDF eXpress Site is arranged for you to check if your paper is in accordance with IEEE format.
            </p>

            <div className="flex items-center mb-4">
                <img src="/PDFeXpress_mainNew.gif" alt="IEEE PDF eXpress Logo" className="w-24 h-24 mr-4"/>
                <div>
                    <h2 className="text-xl font-bold">IEEE PDF eXpress</h2>
                    <p>Site opens: 2024-08-01</p>
                    <p>Submission deadline: 2024-09-01</p>
                    <p>Site support is maintained via 24 hour online help (
                        <a href="mailto:PDFSupport@ieee.org" className="text-blue-600 hover:underline">
                            PDFSupport@ieee.org
                        </a>).
                    </p>
                </div>
            </div>

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
                        </a>.
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
        </div>
    )
        ;
}

export default GuidelinesSubmissionPage;