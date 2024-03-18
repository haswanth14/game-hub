import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/newlogo1.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack padding="15px">
      <Image src={logo} objectFit="cover" boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
