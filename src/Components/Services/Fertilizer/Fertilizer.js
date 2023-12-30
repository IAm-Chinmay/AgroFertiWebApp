import React from "react";
import "../../../CSS/Service/ferti.css";
import FertilizerCard from "./FertilizerCard";
import Carousel from "react-elastic-carousel";

const Fertilizer = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1100, itemsToShow: 4 },
  ];

  const fertilizers = [
    {
      name: "IFFCO NPK",
      desc: "10-26-26 which contains N-10%, P-26%, K-26%.The three numbers represent the percentage by weight of the primary nutrients in the fertilizer, in the order of Nitrogen (N), Phosphorus (P), and Potassium (K).Here's a breakdown of the NPK 10-26-26 fertilizer:Nitrogen (N) - 10%:Nitrogen is crucial for promoting vegetative growth, including the development of leaves and stems.It plays a vital role in the synthesis of proteins, enzymes, and chlorophyll.Phosphorus (P) - 26%:Phosphorus is essential for root development, flowering, and fruiting.It aids in energy transfer and storage within the plant and is vital for overall plant metabolism.Potassium (K) - 26%:Potassium contributes to various physiological processes in plants, such as photosynthesis, water uptake, and nutrient transport.It enhances the plant's resistance to diseases and stress.",
      img: "one",
    },
    {
      name: "UJJAWLA",
      desc: "Urea is a nitrogen-containing compound commonly used as a fertilizer in agriculture. It is a white, crystalline substance that contains about 46% nitrogen, making it a rich source of this essential plant nutrient. Urea is a versatile and widely used nitrogen fertilizer for various crops.Here are key points about urea:Nitrogen Content:Urea is prized for its high nitrogen content, which is crucial for promoting plant growth, especially in the early stages of development.Chemical Composition:The chemical formula for urea is CO(NH2)2, and it is a diamide of carbonic acid. It is a stable compound that is easily transported and handled.Mode of Action:Once applied to the soil, urea undergoes hydrolysis, a process where it is converted into ammonium and bicarbonate ions. This conversion is facilitated by the enzyme urease, which is present in the soil.",
      img: "two",
    },
    {
      name: "BIOZYME",
      desc: "In agriculture, Biozyme products are sometimes marketed as soil conditioners or plant growth enhancers. These products may contain a blend of enzymes, beneficial microorganisms, and other bioactive compounds designed to improve soil health, nutrient availability, and overall plant performance. They can aid in the breakdown of organic matter, enhance nutrient uptake, and stimulate microbial activity in the soil.Here are some general points that may be associated with Biozyme products in agriculture:Soil Health:Biozyme products often aim to promote soil health by enhancing microbial activity and nutrient cycling.Nutrient Availability:Enzymes in Biozyme formulations may assist in breaking down organic matter into simpler forms, making nutrients more accessible to plants.Root Development:Some formulations claim to stimulate root development, which can contribute to improved plant vigor and resilience.Organic Farming:Biozyme products are sometimes marketed as suitable for organic farming practices, as they may rely on natural processes and ingredients.Application Methods:These products may be applied to the soil or used as foliar sprays, depending on the formulation and the specific goals of the user.",
      img: "four",
    },
    {
      name: "GLYPHOCOL",
      desc: "Glyphosate (IUPAC name: N-(phosphonomethyl)glycine) is a broad-spectrum systemic herbicide and crop desiccant. It is an organophosphorus compound, specifically a phosphonate, which acts by inhibiting the plant enzyme 5-enolpyruvylshikimate-3-phosphate synthase (EPSP).",
      img: "seven",
    },
    {
      name: "JAI KISSAN UREA",
      desc: "Urea is a commonly used nitrogen fertilizer in agriculture. It is a white, crystalline compound with the chemical formula CO(NH2)2. Urea is rich in nitrogen, an essential nutrient for plant growth. Here are key points about urea fertilizer:",
      img: "eight",
    },
    {
      name: "MAHADHAN",
      desc: " Mahadhan fertilizers are known for their quality and are widely used in agriculture to enhance soil fertility and promote plant growth. Keep in mind that specific product details and formulations may have changed since my last update.Here are some general points associated with Mahadhan fertilizers:Product Range:Mahadhan offers a range of fertilizers, including nitrogen, phosphorus, and potassium (NPK) formulations, as well as other specialized fertilizers tailored for specific crops and soil conditions.Nutrient Content:The nutrient content of Mahadhan fertilizers varies based on the specific product. Commonly, they provide a balanced mix of essential nutrients required for plant growth.",
      img: "nine",
    },
    {
      name: "SHREE AGRO",
      desc: "DAP typically stands for Di-Ammonium Phosphate, which is a widely used fertilizer containing nitrogen and phosphorus. It's possible that Shree Agro DAP is a specific product or brand related to Di-Ammonium Phosphate.",
      img: "ten",
    },
    {
      name: "SUFALA",
      desc: "Suphala 15-15-15 is a type of fertilizer with a balanced nutrient composition, commonly used in agriculture to provide a mix of essential elements needed for plant growth. The numbers in the ratio 15-15-15 represent the percentage, by weight, of the three primary nutrients: nitrogen (N), phosphorus (P), and potassium (K).Here's a brief description of Suphala 15-15-15 fertilizer:Nitrogen (N) - 15%:Nitrogen is vital for promoting vegetative growth, including the development of leaves and stems.It plays a key role in the formation of proteins, enzymes, and chlorophyll.Phosphorus (P) - 15%:Phosphorus is crucial for root development, flowering, and fruiting.It aids in energy transfer and storage within the plant and supports overall plant metabolism.Potassium (K) - 15%:Potassium contributes to various physiological processes in plants, such as photosynthesis, water uptake, and nutrient transport.It enhances the plant's resistance to diseases and stress.",
      img: "twelve",
    },
    {
      name: "NARMADA",
      desc: "This companies play a crucial role in the agricultural and gardening industries by providing high-quality seeds that are often selected and bred for specific traits such as disease resistance, yield, and adaptability. Here's a brief description highlighting key aspects of a seeds company:Product Range:Seed companies offer a diverse range of seeds, including those for field crops (such as grains and oilseeds), vegetables, fruits, flowers, and turf. The selection may include traditional and genetically modified varieties.Research and Development:Many seed companies invest in research and development to create new and improved seed varieties. This involves breeding programs to enhance desirable traits like yield, disease resistance, and adaptability to different climates",
      img: "thirteen",
    },
    {
      name: "JAI KISSAN SAMRAT",
      desc: "DAP stands for Di-Ammonium Phosphate, which is a type of fertilizer widely used in agriculture. It is a highly soluble form of phosphorus and nitrogen, two essential nutrients for plant growth. Here's a brief description of DAP fertilizer:Nutrient Composition:DAP is a dry, granulated fertilizer that typically contains about 18% nitrogen (N) and 46% phosphorus pentoxide (P2O5). The high phosphorus content makes it particularly useful for promoting root development, flowering, and fruiting in plants.Phosphorus Benefits:Phosphorus is a vital nutrient for energy transfer and storage in plants. It plays a crucial role in processes such as photosynthesis, cell division, and the formation of DNA and RNA.Nitrogen Benefits:Nitrogen is essential for promoting vegetative growth, including the development of leaves and stems. It is a key component of amino acids, proteins, and chlorophyll.",
      img: "fourteen",
    },
    {
      name: "NAVRATNA DAP",
      desc: "DAP stands for Di-Ammonium Phosphate, which is a type of fertilizer widely used in agriculture. It is a highly soluble form of phosphorus and nitrogen, two essential nutrients for plant growth. Here's a brief description of DAP fertilizer:Nutrient Composition:DAP is a dry, granulated fertilizer that typically contains about 18% nitrogen (N) and 46% phosphorus pentoxide (P2O5). The high phosphorus content makes it particularly useful for promoting root development, flowering, and fruiting in plants.Phosphorus Benefits:Phosphorus is a vital nutrient for energy transfer and storage in plants. It plays a crucial role in processes such as photosynthesis, cell division, and the formation of DNA and RNA.Nitrogen Benefits:Nitrogen is essential for promoting vegetative growth, including the development of leaves and stems. It is a key component of amino acids, proteins, and chlorophyll.",
      img: "five",
    },
  ];

  return (
    <>
      {/* */}
      <h1 style={{ marginTop: "4rem", fontSize: "2.5rem" }}>Fertilizers : </h1>
      <div className="carasoulStyle">
        <Carousel
          breakPoints={breakPoints}
          itemPadding={[10, 30]}
          itemsToShow={4}
          showEmptySlots={false}
        >
          {fertilizers &&
            fertilizers.map((item) => (
              <FertilizerCard
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

export default Fertilizer;
