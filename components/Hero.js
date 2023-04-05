import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='mt-16 p-5 font-poppins'>
            <div className='mx-40'>
                <h1 className='text-7xl font-bold w-fit '>Hunting Coder</h1>

                <div className='blogs mt-20 flex flex-col '>
                    <div className='primary_blog flex flex-row space-x-10  w-3/4 '>
                        <Image className='h-[300px] w-[850px] rounded-lg shadow-lg' src='/images/homeimg.avif' height={100} width={500}/>
                        {/* <div className='w-full bg-pink-500 rounded-lg'></div> */}
                        <div className="space-y-5 w-1/3  h-fit">
                            <h2 className='w-fit text-3xl leading-10 font-bold font-sans'>Read about Coding topics</h2>
                            <p className='text-xs text-justify  text-gray-500'>Lorem ipsum, dolor sit am sfnsenf oisenf oiesnoseinf oseinfoineet consectetur adipisicing elit. Quae sunt voluptatum, tenetur hic sapiente vitae quaerat amet magnam dolorem maxime saepe esse fuga ipsam, incidunt, tempora laudantium expedita nihil aliquid.</p>
                            
                        </div>
                    </div>

                    <div className='secondary_blogs grid grid-cols-4 mt-20 gap-5 gap-y-10'>
                        <div className='space-y-5'>
                            <div className='h-[200px] w-80 bg-purple-500 rounded-lg shadow-lg'></div>
                            <div className='px-2 space-y-2'>
                                <h2 className='text-xl font-semibold font-poppins'>Title</h2>
                                <p className='text-xs text-justify  text-gray-500'>Lorem ipsum, dolor sit am sfnsenf oisenf oiesnoseinf oseinfoineet consectetur adipisicing elit. Quae sunt voluptatum, tenetur hic sapiente vitae quaerat amet magnam dolorem maxime saepe esse fuga ipsam, incidunt, tempora laudantium expedita nihil aliquid.</p>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <div className='h-[200px] w-80 bg-purple-500 rounded-lg shadow-lg'></div>
                            <div className='px-2 space-y-2'>
                                <h2 className='text-xl font-semibold font-poppins'>Title</h2>
                                <p className='text-xs text-justify  text-gray-500'>Lorem ipsum, dolor sit am sfnsenf oisenf oiesnoseinf oseinfoineet consectetur adipisicing elit. Quae sunt voluptatum, tenetur hic sapiente vitae quaerat amet magnam dolorem maxime saepe esse fuga ipsam, incidunt, tempora laudantium expedita nihil aliquid.</p>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <div className='h-[200px] w-80 bg-purple-500 rounded-lg shadow-lg'></div>
                            <div className='px-2 space-y-2'>
                                <h2 className='text-xl font-semibold font-poppins'>Title</h2>
                                <p className='text-xs text-justify  text-gray-500'>Lorem ipsum, dolor sit am sfnsenf oisenf oiesnoseinf oseinfoineet consectetur adipisicing elit. Quae sunt voluptatum, tenetur hic sapiente vitae quaerat amet magnam dolorem maxime saepe esse fuga ipsam, incidunt, tempora laudantium expedita nihil aliquid.</p>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <div className='h-[200px] w-80 bg-purple-500 rounded-lg shadow-lg'></div>
                            <div className='px-2 space-y-2'>
                                <h2 className='text-xl font-semibold font-poppins'>Title</h2>
                                <p className='text-xs text-justify  text-gray-500'>Lorem ipsum, dolor sit am sfnsenf oisenf oiesnoseinf oseinfoineet consectetur adipisicing elit. Quae sunt voluptatum, tenetur hic sapiente vitae quaerat amet magnam dolorem maxime saepe esse fuga ipsam, incidunt, tempora laudantium expedita nihil aliquid.</p>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <div className='h-[200px] w-80 bg-purple-500 rounded-lg shadow-lg'></div>
                            <div className='px-2 space-y-2'>
                                <h2 className='text-xl font-semibold font-poppins'>Title</h2>
                                <p className='text-xs text-justify  text-gray-500'>Lorem ipsum, dolor sit am sfnsenf oisenf oiesnoseinf oseinfoineet consectetur adipisicing elit. Quae sunt voluptatum, tenetur hic sapiente vitae quaerat amet magnam dolorem maxime saepe esse fuga ipsam, incidunt, tempora laudantium expedita nihil aliquid.</p>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <div className='h-[200px] w-80 bg-purple-500 rounded-lg shadow-lg'></div>
                            <div className='px-2 space-y-2'>
                                <h2 className='text-xl font-semibold font-poppins'>Title</h2>
                                <p className='text-xs text-justify  text-gray-500'>Lorem ipsum, dolor sit am sfnsenf oisenf oiesnoseinf oseinfoineet consectetur adipisicing elit. Quae sunt voluptatum, tenetur hic sapiente vitae quaerat amet magnam dolorem maxime saepe esse fuga ipsam, incidunt, tempora laudantium expedita nihil aliquid.</p>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <div className='h-[200px] w-80 bg-purple-500 rounded-lg shadow-lg'></div>
                            <div className='px-2 space-y-2'>
                                <h2 className='text-xl font-semibold font-poppins'>Title</h2>
                                <p className='text-xs text-justify  text-gray-500'>Lorem ipsum, dolor sit am sfnsenf oisenf oiesnoseinf oseinfoineet consectetur adipisicing elit. Quae sunt voluptatum, tenetur hic sapiente vitae quaerat amet magnam dolorem maxime saepe esse fuga ipsam, incidunt, tempora laudantium expedita nihil aliquid.</p>
                            </div>
                        </div>
                        
                          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero