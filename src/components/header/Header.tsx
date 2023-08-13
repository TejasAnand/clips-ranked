import ThemeChanger from "@/components/ThemeChanger";
import MobileSidebarToggle from "./MobilsSidebarToggle";

const Header = async () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 flex-row items-center justify-between border-b bg-background p-4">
      <div className="hidden md:block" />
      <MobileSidebarToggle />
      <div className="flex flex-row items-center gap-3">
        <div></div>
        <ThemeChanger className="h-5 w-5" />
        {/* <UserDropdown user={user} /> */}
      </div>
    </header>
  );
};

export default Header;
