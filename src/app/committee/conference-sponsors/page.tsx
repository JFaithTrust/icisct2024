const ConferenceSponsorsPage = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold">Conference Sponsors</h1>
      <span>ICISCT2024 conference is co-organized by Kookmin University, Republic of Korea and the conference is technically co-sponsored by Uzbekistan regional IEEE Communications society chapter and Ministry of digital technologies of the republic of Uzbekistan and Tashkent University of Information Technologies TUIT</span>
      <div className={"flex flex-col gap-y-2"}>
        <div>
          <h2 className="font-bold">Organizers and co-organizers and Technically Sponsored</h2>
          <div className={"flex gap-4 items-center"}>
            <img src="/TUIT_LOGO.png" alt="Image"/>
            <img src="/ieee.gif" alt="Image"/>
            <img src="/image002.jpg" alt="Image"/>
            <img src="/DT_LOGO.2.png" alt="Image"/>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Technical-sponsors</h2>
          <div className={"flex gap-4 items-center"}>
            <img src="/ieeeps.png" alt="Image"/>
            <img src="/ssu.gif" alt="Image"/>
            <img src="/ieee_rss_blue_png2.jpg" alt="Image"/>
            <img src="/region8.png" alt="Image"/>
            <img src="/ieee.gif" alt="Image"/>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Supported By</h2>
          <div className={"flex gap-4 items-center"}>
            <img src="/KISA2.jpg" alt="Image"/>
            <img src="/logo_koica_2.jpg" alt="Image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConferenceSponsorsPage;