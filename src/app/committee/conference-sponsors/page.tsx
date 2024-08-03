const ConferenceSponsorsPage = () => {
  return (
      <div>
        <div className="mx-auto bg-white px-4 py-8 shadow-md rounded-md">
          <h1 className="text-3xl font-bold text-center mb-10">Conference Sponsors</h1>

          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-6">Organizers and Co-organizers and Technically Sponsored</h2>
            <div className="flex flex-wrap items-center gap-4">
              <img src="/TUIT_LOGO.png" alt="Tashkent University" className="h-24"/>
              <img src="/KOOKMIN%20uni.gif" alt="Kookmin University" className="h-24"/>
              <img src="/image002.jpg" alt="IEEE Communications Society Uzbekistan Chapter"
                   className="h-24"/>
              <img src="/DT_LOGO.2.png" alt="Ministry of Digital Technologies of Uzbekistan"
                   className="h-24"/>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-6">Technical Sponsors</h2>
            <div className="flex flex-wrap items-center gap-4">
              <img src="/ieeeps.png" alt="IEEE Photonics Society" className="h-24"/>
              <img src="/ssu.gif"
                   alt="Siberian State University of Telecommunications and Information Science" className="h-24"/>
              <img src="/ieee_rss_blue_png2.jpg" alt="IEEE Russia Siberia Section" className="h-24"/>
              <img src="/region8.png" alt="IEEE Russia Siberia Section" className="h-24"/>
              <img src="/ieee.gif" alt="IEEE Russia Siberia Section" className="h-24"/>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-6">Supported By</h2>
            <div className="flex flex-wrap items-center gap-4">
              <img src="/KISA2.jpg" alt="Korea Internet & Security Agency"
                   className="h-24"/>
              <img src="/logo_koica_2.jpg" alt="KISA" className="h-24"/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ConferenceSponsorsPage;