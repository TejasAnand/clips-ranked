import Link from 'next/link';
import Image from 'next/image';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';


// const sidebarItems = [
//     {
//         name: 'Valorant',
//         href: "/valorant",
//         img: <Image src="/valorant.jpg" alt="logo" width={200} height={200} className="sidebar_logo" />,
//     },
//     {
//         name: 'League of Legends',
//         href: "/leagueoflegends",
//         img: <Image src="/leagueoflegends.jpg" alt="logo" width={200} height={200} className="sidebar_logo" />,
//     },
//     {
//         name: 'Counter Strike',
//         href: "/counterstrike",
//         img: <Image src="/counterstrike.jpg" alt="logo" width={200} height={200} className="sidebar_logo" />,
//     },
//     {
//         name: 'Fortnite',
//         href: "/fortnite",
//         img: <Image src="/forntite.jpg" alt="logo" width={200} height={200} className="sidebar_logo" />,
//     },];
export default function Sidebar() {
    return <div>

        <aside className='sidebar'>
            <div className='sidebar_top'>
                <Image
                    src="/head.svg"
                    alt="logo"
                    width={10}
                    height={10}
                    className="sidebar_logo"
                />

            </div>
            <ul className="sidebar_list">

                <li className="sidebar_item">
                    <span className="sidebar_icon">
                        <Image
                            src="/valorant2.svg"
                            alt="logo"
                            width={60}
                            height={60}
                        />

                    </span>
                </li>
                <li className="sidebar_item">
                    <span className="sidebar_icon">
                        <Image
                            src="/counterstrike.svg"
                            alt="logo"
                            width={60}
                            height={60}
                        />

                    </span>
                </li>
                <li className="sidebar_item">
                    <span className="sidebar_icon">
                        <Image
                            src="/leagueoflegends.svg"
                            alt="logo"
                            width={60}
                            height={60}
                        />

                    </span>
                </li>
                <li className="sidebar_item">
                    <span className="sidebar_icon">
                        <Image
                            src="/rl.svg"
                            alt="logo"
                            width={60}
                            height={60}
                        />

                    </span>
                </li>
            </ul>
        </aside>
    </div>;
}