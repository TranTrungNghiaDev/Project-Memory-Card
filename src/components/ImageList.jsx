import { useState } from "react";
import Image from "./Image";
import BabyDragon from "../assets/BabyDragon.jpg";
import BlueEyesUltimateDragon from "../assets/BlueEyesUltimateDragon.jpg";
import BlueEyesWhiteDragon from "../assets/BlueEyesWhiteDragon.jpg";
import DarkMagician from "../assets/DarkMagician.jpg";
import GaiaTheDragonChampion from "../assets/GaiaTheDragonChampion.jpg";
import ObeliskTheTormentor from "../assets/ObeliskTheTormentor.jpg";
import RedEyesBlackDragon from "../assets/RedEyesBlackDragon.jpg";
import Sangan from "../assets/Sangan.jpg";
import SliferTheSkyDragon from "../assets/SliferTheSkyDragon.jpg";
import SummonedSkull from "../assets/SummonedSkull.jpg";
import TheWingedDragonOfRa from "../assets/TheWingedDragonOfRa.jpg";
import TimeWizard from "../assets/TimeWizard.jpg";

const randomArrangement = (imageArray) => {
  for (let index = 0; index < imageArray.length; index++) {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const tempImage = imageArray[randomIndex];
    imageArray[randomIndex] = imageArray[index];
    imageArray[index] = tempImage;
  }
};

function ImageList() {
  const images = [
    { id: 1, name: "Baby Dragon", src: BabyDragon },
    { id: 2, name: "BlueEyes Ultimate Dragon", src: BlueEyesUltimateDragon },
    { id: 3, name: "Blue Eyes White Dragon", src: BlueEyesWhiteDragon },
    { id: 4, name: "Dark Magician", src: DarkMagician },
    { id: 5, name: "Gaia The Dragon Champion", src: GaiaTheDragonChampion },
    { id: 6, name: "Obelisk The Tormentor", src: ObeliskTheTormentor },
    { id: 7, name: "Red Eyes Black Dragon", src: RedEyesBlackDragon },
    { id: 8, name: "Sangan", src: Sangan },
    { id: 9, name: "Slifer The Sky Dragon", src: SliferTheSkyDragon },
    { id: 10, name: "Summoned Skull", src: SummonedSkull },
    { id: 11, name: "The Winged Dragon Of Ra", src: TheWingedDragonOfRa },
    { id: 12, name: "Time Wizard", src: TimeWizard },
  ];

  randomArrangement(images);

  const [imageList, setImageList] = useState(images);
  const [choosedImageList, setChoosedImageList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  if(!window.bestScore) {
    window.bestScore = 0;
  }

  return (
    <>
      <h2>Score: {currentScore}</h2>
      <h2>Best Score: {window.bestScore}</h2>
      <div className="image-list">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => {
              randomArrangement(images);
              setImageList(images);
              const choosedImageIndex = choosedImageList
                .map((image) => image.id)
                .indexOf(image.id);
              if (choosedImageIndex >= 0) {
                if(currentScore > window.bestScore) {
                    window.bestScore = currentScore;
                }
                setCurrentScore(0);
              } else {
                setChoosedImageList((choosedImageList) => {
                    choosedImageList.push(image);
                    return choosedImageList;
                });
                setCurrentScore(currentScore + 1);
              }
            }}
          >
            <Image name={image.name} src={image.src} />
          </button>
        ))}
      </div>
    </>
  );
}

export default ImageList;
