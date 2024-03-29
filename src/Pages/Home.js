import Slider from "../Components/Slider";
import Slider2 from "../Components/Slider2";
import HomePageHero2 from "../assets/homepage/shop-hero-2-product-slide-2.jpg";
import HomePageHero3 from "../assets/homepage/hero-cover-1.png";
import EditorsPick1 from "../assets/homepage/media bg-covereditorspick1.png";
import EditorsPick2 from "../assets/homepage/media bg-covereditorspick2.png";
import EditorsPick3 from "../assets/homepage/media bg-covereditorspick4.png";
import EditorsPick4 from "../assets/homepage/filtereditorspick3.png";
import BestSellerCard from "../Components/BestSellerCard";
import shophero2 from "../assets/homepage/shop-hero-2-png-picture-1.png";
import FeaturedCard from "../Components/FeaturedPostsCard";

const slides2 = [
  {
    img: HomePageHero2,
    dateHero: "SUMMER 2020",
    title: "Vita Classic Product",
    description:
      "We know how large objects will act, We know how are objects will act, We know.",
    onImg: shophero2,
    button: "ADD TO CARD",
    price: "16.48$",
  },
  {
    img: HomePageHero2,
    dateHero: "SUMMER 2020",
    title: "Vita Classic Product",
    description:
      "We know how large objects will act, We know how are objects will act, We know.",
    onImg: shophero2,
    button: "ADD TO CARD",
    price: "16.48$",
  },
];
export default function Header() {
  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `Ürün ${index + 1}`,
    category: "Graphic Design",
    department: "English Department",
    price: Math.floor(Math.random() * 100) + 10,
    color: ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)],
  }));

  return (
    <main className="w-full">
      <div className="flex flex-col items-center w-full sm:w-full ">
        <Slider className="bg-black xl:hidden" />
        <section className="items-center flex flex-wrap gap-5 flex-col bg-[#FAFAFA] py-20">
          <div className="flex flex-col gap-2 w-4/5 flex-wrap">
            <h2 className="font-bold text-2xl text-black">EDITOR'S PICK</h2>
            <p className="font-normal text-sm text-gray-400">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div className="justify-center items-center flex gap-8 flex-wrap text-base sm:justify-center sm:py-5">
            <div className="flex-shrink-0 relative sm:w-[240px]">
              <img src={EditorsPick1} />
              <div className="absolute bottom-0 left-0 w-2/3 pl-3 pb-3 flex items-center">
                <button className="bg-white hover:bg-gray-100 w-32 text-black font-bold py-2 px-4 rounded">
                  MEN
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 relative">
              <img src={EditorsPick2} />
              <div className="absolute bottom-0 left-0 w-2/3 pl-3 pb-3 flex items-center">
                <button className="bg-white hover:bg-gray-100 w-32 text-black font-bold py-2 px-4 rounded">
                  WOMEN
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex-shrink-0 relative">
                <img src={EditorsPick4} />
                <div className="absolute bottom-0 left-0 w-2/3 pl-3 pb-3 flex items-center ">
                  <button className="bg-white hover:bg-gray-100 w-36 text-black font-bold py-2 px-4 rounded">
                    ACCESSORIES
                  </button>
                </div>
              </div>
              <div className="flex-shrink-0 relative">
                <img src={EditorsPick3} />
                <div className="absolute bottom-0 left-0 w-2/3 pl-3 pb-3 flex items-center ">
                  <button className="bg-white hover:bg-gray-100 w-32 text-black font-bold py-2 px-4 rounded">
                    KIDS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-wrap gap-10 py-20">
          <div className="flex flex-col gap-10 w-4/5">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl text-gray-400 ">
                Featured Products
              </h2>
              <h2 className="font-bold text-2xl text-black">
                BESTSELLER PRODUCTS
              </h2>
              <p className="font-normal text-sm text-gray-400">
                Problems trying to resolve the conflict between
              </p>
            </div>
            <div className="justify-center items-center flex flex-wrap">
              {products.map((product) => (
                <BestSellerCard
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  department={product.department}
                  price={product.price}
                  color={product.color}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="flex items-center w-full flex-col">
          <Slider2 className="bg-[#23856D] items-end" slides={slides2} />
          <section className="flex flex-wrap gap-5 flex-col items-center py-10 bg-[#FAFAFA]">
            <div className="flex justify-center items-center gap-2 w-4/5 sm:flex-col-reverse">
              <img src={HomePageHero3} />
              <div className="text-black flex flex-col gap-3 text-left justify-center items-start sm:w-full sm:items-center sm:text-center sm:py-10">
                <h5 className="text-base font-bold text-gray-400">
                  SUMMER 2020
                </h5>
                <h2 className="text-[40px] font-bold">
                  Part of the Neural Universe
                </h2>
                <h4 className="w-2/3 text-[#737373] font-normal sm:w-full">
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
                <div className="flex w-full gap-2 flex-wrap sm:justify-center">
                  <button className="bg-[#2DC071] text-sm w-[171px] hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
                    BUY NOW
                  </button>
                  <button className="bg-white border-[#2DC071] border-2 hover:bg-green-400 w-[171px] text-[#2DC071] text-sm font-bold py-2 px-4 rounded sm:border-[#23A6F0] sm:text-[#23A6F0]">
                    READ ME
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full justify-center items-center py-10">
            <div className="flex flex-col gap-2 w-4/5 items-center flex-wrap pb-10">
              <h2 className="font-bold text-[40px] text-black">
                Featured Products
              </h2>
              <p className="font-normal text-sm text-gray-400">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <FeaturedCard />
          </section>
        </div>
      </div>
    </main>
  );
}
