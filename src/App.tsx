import "./App.css";
import { Header } from "./components/Header";

import { TbPokeball, TbFlag2, TbUser } from "react-icons/tb";
import { PiCirclesFourBold } from "react-icons/pi";
import { MdOutlineCatchingPokemon } from "react-icons/md";

import { BrowseInput } from "./components/BrowseInput";

function App() {
  return (
    <>
      <Header.Wrapper>
        <div className="header-div1">
          <Header.Logo />
          <Header.Buttons>
            <Header.Button
              active={true}
              icon={<PiCirclesFourBold />}
              label="Browse"
            />
            <Header.Button
              active={false}
              icon={<TbPokeball />}
              label="Pokemons"
            />
            <Header.Button active={false} icon={<TbFlag2 />} label="Maps" />
            <Header.Button
              active={false}
              icon={<TbUser />}
              label="Characters"
            />
          </Header.Buttons>
        </div>
        <Header.Profile>
          <Header.User username="pulse" />
        </Header.Profile>
      </Header.Wrapper>

      <div className="browse-input-wrapper">
        <BrowseInput.Wrapper>
          <BrowseInput.Input
            icon={<MdOutlineCatchingPokemon />}
            pHolder="Search a Pokemon, map or character..."
          />
        </BrowseInput.Wrapper>
      </div>
    </>
  );
}

export default App;
