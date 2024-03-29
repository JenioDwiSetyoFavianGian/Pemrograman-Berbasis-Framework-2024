import Image from "next/image";
import Profile from "./components/profile";
import { Gallery } from "./components/gallery";
import TodoList from "./components/todolist";
import MyGallery from "./components/mygallery";
import MyAvatar from "./components/myprofilev2";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center">
//       <p className="justify-center mt-16">Ilmuwan yang luar biasa </p>
//       <div className="flex mt-16">
//           <Profile />
//           <div className="mx-96">    
//           <Profile/>   
//           </div> 
//           <Profile/>
//       </div>
//       {<Gallery />}
//     </main>
//   );
// }

// export default function Bio() {
//   return (
//     <div className="intro">
//       <h1>Selamat datang di website saya!</h1>
//       <p className="summary">
//         Anda dapat membaca uneg-unegku di sini.
//         <br /><br />
//         <b>Juga ada <i>foto</i> ilmuwan!</b>
//       </p>
//     </div>
//   );
// }


export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
      <hr />
      <MyGallery />
      <hr />
      <MyAvatar />
    </section>
  );
}