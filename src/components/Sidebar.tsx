
import Image from 'next/image';
export default function Sidebar() {
    return <div>

        <aside className='sidebar'>
            <div>
                <Image
                    src="/valorant.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                />
            </div>
        </aside>
    </div>;
}