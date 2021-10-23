function Footer() {
    return (
        <footer className='flex flex-col justify-content items-center top-0 z-50 bg-black p-5 md:px-10'>
            <h1 className='text-xs text-gray-500'>SpaceX 2021</h1>
            <div className='grid grid-cols-6 ml-10 mr-10 mt-2 mb-10'>
                <div className='text-xs text-white'>
                    <p>TWITTER</p>
                </div>
                <div className='text-xs text-white'>
                    <p>YOUTUBE</p>
                </div>
                <div className='text-xs text-white'>
                    <p>INSTAGRAM</p>
                </div>
                <div className='text-xs text-white'>
                    <p>FLICKR</p>
                </div>
                <div className='text-xs text-white'>
                    <p>LINKEDIN</p>
                </div>
                <div className='text-xs text-white'>
                    <p>PRIVACY POLICY</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
