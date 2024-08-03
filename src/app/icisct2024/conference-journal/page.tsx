'use client'

import {useRouter} from "next/navigation";

const ConferenceJournalPage = () => {
    const router = useRouter();

  return (
    <div className={"flex flex-col gap-y-4 mx-auto p-6 bg-white shadow-md rounded-md"}>
      <h2 className={'font-bold text-2xl'}>Conference Journal Publication</h2>
      <div className={'flex flex-col gap-y-2 font-medium'}>
          <p className={'text-justify'}>
              Selected papers will be published as a special issue of the <span className={'text-blue-600'}>
              International Journal of Information and Communication Technology
          </span> and or other topics of the journal, if there are enough good papers to include.<br/>
              <span onClick={() => router.push('http://www.inderscience.com/jhome.php?jcode=ijict')} className={'text-blue-600 hover:underline cursor-pointer'}>http://www.inderscience.com/jhome.php?jcode=ijict</span>
          </p>
          <span>
              You can contact Editor in Chief of International Journal of Information and Communication Technology: Prof. Srikanta Patnaik
          </span>
      </div>
    </div>
  );
}

export default ConferenceJournalPage;