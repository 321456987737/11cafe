import React from 'react'
import HeroSection from '../../components/herosection'
import Location from '../../components/location/location'
const Page = () => {
  return (
   <>
      <HeroSection
        title="Contact us at 11.11 cafe"
        description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
        image="/backimg/6.jpg"
      />
      <Location />

      </>
  )
}

export default Page
