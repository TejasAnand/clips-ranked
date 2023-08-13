import Link from 'next/link';
import Image from 'next/image';


const sidebarItems = [
    {
        name: 'Valorant',
        href: "/valorant",
        img: <Image src="/valorant.jpg" alt="logo" width={200} height={200} className="sidebar_logo" />,
    },
    {
        name: 'League of Legends',
        href: "/leagueoflegends",
        img: <Image src="/leagueoflegends.jpg" alt="logo" width={200} height={200} className="sidebar_logo" />,
    },
    {
        name: 'Counter Strike',
        href: "/counterstrike",
        img: <Image src="/counterstrike.jpg" alt="logo" width={200} height={200} className="sidebar_logo" />,
    },
    {
        name: 'Fortnite',
        href: "/fortnite",
        img: <Image src="/forntite.jpg" alt="logo" width={200} height={200} className="sidebar_logo" />,
    },];
export default function Sidebar() {
    return <div>

        <aside className='sidebar'>
            <div className='sidebar_top'>
                <Image
                    src="/game.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                    className="sidebar_logo"
                />

            </div>
            <ul className="sidebar_list">
                {sidebarItems.map(({ name, href, img: Image }) => (
                    <li className="sidebar_item" key={name}>

                        <Link href="/" className="sidebar_link">
                            <span className="sidebar_icon">
                            </span>

                            <span className='sidebar_name'>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    </div>;
}