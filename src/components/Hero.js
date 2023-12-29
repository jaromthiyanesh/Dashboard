import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard,faKitMedical } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div>
       <div>
            <div>
                <div className='2xl:container py-5 bg-customColor'>
                    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-8 '>


                        <div className=' bg-white flex flex-row p-8 justify-between rounded-3xl items-center h-32 '>
                            <div>
                                <h1 className='font-bold text-xl'>75,000</h1>
                                <p className='font-medium text-gray-700 text-xl'>Medical Kits</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                            <FontAwesomeIcon icon={faKitMedical} size='2x' />
                            </div>
                        </div>


                        <div className=' bg-white flex flex-row p-8 justify-between rounded-3xl items-center h-32 '>
                            <div>
                                <h1 className='font-bold text-xl'>124,551</h1>
                                <p className='font-medium text-gray-700 text-xl'>Documents Reports</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                            <FontAwesomeIcon icon= {faAddressCard} size='2x' />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
