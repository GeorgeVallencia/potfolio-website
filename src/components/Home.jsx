import React from "react";
import pic from '../media/pic.png';

function Home() {
  return(
    <div className="items-center tracking-wide mx-auto max-w-3xl my-2 py-3 px-3">
      <div className="text-5xl my-4">
        <p><span className="text-gray-400">Hi! I'm</span> George Valencia.</p>
      </div>
      <div className="my-5 text-lg tracking-wider">
        <p>I'm a <span className="font-bold">software engineer.</span> I created <a href="https://kernverse-frontend.vercel.app" className="text-blue-500 underline">kernverse</a>, the number one place for interactive blogging, and maintain 10+ other open source projects with a focus on algorithms, computational geometry and performance. This blog is where I share deep insights on software engineering, geospatial technology,challenges of building fast, interactive web applications and getting peoples views on different topics on virtually anything.</p>
      </div>
      <div className="my-5 text-lg tracking-wider">
        <p>I'm a <span className="font-bold">pro video gamer</span>. I play different genres like shooter, open world, multiplayer, sports, fighting games, with games like call of duty, fortnite, overwatch, volarant, minecraft, roblox, destiny 2, FIFA, NBA 2K, mortal kombat. If you like beautiful, evocative, multilayered gaming experience, check out our last <a href="combat" className="text-blue-500 underline">combat</a>.</p>
      </div>
      <div className="my-5 text-lg tracking-wider">
        <p>I'm a <span className="font-bold">underwriter.</span> I underwrite insurance deals, from general insurance through motor to engineering, you name them!. I love baking, photography, strength training, martial arts, <a href="read" className="text-blue-500 underline">reading</a>, and exploring quiet parks. You can find tidbits of my life on <a href="https://twitter.com/@VallenciaGeorge" className="text-blue-500 underline">X (Twitter)</a>, <a href="https://www.instagram.com/valenciageorge5" className="text-blue-500 underline">Instagram</a>, <a href="https://www.linkedin.com/in/george-valencia" className="text-blue-500 underline">linkedIn</a>, <a href="https://www.github.com/GeorgeVallencia" className="text-blue-500 underline">Github</a> and <a href="https://www.medium.com/@georgevallencia" className="text-blue-500 underline">Medium</a>.</p>
      </div>
      <div className=" text-lg tracking-wider ">
        <p>Here are a few of my best works:</p>
        <div className="flex items-center justify-between flex-nowrap gap-x-8 mt-4">
          <div className="ml-8 flex flex-col mt-4">
            <li><a href="https://portfolio-268d6.web.app" className="text-blue-500 underline">portfolio</a></li>
            <li><a href="https://weather-app-64cbe.firebaseapp.com" className="text-blue-500 underline">weather app</a></li>
            <li><a href="https://todon-t-app.firebaseapp.com" className="text-blue-500 underline">to don't app</a></li>
            <li><a href="https://rosa-bake.web.app" className="text-blue-500 underline">achy's pastry</a></li>
            <li><a href="https://kernverse-frontend.vercel.app" className="text-blue-500 underline">kernverse</a></li>
          </div>
        <div>
          <img src={pic} alt='pic-place'className="w-48 sm:w-64 md:w-80 max-h-40 sm:max-h-52 md:max-h-64 object-contain h-auto max-w-full rounded-lg" />
        </div>
        </div>
      </div>
      <div className="my-5 text-lg tracking-wider mt-10">
        <p>You can reach me by e-mail: <a className="text-blue-500 underline">georgevallencia@gmail.com</a>.</p>
      </div>
    </div>
  );
}

export default Home;