import React from 'react'
import HeroSection from '../../components/herosection'
import OurStoryTimeline from '../../components/about/ourstory'
import MissionVision from '../../components/about/ourvisionandmission'
import TeamCarousel from '../../components/about/barista'
import Experience from "../../components/about/experience"
import Testimonials from '../../components/about/testimonials'
const Page = () => {
  return (
    <div>
       <HeroSection
        title="About 11.11 cafe"
        description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
        image="/backimg/6.jpg"
      />

      <OurStoryTimeline/>
      <MissionVision />
      <TeamCarousel />
      <Experience/>
      {/* <Testimonials /> */}
    </div>
  )
}

export default Page
