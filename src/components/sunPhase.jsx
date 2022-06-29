

const SunPhase = () => {
    return ( <div className="flex flex-row pt-60">
       
            <div className="relative top-0 right-90%">
            <p className='text-2xl text-color text-[#FFFFFF] font-sans'> Sun Phase</p>
            <p className='text-2xl text-color text-[#72A0A0] font-sans'>Current Time:	12 Jun 2022, 23:15:09<br/>
               Moon Phase Tonight:	Waxing Gibbous<br/>
               Full Moon:	14 Jun 2022, 14:51 (Next Phase)<br/>
               First Quarter:	7 Jun 2022, 17:48 (Previous Phase)<br/>
               </p>
            </div> 

            <div className='md:flex md:justify-between  pt-5 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="101.933" height="101.933" viewBox="0 0 101.933 101.933">
  <g id="Group_15" data-name="Group 15" transform="translate(-1773.216 -896.549)">
    <circle id="Ellipse_2" data-name="Ellipse 2" cx="31.854" cy="31.854" r="31.854" transform="translate(1792.328 915.662)" fill="#ff9f1c"/>
    <rect id="Rectangle_12" data-name="Rectangle 12" width="3.185" height="14.334" rx="1" transform="translate(1822.589 896.549)" fill="#ff9f1c"/>
    <rect id="Rectangle_13" data-name="Rectangle 13" width="3.185" height="14.334" rx="1" transform="translate(1859.095 910.351) rotate(45)" fill="#ff9f1c"/>
    <rect id="Rectangle_14" data-name="Rectangle 14" width="3.185" height="14.334" rx="1" transform="translate(1875.149 945.923) rotate(90)" fill="#ff9f1c"/>
    <rect id="Rectangle_15" data-name="Rectangle 15" width="3.185" height="14.334" rx="1" transform="translate(1861.347 982.429) rotate(135)" fill="#ff9f1c"/>
    <rect id="Rectangle_16" data-name="Rectangle 16" width="3.185" height="14.334" rx="1" transform="translate(1825.775 998.483) rotate(180)" fill="#ff9f1c"/>
    <rect id="Rectangle_17" data-name="Rectangle 17" width="3.185" height="14.334" rx="1" transform="translate(1789.27 984.681) rotate(-135)" fill="#ff9f1c"/>
    <rect id="Rectangle_18" data-name="Rectangle 18" width="3.185" height="14.334" rx="1" transform="translate(1773.216 949.109) rotate(-90)" fill="#ff9f1c"/>
    <rect id="Rectangle_19" data-name="Rectangle 19" width="3.185" height="14.334" rx="1" transform="translate(1787.017 912.603) rotate(-45)" fill="#ff9f1c"/>
  </g>
</svg>

            </div>
    </div> );
}
 
export default SunPhase;