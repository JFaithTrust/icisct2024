'use client'

import {useRouter} from "next/navigation";

const AboutPage = () => {

    const router = useRouter()

    return (
        <div className={"flex flex-col gap-y-2 mx-auto p-6 bg-white shadow-md rounded-md"}>
            <h1 className={"font-semibold text-xl text-center"}>International Conference on Information Science and
                Communications Technologies ICISCT 2024
                Applications, Trends and Opportunities</h1>
            <p className={"text-blue-600 font-medium text-center"}>
                7th, 8th of November 2024, at Kookmin University, Republic of Korea
                Conference Venue @ Kookmin University, Republic of Korea, Kookmin University Campus
            </p>
            <p className={"text-justify"}>The 2024 IEEE and IFIP International Conference in central Asia on <span
                className={"text-blue-600"}>Information Science and Communications Technologies ICISCT 2024</span> invites
                high-quality recent research results in the areas of Home and Health networking, Electronic commerce,
                Mobility and Mobile Payment, Broadband access, satellite services, 5G in rural communications, cloud
                computing, Smart grids, Big data analysis, Cyber security, Internet-of-Things IOT, Mobile and Wireless
                Communications, optical communications and networking, architectures, protocols, planning and design,
                management and operation, simulation and performance modeling. ICISCT2024 conference is the application
                of the next generation of information and communications technologies on Education, Telemedicine,
                Finance and Economy, Social Science, Business and Government. ICISCT2024 seeks to address and capture
                highly innovative and state of the art research and work in the area of information and communications
                technologies including wireless and Optical communications networks. The Authors can present their
                finding on wireless quality of service, resource management, Ad Hoc and sensor networks. Radio interface
                design, adaptive antennas and arrays and indoor propagation, measurement and predictions. ICISCT2024 is
                seeking papers in the area: Photonic devices and integration, Optoelectronic integration including
                devices and materials, Optical networks and transmission systems, Novel fibers and fiber-based devices,
                Transmission systems and networks, Photonics sensors and sensor networks, Microwave photonics and
                optical signal processing. Information science papers include knowledge that provides theoretical basis
                for information technology. It includes computer science, library science, artificial intelligence,
                mathematical programming, and theory of problem solving. The main goal of the conference is to bring
                together scientists and engineers who work and teach in these specialized fields to submit papers and
                come together in this geographical location. ICISCT 2024 is sponsored and organized by Kookmin
                University, Republic of Korea, and IEEE Uzbekistan Regional Chapter and Tashkent University of
                Information Technologies TUIT and Technically is Sponsored by IEEE and IEEE Photonics Society
                https://www.photonicssociety.org .
            </p>
            <span className={"text-justify"}>It is technically co-sponsored by Uzbekistan regional IEEE Communications society chapterand Ministry of Digital Technologies and the Communication, Informatization and Telecommunication Technologies of the Republic of Uzbekistan.</span>
            <div className={"flex flex-col gap-y-2"}>
                <div className={"flex flex-col gap-y-2"}>
                    <span className={"font-bold"}>Below photo of ICISCT 2022 conference.</span>
                    <img src="/ICISCT-2022_1.jpg" className={"object-cover rounded-xl"} alt="Image"/>
                </div>
                <div className={"flex flex-col gap-y-2"}>
                    <span className={"font-bold"}>Below photo of ICISCT 2019 conference.</span>
                    <img src="/photo2019.jpg" className={"object-cover rounded-xl"} alt="Image"/>
                </div>
            </div>
            <div className={'flex flex-col gap-y-1.5'}>
                <p className={"font-semibold text-sm"}>
                    The link to ICISCT 2022 conference video:<br/>
                    <span
                        onClick={() => router.push('https://drive.google.com/file/d/1KUwt2Oms4QbCc-k8_2dI7G9Ozkt-7vKa/view')}
                        className={"text-blue-600 cursor-pointer hover:underline"}>https://drive.google.com/file/d/1KUwt2Oms4QbCc-k8_2dI7G9Ozkt-7vKa/view
                </span>
                </p>
                <p className={"font-semibold text-sm"}>
                    The link to ICISCT 2019 conference video:<br/>
                    <span
                        onClick={() => router.push('https://www.youtube.com/watch?v=zAlgRCCy6m0.php')}
                        className={"text-blue-600 cursor-pointer hover:underline"}>https://www.youtube.com/watch?v=zAlgRCCy6m0.php
                </span>
                </p>
                <p className={"font-semibold text-sm"}>
                    The link to first IEEE conference ICI2006 conference video:<br/>
                    <span
                        onClick={() => router.push('https://www.youtube.com/watch?v=gTc7yznt5Ao.php')}
                        className={"text-blue-600 cursor-pointer hover:underline"}>https://www.youtube.com/watch?v=gTc7yznt5Ao.php
                </span>
                </p>
            </div>
            <div className={"flex gap-4 items-center mt-4"}>
                <img src="/TUIT_LOGO.png" alt="Image"/>
                <img src="/ieee.gif" alt="Image"/>
                <img src="/image002.jpg" alt="Image"/>
                <img src="/DT_LOGO.2.png" alt="Image"/>
            </div>
        </div>
    )
}

export default AboutPage