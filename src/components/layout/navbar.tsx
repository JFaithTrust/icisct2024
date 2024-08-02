'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {useRouter} from "next/navigation";

const Navbar = () => {
  const router = useRouter()

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger onClick={() => router.push('/')} className={"cursor-pointer"}>Home</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>ICISCT2024</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => router.push('/icisct2024/about')} className={"cursor-pointer"}>
            About
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/icisct2024/keynote')} className={"cursor-pointer"}>
            Keynote Speakers and Invited Talks
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/icisct2024/important-dates')} className={"cursor-pointer"}>
            Important Dates
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/icisct2024/conference-papers')} className={"cursor-pointer"}>
            Conference Papers
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/icisct2024/program-glance')} className={"cursor-pointer"}>
            Program at a Glance
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/icisct2024/conference-program')} className={"cursor-pointer"}>
            Conference Program
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/icisct2024/special-planing')} className={"cursor-pointer"}>
            Special Planning Sessions
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/icisct2024/conference-journal')} className={"cursor-pointer"}>
            Conference Journal Publications
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/icisct2024/tutorials')} className={"cursor-pointer"}>
            Tutorials
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Program</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => router.push('/program/call-contributors')} className={"cursor-pointer"}>
            Call Of Papers and Information for Contributors
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/program/information-presentors')} className={"cursor-pointer"}>
            Information for Presenters
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/program/guidelines-submission')} className={"cursor-pointer"}>
            Guidelines for Submission
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/program/guidelines-camera')} className={"cursor-pointer"}>
            Guidelines for Camera Ready
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={() => router.push('/registration')} className={"cursor-pointer"}>Registration</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Venue & Travel</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => router.push('/venue-travel/conference-vanue')} className={"cursor-pointer"}>
            Conference Venue
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/venue-travel/conference-accomidation')} className={"cursor-pointer"}>
            Conference Accommodation
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Committee</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => router.push('/committee/conference-committee')} className={"cursor-pointer"}>
            Conference Committee
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/committee/conference-sponsors')} className={"cursor-pointer"}>
            Conference Sponsors
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Contact Us</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => router.push('/contact-us/conference-contact')} className={"cursor-pointer"}>
            Conference Contact
          </MenubarItem>
          <MenubarItem onClick={() => router.push('/contact-us/visa-information')} className={"cursor-pointer"}>
            Visa Information
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Navbar