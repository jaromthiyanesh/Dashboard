import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faHeartPulse, faStethoscope, faSackDollar } from '@fortawesome/free-solid-svg-icons';

const Frontbar = () => {
    return (
        <div>
            <div>
                <div className='2xl:container py-5 pt-24 bg-customColor'>
                    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-8 '>


                        <div className=' bg-white flex flex-row p-8 justify-between rounded-3xl items-center h-32 '>
                            <div>
                                <h1 className='font-bold text-xl'>75</h1>
                                <p className='font-medium text-gray-700 text-xl'>Appointment</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <FontAwesomeIcon icon={faCalendarDays} size="2x" />
                            </div>
                        </div>




                        <div className=' bg-white flex flex-row p-8 justify-between rounded-3xl items-center h-32 '>
                            <div>
                                <h1 className='font-bold text-xl'>124,551</h1>
                                <p className='font-medium text-gray-700 text-xl'>Total Patient</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <FontAwesomeIcon icon={faHeartPulse} size="2xl" />
                            </div>
                        </div>




                        <div className=' bg-white flex flex-row p-8 justify-between rounded-3xl items-center h-32 '>
                            <div>
                                <h1 className='font-bold text-xl'>400+</h1>
                                <p className='font-medium text-gray-700 text-xl'>Total Doctor</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <FontAwesomeIcon icon={faStethoscope} size="2x" />
                            </div>
                        </div>




                        <div className=' bg-white flex flex-row p-8 justify-between rounded-3xl items-center h-32 '>
                            <div>
                                <h1 className='font-bold text-xl'>$50,000</h1>
                                <p className='font-medium text-gray-700 text-xl'>Earning</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <FontAwesomeIcon icon={faSackDollar} size="2x" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontbar
