'use client'

import {useRouter} from "next/navigation";

const InformationPresentorsPage = () => {
    const router = useRouter()

    return (
        <div className={'mx-auto p-6 bg-white shadow-md rounded-md'}>
            <h2 className={'font-bold text-2xl mb-4'}>Information for Presenters</h2>

            <p className={'text-lg font-medium mb-2'}>Oral Presentation Guidelines</p>
            <p className={'text-justify'}>
                Presenters must be at the designated room of your session 15 minutes before it begins, so that you can
                meet
                your session chair and the other speakers in advance.

                It is most important to be within strict time constraints to allow the presentation to fit within the
                allotted
                time period. However, if needed, the session chairman will ensure that these time limits are strictly
                observed. Each paper has an estimated time slot of 15 to 20 minutes for presentation, and an additional
                5
                minutes for questions and answers.
                <br/>
                <br/>

                LCD projectors, as well as laptops, will be available in all oral presentation conference rooms. Other
                equipment will be provided at the presenter expenses if a request is being made. Please kindly forward
                any
                such request to the organizing chair of the conference, Prof. Dr. Guy Omidyar <span
                onClick={() => router.push('guy.omidyar@ieee.org')}
                className={'text-blue-600 hover:underline cursor-pointer'}>guy.omidyar@ieee.org</span>
                <br/>
                <br/>

                Presenters should bring their compatible presentation files (PPS, PPT, PDF)stored in a USB storage
                device or a
                disc/CD/DVD. Presenters are kindly requested to upload their files into the laptop at least 15 minutes
                before
                the start of the session, if you do not bring your own laptop. Presenters are also kindly requested to
                test
                the functionality of the presentation before the beginning of the session.
            </p>
        </div>
    );
}

export default InformationPresentorsPage;