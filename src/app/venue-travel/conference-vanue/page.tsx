const ConferenceVenuePage = () => {
  return (
    <div>
      Conference Venue


      The ICISCT 2024 conference and tutorials will be held at KOOKMIN University, Republic of Korea.
      Address: KOOKMIN UNIVERSITY, 77 JEONGNEUNG-RO, SEONGBUK-GU, SEOUL, 02707, KOREA

      Tel :+82-2-910-5833 Fax: +82-2-910-5830
      <div className={"flex flex-col gap-y-2"}>
        <img src="/map.jpg" alt="" className={"object-cover rounded-l-lg"} />
        <img src="/room.jpg" className={"object-cover rounded-l-lg"} alt="" />
      </div>
    </div>
  );
}

export default ConferenceVenuePage;