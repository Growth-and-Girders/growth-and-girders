import React,{useState} from "react";
import cherry from '../Assets/cherry.png'
import Green from '../Assets/Green Mode.png'
import {useNavigate} from "react-router-dom" 
import { ethers } from "ethers";
import abi from "../abi.json";

const Dashboard = () => {
  let navigate = useNavigate() ;
  const [tokenURI, setTokenURI] = useState("https://bronze-favourite-peafowl-457.mypinata.cloud/ipfs/QmNu5HgLhiLjmQ5PMf1Ypj7wyPxBc8XhNJf3MwCXqxK6RF?_gl=1*1314osz*_ga*MzQ3MzczNjUzLjE2OTk3MTkwMDg.*_ga_5RMPXG14TE*MTY5OTcxOTAwNy4xLjEuMTY5OTcxOTE2MC42MC4wLjA.");

  const mintNFT = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const contractAddress = "0x1aaf989c5180391f9f0105af55Aa24873E6F2378";
        const contractABI = abi; // Your contract ABI here
        const nftContract = new ethers.Contract(contractAddress, contractABI, signer);

        // Minting with tokenURI parameter
        const tx = await nftContract.mint(tokenURI);

        console.log("Minting...", tx.hash);
        await tx.wait();
        console.log("Minted -- Transaction Hash:", tx.hash);
      } catch (error) {
        console.error("Error minting NFT:", error);
      }
    } else {
      console.log("Ethereum object not found, install MetaMask.");
    }
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="flex justify-center mt-14">
          <button class="inline-flex text-white bg-green-900 border-0 py-2 px-10 focus:outline-none hover:bg- rounded-lg text-lg transition-all duration-300">
          Collect
          </button>
          <button class="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-10 focus:outline-none hover:bg-gray-400 rounded-lg text-lg"
          onClick ={()=>{ navigate("/Gallery")}}>Gallery
          </button>
        </div>

        <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col ">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            
           src={cherry} />
        
          <div class="flex justify-center mt-14">
            <button class="inline-flex text-gray-500 bg-gray-100 border-0 py-1 px-20 focus:outline-none hover:bg-gray-400 rounded-full text-lg">
              Ξ0.05
            </button>
          </div>
          <div className="flex justify-center mt-10">
        <button
          className="inline-flex text-white bg-green-900 border-0 py-2 px-10 focus:outline-none hover:bg-green-800 rounded-lg text-lg transition-all duration-300"
          onClick={mintNFT}
        >
          Mint
        </button>
      </div>

          <h1 class="title-font sm:text-4xl text-3xl mb-14 font-medium text-gray-300 mt-14">
            Creating a sustainable future through collective action.
          </h1>
          <p>
            Genesis collection refers to the first 10,000 trees being planted
            via Treejer Protocol. The collection
          </p>
          <p>
            helps the project thrive after our recent token-free investment by
            UNICEF Innovation Fund. Genesis
          </p>
          <p>
            trees will be planted in 10 countries in Latin America, Africa and
            Middle East. Learn more about the
          </p>
          <p>Genesis Collection here.</p>

          <div class="flex items-center">
            <span class="inline-block h-1 w-20 rounded bg-gray-500 mt-20 mb-6"></span>
            <h1 class="text-white mx-4 mt-14 font-bold sm:text-xl">
              Life of Tree
            </h1>
            <span class="inline-block h-1 w-20 rounded bg-gray-500 mt-20 mb-6"></span>
          </div>

          <div class="flex justify-center mt-14">
            <button class="inline-flex text-gray-500 bg-gray-100 border-0 py-1 px-20 focus:outline-none hover:bg-gray-400 rounded-full text-lg">
              Reveals after Genesis
            </button>
          </div>

          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0 mt-14">
            <img src={Green} alt="najgjh"></img>
          </div>

          <div class="flex items-center">
            <span class="inline-block h-1 w-20 rounded bg-gray-500 mt-20 mb-6"></span>
            <h1 class="text-white mx-4 mt-14 font-bold sm:text-xl">#1-10</h1>
            <span class="inline-block h-1 w-20 rounded bg-gray-500 mt-20 mb-6"></span>
          </div>

          <div class="flex justify-center mt-14">
            <button class="inline-flex text-gray-500 bg-gray-100 border-0 py-1 px-20 focus:outline-none hover:bg-gray-400 rounded-full text-lg">
              Reserve Price: Ξ0.10
            </button>
          </div>

          {/* more trees  */}

          <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      

      <div class="p-4 md:w-1/7 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
        <img src={Green} alt="najgjh"></img>
        </div>
      </div>
    
      <div class="p-4 md:w-1/7 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
        <img src={Green} alt="najgjh"></img>
        </div>
      </div>
      <div class="p-4 md:w-1/7 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
        <img src={Green} alt="najgjh"></img>
        </div>
      </div>
      <div class="p-4 md:w-1/7 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
        <img src={Green} alt="najgjh"></img>
        </div>
      </div>
      <div class="p-4 md:w-1/7 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
        <img src={Green} alt="najgjh"></img>
        </div>
      </div>
      <div class="p-4 md:w-1/7 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
        <img src={Green} alt="najgjh"></img>
        </div>
      </div>
      
      <div class="p-4 md:w-1/7 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
        <img src={Green} alt="najgjh"></img>
        </div>
      </div>

    </div>
  </div>
</section>


<div class="flex items-center">
            <span class="inline-block h-1 w-20 rounded bg-gray-500 mt-7 mb-6"></span>
            <h1 class="text-white mx-4 mt-1 font-bold sm:text-xl">#1-10</h1>
            <span class="inline-block h-1 w-20 rounded bg-gray-500 mt-7 mb-6"></span>
          </div>

          <div class="flex justify-center mt-14">
            <button class="inline-flex text-gray-500 bg-gray-100 border-0 py-1 px-20 focus:outline-none hover:bg-gray-400 rounded-full text-lg">
            Claim for Free
            </button>
          </div>
  <div class=" text-gray-300 mt-14">
          <p>
          What we've built today was not possible without the generousity of other builders, designers, community
          </p>
          <p>
          advocates and thought leaders in this space. We'd love to plant the very first trees for them. If you're one of the
          </p>
          <p>
          people on this list, you can claim one of these unique trees. Thank you for being a part of this community!
          </p>
          <p>Genesis Collection here.</p>

          </div>

        </div>
      </section>
    </>
  );
};

export default Dashboard;
