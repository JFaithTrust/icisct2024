import Image from "next/image";
import {AspectRatio} from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-2">
      <AspectRatio ratio={16 / 9}>
        <Image src="/home.png" fill alt="Image" className="rounded-md object-cover"/>
      </AspectRatio>
      <h1 className={"text-lg font-semibold text-center"}>
        International Conference on Information Science and Communications Technologies - Applications, Trends and
        Opportunities</h1>
      <p>
        <span
          className={"text-blue-600 hover:underline cursor-pointer"}>http://icisct2024.org/openconf/openconf.php </span>
        Paper submission is open</p>
      <span className={"text-justify"}>ICISCT 2024 conference is co-organized by Kookmin University of Republic of Korea, and is Sponsored technically by IEEE and IEEE Photonics Society.
        Accepted papers will be submitted for inclusion in Engineering Index (EI) and EI Compendex and Scopus and IEEE XploreTM. ISBN numbers was assigned to accepted papers</span>
      <span className={"font-semibold text-blue-600"}>
        XPLORE COMPLIANT:<br/>
        Part Number: CFP24H74-ART <br/>
        ISBN: 979-8-3315-2792-1<br/>
      </span>
      <span className={"text-justify font-semibold"}>
        International Conference on Information Science and Communications Technologies ICISCT 2024 Applications,
        Trends and Opportunities
        7th, and 8th of November 2024, Kookmin University, Republic of Korea
        at Kookmin University, South Korea Conference Venue @ Kookmin University, Republic of Korea<br/>
        Accepted papers will be published in the conference&apos;s proceedings and/or <br/>
        USB: Part Number: CFP24H74-USB , ISBN: 979-8-3315-2791-4.
      </span>
      <div className={"flex gap-4 items-center"}>
        <img src="/TUIT_LOGO.png" className={"w-24"} alt="Image"/>
        <img src="/DT_LOGO.2.png" alt="Image"/>
        <img src="/KOOKMIN%20uni.gif" className={"w-60"} alt="Image"/>
        <img src="/ieeeps.png" className={"w-44"} alt="Image"/>
        <img src="/ieee.gif" className={"w-24"} alt="Image"/>
      </div>
    </main>
  );
}
