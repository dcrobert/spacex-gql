import Image from 'next/image'

function InfoCard({ launch }) {
    return (
        <div className='rounded-lg m-2 p-3 shadow-lg'>
            <a 
              key={launch.id} 
              href={launch.links.video_link}>
                <h3 className='italic'>{launch.mission_name}</h3>
                <p><strong>Launch Date:</strong> { new Date(launch.launch_date_local).toLocaleDateString("en-US") }</p>
                {launch.links.mission_patch && (
                    <Image 
                        src={launch.links.mission_patch}
                        height='60'
                        width='60'
                        layout="fixed"
                    />
                )}
            </a>
        </div>
    )
}

export default InfoCard
