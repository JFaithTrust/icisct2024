const ConferenceVenuePage = () => {
    return (
        <div className="mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">Conference Venue</h1>
            <p className="mb-4">
                The ICISCT 2024 conference and tutorials will be held at KOOKMIN University, Republic of Korea.
            </p>
            <p className="mb-4">
                Address: KOOKMIN UNIVERSITY, 77 JEONGNEUNG-RO, SEONGBUK-GU, SEOUL, 02707, KOREA
            </p>
            <p className="mb-4">
                Tel :+82-2-910-5833 Fax: +82-2-910-5830
            </p>
            <div className={"flex flex-col gap-y-2"}>
                <img src="/map.jpg" className={"object-cover rounded-xl"} alt="Image"/>
                <img src="/room.jpg" className={"object-cover rounded-xl"} alt="Image"/>
            </div>
        </div>
    );
}

export default ConferenceVenuePage;