import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';


export const devices = [
  {
    name: 'ASUS TUF Gaming F15, GPU 4060 , 512GB, 16GB RAM',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'AULA Mechanical Keyboard',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'Logitech G304 Mouse',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'Oneplus ANC Headphones',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'iPhone 13',
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'Unhook', href: 'https://unhook.app/' },
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  },
];

export const software = [
  { name: 'Discord', href: 'https://discord.com/download' },
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'GitHub Desktop', href: 'https://desktop.github.com/' },
];
