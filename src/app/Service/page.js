
import React from 'react'

export const metadata = {
  title: "Service ChannelConnectPRO",
  description: "Explore ChannelConnectPRO's comprehensive range of services, including high-speed internet and dependable cable solutions. Find the perfect package to meet your connectivity needs.",
};



const page = () => {
  return (
  <>
    <div className="mainheading">
    <h2>Services</h2>
    </div>
    <div className="about-intro">ChannelConnectPro offers the worlds best internet and cable services with unbeatable deals.
       Experience top-notch connectivity and endless entertainment today!
    </div>
    <div className="top-services">
      <div className="cableTv">
        <img src="/cableTV1.png"  width={200} height={200} alt='cableTV'/>
        <h2>Cable TV</h2>
      </div>
      <div className="internet">
      <img src="/internet.png"  width={200} height={200} alt='internet'/>
        <h2>Internet</h2></div>
      <div className="stream-box">
      <img src="/stream.png"  width={200} height={200} alt='StreamBox'/>
        <h2>Stream Box</h2>
      </div>
      <div className="satellite">
      <img src="/satellte.png"  width={200} height={200} alt='satellite'/>
        <h2>Satellite</h2>
      </div>
      <div className="bundledeals">
      <img src="/gift.png"  width={200} height={200} alt='bumdleDeals'/>
        <h2>Bundle Deals</h2>
      </div>
    </div>
  </>
  )
}

export default page