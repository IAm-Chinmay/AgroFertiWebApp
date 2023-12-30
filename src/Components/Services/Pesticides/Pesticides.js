import React from "react";
import "../../../CSS/Service/ferti.css";
import PesticideCard from "./PesticideCard";
import Carousel from "react-elastic-carousel";

const Pesticides = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1100, itemsToShow: 4 },
  ];

  const pesticides = [
    {
      name: "BIOZYME",
      desc: "Biozyme products are sometimes marketed as soil conditioners or plant growth enhancers. These products may contain a blend of enzymes, beneficial microorganisms, and other bioactive compounds designed to improve soil health, nutrient availability, and overall plant performance. They can aid in the breakdown of organic matter, enhance nutrient uptake, and stimulate microbial activity in the soil.",
      img: "one.png",
    },
    {
      name: "AMISTAR",
      desc: "Amistar is a fungicide produced by Syngenta, a global agribusiness company. The active ingredient in Amistar is azoxystrobin, which belongs to the strobilurin class of fungicides. Amistar is known for its effectiveness against various fungal diseases in crops. Please note that specific formulations and uses may vary, and it's essential to refer to the product label and guidelines provided by Syngenta for accurate information. ",
      img: "three.png",
    },
    {
      name: "TATA TAFGOR",
      desc: "Dimethoate is a widely used organophosphorus insecticide and acaricide that plays a crucial role in pest management across diverse agricultural settings. As the active ingredient in various formulations, dimethoate operates by inhibiting acetylcholinesterase, a key enzyme in the nervous system of insects. This disruption of nerve signals leads to the effective control of a broad spectrum of pests, encompassing aphids, thrips, spider mites, leafhoppers, and whiteflies, among others. With versatility in its application, dimethoate finds utility across a range of crops, including fruits, vegetables, field crops, and ornamental plants. Typically administered as a foliar spray, its usage is dictated by factors such as the targeted crop, prevailing pests, and regional agricultural practices. As an essential tool in integrated pest management, dimethoate contributes to safeguarding crop yields and promoting sustainable agricultural practices, albeit with careful consideration of safety measures ",
      img: "four.png",
    },
    {
      name: "ACTARA",
      desc: "Actara is a brand name of a widely used insecticide produced by Syngenta, a global agribusiness company. The active ingredient in Actara is thiamethoxam, which belongs to the neonicotinoid class of insecticides. Thiamethoxam is known for its systemic action, meaning it is taken up by the plant and translocated to various parts, providing protection against a range of insect pests.",
      img: "five.png",
    },
    {
      name: "ALIKA",
      desc: "A pesticide product produced by Syngenta. The product contains two active ingredients: thiamethoxam and lambda-cyhalothrin. Thiamethoxam is a neonicotinoid insecticide, while lambda-cyhalothrin is a pyrethroid insecticide. The combination of these two active ingredients provides broad-spectrum control against various insect pests.",
      img: "six.png",
    },
    {
      name: "CURACRON",
      desc: "Curacron is a brand name for a pesticide that contains the active ingredient profenofos. Profenofos is an organophosphorus insecticide and acaricide used to control a variety of pests in agriculture. It belongs to the group of chemicals known as organophosphates, which act on the nervous system of insects and mites.",
      img: "seven.png",
    },
    {
      name: "ABIC",
      desc: "Syngenta Abic contains Mancozeb 75%. It is a contact fungicide which controls disease at every growing point of plant. It work both as preventive and curative hence providing gives disease control for longer duration. It is compatible with most insecticide and can be used for field and horticulture crop.",
      img: "nine.png",
    },
    {
      name: "TATA KARATE",
      desc: "Tata Karate is a renowned insecticide crafted by Tata Chemicals, and its effectiveness lies in the active ingredient lambda-cyhalothrin. Lambda-cyhalothrin, belonging to the pyrethroid class, manifests its prowess through a dual-action approach, impacting both contact and stomach channels within the insect's nervous system. This results in paralysis and eventual demise of the targeted pests. Tata Karate's broad-spectrum activity positions it as a potent solution for controlling a diverse array of insect pests, offering protection against caterpillars, aphids, and various other nuisances. Leveraging the cutting-edge technology and research prowess of Tata Chemicals, Tata Karate stands as a reliable ally for farmers and agricultural practitioners in their ongoing efforts to safeguard crops",
      img: "ten.png",
    },
    {
      name: "BIOZYME",
      desc: "The effect of Biozyme-, a commercial germination stimulant, on the germination and emergence of bean and sweet corn seeds, treated with four levels of Carbofuran and Chlorothalonil, and grown under suboptimal temperatures, was evaluated. Field experiments consisted of two plantings that provided ",
      img: "two.png",
    },
  ];

  return (
    <>
      {/* */}
      <h1 style={{ marginTop: "4rem", fontSize: "2.5rem" }}>Pesticides : </h1>
      <div className="carasoulStyle">
        <Carousel
          breakPoints={breakPoints}
          itemPadding={[10, 30]}
          itemsToShow={4}
          showEmptySlots={false}
        >
          {pesticides &&
            pesticides.map((item) => (
              <PesticideCard
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default Pesticides;
